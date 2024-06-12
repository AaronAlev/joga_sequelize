'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Articles', [
        {
          name: 'Introduction to Ashtanga',
          slug: 'introduction-to-ashtanga',
          image: 'ashtanga.jpg',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus placerat sem, quis pretium purus feugiat sit amet. Etiam pharetra neque eu erat ornare, id ornare arcu placerat. Sed elementum magna quis nibh porta imperdiet. Mauris mauris quam, mattis quis nibh ac, varius euismod lorem. Mauris et laoreet odio. Etiam semper pretium ligula, nec pellentesque tellus pellentesque id. Duis vehicula auctor tempus. Nullam convallis varius urna eget euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec molestie odio vitae tristique ultrices. Cras varius, risus sit amet efficitur aliquam, metus dui varius dolor, non congue magna nisl eu ipsum. Mauris lacus nunc, molestie vitae facilisis sit amet, varius sit amet justo.',
          published: '2020-01-08 15:02:30',
          createdAt: new Date(),
          updatedAt: new Date()
        }]),
        queryInterface.bulkInsert('Articles', [
          {
            name: 'Morning vinyasa flow routine',
            slug: 'morning-vinyasa-flow-routine',
            image: 'morning.jpg',
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus placerat sem, quis pretium purus feugiat sit amet. Etiam pharetra neque eu erat ornare, id ornare arcu placerat. Sed elementum magna quis nibh porta imperdiet. Mauris mauris quam, mattis quis nibh ac, varius euismod lorem. Mauris et laoreet odio. Etiam semper pretium ligula, nec pellentesque tellus pellentesque id. Duis vehicula auctor tempus. Nullam convallis varius urna eget euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec molestie odio vitae tristique ultrices. Cras varius, risus sit amet efficitur aliquam, metus dui varius dolor, non congue magna nisl eu ipsum. Mauris lacus nunc, molestie vitae facilisis sit amet, varius sit amet justo.',
            published: '2020-04-14 15:02:41',
            createdAt: new Date(),
            updatedAt: new Date()
          }]),
          queryInterface.bulkInsert('Articles', [
            {
              name: 'Secrets of a yoga teacher',
              slug: 'secrets-of-a-yoga-teacher',
              image: 'yoga-teacher.jpg',
              body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus placerat sem, quis pretium purus feugiat sit amet. Etiam pharetra neque eu erat ornare, id ornare arcu placerat. Sed elementum magna quis nibh porta imperdiet. Mauris mauris quam, mattis quis nibh ac, varius euismod lorem. Mauris et laoreet odio. Etiam semper pretium ligula, nec pellentesque tellus pellentesque id. Duis vehicula auctor tempus. Nullam convallis varius urna eget euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec molestie odio vitae tristique ultrices. Cras varius, risus sit amet efficitur aliquam, metus dui varius dolor, non congue magna nisl eu ipsum. Mauris lacus nunc, molestie vitae facilisis sit amet, varius sit amet justo.',
              published: '2060-05-28 15:02:55',
              createdAt: new Date(),
              updatedAt: new Date()
            }])
      ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};
