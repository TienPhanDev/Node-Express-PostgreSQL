'use strict';

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
   const sugars = await queryInterface.bulkInsert('Sugars', [
      {
        userId: 1,
        result: 115,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        result: 125,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        result: 135,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        result: 145,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        result: 115,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        result: 125,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        result: 135,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        result: 145,
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
    queryInterface.bulkDelete('Sugars', null, {});
  }
};
