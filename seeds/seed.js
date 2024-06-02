const sequelize = require('../config/connection');
const { User, Post } = require('../models');
const userData = require('./userData.json');
const postData = require('./postData.json');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Sync models with database

    // Create users using userData.json
    const users = await User.bulkCreate(userData, {
      individualHooks: true, // Use hooks defined in User model
      returning: true, // Return created instances
    });

    // Create posts using postData.json and assign random user_id
    for (const post of postData) {
      await Post.create({
        ...post,
        user_id: users[Math.floor(Math.random() * users.length)].id, // Assign random user_id
      });
    }

    console.log('Database seeded successfully.');
    process.exit(0); // Exit process after successful seeding
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1); // Exit process with error code
  }
};

seedDatabase();
