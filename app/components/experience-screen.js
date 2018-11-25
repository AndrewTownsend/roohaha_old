import Component from '@ember/component';

export default Component.extend({
  classNames: ['screen', 'experience'],

  dayToDayTech: [
    {name: 'EmberJS', link: ''},
    {name: 'HTML/Handlebars', link: ''},
    {name: 'CSS', link: ''},
    {name: 'Java', link: ''},
    {name: 'EmberMocha', link: ''},
    {name: 'JUnit', link: ''},
    {name: 'Fitnesse', link: ''},
  ],

  learningTech: [
    {name: 'PostgreSQL', link: ''},
    {name: 'Spring', link: ''},
  ],
  usedInThePastTech: [
      {name: 'C#/.Net', link: ''},
      {name: 'PHP', link: ''},
      {name: 'Bash/Shell Scripting', link: ''},
      {name: 'Perl', link: ''},
    ],

  employmentRecord: [
    {
      employer: 'Yahoo!',
      startDate: 'July 2008',
      endDate: 'July 2010',
      title: 'Search Marketing Desktop Quality Engineer and Tools Developer',
      details: [
        'Placed in the top 5% of Yahoo! employees before joining Microsoft.',
        'Wrote an automated test framework for Yahoo! Search Marketing Desktop that ran regression tests and integrated with standard Yahoo! reporting tools.',
        'Led development and maintenance efforts of multiple supporting tools used by the developer, quality engineering, user acceptance, and internationalization teams associated with the product.',
        'Active contributor to all aspects of Yahoo! Search Marketing Desktop for the application’s entire lifecycle, particularly in the area of Quality Engineering. Took a leadership role in developing the test strategies, test case maintenance, and test plan execution of the entire product.',
        'Took lead ownership of several full cycles of test strategy planning and test case creation, test plan execution, and pre- and post-launch support for major patch releases of the product.',
        'Wrote automated functional, performance, and UI test scripts for continuous integration regression testing of the product using the proprietary Y!FlexTester framework.',
        'Owner of integration between Yahoo! Search Marketing Desktop code with a third party Flex-based code coverage tracking tool.',
        'Experienced with leveraging and integrating tools with existing internal Yahoo! testing frameworks. Used shell scripting, Flex/ActionScript 3, and Java.'
      ]
    },
    {
      employer: 'Microsoft',
      startDate: 'July 2010',
      endDate: 'July 2011',
      title: 'Software Engineer in Test II: SmartPricing (OSD)',
      details: [
        'Owned test plan design, review, maintenance and execution of several SmartPricing components.',
        'Contributed to automation that functionally tested modules of SmartPricing Online and Offline components in a white box fashion using C#.',
        'Owned the automation used to check each new configuration for errors. One of few local experts on the Aqueduct workflow scheduling platform.',
        'Maintained a local sandbox deployment of the Aqueduct platform for all teams to use as a test bed.',
        'Designed and implemented a standard automation framework for testing E2E scenarios in Aqueduct.',
        'Drove the Test side of all releases to Pre-Production and Production environments for the Offline component.',
        'Responsible for drafting, testing, and delivering the Release Steps used to deploy the feature to Production.',
        'Experience with cross-group partnerships, particularly with Operations.'
      ]
    },
    {
      employer: 'Microsoft',
      startDate: 'July 2011',
      endDate: 'September 2012',
      title: 'Software Engineer in Test II: Contextual Ads Performance (OSD)',
      details: [
        'Lead developer for all internal tool needs of the Performance team. Headed up design, implementation, code reviews, and maintenance. Primarily employed the C# language.',
        'Owned half the Contextual Ads online components for all performance analysis and reports.',
        'Built an automated environment that executed performance runs against the daily build and generated an email report with a comparison against the previous run, including crash statistics.',
        'Developed a monitoring system that generates a report on a datacenter’s performance for a specified timeframe, along with information about deployments that occurred during that window and statistics on traffic. Provided comparison data to the previous timeframe.',
        'Automated 95% of the Performance Report our team builds several times a release. Turned a 3-6 hour exercise into a 20-minute, mainly unattended task.',
        'Wrote an entirely new load test tool for one of the online components to replace an older, legacy system.'
      ]
    },
    {
      employer: 'Microsoft',
      startDate: 'September 2012',
      endDate: 'July 2013',
      title: 'Software Engineer II: Contextual Ads Environment Health (OSD)',
      details: [
        'Designed and developed an architecture that gathered real-time system metrics across discrete online environments, with performance, deployment, and crash data. Multiple teams adopted the infrastructure.',
        'Wrote several log-mining scripts to collect system health as well as accompanying tools.',
        'Automated a daily Environment Health email report that compiled data from several disparate sources.',
        'Co-designed and implemented a fully extensible Dashboard for overall organization status, including business metrics, performance data, build statuses, and automated test status.',
        'Built automation that automatically sampled a running process once a week and gathered performance data on our critical serving components. Leveraged an existing profiling tool.',
        'Partnered with component teams to improve our environments’ reliability, performance and health.',
        'Owned various instances of environmental capacity tests for our new online architecture.'
      ]
    },
    {
      employer: 'Resonate',
      startDate: 'August 2013',
      endDate: 'March 2018',
      title: 'QA Engineer',
      details: [
        'Developed a unique Selenium framework in Java that models pages quicker with Navigator objects than the traditional Page Object method that uses WebElements, with the goal of making it open source.',
        'Co-authored a JavaScript-based Selenium suite, using Webdriver.io and Fitnesse that replaced our entire Java-based test suite. The new implementation dramatically reduced test-run durations.',
        'Built and maintained our Selenium test suites, which test our web application, database, and APIs. Eventually owned all platform-related selenium codebases and regression runs as the sole QA Engineer.',
        'Owner of test plan creation for all stages of development.',
        'Took part in preliminary design and requirements discussions to account for all use-cases.',
        'Acted as Release Manager on a rotation to deploy bundled releases of all application tiers to Production.',
        'Executed cross-team work with our front-end team, building features and components for our web application using EmberJS. Acted as a front-end engineer while maintaining QA duties.',
        'Architect of the QA codebase, implementing standards and providing design direction.'
      ]
    },
    {
      employer: 'Resonate',
      startDate: 'March 2018',
      endDate: 'Present',
      title: 'Full Stack Engineer',
      details: [
        'Work with a 5-7-member group to design, build, test, and deploy new features to our platform.',
        'Proficient in crafting components and features for our platform in EmberJS, Handlebars, and CSS.',
        'Learning middleware development with Java and Spring-based technologies.',
        'Responsible for a variety of update scripts for our application’s PostgreSQL database.',
        'Responsible for writing and updating unit tests for new business logic in both front-end and middleware.',
        'Perform code reviews for front-end and database merge requests.',
        'Participate in design discussions for front-end and database development.',
        'Act as Release Manager on a rotation to deploy bundled releases of all application tiers to Production.',
        'Member of the On-Call rotation to assess root-cause and impact of incoming Customer Issues for all tiers of the platform architecture, and hotfixing them as necessary.',
        'Work with Product and Design teams for preliminary drafting of requirements, requirement changes, and pixel-perfect component implementation.'
      ]
    },
  ],

  reversedEmploymentRecord: function() {
    let reverseOrder = [];
    for(let i = this.get('employmentRecord').length - 1; i >= 0; i--) {
      reverseOrder.push(this.get('employmentRecord')[i]);
    }
    return reverseOrder;
  }.property('employmentRecord')
});
