"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var User_1 = __importDefault(require("../models/User"));
exports["default"] = {
    //login handler
    authUser: function (req, res) {
        if (!req.body || typeof req.body !== 'object') {
            res.status(400).json({ message: 'Invalid request body' });
            return;
        }
        var _a = req.body, email = _a.email, password = _a.password;
        User_1["default"].findOne({ email: email }).then(function (user) {
            if (!user) {
                // User not found
                res.status(401).json({ message: 'Invalid username or password' });
                return;
            }
            // Compare password hash/encryption
            if (password !== user.mot_de_passe) {
                // Password doesn't match
                res.status(401).json({ message: 'Invalid username or password' });
                return;
            }
            // Authentication successful
            res.status(200).json(user);
        })["catch"](function (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        });
    },
    //signup handler
    createUser: function (req, res) {
        var user_info = {
            "nom": req.body.nom,
            "prenom": req.body.prenom,
            "email": req.body.email,
            "mot_de_passe": req.body.mot_de_passe,
            "contact": req.body.contact,
            "id_coloc": null
        };
        //add new entry on the database
        var new_user = new User_1["default"](user_info);
        new_user.save().then(function () {
            //send response to the client
            res.status(200).json(new_user);
        });
    }
};
