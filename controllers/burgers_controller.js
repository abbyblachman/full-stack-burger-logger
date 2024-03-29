const express = require('express');

const router = express.Router();

const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

  burger.selectAll(function(data) {
    const burgersObject = {
      burgers: data
    };
    console.log(burgersObject);
    res.render("index", burgersObject);
  })
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(["burger_name", "devoured"], [req.body.name, req.body.devoured], function(result) {
    //console.log(result);
    res.json({id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  //console.log('in put');
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;
