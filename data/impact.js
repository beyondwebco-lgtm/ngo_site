// Centralized impact metrics, milestones, and documented programme highlights for Anand Group Charitable Trust
export const IMPACT_METRICS = [
  {
    number: '100+',
    label: 'Cleanliness Drives',
    sub: 'Conducted across villages, transit hubs, and school campuses',
    icon: 'fa-broom',
  },
  {
    number: '5,000+',
    label: 'Students Mentored',
    sub: 'Provided with stationery, school kits, digital guidance, and values',
    icon: 'fa-user-graduate',
  },
  {
    number: '25,000+',
    label: 'Meals Served',
    sub: 'Hygienic Annadanam and community food distributions',
    icon: 'fa-bowl-rice',
  },
  {
    number: '15+',
    label: 'Health & Medical Camps',
    sub: 'Free diagnostics, doctor check-ups, and vital medicines distributed',
    icon: 'fa-heart-pulse',
  },
  {
    number: '1,200+',
    label: 'Trees Planted',
    sub: 'Haritha Haram roadside green corridors and sapling distributions',
    icon: 'fa-seedling',
  },
  {
    number: '80G',
    label: 'Registered Trust Governance',
    sub: 'Registered Indian charitable trust upholding ethical stewardship and applicable 80G compliance',
    icon: 'fa-shield-halved',
  },
];

export const MILESTONES = [
  {
    year: '2014',
    title: 'The Inception & First Cleanliness Drives',
    desc: 'Anand Group launched community-level civic cleanliness drives across Andhra Pradesh and Telangana, inspiring youth to take ownership of public sanitation.',
    tag: 'Grassroots Foundation',
  },
  {
    year: '2015',
    title: 'Swachh Bharat & Road Safety Movement',
    desc: 'Formal launch of "Mana Bharat Swachh Bharat" campaigns with state dignitaries and celebrities, including a state-level road traffic safety initiative.',
    tag: 'State Recognition',
  },
  {
    year: '2016 - 2018',
    title: 'School Mentorship & Haritha Haram Greenery',
    desc: 'Extensive outreach to Zilla Parishad schools and junior colleges, instilling civic values, anti-plastic consciousness, and planting roadside saplings under Haritha Haram.',
    tag: 'Education & Ecology',
  },
  {
    year: '2019 - 2021',
    title: 'Community Relief & Emergency Support',
    desc: 'Supported vulnerable rural families, daily wage earners, and elderly individuals with dry ration grocery kits, fresh meals, and medical essentials during health crises.',
    tag: 'Community Relief',
  },
  {
    year: '2022 - Present',
    title: 'Educational Awareness, Wellness & CSR Partnerships',
    desc: 'Expanding holistic grassroots programmes covering educational awareness, digital wellness activity book distribution, teacher training, child psychology support, medical camps, and CSR collaborations.',
    tag: 'Holistic Growth',
  },
];

// Documented real field programme highlights with authentic photos (replaces unapproved beneficiary testimonials)
export const DOCUMENTED_HIGHLIGHTS = [
  {
    title: 'Student Educational & Civic Awareness Assemblies',
    tag: 'School Awareness',
    src: '/images/school-awareness/school-awareness-youth-inspiration-assembly.webp',
    description:
      'Interactive school awareness sessions guiding students in discipline, positive study habits, personal etiquette, and responsible digital citizenship.',
  },
  {
    title: 'Emergency Medical Aid — Published Press Coverage',
    tag: 'Healthcare Media Report',
    src: '/images/healthcare/healthcare-press-ambati-srinu-patient-medical-aid.webp',
    description:
      'Published Andhra Jyothi news report documenting emergency medical financial assistance handed over by Ambati Srinivasa Rao to support patient treatment.',
  },
  {
    title: 'Swachh Bharat Community Cleanliness Drives',
    tag: 'Social Responsibility',
    src: '/images/swachh-bharat/swachh-bharat-school-campus-cleanliness-drive.webp',
    description:
      'Volunteers, educators, and students participating together in campus sanitation, street cleaning, and community hygiene campaigns.',
  },
];

// Preserved internally pending formal accuracy review & written publication permission
export const SHOW_PUBLIC_STORIES = false;

export const PENDING_REVIEW_STORIES = [
  {
    status: 'PENDING_PERMISSION_REVIEW',
    title: 'Dignity and Care in My Golden Years',
    beneficiary: 'Lakshmamma (Senior Citizen)',
    location: 'Rural Elderly Care Outreach',
    quote:
      'When I had no one to assist with my medical needs or basic daily rations, Anand Group Charitable Trust gave me monthly healthcare support, warm food, and deep respect.',
    category: 'Elderly Care',
  },
  {
    status: 'PENDING_PERMISSION_REVIEW',
    title: 'From School Assembly to Clean Village Champion',
    beneficiary: 'Suresh & Classmates (Class 9 Students)',
    location: 'Zilla Praja Parishad High School, Pedapullalanka',
    quote:
      'The trust team showed us that a clean village begins with our own classroom. We formed a student cleanliness team and took the pledge to keep our village plastic-free.',
    category: 'Education & Youth',
  },
  {
    status: 'PENDING_PERMISSION_REVIEW',
    title: 'Emergency Medical Camp Saved My Health',
    beneficiary: 'Venkateswarlu (Rural Farmer)',
    location: 'Free Rural Health Camp',
    quote:
      'The doctor diagnosed my uncontrolled blood sugar in time and provided free medicines for 3 months. I could not have afforded the diagnosis in a distant city clinic.',
    category: 'Healthcare',
  },
];

export const STORIES = SHOW_PUBLIC_STORIES ? PENDING_REVIEW_STORIES : [];
