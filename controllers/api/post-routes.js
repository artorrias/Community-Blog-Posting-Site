const router = require("express").Router();
const { Comment, Post } = require("../../models");

// CREATE POST

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

//EDIT POST


router.post("/", async (req, res) => {
    try {
        const postData = await Post.create(req.body);
        res.status(200).json({
            data: postData,
            message: "Post created",
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE POST



module.exports = router;