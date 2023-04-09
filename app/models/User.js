"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
exports["default"] = (0, mongoose_1.model)("users", new mongoose_1.Schema({
    "nom": { type: String },
    "prenom": { type: String },
    "email": { type: String },
    "mot_de_passe": { type: String },
    "contact": { type: String },
    "id_coloc": { type: String }
}));
