const router = require("express").Router();
const { Comment } = require("../../models");

router.get("/", async (req, res) => {
    try {
        const commentData = await Comment.findAll({
            where: {
                post_id: req.params.post_id,
            },
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/", async (req, res) => {
    try {
        if (!req.body.content) {
            res
              .status(400)
              .json({ message: "Please type a comment" });
          }
          const commentData = await Comment.create({
            username: "chad",
            comment: req.body.comment,
            post_id: req.body.post_id,
          });

          res
          .status(200)
          .json({ data: commentData, message: "Comment created successfully!" });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

