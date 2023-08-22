const router = require("express").Router();
const { Comment } = require("../../models/Comment");

router.post("/", async (req, res) => {
    try {
        if (!req.body.content) {
            res
              .status(400)
              .json({ message: "Please type a comment" });
          }
          const commentData = await Comment.create({
            username: req.session.username,
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

