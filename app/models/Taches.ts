import {Schema,model} from "mongoose";

export default model("tache",new Schema({

  "titre":{type:String},
  "start":{type:String},
  "end":{type:String},
  "type":{type:String}

}));
