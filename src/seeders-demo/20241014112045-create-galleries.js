'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Galleries',
      [
        {
          title: 'Climate Action Conference 2024 Day 1',
          type: 'album',
          linkUrl: 'https://myalbum.com/album/NKsAP4mLp9ZnrY/',
          image: 'https://sendsierraleone.com/images/gallery-image-1.jpg',
          photos: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Climate Action Conference 2024 Day 2',
          type: 'album',
          linkUrl: 'hhttps://myalbum.com/album/U96CXxowg9TeGm/',
          image: 'https://sendsierraleone.com/images/gallery-image-2.jpg',
          photos: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'SEND Sierra Leon 2023 Annual Report Exhibiton',
          type: 'album',
          linkUrl:
            'https://myalbum.com/album/Cv4U5GtTzQ4bjN/?invite=6f7af200-a0a5-407a-826f-eb5446bc329c',
          image: 'https://sendsierraleone.com/images/gallery-image-3.jpg',
          photos: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'SEND Sierra Leone 2023 Annual Staff Meeting',
          type: 'album',
          linkUrl:
            'https://myalbum.com/album/Cv4U5GtTzQ4bjN/?invite=6f7af200-a0a5-407a-826f-eb5446bc329c',
          image: 'https://sendsierraleone.com/images/gallery-image-3.jpg',
          photos: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'SEND Sierra Leone 2023 Staff Awards Night And Dinner',
          type: 'album',
          linkUrl:
            'https://myalbum.com/album/XmC7fmahHjSrnN/?invite=06b48367-f615-49b2-bb90-76784e074615',
          image: 'https://sendsierraleone.com/images/gallery-image-3.jpg',
          photos: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Galleries', null, {});
  },
};
