"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var cors_1 = __importDefault(require("cors"));
var routesProvider_1 = __importDefault(require("../app/providers/routesProvider"));
var app = (0, express_1["default"])();
//Définir ici les middleware personnalisé
app.use(cors_1["default"]);
//display all request
app.use(function (req, res, next) {
    console.log("Request on: " + req.originalUrl);
    next();
});
// Définir les middlewares par défaut
app.use((0, body_parser_1.urlencoded)({ extended: false }));
app.use((0, body_parser_1.json)());
//appeler ici les routes
(0, routesProvider_1["default"])(app);
exports["default"] = app;
