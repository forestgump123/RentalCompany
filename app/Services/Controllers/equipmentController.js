const fs = require('fs');
let SkiPolesService = require('../../Classes/Equipment/SkiPoles/SkiPolesService.js');
let SkiBootsService = require('../../Classes/Equipment/SkiBoots/SkiBootsService.js');
let SkisService = require('../../Classes/Equipment/Skis/SkisService.js');
let skisService = new SkisService();
let skiBootsService = new SkiBootsService();

let skiPolesService = new SkiPolesService();
let i;
let file2 = fs.readFileSync('./JSON/skiPoles.json');
let skiPolesTab = JSON.parse(file2);

let file3 = fs.readFileSync('./JSON/skis.json');
let skisTab = JSON.parse(file3);

let file4 = fs.readFileSync('./JSON/skiBoots.json');
let skiBootsTab = JSON.parse(file4);

function setValue(service) {

    for (i = 0; i < 3; i++) {
        if (service.constructor.name === 'SkiPolesService') {
            skiPolesService.addSkiPolesToList(skiPolesTab["skiPoles"][i]);
        }

        else if (service.constructor.name === 'SkisService') {
            skisService.addSkisToList(skisTab["skis"][i]);
        }
        else {
            skiBootsService.addSkiBootsToList(skiBootsTab["skiBoots"][i]);
        }

    }

}

setValue(skiPolesService);
setValue(skisService);

setValue(skiBootsService);

exports.getEquipment = function (req, res) {
    switch (req.params.category) {
        case "skis":
            res.send(skisService.getListOfSkis());
            break;

        case "skiPoles":
            res.send(skiPolesService.getListOfSkiPoles());
            break;
        case "skiBoots":
            res.send(skiBootsService.getListOfSkiBoots());
            break;

        default:
            console.log("blad");
    }
};

exports.getEquipmentById = function (req, res) {
    switch (req.params.category) {
        case "skis":
            res.send(skisService.getSkisById(Number(req.params.id)));
            break;

        case "skiPoles":
            res.send(skiPolesService.getSkiPolesById(Number(req.params.id)));
            break;
        case "skiBoots":
            res.send(skiBootsService.getSkiBootsById(Number(req.params.id)));
            break;

        default:
            console.log("blad");
    }
};

exports.deleteEquipment = function (req, res) {
    switch (req.params.category) {
        case "skis":
            res.send(skisService.deleteSkisByid(Number(req.params.id)));
            break;

        case "skiPoles":
            res.send(skiPolesService.deleteSkiPolesByid(Number(req.params.id)));
            break;
        case "skiBoots":
            res.send(skiBootsService.deleteSkiBootsByid(Number(req.params.id)));
            break;

        default:
            console.log("blad");
    }
};

exports.addEquipment = function (req, res) {
    switch (req.params.category) {
        case "skis":
            res.send(skisService.addSkisToList(skisTab["skis"][3]));
            break;

        case "skiPoles":
            res.send(skiPolesService.addSkiPolesToList(skiPolesTab["skiPoles"][3]));
            break;
        case "skiBoots":
            res.send(skiBootsService.addSkiBootsToList(skiBootsTab["skiBoots"][3]));
            break;

        default:
            console.log("blad");
    }
};