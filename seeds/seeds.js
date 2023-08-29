const { Post } = require("../models");

const postData = [
    {
        title: "post",
        username: "artorias",
        content: "posty",
    },
    {
        title: "post 2",
        username: "artorias",
        content: "postyyy",
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;