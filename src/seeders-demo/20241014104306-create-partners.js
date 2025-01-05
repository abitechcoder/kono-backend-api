'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Partners',
      [
        {
          name: 'Aktion Deutschland Hilft Logo',
          logo: 'https://sendsierraleone.com/images/logos/Aktion-Deutschland-Hilft-Logo.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Amplify Change Logo',
          logo: 'https://sendsierraleone.com/images/logos/amplify-change-logo.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'BMZ Cooperation Logo',
          logo: 'https://sendsierraleone.com/images/logos/bmz-cooperation.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'CARE Logo',
          logo: 'https://sendsierraleone.com/images/logos/CARE_Logo_Orange.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Christian Aid Logo',
          logo: 'https://sendsierraleone.com/images/logos/christain-aid.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'CISU Logo',
          logo: 'https://sendsierraleone.com/images/logos/cisu-logo.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Coat of Arms of Sierraleone Logo',
          logo: 'https://sendsierraleone.com/images/logos/coat_of_arms_of_Sierra_Leone.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Concern Green Logo',
          logo: 'https://sendsierraleone.com/images/logos/concern green.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'EU Flag Logo',
          logo: 'https://sendsierraleone.com/images/logos/eu_flag.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'FAO Logo',
          logo: 'https://sendsierraleone.com/images/logos/fao-logo.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'GIZ Logo',
          logo: 'https://sendsierraleone.com/images/logos/giz_logo.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Government of Ireland Logo',
          logo: 'https://sendsierraleone.com/images/logos/govt_of_ireland.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Imagine Worldwide Logo',
          logo: 'https://sendsierraleone.com/images/logos/imagine-worldwide.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'IUG Logo',
          logo: 'https://sendsierraleone.com/images/logos/iug.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'SABI Logo',
          logo: 'https://sendsierraleone.com/images/logos/sabi-logo.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Solidaridad Logo',
          logo: 'https://sendsierraleone.com/images/logos/solidaridad.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Terratech Logo',
          logo: 'https://sendsierraleone.com/images/logos/terratech-logo.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Trocaire Logo',
          logo: 'https://sendsierraleone.com/images/logos/trocaire.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Trust Africa Logo',
          logo: 'https://sendsierraleone.com/images/logos/trust-africa.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'UK Logo',
          logo: 'https://sendsierraleone.com/images/logos/uk.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'UNDP Logo',
          logo: 'https://sendsierraleone.com/images/logos/UNDP-Logo-Blue-Small.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'UN Women Logo',
          logo: 'https://sendsierraleone.com/images/logos/UNWOMENLOGO.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'USAid Logo',
          logo: 'https://sendsierraleone.com/images/logos/usaid.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Welthungerhilfe Logo',
          logo: 'https://sendsierraleone.com/images/logos/Welthungerhilfe-logo.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'WHI Logo',
          logo: 'https://sendsierraleone.com/images/logos/whi-logo.webp',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Partners', null, {});
  },
};
