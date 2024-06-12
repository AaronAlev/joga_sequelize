'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await Promise.all([
      queryInterface.bulkInsert('Authors', [{
        id: 1,
        name: "Ashley Galvin"
      }]),
      queryInterface.bulkInsert('Authors', [{
        id: 2,
        name: "Patrick Beach"
      }]),
      queryInterface.bulkInsert('Authors', [{
        id: 3,
        name: "MacKenzie Miller"
      }])
    ])
  },
  
  async down (queryInterface, Sequelize) {

  }
};