const fs = require('fs');
let UserService = require('../../Classes/User/UserService.js');
let userService = new UserService();
let file1 = fs.readFileSync('./JSON/users.json');
let usersTab = JSON.parse(file1);
let i;

function setValue() {
    for (i = 0; i < 3; i++) {
        userService.addUserToList(usersTab["users"][i]);
    }
}

setValue();

exports.getUsers = function (req, res) {
    res.send(userService.getListOfUsers());
};

exports.getUserById=function (req,res) {
    res.send(userService.getUserById(Number(req.params.id)));
};

exports.deleteUser=function (req,res) {
    res.send(userService.deleteUserByid(Number(req.params.id)));
};

exports.addUser=function (req,res) {
    res.send(userService.addUserToList(usersTab["users"][3]));
};