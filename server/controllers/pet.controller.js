const { Pet } = require('../models/pet.models');

// Export a function to get all Pets
module.exports.getAllPets = (req, res) => {
    Pet.find()
        .then(allPets => res.json(allPets))
        .catch(err => res.json({ message: "Something went wrong",
        error: err }));
};

// Export a function to create a product
module.exports.creatPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json(newPet))
        .catch(err => res.status(400).json(err))
}

module.exports.existingPet = (req, res) => {
    Pet.exists({setup: req.body.setup})
        .then(petExists => {
            if (petExists) {
                return Promise.reject('Please Add An Unique Pet');
            }
            return Pet.create(req.body);
        })
        .then(saveResult => res.json({pet: saveResult}))
        .catch(err => res.json({message: "Pet already exists", error: err}));

};
// Export a function to update a Pet
module.exports.updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true})
    .then(updatedPet => res.json({ pet: updatedPet }))
    .catch(err => res.status(400).json(err))
};

// Removes a pet from the database
module.exports.deleteAnExistingPet = (req, res) => {
    const {id} = req.params
    Pet.deleteOne({_id: id})
        .then(confirmation => res.json(confirmation))
        .catch(err => res.status(400).json(err))
}

// Export a function to get a single Pet
module.exports.findOneSinglePet = (req, res) => {
    const {id} = req.params
    Pet.findOne({_id: id})
        .then(onePet => res.json(onePet))
        .catch(err => res.json(err))
};
