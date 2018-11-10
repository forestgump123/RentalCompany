const express=require('express');
const router=express.Router();
let userController=require('./Controllers/userController');
let equipmentController=require('./Controllers/equipmentController');
// user routes
router.get('/users',userController.getUsers);

router.get('/users/:id',userController.getUserById);

router.delete('/users/delete/:id',userController.deleteUser);

router.post('/users/add',userController.addUser);


// equipment routes

router.get('/:category',equipmentController.getEquipment);

router.get('/:category/:id',equipmentController.getEquipmentById);

router.delete('/:category/delete/:id',equipmentController.deleteEquipment);

router.post('/:category/add',equipmentController.addEquipment);



module.exports=router;