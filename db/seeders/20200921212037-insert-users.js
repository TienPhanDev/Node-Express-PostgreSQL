'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const users = await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        userName: 'John Doe',
        firstName: 'first',
        lastName: 'name',
        email: 'email1@gmail.com',
        age: 25,
        hashedPassword: bcrypt.hashSync('foobar', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        userName: 'John Flow',
        firstName: 'first',
        lastName: 'name',
        email: 'email1@gmail.com',
        age: 66,
        hashedPassword: bcrypt.hashSync('foobar', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
