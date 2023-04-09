"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var api_1 = __importDefault(require("../../routes/api"));
var web_1 = __importDefault(require("../../routes/web"));
function default_1(app) {
    app.use("/api", api_1["default"]);
    app.use("/", web_1["default"]);
}
exports["default"] = default_1;
;
