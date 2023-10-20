module.exports = app => {
    const contacts = require("../controllers/contact.controller.js");
  
    var router = require("express").Router();

  // Create a new Contact
    router.post("/contacts/", contacts.create);

    // Retrieve all Contact
    router.get("/contacts/", contacts.findAll);
    
      // Retrieve a single Contact with id
    router.get("/contacts/:contactId", contacts.findOne);
  
    // Update a Contact with id
    router.put("/contacts/:contactId", contacts.update);
  
    // Delete a Contact with id
    router.delete("/contacts/:contactId", contacts.delete);
  
        // Delete all Contact
//        router.delete("/", contacts.deleteAll);

    app.use('/api', router);
};




// "routes" refer to a mechanism for defining how an application responds to different URLs or paths (Uniform Resource Locators) requested by clients
// (e.g., web browsers or API consumers). Routes are a fundamental part of routing and directing incoming HTTP requests to the appropriate code that should handle those requests. 
//Routes are typically used in web frameworks and APIs to create structured and organized endpoints for handling various functionalities.