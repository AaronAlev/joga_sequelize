'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await Promise.all([
      queryInterface.bulkInsert('ArticleTags', [{
        articleId: 10,
        tagId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags', [{
        articleId: 10,
        tagId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags', [{
        articleId: 11,
        tagId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags', [{
        articleId: 11,
        tagId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags', [{
        articleId: 12,
        tagId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags', [{
        articleId: 12,
        tagId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags', [{
        articleId: 12,
        tagId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }])


    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ArticleTags');
  }
};
