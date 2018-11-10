'use strict';
module.exports = class SkisService {

    constructor() {
        this.skisList = [];
    }

    getListOfSkis() {
        return this.skisList;

    }

    addSkisToList(skis) {

        if (this.skisList.push(skis)) {
            return true;
        }
        return false;

    }

    getSkisById(id) {
        const skis = this.skisList.find(function (skis) {
            return skis.skisId === id;
        });

        return skis;

    }

    deleteSkisByid(id) {
        const skis = this.skisList.find(function (skis) {
            return skis.skisId === id;
        });

        if (this.skisList.splice(this.skisList.indexOf(skis), 1)) {
            return true;

        }

        return false;
    }


};