import {Schema,model}from "mongoose";

export default model("users",new Schema({

  "nom":{type:String},
  "prenom":{type:String},
  "email":{type:String},
  "mot_de_passe":{type:String},
  "contact":{type:String},
  "id_coloc":{type:String}


}));
