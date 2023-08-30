const router = require("express").Router();
const { Post, Comment } = require("../../models");

//get posts

router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: Comment, attributes: ["post_id"] }],
        });
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:id", async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [{ model: Comment }],
      });
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// CREATE POST

router.post("/", async (req, res) => {
    try {
        const newPost = await Post.create({
            username: "chad",
            content: req.body.content,
            title: req.body.title,
        });

        res
        .status(200)
        .json(newPost);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

//EDIT POST


//DELETE POST



module.exports = router;