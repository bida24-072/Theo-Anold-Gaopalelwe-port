import type { PortfolioData } from '../types';

export const portfolio: PortfolioData = {
  personal: {
    firstName: 'Theo Anold',
    lastName: 'Gaopalelwe',
    fullName: 'Theo Anold Gaopalelwe',
    title: 'Aspiring BI & Data Analytics · Class of 2028',
    tagline:
      'Turning raw data into strategic insight — one dashboard, query, and story at a time.',
    availabilityText: 'Open to 2025/26 internships & graduate roles',
    location: 'Johannesburg, South Africa',
    remote: 'Remote-friendly',
    languages: 'English, Setswana',
  },

  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: "Let's talk", href: '#contact', isCta: true },
  ],

  hero: {
    badgeText: 'Open to 2025/26 internships & graduate roles',
    titleLine1: 'Theo Anold',
    titleLine2: 'Gaopalelwe',
    subtitle:
      'Aspiring Business Intelligence & Data Analytics professional (Class of 2028) turning raw data into strategic insight — one dashboard, query, and story at a time.',
    location: 'Johannesburg, South Africa',
    remote: 'Remote-friendly',
    languages: 'English, Setswana',
    snapshotTitle: 'Analytics Snapshot',
    snapshotUpdated: 'Updated · 2025',
    snapshotStats: [
      { label: 'SQL', icon: 'fas fa-code', value: 'Intermediate', level: 70 },
      { label: 'Power BI / Tableau', icon: 'fas fa-chart-bar', value: 'Building', level: 55 },
      { label: 'Python (Pandas)', icon: 'fab fa-python', value: 'Learning', level: 45 },
      { label: '2028 Goal', icon: 'fas fa-bullseye', value: 'Data Analyst', isBadge: true },
    ],
  },

  about: {
    paragraphs: [
      "I'm **Theo Anold Gaopalelwe**, a Business Intelligence & Data Analytics student (Class of 2028) based in Johannesburg. My journey into data started with a simple curiosity: *why do some businesses make better decisions than others?* The answer, almost always, comes down to how well they understand their data.",
      "Today, I'm building the technical and business skills to help organisations answer that question. From writing SQL queries against real datasets to designing Power BI dashboards that non-technical stakeholders can actually use, I focus on **practical, insight-driven work** — not just theory.",
      "My goal by 2028 is to step into a Business Intelligence or Data Analytics role where I can combine technical rigour with business acumen — translating messy data into clear, actionable decisions. I'm currently seeking internship and graduate opportunities where I can contribute, learn, and grow alongside experienced data teams.",
    ],
    highlights: [
      { icon: 'fas fa-graduation-cap', title: 'Class of 2028', description: 'BCom Business Intelligence & Data Analytics' },
      { icon: 'fas fa-rocket', title: 'Hands-on learner', description: '6+ self-driven data projects & continuous skill building' },
      { icon: 'fas fa-handshake', title: 'Team player', description: 'Collaborative, communicative, and eager to learn from mentors' },
      { icon: 'fas fa-globe', title: 'Remote-ready', description: 'Comfortable with distributed teams and async collaboration' },
    ],
  },

  skills: {
    subtitle:
      'A growing toolkit built through coursework, self-study, and applied projects — with honest, real proficiency levels.',
    categories: [
      {
        icon: 'fas fa-chart-simple',
        title: 'Data Analysis',
        skills: [
          { name: 'SQL (PostgreSQL, MySQL)', level: 'Intermediate' },
          { name: 'Excel (Power Query, Pivot)', level: 'Advanced' },
          { name: 'Data cleaning & prep', level: 'Intermediate' },
          { name: 'Statistical foundations', level: 'Intermediate' },
          { name: 'EDA & insight synthesis', level: 'Intermediate' },
        ],
      },
      {
        icon: 'fas fa-chart-line',
        title: 'BI & Visualization',
        skills: [
          { name: 'Power BI (DAX, reports)', level: 'Intermediate' },
          { name: 'Tableau (foundations)', level: 'Beginner' },
          { name: 'Dashboard design principles', level: 'Intermediate' },
          { name: 'KPI definition & tracking', level: 'Intermediate' },
          { name: 'Data storytelling', level: 'Intermediate' },
        ],
      },
      {
        icon: 'fas fa-gear',
        title: 'Technical Foundations',
        skills: [
          { name: 'Python (Pandas, NumPy)', level: 'Beginner' },
          { name: 'Git & version control', level: 'Beginner' },
          { name: 'Relational database design', level: 'Beginner' },
          { name: 'Data modeling basics', level: 'Beginner' },
          { name: 'Excel automation', level: 'Intermediate' },
        ],
      },
      {
        icon: 'fas fa-users',
        title: 'Business Acumen',
        skills: [
          { name: 'Requirements gathering', level: 'Intermediate' },
          { name: 'Stakeholder communication', level: 'Intermediate' },
          { name: 'Process improvement', level: 'Beginner' },
          { name: 'Critical thinking & problem solving', level: 'Advanced' },
          { name: 'Project documentation', level: 'Intermediate' },
        ],
      },
    ],
  },

  experience: {
    subtitle:
      'Practical experience gathered through academic projects, student leadership, and self-driven learning.',
    items: [
      {
        date: 'Feb 2025 – Present',
        role: 'Analytics Peer Tutor',
        org: 'University Analytics Support Centre · Part-time',
        description:
          'Tutor first- and second-year students in SQL fundamentals, Excel data analysis, and introductory statistics. Break down complex concepts into simple, relatable explanations and help students debug their queries and spreadsheet models.',
        tags: ['SQL', 'Excel', 'Mentoring', 'Communication'],
      },
      {
        date: 'Aug 2024 – Nov 2024',
        role: 'Junior Data Analyst (Virtual Internship)',
        org: 'Insight Lab Africa · Remote',
        description:
          'Completed a 12-week virtual internship focused on retail analytics. Cleaned and analysed a 50,000-row sales dataset using SQL and Excel, and built a Power BI dashboard that surfaced regional performance gaps for the client.',
        tags: ['SQL', 'Power BI', 'Retail analytics', 'Client reporting'],
      },
      {
        date: 'Mar 2024 – Present',
        role: 'Member — Data & Analytics Society',
        org: 'University Student Society',
        description:
          'Active member of the campus data analytics society. Participate in monthly data challenges, attend industry guest lectures, and collaborate with peers on mini hackathons and case-study competitions.',
        tags: ['Data challenges', 'Networking', 'Teamwork'],
      },
    ],
  },

  projects: {
    subtitle:
      'Real datasets, real questions, real dashboards — each project was built to answer a specific business question and practise the full analytics workflow.',
    items: [
      {
        tag: 'SQL · Analytics',
        title: 'Retail Sales Performance Analysis',
        description:
          'Queried a 50,000-row retail database to identify top-performing product categories, seasonal trends, and regional revenue gaps. Delivered recommendations for inventory optimisation and regional promotions.',
        outcomes: [
          'Identified 3 underperforming regions costing ~R120k in missed revenue',
          'Wrote 25+ SQL queries using joins, CTEs, and window functions',
          'Presented findings in a 5-slide executive summary',
        ],
        meta: 'SQL · Excel',
        metaIcon: 'fas fa-database',
        linkLabel: 'Case study',
        linkHref: '#',
      },
      {
        tag: 'Power BI · HR',
        title: 'Employee Attrition Dashboard',
        description:
          'Designed an interactive Power BI dashboard exploring employee turnover drivers across a fictional 1,200-person company. Enabled drill-downs by department, tenure, and satisfaction score, with DAX measures for rolling attrition rates.',
        outcomes: [
          'Built 3 report pages with 12+ visualisations',
          'Wrote DAX measures for YoY attrition and risk segmentation',
          'Recommended retention focus on 0–2 year tenure band',
        ],
        meta: 'Power BI · DAX',
        metaIcon: 'fas fa-chart-pie',
        linkLabel: 'View dashboard',
        linkHref: '#',
      },
      {
        tag: 'Python · EDA',
        title: 'COVID-19 Global Data Exploration',
        description:
          'Used Python (Pandas, Matplotlib, Seaborn) to analyse global case trends, vaccination rates, and correlations with socio-economic indicators. Created visual narratives aimed at non-technical audiences.',
        outcomes: [
          'Cleaned and merged 4 datasets into a single analysis frame',
          'Produced 8 publication-quality visualisations',
          'Documented methodology in a Jupyter notebook',
        ],
        meta: 'Python · Pandas',
        metaIcon: 'fab fa-python',
        linkLabel: 'Notebook',
        linkHref: '#',
      },
      {
        tag: 'Capstone · In progress',
        title: 'BI Reporting for a Local SME',
        description:
          'Partnering with a Johannesburg-based small retail business to build a reporting prototype — from requirements gathering to a working Power BI dashboard tracking sales, stock turnover, and customer KPIs.',
        outcomes: [
          'Conducted stakeholder interviews to define 6 core KPIs',
          'Designed data model and ETL process in Power Query',
          'Delivering iterative dashboard feedback sessions',
        ],
        meta: 'End-to-end BI',
        metaIcon: 'fas fa-briefcase',
        linkLabel: 'Project log',
        linkHref: '#',
      },
      {
        tag: 'Excel · Finance',
        title: 'Personal Budget & Expense Tracker',
        description:
          'Built a fully automated Excel budget tracker using Power Query to import bank statements, categorise transactions with lookup tables, and visualise monthly spending against budget targets.',
        outcomes: [
          'Automated transaction categorisation for 500+ entries/month',
          'Built dynamic dashboard with slicers and conditional formatting',
          'Reduced monthly budgeting time from 2 hours to 10 minutes',
        ],
        meta: 'Excel · Power Query',
        metaIcon: 'fas fa-file-excel',
        linkLabel: 'Template',
        linkHref: '#',
      },
      {
        tag: 'SQL · Data modeling',
        title: 'Library Management Database',
        description:
          'Designed and implemented a normalized relational database for a fictional library system, including ERD, schema creation, sample data, and analytical queries for borrowing trends and overdue analysis.',
        outcomes: [
          'Designed 3NF schema with 8 interrelated tables',
          'Wrote 20+ analytical queries for reporting',
          'Documented full data dictionary and ERD',
        ],
        meta: 'SQL · ERD',
        metaIcon: 'fas fa-database',
        linkLabel: 'Schema',
        linkHref: '#',
      },
    ],
  },

  certifications: {
    subtitle: 'Formal learning that supports and extends my university studies.',
    items: [
      { icon: 'fas fa-database', colorClass: 'blue', title: 'SQL for Data Analysis', issuer: 'Mode Analytics · SQL Tutorial', status: 'Completed' },
      { icon: 'fas fa-chart-pie', colorClass: 'purple', title: 'Power BI Data Analyst Path', issuer: 'Microsoft Learn · PL-300 prep', status: 'In progress' },
      { icon: 'fab fa-python', colorClass: 'green', title: 'Python for Data Science', issuer: 'freeCodeCamp · Scientific Computing', status: 'Completed' },
      { icon: 'fas fa-chart-line', colorClass: 'amber', title: 'Data Visualization Fundamentals', issuer: 'Tableau Public · Free Training', status: 'In progress' },
      { icon: 'fas fa-file-excel', colorClass: 'slate', title: 'Excel Skills for Business', issuer: 'Coursera · Macquarie University', status: 'Completed' },
      { icon: 'fas fa-brain', colorClass: 'blue', title: 'Statistics Foundations', issuer: 'Khan Academy · Descriptive & Inferential', status: 'Completed' },
    ],
  },

  education: {
    entries: [
      {
        year: '2025 – 2028 (Expected)',
        degree: 'BCom in Business Intelligence & Data Analytics',
        institution: 'University of Johannesburg · Johannesburg, South Africa',
        description:
          'Comprehensive programme covering database management, predictive analytics, data visualisation, business process modelling, and information systems strategy. Actively applying classroom concepts to real-world datasets and tools through self-driven projects.',
        highlights: [
          "Dean's list aspiration",
          'Analytics Society member',
          'Peer tutor (SQL & Excel)',
          'Hackathon participant',
        ],
        icon: 'fas fa-university',
        iconBg: '#0b1c2f',
      },
      {
        year: 'Completed 2024',
        degree: 'National Senior Certificate (NSC)',
        institution: 'Secondary School · Gauteng, South Africa',
        description:
          'Achieved strong results in Mathematics, Physical Sciences, and English. Developed early interest in problem-solving and analytical thinking through mathematics olympiads and science fairs.',
        highlights: ['Mathematics (Distinction)', 'Physical Sciences', 'English (Home Language)'],
        icon: 'fas fa-school',
        iconBg: '#1e40af',
      },
    ],
  },

  contact: {
    headingLine1: "Let's build something",
    headingLine2: 'data-driven together.',
    intro:
      "I'm actively seeking internship, vacation work, and graduate opportunities in Business Intelligence, Data Analytics, or Data Science. Whether it's a role, a project collaboration, or just a conversation about data — my inbox is always open.",
    methods: [
      { icon: 'fas fa-envelope', label: 'Email', value: 'theo.gaopalelwe@gmail.com', href: 'mailto:theo.gaopalelwe@gmail.com' },
      { icon: 'fas fa-phone', label: 'Phone', value: '+27 82 123 4567', href: 'tel:+27821234567' },
      { icon: 'fab fa-linkedin-in', label: 'LinkedIn', value: 'linkedin.com/in/theo-gaopalelwe', href: 'https://linkedin.com/in/theo-gaopalelwe' },
      { icon: 'fab fa-github', label: 'GitHub', value: 'github.com/theo-gaopalelwe', href: 'https://github.com/theo-gaopalelwe' },
    ],
    socials: [
      { icon: 'fab fa-linkedin-in', href: 'https://linkedin.com/in/theo-gaopalelwe', label: 'LinkedIn' },
      { icon: 'fab fa-github', href: 'https://github.com/theo-gaopalelwe', label: 'GitHub' },
      { icon: 'fab fa-kaggle', href: 'https://kaggle.com/theo-gaopalelwe', label: 'Kaggle' },
      { icon: 'fab fa-x-twitter', href: 'https://x.com/theo_gaopalelwe', label: 'X / Twitter' },
    ],
    availabilityTitle: 'Currently available',
    availabilityText:
      'Open to **internships**, **vacation work**, and **part-time analyst roles** from mid-2025. Available remotely across South Africa and open to hybrid arrangements in Gauteng.',
    quotes: [
      { icon: 'fas fa-quote-left', text: "Without data, you're just another person with an opinion.", author: 'W. Edwards Deming' },
      { icon: 'fas fa-lightbulb', text: 'The goal is to turn data into information, and information into insight.', author: 'Carly Fiorina' },
    ],
  },

  footer: {
    copyright: '2025 Theo Anold Gaopalelwe — Aspiring BI & Data Analytics, Class of 2028',
    location: 'Johannesburg, South Africa · built with purpose',
  },
};
