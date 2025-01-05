'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Reports',
      [
        {
          title: 'SEND Strategic Plan 2019 - 2023',
          image_url: 'https://sendsierraleone.com/images/news-image-1.png',
          report_url:
            'https://sendsierraleone.com/documents/SEND-Strategic-Plan-2019-2023.pdf',
          report_type: 'strategic_plan',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'SEND Strategic Plan 2024 - 2029',
          image_url: 'https://sendsierraleone.com/images/news-image-2.png',
          report_url:
            'https://sendsierraleone.com/documents/SEND%20SL%20Strategic%20Plan%202024-2029%20FINAL%202%20(1).pdf',
          report_type: 'strategic_plan',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Resource Mobilisation Strategy',
          image_url: 'https://sendsierraleone.com/images/news-image-3.png',
          report_url:
            'https://sendsierraleone.com/documents/RESOURCE%20MOBILISATION%20STRATEGY%202.pdf',
          report_type: 'strategic_plan',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: '2019 - 2023 Strategy Evaluation Report',
          image_url: 'https://sendsierraleone.com/images/news-image-4.jpg',
          report_url:
            'https://sendsierraleone.com/documents/SEND%20SL%20Strategy%20Evaluation%20Report%20FINAL.pdf',
          report_type: 'strategic_plan',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Company Profile',
          image_url: 'https://sendsierraleone.com/images/news-image-5.png',
          report_url:
            'https://sendsierraleone.com/documents/sendcompanyprofile.pdf',
          report_type: 'strategic_plan',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Communication Strategy',
          image_url: 'https://sendsierraleone.com/images/news-image-6.jpg',
          report_url:
            'https://sendsierraleone.com/documents/Communication%20Strategy.pdf',
          report_type: 'strategic_plan',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Organisation Profile',
          image_url: 'https://sendsierraleone.com/images/news-image-7.jpg',
          report_url:
            'https://sendsierraleone.com/documents/Organisational%20Profile.pdf',
          report_type: 'strategic_plan',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reports', null, {});
  },
};
