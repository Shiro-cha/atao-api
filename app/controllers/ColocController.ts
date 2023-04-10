
import Coloc from "../models/Coloc";
import User from "../models/User";

export default {

  //creation of a colocatire handler
  createColoc:  function(req:any,res:any){

    const nom_coloc:string = req.body.nom_coloc;
    const id_members:string[] = req.body.id_members;

    //add new entry on the database
    const new_coloc = new Coloc({
      nom_coloc:nom_coloc
    });
   new_coloc.save().then(async function(){

     await id_members.forEach(id_user => {
       User.findById(id_user).then(async function(user){
         //send response to the client
         user.id_coloc = new_coloc._id.toString()
         await user.save()

       })
     });

     res.status(200).json(new_coloc);

   });





  },

  //add an user to be member of a coloc handler
  addToColoc:function(req:any,res:any):void{

    const id_members:string[] = req.body.id_members;
    const id_coloc:string = req.body.id_coloc;

    Coloc.findById(id_coloc).then(async function(coloc){
      //send response to the client
      await id_members.forEach(id_user => {
        User.findById(id_user).then(async function(user){
          //send response to the client
          user.id_coloc = coloc._id.toString()
          await user.save()

        })
      });
      res.status(200).json(coloc);
    });



  },
  getColoc:function(req:any,res:any){
    const id_coloc:string=req.body.id_coloc;
    if(id_coloc){
        
        User.find({id_coloc:id_coloc}).then(function(users){
      res.status(200).json(users)
    })
    
    }else{
    
    res.status(404).json({message:"no data"})
    
    }
    

  },

  
}
