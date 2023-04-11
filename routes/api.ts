import {  Router } from "express";
import Coloc from "../app/controllers/ColocController";
import User from "../app/controllers/AuthController";
import Taches from "../app/controllers/TacheController";

const router:Router = Router();



   /**
    *
    * Define your routes here
    *
    * **/

    //authentification user route
    router.post("/create-user",User.createUser);
    router.post("/auth-user",User.authUser);


    //crud  on coloc
    router.post("/create-coloc",Coloc.createColoc);
    router.post("/add-to-coloc",Coloc.addToColoc);
    router.post("/get-coloc",Coloc.getColoc);

    //crud on tache

    router.post("/create-task",Taches.createTask);
    router.post("/add-to-task",Taches.addToTask);
    router.post("/all-task",Taches.allTask);
    router.post("/validate-task",Taches.validateTask);
    router.post("/remind-coloc",Taches.remindColoc);
    router.post("/get-remind",Taches.getRemind);


export default router;
