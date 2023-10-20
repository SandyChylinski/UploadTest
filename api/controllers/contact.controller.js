const db = require("../models");
const Contacts = db.contacts;

const Op = db.Sequelize.Op;



// Create and Save a new Contact


exports.create = (req, res) => {
    const createContact = {
        name: req.body.name,
//        completed: req.body.completed || false
    };

    Contacts.create(createContact)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error while creating contact! "
            });
        });
};

//////////////////////////////////////////
// Delete one contact by id

exports.delete = (req, res) => {
    const id = req.params.id;

    Contacts.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Contact was succesfully deleted!"
            });
        } else {
            res.send({
                message: "Contact not found!"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error while deleting contact!"  + id
        });
    });
};





















// Retrieve all contacts from db.

exports.findAll = (req, res) => {
    Contacts.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error getting all contacts!"
            });
        });
};

//////////////////////////////////////////

// Get one contact by id

exports.findOne = (req, res) => {
    const id = req.params.id;

    Contacts.findByPk(id)
    .then(data => {
        if (id) {
            res.send({
                message: "Searched contact is: " + id 
            });
        } else {
            res.send({
                message: "Contact not found!"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving contact!" + id
        });
    });
};

//////////////////////////////////////////

// Update one contact by id

exports.update = (req, res) => {
    const id = req.params.id;

    Contacts.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Contact was successfully updated."
            });
        } else {
            res.send({
                message: "Update not possible, contact not found!"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating contact!" + id 
        });
    });
};

//////////////////////////////////////////

// Delete one contact by id

exports.delete = (req, res) => {
    const id = req.params.id;

    Contacts.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Contact was succesfully deleted!"
            });
        } else {
            res.send({
                message: "Contact not found!"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error while deleting contact!"  + id
        });
    });
};


//////////////////////////////////////////

// Delete all Contacts from the database.
//exports.deleteAll = (req, res) => {};

// Find all published Contacts
//exports.findAllPublished = (req, res) => {};