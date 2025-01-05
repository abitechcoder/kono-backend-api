'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Testimonials',
      [
        {
          name: 'Rebecca Jimmy',
          image: 'https://sendsierraleone.com/images/rebecca.jpg',
          title: 'REBECCA JIMMY YAMBASU’S JOURNEY TO LEADERSHIP',
          text: 'Rebecca’s journey has touched many, especially young girls. Her story is not just one of personal triumph but a defining moment showcasing the power of perseverance, courage, and the firm belief in the possibility of a better tomorrow. Jimmy Yambasu has shattered stereotypes and paved the way for a more inclusive and equitable society in Kono District.',
          link_url:
            'https://sendsierraleone.com/documents/Case%20Story_Rebecca%20Jimmy.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Gbotima AND Sinava',
          image: 'https://sendsierraleone.com/images/gbotima.jpg',
          title: 'THE INSPIRING JOURNEY OF GBOTIMA AND SINAVA VSLA GROUPS',
          text: 'The story of the Gbotima and Sinava VSLA groups is one of triumph over adversity, unity in diversity, and women empowering themselves and their communities. It is a story that inspires, uplifts, and reaffirms the boundeless potential of collective action in creating a better tomorrow.',
          link_url:
            'https://sendsierraleone.com/documents/Case%20Story_VSLA%20group.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Ramatu',
          image: 'https://sendsierraleone.com/images/ramatu.jpg',
          title: 'RISING FROM THE ASHES: RAMATU’S JOURNEY OF EMPOWERMENT',
          text: 'Ramatu’s journey began with a deep sense of purpose rooted in her personal experiences and the challenges she witnessed around her. Despite surviving a difficult first marriage, she refused to be defined by her circumstances. Instead, she channelled her energy into advocating for those who needed a voice the most: girls and women.',
          link_url:
            'https://sendsierraleone.com/documents/Case%20Story_Ramatu.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Margaret',
          image: 'https://sendsierraleone.com/images/margaret.jpg',
          title: 'THE YOUNGEST COUNCILOR IN SIERRA LEONE',
          text: 'Margret’s future seemed confined to subsistence farming. Despite these challenges, she completed her West African Senior School Certificate Examination in 2021 at the age of 20. That same year, Margret was recruited by SEND Sierra Leone, an NGO supported by the Irish Embassy in Sierra Leone, to participate in the More Than A Woman project aimed at supporting women’s participation in politics and decision-making processes in Bonthe District.',
          link_url:
            'https://sendsierraleone.com/documents/Case%20Story_Margret.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Assiatu Conteh',
          image: 'https://sendsierraleone.com/images/assiatu.jpg',
          title:
            'CHAMPIONING WOMEN’S LEADERSHIP AND COMMUNITY DEVELOPMENT BONTHE DISTRICT CHAIRPERSON’S ENDURING LEGACY',
          text: 'Assiatu Conteh’s journey from Bonthe to the United Kingdom and back to her roots is a testament to her resilience and determination. Born and raised in Bonthe, Assiatu pursued education and opportunities abroad, yet remained deeply connected to her homeland. Her return in 2023 was marked by a commitment to transforming her community, particularly by empowering women and addressing the challenges of poverty and inadequate infrastructure is seen as a pinnacle of leadership.',
          link_url:
            'https://sendsierraleone.com/documents/Case_Story_Bonth_District_Chairperson.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Christiana Yamba',
          image: 'https://sendsierraleone.com/images/christiana.jpg',
          title: 'RESILIENCE IN ADVERSITY: THE JOURNEY OF CHRISTIANA YAMBA',
          text: 'Christiana Yamba, a 24-year-old member of the Chochendeh VSLA group in Jiama Nimikoro Chiefdom, Kono District, was born into poverty. Growing up with a single mother who struggled to make ends meet, Christiana’s education was cut short in class two because her mother could not afford the school fees and necessar learning materials. Forced to drop out of school, she joined her family members in farming. Despite these hardships, a flicker of hope burned within her youthful heart.',
          link_url:
            'https://sendsierraleone.com/documents/Case_Story_Christiana.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Testimonials', null, {});
  },
};
