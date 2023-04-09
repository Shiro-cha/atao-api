"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
exports["default"] = (0, mongoose_1.model)("coloc", new mongoose_1.Schema({
    "nom_coloc": { type: String }
}));
