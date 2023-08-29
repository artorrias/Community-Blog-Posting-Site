const router = require("express").Router();
const User = require('../../models/User');

//----------------------------------------------- CREATE NEW USER

router.post("/", async (req, res) => {
    try {
      const userDB = await User.create({
        name: req.body.name,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.logged_in = true;
        req.session.username = req.body.name;
  
        res.status(200).json(userDB);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // ----------------------------------------------- LOGIN
  
  router.post("/login", async (req, res) => {
    try {
      const userData = await User.findOne({
        where: {
          name: req.body.name,
        },
      });
  
      if (!userData) {
        res.status(400).json({ message: "Incorrect username or password!" });
        return;
      }
  
      const validPass = await userData.checkPass(req.body.password); 
  
      if (!validPass) {
        res.status(400).json({ message: "Incorrect username or password!" });
        return;
      }
  
      req.session.save(() => {
        req.session.logged_in = true;
        req.session.username = req.body.name;
  
        res
          .status(200)
          .json({ user: userData, message: "You are now logged in" });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  // ------------------------------------------------------------------ LOGOUT
  router.post("/logout", (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;