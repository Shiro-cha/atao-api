import Taches from "../models/Taches";
import TacheUser from "../models/TacheUser";
import User from "../models/User";
import Rapelle from "../models/Rapelle";

export default {

  //create task handler
  createTask: function(req:any,res:any):void{

    const task_members:string[]=req.body.task_members
    const info_task = {
      "titre":req.body.titre,
      "start":req.body.start,
      "end":req.body.end,
      "type":task_members.length >1 ?"En commun":"Solo"
    }

    //add new entry on the database
    const new_task = new Taches(info_task);
   new_task.save().then(async function(){

     await task_members.forEach(async id_user => {
         const newUserTask = new TacheUser({

           "id_tache":new_task._id.toString(),
           "id_user":id_user

         })
         await newUserTask.save()

       })


     res.status(200).json(new_task);

   });

  },

  //joinATask handler
  addToTask:async function(req:any,res:any){

    const task_members:string[] = req.body.task_members;
    const id_task:string = req.body.id_task


      //send response to the client
      await task_members.forEach(async id_user => {

            const newUserTask = new TacheUser({

              "id_tache":id_task,
              "id_user":id_user

            })
            await newUserTask.save()



      });
      res.status(200).json(task_members);


  },
  allTask:function(req:any,res:any){

    Taches.find({}).then(function(taches) {
      res.status(200).json(taches);
    })

  },
  remindColoc:async function(req:any,res:any){
      const rappelle_info = {
     id_tache: req.body.id_tache,
     id_source_rappelle: req.body.id_source_rappelle,
     id_user: req.body.id_user,
     temps_rapelle: req.body.temps_rapelle
   }

    const new_rappelle = new Rapelle(rappelle_info);

    await new_rappelle.save()

    await res.status(200).json(new_rappelle);

  },
  getRemind:async function(req:any,res:any){
     const id_user = req.body.id_user;

    Rapelle.find({id_user:id_user}).then(function(rappelles){

      res.status(200).json(rappelles);

    })




  }


}
