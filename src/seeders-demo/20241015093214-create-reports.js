'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Reports',
      [
        {
          title: 'NEWSLETTER 2022-IMPACTING TODAY FOR A BETTER TOMORROW',
          image_url: 'https://sendsierraleone.com/images/news-image-1.png',
          report_url:
            'https://sendsierraleone.com/documents/2022NEWSLETTER.pdf',
          report_type: 'newsletter',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Nyapui Senior Secondary School of Excellence Brochure',
          image_url: 'https://sendsierraleone.com/images/news-image-2.png',
          report_url:
            'https://sendsierraleone.com/documents/Nyapuischoolbrochure.pdf',
          report_type: 'newsletter',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            'Second Quarter Newsletter 2021. RESILIENCE THROUGH EMPOWERMENT',
          image_url: 'https://sendsierraleone.com/images/news-image-3.png',
          report_url:
            'https://sendsierraleone.com/documents/Resiliance%20through%20Empowerment%20(Online).pdf',
          report_type: 'newsletter',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Second Quarter Newsletter 2020. SURVIVING THROUGH COVID-19',
          image_url: 'https://sendsierraleone.com/images/news-image-4.jpg',
          report_url:
            'https://sendsierraleone.com/documents/newsletter%202nd%20qta%20(update).pdf',
          report_type: 'newsletter',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            'First Quarter Newsletter 2020, MAKING A CHANGE IN DIFFICULT TIMES.',
          image_url: 'https://sendsierraleone.com/images/news-image-5.png',
          report_url:
            'https://sendsierraleone.com/documents/SEND%20Sierra%20Leone%201st%20Newsletter%202020.pdf',
          report_type: 'newsletter',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            'April 2020 Newsletter, Debunking Things Believed to be True about the Corona Virus.',
          image_url: 'https://sendsierraleone.com/images/news-image-6.jpg',
          report_url: 'https://sendsierraleone.com/documents/myths.pdf',
          report_type: 'newsletter',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            'April 2020 Newsletter, Sensitization Manual on COVID-19 Pandemic',
          image_url: 'https://sendsierraleone.com/images/news-image-7.jpg',
          report_url: 'https://sendsierraleone.com/documents/corona.pdf',
          report_type: 'newsletter',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            'April 2020 Newsletter, NURTURING CHILDREN DURING THE COVID-19 PANDEMIC',
          image_url: 'https://sendsierraleone.com/images/news-image-8.jpg',
          report_url:
            'https://sendsierraleone.com/documents/Nyapuischoolbrochure.pdf',
          report_type: 'newsletter',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            'March 2020 Newsletter, Statement by HIS EXCELLENCY, DR. JULIUS MAADA BIO',
          image_url: 'https://sendsierraleone.com/images/news-image-9.jpg',
          report_url:
            'https://sendsierraleone.com/documents/Statement%20by%20His%20Excellency,%20Dr%20Julius%20Maada%20Bio,%20President%20of%20the%20Republic%20of%20Sierra%20Leone%20at%20the%20Second%20Press%20Conference%20on%20COVID-19.%20State%20House,%20Freetown%20-%2031%20March%202020.pdf',
          report_type: 'newsletter',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            'September 2018 Newsletter, Overcoming Social & Cultural Barriers to Political & Economic Empowerment!',
          image_url: 'https://sendsierraleone.com/images/news-image-10.jpg',
          report_url:
            'https://sendsierraleone.com/documents/SEND%20Women%20Empowerment%20Newsletter%202018-2.pdf',
          report_type: 'newsletter',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: '2019 Newsletters, Strengthening SEND and safeguarding staff',
          image_url: 'https://sendsierraleone.com/images/news-image-11.jpg',
          report_url:
            'https://sendsierraleone.com/documents/news%20letter%202019.pdf',
          report_type: 'newsletter',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Mid-year Newsletter 2024',
          image_url: 'https://sendsierraleone.com/images/news-image-12.jpg',
          report_url:
            'https://sendsierraleone.com/documents/Mid-Year%20Newsletter%2024-3%202.pdf',
          report_type: 'newsletter',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            'SEND SIERRA LEONE SHINES AT SLANGO AND MOPED AWARDS FOR SUSTAINABLE DEVELOPMENT EXCELLENCE',
          image_url: 'https://sendsierraleone.com/images/news-image-13.png',
          report_url:
            'https://sendsierraleone.com/documents/SEND%20Awards%20comp%2011.pdf',
          report_type: 'newsletter',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: '',
          image_url: 'https://sendsierraleone.com/images/manual-image-1.png',
          report_url:
            'https://sendsierraleone.com/documents/Women%20Manifesto%20Final.pdf',
          report_type: 'manual',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: '',
          image_url: 'https://sendsierraleone.com/images/manual-image-2.png',
          report_url:
            'https://sendsierraleone.com/documents/Advocacy%20Strategy%20Document.pdf',
          report_type: 'manual',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: '',
          image_url: 'https://sendsierraleone.com/images/manual-image-3.png',
          report_url:
            'https://sendsierraleone.com/documents/womencandidatestrainingmanual.pdf',
          report_type: 'manual',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: '',
          image_url: 'https://sendsierraleone.com/images/manual-image-4.jpg',
          report_url: 'https://sendsierraleone.com/documents/handbook.pdf',
          report_type: 'manual',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: '',
          image_url: 'https://sendsierraleone.com/images/manual-image-5.png',
          report_url:
            'https://sendsierraleone.com/documents/GTA%20Final%20Report.pdf',
          report_type: 'manual',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: '',
          image_url: 'https://sendsierraleone.com/images/manual-image-6.png',
          report_url: 'https://sendsierraleone.com/documents/GTA%20Final.pdf',
          report_type: 'manual',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: '',
          image_url: 'https://sendsierraleone.com/images/manual-image-7.jpg',
          report_url: 'https://sendsierraleone.com/documents/vsla%20manual.pdf',
          report_type: 'manual',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: '',
          image_url: 'https://sendsierraleone.com/images/manual-image-8.jpg',
          report_url: 'https://sendsierraleone.com/documents/manual.pdf',
          report_type: 'manual',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: '',
          image_url: 'https://sendsierraleone.com/images/manual-image-9.jpg',
          report_url:
            'https://sendsierraleone.com/documents/health&hygiene%20manual.pdf',
          report_type: 'manual',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: '',
          image_url: 'https://sendsierraleone.com/images/manual-image-10.jpg',
          report_url:
            'https://sendsierraleone.com/documents/food%20and%20nutrision%20manual.pdf',
          report_type: 'manual',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: '',
          image_url: 'https://sendsierraleone.com/images/manual-image-11.jpg',
          report_url:
            'https://sendsierraleone.com/documents/GMF%20MANUAL%20for%20SEND%20final.pdf',
          report_type: 'manual',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: '',
          image_url: 'https://sendsierraleone.com/images/profile-image-1.jpg',
          report_url:
            'https://sendsierraleone.com/documents/Climate%20Profile%20.pdf',
          report_type: 'manual',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: '',
          image_url: 'https://sendsierraleone.com/images/profile-image-2.jpg',
          report_url:
            'https://sendsierraleone.com/documents/Health,%20Hygiene,%20Sanitation%20&%20Water%20Profile-1.pdf',
          report_type: 'manual',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'SEND SL Annual Report 2017',
          image_url:
            'https://sendsierraleone.com/images/2017-annual-report-image.png',
          report_url:
            'https://sendsierraleone.com/documents/SEND%20SIERRA%20LEONE%20ANNUAL%20REPORT%20(1)_2.pdf',
          report_type: 'annual',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'SEND SL Annual Report 2018',
          image_url:
            'https://sendsierraleone.com/images/2018-annual-report-image.png',
          report_url:
            'https://sendsierraleone.com/documents/SEND-Annual-Report-WEB%20(2).pdf',
          report_type: 'annual',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'SEND SL Annual Report 2019',
          image_url:
            'https://sendsierraleone.com/images/2019-annual-report-image.png',
          report_url:
            'https://sendsierraleone.com/documents/2019%20annual%20report2.pdf',
          report_type: 'annual',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'SEND SL Annual Report 2020',
          image_url:
            'https://sendsierraleone.com/images/2020-annual-report-image.jpg',
          report_url:
            'https://sendsierraleone.com/documents/Anual%20Repport%202020.pdf',
          report_type: 'annual',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'SEND SL Annual Report 2021',
          image_url:
            'https://sendsierraleone.com/images/2021-annual-report-image.jpg',
          report_url:
            'https://sendsierraleone.com/documents/Annual%20Report%202021.pdf',
          report_type: 'annual',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'SEND SL Annual Report 2022',
          image_url:
            'https://sendsierraleone.com/images/2022-annual-report-image.jpg',
          report_url:
            'https://sendsierraleone.com/documents/Annual%20Report%202022.pdf',
          report_type: 'annual',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'SEND SL Annual Report 2023',
          image_url:
            'https://sendsierraleone.com/images/2023-annual-report-image.jpg',
          report_url:
            'https://sendsierraleone.com/documents/Annual%20Report%202023%20web.pdf',
          report_type: 'annual',
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
