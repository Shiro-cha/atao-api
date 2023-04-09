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
var Taches_1 = __importDefault(require("../models/Taches"));
var TacheUser_1 = __importDefault(require("../models/TacheUser"));
var Rapelle_1 = __importDefault(require("../models/Rapelle"));
exports["default"] = {
    //create task handler
    createTask: function (req, res) {
        var task_members = req.body.task_members;
        var info_task = {
            "titre": req.body.titre,
            "start": req.body.start,
            "end": req.body.end,
            "type": task_members.length > 1 ? "En commun" : "Solo"
        };
        //add new entry on the database
        var new_task = new Taches_1["default"](info_task);
        new_task.save().then(function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, task_members.forEach(function (id_user) { return __awaiter(_this, void 0, void 0, function () {
                                var newUserTask;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            newUserTask = new TacheUser_1["default"]({
                                                "id_tache": new_task._id.toString(),
                                                "id_user": id_user
                                            });
                                            return [4 /*yield*/, newUserTask.save()];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                        case 1:
                            _a.sent();
                            res.status(200).json(new_task);
                            return [2 /*return*/];
                    }
                });
            });
        });
    },
    //joinATask handler
    addToTask: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var task_members, id_task;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        task_members = req.body.task_members;
                        id_task = req.body.id_task;
                        //send response to the client
                        return [4 /*yield*/, task_members.forEach(function (id_user) { return __awaiter(_this, void 0, void 0, function () {
                                var newUserTask;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            newUserTask = new TacheUser_1["default"]({
                                                "id_tache": id_task,
                                                "id_user": id_user
                                            });
                                            return [4 /*yield*/, newUserTask.save()];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        //send response to the client
                        _a.sent();
                        res.status(200).json(task_members);
                        return [2 /*return*/];
                }
            });
        });
    },
    allTask: function (req, res) {
        Taches_1["default"].find({}).then(function (taches) {
            res.status(200).json(taches);
        });
    },
    remindColoc: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var rappelle_info, new_rappelle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rappelle_info = {
                            id_tache: req.body.id_tache,
                            id_source_rappelle: req.body.id_source_rappelle,
                            id_user: req.body.id_user,
                            temps_rapelle: req.body.temps_rapelle
                        };
                        new_rappelle = new Rapelle_1["default"](rappelle_info);
                        return [4 /*yield*/, new_rappelle.save()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, res.status(200).json(new_rappelle)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    getRemind: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id_user;
            return __generator(this, function (_a) {
                id_user = req.body.id_user;
                Rapelle_1["default"].find({ id_user: id_user }).then(function (rappelles) {
                    res.status(200).json(rappelles);
                });
                return [2 /*return*/];
            });
        });
    }
};
