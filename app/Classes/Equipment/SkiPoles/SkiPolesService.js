'use strict';
module.exports = class SkiPolesService {
    constructor() {
        this.skiPolesList = [];
    }

    getListOfSkiPoles() {
        return this.skiPolesList;

    }

    addSkiPolesToList(skiPoles) {
        if (this.skiPolesList.push(skiPoles)) {
            return true;
        }
        return false;

    }

    getSkiPolesById(id) {
        const skiPoles = this.skiPolesList.find(function (skiPoles) {
            return skiPoles.skiPolesId === id;
        });

        return skiPoles;

    }

    deleteSkiPolesByid(id) {
        const skiPoles = this.skiPolesList.find(function (skiPoles) {
            return skiPoles.skiPolesId === id;
        });

        if (this.skiPolesList.splice(this.skiPolesList.indexOf(skiPoles), 1)) {

            return true;
        }
        return false;
    }


};