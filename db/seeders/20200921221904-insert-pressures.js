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
   const pressure = await queryInterface.bulkInsert('Pressures', [
      {
        userId: 1,
        systolic_pressure: 110,
        diastolic_pressure: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        systolic_pressure: 120,
        diastolic_pressure: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        systolic_pressure: 130,
        diastolic_pressure: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        systolic_pressure: 150,
        diastolic_pressure: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        systolic_pressure: 110,
        diastolic_pressure: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        systolic_pressure: 120,
        diastolic_pressure: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        systolic_pressure: 130,
        diastolic_pressure: 80,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        systolic_pressure: 150,
        diastolic_pressure: 80,
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
    queryInterface.bulkDelete('Pressures', null, {});
  }
};
