import User from "../models/User";


export default {

  //login handler
  authUser: function(req:any,res:any):void{
    const user_info = {
      "email":req.body.email,
      "mot_de_passe":req.body.mot_de_passe
    }

    User.find(user_info).then(function(users){
      if(users.length!=0 && users.length!=-1){
        res.status(200).json(users[0]);
      }else{
        res.status(200).json({message:"No data"});
      }
    });



  },

  //signup handler
  createUser:function(req:any,res:any):void{

    const user_info = {
      "nom":req.body.nom,
      "prenom":req.body.prenom,
      "email":req.body.email,
      "mot_de_passe":req.body.mot_de_passe,
      "contact":req.body.contact,
      "id_coloc":null
    }

    //add new entry on the database
    const new_user = new User(user_info);
   new_user.save().then(function(){

     //send response to the client
     res.status(200).json(new_user);

   });
  },


}
