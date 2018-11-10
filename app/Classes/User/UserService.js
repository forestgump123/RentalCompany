'use strict';

module.exports = class UserService {
    constructor() {
        this.userList = [];
    }

    getListOfUsers() {
        return this.userList;

    }

    addUserToList(user) {
        if (this.userList.push(user)) {
            return true;
        }
        return false;

    }

    getUserById(id) {
        const user = this.userList.find(function (user) {
            return user.userId === id;
        });

        return user;

    }

    deleteUserByid(id) {
        const user = this.userList.find(function (user) {
            return user.userId === id;
        });

        if (this.userList.splice(this.userList.indexOf(user), 1)) {
            return true;
        }

        return false;

    }

};


