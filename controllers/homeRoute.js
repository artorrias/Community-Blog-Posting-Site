const router = require("express").Router();
const authenticate = require("../utils/authenticate");
const { Comment, Post } = require("../models");

//----------------------------------------------------------------- GET all posts

router.get("/", authenticate, async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: Comment, attributes: ["post_id"] }],
        });
        const posts = postData.map((post) =>
            post.get({ plain: true })
        );

        res.render("homepage", {
            posts,
            logged_in: req.session.logged_in,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//----------------------------------------------------------------- GET one post

router.get("/post/:id", authenticate, async (req, res) => {
    try {
        const dbPostData = await Post.findbyPK(req.params.id, {
            include: [
                { 
                    model: Comment
                },
            ],
        });

        const post = dbPostData.get({ plain: true });
        res.render('onePost', { 
            ...post, 
            logged_in: req.session.logged_in 
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//----------------------------------------------------------------- GET the login page

router.get("/makePost", authenticate, async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: Comment, attributes: ["post_id"] }],
        });
        const posts = postData.map((post) =>
            post.get({ plain: true })
        );

        res.render("makePost");

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    } 
})

router.get("/login", (req, res) => {
    if (req.session.logged_in) {
      res.redirect("/");
      return;
    }
  
    res.render("login");
});

router.get("*", (req, res) => {
    if (req.session.logged_in) {
      res.redirect("/");
      return;
    } else {
      res.redirect("/login");
      return;
    }
  });

module.exports = router;