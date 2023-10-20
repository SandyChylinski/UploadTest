module.exports = app => {
    const phones = require("../controllers/phone.controller.js");
  
    var router = require("express").Router();

  // Create a new Phones
    router.post("/phones/", phones.create);

      // Retrieve all Phones
    router.get("/phones/", phones.findAll);
    
        // Retrieve a single phone with id
    router.get("/phones/:contactId", phones.findOne);
  
    // Update a phone with id
    router.put("/phones/:contactId", phones.update);
  
    // Delete a phone with id
    router.delete("/phones/:contactId", phones.delete);
  
            // Delete all Phones
//        router.delete("/", tasks.deleteAll);

    app.use('/api', router);
};



