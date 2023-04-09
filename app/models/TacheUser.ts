import {Schema,model} from "mongoose";

export default model("tache_user",new Schema({

  "id_tache":{type:String},
  "id_user":{type:String}

}));
