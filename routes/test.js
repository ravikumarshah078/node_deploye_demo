const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    // res.send("Hello World...");
    // res.render("index", { title: "My express app", message: "Hello Node"})
    res.json({
        message: "Hello Node"
    });
});

module.exports = router;