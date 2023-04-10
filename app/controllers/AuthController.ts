import User from "../models/User";


export default {

  //login handler
  authUser: function(req, res) {
  if (!req.body || typeof req.body !== 'object') {
    res.status(400).json({ message: 'Invalid request body' });
    return;
  }

  const { email, password } = req.body;
  
  User.findOne({ email }).then(user => {
    if (!user) {
      // User not found
      res.status(401).json({ message: 'Invalid username or password' });
      return;
    }

    // Compare password hash/encryption
    if (password !== user.mot_de_passe) {
      // Password doesn't match
      res.status(401).json({ message: 'Invalid username or password' });
      return;
    }

    // Authentication successful
    res.status(200).json(user);
  }).catch(error => {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  });
}
,

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
