"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
exports["default"] = (0, mongoose_1.model)("tache_user", new mongoose_1.Schema({
    "id_tache": { type: String },
    "id_user": { type: String }
}));
