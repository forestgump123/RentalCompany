'use strict';
module.exports = class SkiBootsService {
    constructor() {
        this.skiBootsList = [];
    }

    getListOfSkiBoots() {
        return this.skiBootsList;

    }

    addSkiBootsToList(skiBoots) {
        if (this.skiBootsList.push(skiBoots)) {
            return true;
        }

        return false;
    }

    getSkiBootsById(id) {
        const skiBoots = this.skiBootsList.find(function (skiBoots) {
            return skiBoots.skiBootsId === id;
        });

        return skiBoots;

    }

    deleteSkiBootsByid(id) {
        const skiBoots = this.skiBootsList.find(function (skiBoots) {
            return skiBoots.skiBootsId === id;
        });

        if (this.skiBootsList.splice(this.skiBootsList.indexOf(skiBoots), 1)) {
            return true;
        }
        return false;
    }


};