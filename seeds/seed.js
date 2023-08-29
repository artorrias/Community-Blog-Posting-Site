const seedPosts = require("./seeds");

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log("\n----- DATABASE SYNCED -----\n");
    await seedPosts();
    console.log("\n----- GENRES SEEDED -----\n");

    process.exit(0);
};

seedAll();