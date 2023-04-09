"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var ColocController_1 = __importDefault(require("../app/controllers/ColocController"));
var AuthController_1 = __importDefault(require("../app/controllers/AuthController"));
var TacheController_1 = __importDefault(require("../app/controllers/TacheController"));
var router = (0, express_1.Router)();
/**
 *
 * Define your routes here
 *
 * **/
//authentification user route
router.post("/create-user", AuthController_1["default"].createUser);
router.post("/auth-user", AuthController_1["default"].authUser);
//crud  on coloc
router.post("/create-coloc", ColocController_1["default"].createColoc);
router.post("/add-to-coloc", ColocController_1["default"].addToColoc);
router.post("/get-coloc", ColocController_1["default"].getColoc);
//crud on tache
router.post("/create-task", TacheController_1["default"].createTask);
router.post("/add-to-task", TacheController_1["default"].addToTask);
router.post("/all-task", TacheController_1["default"].allTask);
router.post("/remind-coloc", TacheController_1["default"].remindColoc);
router.post("/get-remind", TacheController_1["default"].getRemind);
exports["default"] = router;
