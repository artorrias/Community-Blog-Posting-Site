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
        include: [{ model: Comment, attributes: ["post_id"] }],
      });
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// CREATE POST

router.post('/', async (req, res) => {
    try {
        if (!req.body.content) {
            res
              .status(400)
              .json({ message: "Please type content for the post" });
        }
        const dbPostData = await Post.create({
            username: req.session.username,
            content: req.body.content,
            title: req.body.title,
        });

        res
        .status(200)
        .json({ data: dbPostData, message: "Post created successfully!" });
    } catch (err) {
        res.status(500).json(err);
    }
});

//EDIT POST


//DELETE POST



module.exports = router;