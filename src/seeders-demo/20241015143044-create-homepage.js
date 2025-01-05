'use strict';

const { text } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Homepages',
      [
        {
          title: 'WELCOME TO SEND SIERRA LEONE',
          subtitle: 'Good Governance And Equality Of Men and Women',
          text: 'Promoting good governance, empowering voices, ensuring accountability, delivering essential services, and striving for gender equality in Sierra Leone.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Homepages', null, {});
  },
};
