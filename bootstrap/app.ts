import express,{Express} from "express";
import {json,urlencoded} from "body-parser";
import cors from "cors";
import Routes from "../app/providers/routesProvider";


const app:Express = express();

//Définir ici les middleware personnalisé

app.use(cors());

//display all request
app.use(function(req,res,next){
    console.log("Request on: "+req.originalUrl)
    next();
})
// Définir les middlewares par défaut

app.use(urlencoded({extended:false}));
app.use(json());


//appeler ici les routes
Routes(app);




export default app;
