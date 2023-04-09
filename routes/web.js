"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
//import from controllers folder
var ApiController_1 = __importDefault(require("../app/controllers/ApiController"));
var router = (0, express_1.Router)();
/**
 *
 * Define your routes here
 *
 * **/
router.get("/hello", ApiController_1["default"]);
exports["default"] = router;
