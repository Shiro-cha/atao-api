import {Schema,model} from "mongoose";

export default model("rappelle",new Schema({

  "id_tache":{type:String},
  "id_source_rappelle":{type:String},
  "id_user":{type:String},
  "temps_rapelle":{type:String}

}));
