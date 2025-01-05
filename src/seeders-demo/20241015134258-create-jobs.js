'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Jobs',
      [
        {
          title: 'Security Officer - Freetown',
          description:
            'SEND Sierra Leone seeks the services of an experienced Security Officer to join our organisation and be stationed at the Freetown Program Office located along Spur Road”',
          deadline: '2024-05-10',
          classification: '1',
          region: '1',
          link_url:
            'https://sendsierraleone.com/documents/Job%20Advert%20for%20the%20Position%20of%20a%20Security.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: 'Security Officer',
          description:
            'SEND Sierra Leone seeks the services of an experienced Security Officer to join our organisation and be stationed at the Freetown Program Office located along Spur Road”',
          deadline: '2024-06-10',
          classification: '2',
          region: '1',
          link_url:
            'https://sendsierraleone.com/documents/Job%20Advert%20for%20the%20Position%20of%20a%20Security.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Invitation for Bids',
          description:
            'SEND Sierra Leone invites bids from experienced WASH construction firms to provide services in the construction of WASH facilities in Sierra Leone.”',
          deadline: '2024-04-22',
          classification: '1',
          region: '1',
          link_url:
            'https://sendsierraleone.com/documents/Invitation%20for%20Bids%20ADVERT.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'End-Line Evaluation Consultant',
          description:
            "SEND Sierra Leone seeks the services of an experienced Evaluation Consultant or Consultancy Firm to conduct an for End-Term Evaluation for the “More than a Woman: Strengthening Women's Participation in Politics and Governance- Phase II”",
          deadline: '2024-04-30',
          classification: '2',
          region: '1',
          link_url: 'https://sendsierraleone.com/documents/mtawtor.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          title: 'End-Line Evaluation Consultant',
          description:
            'SEND Sierra Leone seeks the services of an experienced Evaluation Consultant or Consultancy Firm to conduct an for End-Term Evaluation for the “Improving business conditions for fishing and fish trading in Bonthe, Sierra Leone (BIFT) in Bonthe district”',
          deadline: '2024-03-30',
          classification: '1',
          region: '2',
          link_url: 'https://sendsierraleone.com/documents/mtawtor.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Field Officer',
          description:
            "SEND Sierra Leone is actively seeking qualified individuals to fill the role of Field Officers responsible for the program's implementation in the Kono and Kenema districts. These Field Officers will be stationed within the respective communities in these districts. They should possess a high level of competence in community development work, specifically focusing on health-related initiatives.",
          deadline: '2023-12-14',
          classification: '2',
          region: '2',
          link_url:
            'https://sendsierraleone.com/documents/Field%20Officer_SLiSL%20Final%20.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Finance Officer',
          description:
            "SEND Sierra Leone is actively seeking qualified individuals to fill the role of Finance Officer responsible for managing and overseeing the program's financial transactions.",
          deadline: '2023-12-14',
          classification: '2',
          region: '1',
          link_url:
            'https://sendsierraleone.com/documents/Finance%20Officer%20Advert%20Final.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Programme Office Intern',
          description:
            'SEND is looking for a qualified national from any of the Universities. The Intern will support the Accounts Officer in undertaking administrative, financial and accounting tasks of the organization. The right candidate will track, evaluate and process day to day activities. Responsibilities include accounts payable, accounts receivable, internal and external duties, such as vendors, clients including banks, NRA and NASSIT. The Intern may handle daily bookkeeping, preparing financial report, taxes, budgets, and assisting in ensuring proper financial policies, procedures and structures are maintained.',
          deadline: '2023-08-25',
          classification: '5',
          region: '2',
          link_url:
            'https://sendsierraleone.com/documents/TOR%20-%20Programs%20Intern.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Accounts Office Intern',
          description:
            'SEND is looking for a qualified national from any of the Universities. The Intern will support the Accounts Officer in undertaking administrative, financial and accounting tasks of the organization. The right candidate will track, evaluate and process day to day activities. Responsibilities include accounts payable, accounts receivable, internal and external duties, such as vendors, clients including banks, NRA and NASSIT. The Intern may handle daily bookkeeping, preparing financial report, taxes, budgets, and assisting in ensuring proper financial policies, procedures and structures are maintained.',
          deadline: '2023-08-25',
          classification: '5',
          region: '1',
          link_url:
            'https://sendsierraleone.com/documents/Account%20Officer%20Advert.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'ASSET AUCTION',
          description:
            'SEND Sierra Leone informs the public of an proposed auction of a number of its assets to the general public.',
          deadline: '2023-09-25',
          classification: '9',
          region: '2',
          link_url: 'https://sendsierraleone.com/documents/assetsauction.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Account Officer Intern',
          description:
            'SEND Sierra Leone seeks the services of an account officer intern to develop a comprehensive data protection policy document for the organisation.',
          deadline: '2023-06-16',
          classification: '1',
          region: '1',
          link_url:
            'https://sendsierraleone.com/documents/TOR%20-%20Account%20Officer%20Intern.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Gender Policy Consultant (Re-Advertised)',
          description:
            'SEND Sierra Leone seeks the services of an experienced Gender Policy Consultant to develop a comprehensive gender policy document for the organisation.',
          deadline: '2023-06-16',
          classification: '1',
          region: '2',
          link_url:
            'https://sendsierraleone.com/documents/TOR-GenderPolicyFinal.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'IT Officer',
          description:
            'SEND Sierra Leone seeks the services of an IT Office to support the country program office in ensuring the organisation technological assets and support systems are in good working order for all staff.',
          deadline: '2023-06-05',
          classification: '2',
          region: '1',
          link_url: 'https://sendsierraleone.com/documents/ITTutorPewless.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Communications Consultant',
          description:
            'SEND Sierra Leone seeks the services of a Communications Consultant to support the country program office in delivering communication deliverables aligned with the organisations digital and communications strategy',
          deadline: '2023-06-05',
          classification: '4',
          region: '1',
          link_url:
            'https://sendsierraleone.com/documents/TOR-Communications%20Consultant.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Office Assistant',
          description:
            'SEND Sierra Leone seeks the services of an Office Assistant to support the Freetown program office in ensuring the office is a conducive working environment for all staff',
          deadline: '2023-05-20',
          classification: '3',
          region: '1',
          link_url:
            'https://sendsierraleone.com/documents/Office%20AssistantFreetown.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Solar Technician',
          description:
            'SEND Sierra Leone seeks the services of an experienced Solar Technician who will work with the organisation to design and install photo voltaic systems based on site conditions.',
          deadline: '2023-05-20',
          classification: '3',
          region: '2',
          link_url:
            'https://sendsierraleone.com/documents/Solar%20Technician.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Data Protection Policy Consultant',
          description:
            'SEND Sierra Leone seeks the services of an experienced Data Protection Policy Consultant to develop a comprehensive data protection policy document for the organisation.',
          deadline: '2023-05-12',
          classification: '4',
          region: '2',
          link_url:
            'https://sendsierraleone.com/documents/TOR-Data%20Protection%20Policy.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Gender Policy Consultant',
          description:
            'SEND Sierra Leone seeks the services of an experienced Gender Policy Consultant to develop a comprehensive gender policy document for the organisation.',
          deadline: '2023-05-12',
          classification: '4',
          region: '2',
          link_url:
            'https://sendsierraleone.com/documents/pewlesseducationgenderaudit.docx',
        },
        {
          title: 'Gender Audit Consultant',
          description:
            'SEND Sierra Leone seeks the services of an experienced Gender Audit Consultant to conduct a gender audit of female education workers in Sierra Leone',
          deadline: '2023-03-15',
          classification: '4',
          region: '2',
          link_url:
            'https://sendsierraleone.com/documents/TOR-GenderPolicyFinal.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Evaluation Consultant',
          description:
            'SEND Sierra Leone seeks the services of an experienced Evaluation Consultant to conduct a mid-term evaluation for the Citizen Driven Climate Sensitive WASH Management project in the Kenema district.',
          deadline: '2023-02-27',
          classification: '4',
          region: '2',
          link_url:
            'https://sendsierraleone.com/documents/TOR%20Mid-Term%20Evaluation%20P-150.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Project Manager',
          description:
            'SEND Sierra Leone seeks the services of an experienced individual to serve in the capacity of Project Manager working under the ‘Supporting Gender Equality & Social Accountability through a Strengthened Civil Society project which aims to strengthen local Civil Society Organisations (CSOs) engagement as actors of good governance and development in Sierra Leone.',
          deadline: '2023-02-10',
          classification: '2',
          region: '1',
          link_url:
            'https://sendsierraleone.com/documents/projectmanagerjd.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Project Manager',
          description:
            'SEND Sierra Leone seeks the services of an experienced individual to serve in the capacity of Project Manager working under the ‘Supporting Gender Equality & Social Accountability through a Strengthened Civil Society project which aims to strengthen local Civil Society Organisations (CSOs) engagement as actors of good governance and development in Sierra Leone.',
          deadline: '2023-02-10',
          classification: '2',
          region: '1',
          link_url:
            'https://sendsierraleone.com/documents/projectmanagerjd.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Project Officer',
          description:
            'SEND Sierra Leone seeks the services of an experienced individual to serve in the capacity of Project Officer working under the ‘Supporting Gender Equality & Social Accountability through a Strengthened Civil Society project which aims to strengthen local Civil Society Organisations (CSOs) engagement as actors of good governance and development in Sierra Leone.',
          deadline: '2023-02-10',
          classification: '2',
          region: '1',
          link_url:
            'https://sendsierraleone.com/documents/projectofficerjd.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'IT Tutors',
          description:
            'SEND Sierra Leone seeks the services of experienced ICT Tutors to work under the PEWLESS project aimed at increasing the ICT literacy of teachers especially female teachers in the Kailahun, Kenema and Kono districts.',
          deadline: '2023-01-25',
          classification: '3',
          region: '2',
          link_url: 'https://sendsierraleone.com/documents/ITTutorPewless.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Feasibility Study Consultant',
          description:
            'SEND Sierra Leone seeks the services of an experienced Consultant to conduct a feasibility study fo the proposed Citizen-Driven Climate Change project to guide the development of the project proposal and submission.',
          deadline: '2023-01-30',
          classification: '4',
          region: '2',
          link_url: 'https://sendsierraleone.com/documents/cdccfeasibility.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'End-Line Evaluation Consultant',
          description:
            'SEND Sierra Leone seeks the services of an experienced individual to serve in the capacity of Account Officer working under the ‘Supporting Gender Equality & Social Accountability through a Strengthened Civil Society project which aims to strengthen local Civil Society Organisations (CSOs) engagement as actors of good governance and development in Sierra Leone.',
          deadline: '2022-12-28',
          classification: '4',
          region: '2',
          link_url: 'https://sendsierraleone.com/documents/kependline.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Finance Director',
          description:
            'SEND Sierra Leone seeks the services of an experienced Finance Professional to join our team as the Finance Director',
          deadline: '2022-12-25',
          classification: '1',
          region: '2',
          link_url:
            'https://sendsierraleone.com/documents/financedirectorad.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Project Manager',
          description:
            'SEND Sierra Leone seeks the services of an experienced individual to serve in the capacity of Project Manager working under the ‘Supporting Gender Equality & Social Accountability through a Strengthened Civil Society project which aims to strengthen local Civil Society Organisations (CSOs) engagement as actors of good governance and development in Sierra Leone.',
          deadline: '2023-02-10',
          classification: '2',
          region: '1',
          link_url:
            'https://sendsierraleone.com/documents/projectmanagerjd.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Request for Tender for SEND Sierra Leone 2020 External Audit',
          description:
            'Tenders are invited to provide external audit services for SEND Sierra Leone for the 2020 financial year. SEND’s financial year runs from 1st January to 31st December.',
          deadline: '2021-06-30',
          classification: '2',
          region: '2',
          link_url:
            'https://sendsierraleone.com/documents/Job%20Advert%20for%20the%20Position%20of%20a%20Driver%20Kono.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Auction Notice! Auction Notice! Auction Notice!',
          description:
            'Management of SEND Sierra Leone wishes to bring to the notice of all staff and the general Public that Vehicle AIJ-366 is available for Auction sale to the General Public.',
          deadline: '2021-04-19',
          classification: '2',
          region: '2',
          link_url:
            'https://sendsierraleone.com/documents/Job%20Advert%20for%20the%20Position%20of%20a%20Driver%20Kono.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            'Integrated Project for Education and Empowerment of Women and Civil Society Groups in Sierra Leone',
          description:
            'SEND Sierra Leone, funded by German Federal Ministry for Economic Cooperation (BMZ AND TERRA TECH), are implementing the project ‘Integrated Project for Education and Empowerment of Women and Civil Society Groups in Sierra Leone’ to contribute to achieving the Sustainable Development Goals.',
          deadline: '2021-03-01',
          classification: '1',
          region: '1',
          link_url:
            'https://sendsierraleone.com/documents/Job%20Advert%20for%20the%20Position%20of%20a%20Driver%20Kono.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title:
            'Consultant for the Evaluation of the More Than A Woman Project',
          description: `The "More than a Woman: Strengthening Women's Participation in Politics and Governance" project be evaluated and works to empower women in the Eastern Region of Sierra Leone to increase their participation in politics and governance.`,
          deadline: '2021-02-25',
          classification: '1',
          region: '2',
          link_url:
            'https://sendsierraleone.com/documents/Job%20Advert%20for%20the%20Position%20of%20a%20Driver%20Kono.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Credit Union Manager',
          description:
            "The Credit Union Manager is responsible for the day to day running of the Credit Union. He/she is responsible for the proper technical performance of all the Credit Union's accounting and financial activities in consultation with the Board of Directors.",
          deadline: '2021-01-15',
          classification: '2',
          region: '1',
          link_url:
            'https://sendsierraleone.com/documents/Job%20Advert%20for%20the%20Position%20of%20a%20Driver%20Kono.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Account Officer',
          description:
            'The Accounts Officer is responsible for loan disbursement, opening the account, and maintaining high proficient and comprehensive credit union knowledge.',
          deadline: '2021-01-15',
          classification: '2',
          region: '1',
          link_url:
            'https://sendsierraleone.com/documents/Account%20Officer%20Advert.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Security Officer',
          description:
            'The Security Officer is responsible for the safety and security of all assets and property of the Credit Union. He/she ensures that the office premises are well tidy and the generator is in good order.',
          deadline: '2021-01-15',
          classification: '1',
          region: '2',
          link_url:
            'https://sendsierraleone.com/documents/Job%20Advert%20for%20the%20Position%20of%20a%20Security.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'PURCHASE OF OFFICE EQUIPMENT',
          description:
            'SEND Sierra Leone is non-governmental organization registered with the Ministry of Finance and Economic Development of the Republic of Sierra Leone with a vision to contribute to a Sierra Leone where people’s rights and well-being are guaranteed.',
          deadline: '2020-12-10',
          classification: '1',
          region: '2',
          link_url:
            'https://sendsierraleone.com/documents/Job%20Advert%20for%20the%20Position%20of%20a%20Driver%20Kono.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Invitation for Bids',
          description:
            'The Social Enterprise Development (SEND) Sierra Leone has received funds from the BMZ through Terra Tech Germany for the procurement of works and now invites sealed bids from eligible bidders for the construction of Kenema Model Senior Secondary School for Girls.',
          deadline: '2020-11-20',
          classification: '1',
          region: '2',
          link_url:
            'https://sendsierraleone.com/documents/Invitation%20for%20Bids%20ADVERT.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Computer/IT Tutors(2)',
          description:
            'SEND Sierra Leone is looking for a Computer/IT Tutors who will assume the responsibility of training teachers in the Kenema District to ensure quality teaching service.',
          deadline: '2020-11-18',
          classification: '2',
          region: '1',
          link_url:
            'https://sendsierraleone.com/documents/Job%20Advert%20for%20the%20Position%20of%20a%20Driver%20Kono.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Engineers Without Borders(Terms of Reference)',
          description:
            'Applications must be sent to: ayamga@sendsierraleone.com and jattu@sendsierraleone.com',
          deadline: '2020-11-25',
          classification: '2',
          region: '1',
          link_url:
            'https://sendsierraleone.com/documents/Job%20Advert%20for%20the%20Position%20of%20a%20Driver%20Kono.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'FINANCE DIRECTOR ALERT',
          description:
            'SEND Sierra Leone is looking for Finance Director to Oversee the performance of accurate reporting procedures and timely submission of reports to relevant donors, the SEND National Executive Council and other stakeholders.',
          deadline: '2020-06-30',
          classification: '1',
          region: '2',
          link_url:
            'https://sendsierraleone.com/documents/financedirectorad.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'FINANCE OFFICER ALERT',
          description:
            'SEND Sierra Leone is looking for Finance Officer for Country Office in Kenema who will be reporting to the Finance Director.The Officer will be responsible for fixed assets transactions managements and preparing letters for cash transfers , new bank openings ,program area payroll payments etc among others.',
          deadline: '2020-03-10',
          classification: '1',
          region: '2',
          link_url:
            'https://sendsierraleone.com/documents/Finance%20Officer%20Advert%20Final.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Account Officer',
          description:
            'SEND Sierra Leone is looking for Account Officer for our Country Office in Kenema who will be reporting to the Finance Officer.',
          deadline: '2021-07-26',
          classification: '2',
          region: '1',
          link_url:
            'https://sendsierraleone.com/documents/Account%20Officer%20Advert.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Terms of Reference for Needs Assessment in Falaba District',
          description:
            'As part of our efforts to expand and deepen the impact of our work in rural and underserved areas, SEND Sierra Leone is conducting a comprehensive needs assessment in Falaba District.',
          deadline: '2024-09-24',
          classification: '10',
          region: '1',
          link_url:
            'https://sendsierraleone.com/documents/Terms%20of%20Reference%20for%20the%20Falaba%20Need%20Assessment.-converted.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Advert for Young Women in STEM',
          description:
            'This initiative aims to address the gender gap in the renewable energy sector by equipping young women who have completed STEM (Science, Technology, Engineering, and Mathematics) studies with practical skills in solar energy.',
          deadline: '2024-09-20',
          classification: '10',
          region: '1',
          link_url:
            'https://sendsierraleone.com/documents/ADVERT%20FOR%20YOUNG%20WOMEN%20IN%20STEM%20FINAL%20FOR%20DISSEMMINATION.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Terms of Reference for SAFEGIRL',
          description:
            'Social Enterprise Development (SEND) Sierra Leone is seeking a consultant(s) to conduct a feasibility study for a proposed intervention titled ‘SAFEGIRL - Sierra Leone Action for FGM Eradication and GIRL Empowerment in Bombali, Bo, Kambia, Karene, Tonkolili, Moyamba, and Pujehun districts.',
          deadline: '2024-10-29',
          classification: '4',
          region: '1',
          link_url:
            'https://sendsierraleone.com/documents/TOR%20for%20SAFE%20GIRL.pdf',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Jobs', null, {});
  },
};
