const Comment = require("./Comment");
const User = require("./User");
const Post = require("./Post");

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

module.exports = {
    Post,
    Comment,
    User,
};