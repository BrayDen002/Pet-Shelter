const PetController = require('../controllers/pet.controller');
module.exports = function(app){
    app.get('/api/pet', PetController.getAllPets);
    app.get("/api/pet/:id", PetController.findOneSinglePet);
    app.post('/api/pet/new', PetController.creatPet);
    // app.post('/api/pet/new', PetController.existingPet, PetController.creatPet);

    app.put("/api/pet/update/:id", PetController.updateExistingPet);
    app.delete("/api/pet/delete/:id", PetController.deleteAnExistingPet);
}