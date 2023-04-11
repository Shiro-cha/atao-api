"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var Coloc_1 = __importDefault(require("../models/Coloc"));
var User_1 = __importDefault(require("../models/User"));
exports["default"] = {
    //creation of a colocatire handler
    createColoc: function (req, res) {
        var nom_coloc = req.body.nom_coloc;
        var id_members = req.body.id_members;
        //add new entry on the database
        var new_coloc = new Coloc_1["default"]({
            nom_coloc: nom_coloc
        });
        new_coloc.save().then(function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, id_members.forEach(function (id_user) {
                                User_1["default"].findById(id_user).then(function (user) {
                                    return __awaiter(this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    //send response to the client
                                                    user.id_coloc = new_coloc._id.toString();
                                                    return [4 /*yield*/, user.save()];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    });
                                });
                            })];
                        case 1:
                            _a.sent();
                            res.status(200).json(new_coloc);
                            return [2 /*return*/];
                    }
                });
            });
        });
    },
    //add an user to be member of a coloc handler
    addToColoc: function (req, res) {
        var id_members = req.body.id_members;
        var id_coloc = req.body.id_coloc;
        Coloc_1["default"].findById(id_coloc).then(function (coloc) {
            //send response to the client
            id_members.forEach(function (id_user) {
                User_1["default"].findById(id_user).then(function (user) {
                    //send response to the client
                    user.id_coloc = coloc._id.toString();
                    user.save().then(function () {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                res.status(200).json(coloc);
                                return [2 /*return*/];
                            });
                        });
                    });
                });
            });
        });
    },
    getColoc: function (req, res) {
        var id_coloc = req.body.id_coloc;
        if (id_coloc) {
            User_1["default"].find({ id_coloc: id_coloc }).then(function (users) {
                res.status(200).json(users);
            });
        }
        else {
            res.status(404).json({ message: "no data" });
        }
    }
};
