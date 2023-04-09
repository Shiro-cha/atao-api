"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
exports["default"] = (0, mongoose_1.model)("tache", new mongoose_1.Schema({
    "titre": { type: String },
    "start": { type: String },
    "end": { type: String },
    "type": { type: String }
}));
