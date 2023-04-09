import { Router } from "express"; 
import { Express } from "express";
import api from "../../routes/api";
import web from "../../routes/web";




export default function(app:Express):void{

    app.use("/api",api);
    app.use("/",web);

};