import { Router } from "express";

//import from controllers folder
import ApiController from "../app/controllers/ApiController";


const router:Router = Router();

   /**
    * 
    * Define your routes here
    * 
    * **/ 

   router.get("/hello",ApiController);

   
export default router;