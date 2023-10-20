const db = require("../models");
const Contacts = db.contacts;
const Phones = db.phones;
const Op = db.Sequelize.Op;

// Create phone

exports.create = (req, res) => {
    const createNum = {
        name: req.body.name,
        phoneNumber: req.body.phoneNumber,
        contactId: req.body.contactId,

    };

    Phones.create(createNum)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Error while creating phonenumber! "
            });
        });
};

//////////////////////////////////////////
// Delete one phone by id

exports.delete = (req, res) => {
    const id = req.params.id;

    Phones.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Phonenumbers was succesfully deleted!"
            });
        } else {
            res.send({
                message: "Phonenumber not found!"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error while deleting contact!" + id
        });
    });
};
















// Get all phones


exports.findAll = (req, res) => {
    Phones.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error getting all phonenumbers!"
            });
        });
};



// Get one phone by id

exports.findOne = (req, res) => {
    const id = req.params.id;

    Phones.findByPk(id)
    .then(data => {
        if (data) {
            res.send({
                message: "Searched phonenumer is: " + id 
            });
        } else {
            res.send({
                message: "Phonenumber not found!"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving phonenumber!" + id
        });
    });
};

//////////////////////////////////////////

// Update one phone by id

exports.update = (req, res) => {
    const id = req.params.id;

    Phones.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Phonenumber was successfully updated."
            });
        } else {
            res.send({
                message: "Update not possible, Phonenumber not found!"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating phonenumber!" + id 
        });
    });
};

//////////////////////////////////////////



//////////////////////////////////////////

// Delete all Phones from the database.
//exports.deleteAll = (req, res) => {};

// Find all published Phones
//exports.findAllPublished = (req, res) => {};