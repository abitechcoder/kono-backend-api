'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Identities',
      [
        {
          text: 'We are a non-governmental organisation that is dedicated to creating a Sierra Leone where there is respect for human rights ,accountable governance ,food and nutrition security as well as equal opportunities for men and women to thrive. We liaise with communities, traditional authorities, government institutions and foreign partners to combine resources that will develop innovative solutions to alleviate poverty and enhance quality self-reliance.\r\n\r\nWith our strategic approach SEND Sierra Leone has adopted the global Sustainable Development Goals (SDGS) to guide national development planning and implementation. The pursuit of economic equality and social equity are mainstreamed in the SDGs. Our commitment to the government is to improve the delivery of social services and prioritize the education sector.\r\n\r\nThrough this collaborative approach, we hope that our Strategic Plan will enable the target beneficiaries and communities to realize the SDGs for the sake of empowered people led by responsible Government.',
          mission:
            'Promotion of good governance, voice, accountably basic services and equality for women and men in Sierra Leone.',
          vision:
            'A Sierra Leone where people’s rights and well-being are guaranteed.',
          value:
            'We believe in the potential of PEOPLE to champion their own development, characterized by:\r\n\r\n- Participatory decision-making and development\r\n- Equality of women and men\r\n- Openness and accountability\r\n- Partnership for human development\r\n- Learning, innovation and sharing of knowledge\r\n- Enabling action based on information and evidence',
          principle:
            '- Development is a human right that provides men and women with equal opportunity to actively participate in and contribute to the political, economic and social transformation of their communities.\r\n\r\n- Development is multi-dimensional, involving economic, political and social issues requiring integrated programming approaches to promote community-driven development initiatives, economic literacy and policy advocacy.\r\n\r\n- Forging strong partnerships with state and non-state actors that are characterized by mutual accountability, openness and effective communication, provide an enabling environment for innovative development programming.\r\n\r\n- Self-managed, community-based organizations are catalysts for promoting sustainability of development processes and initiatives.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Identities', null, {});
  },
};
