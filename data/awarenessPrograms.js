// Centralized Educational & Social Awareness Programme Data for Anand Group Charitable Trust

export const ACTIVITY_BOOK_DETAILS = {
  sectionTitle: 'Less Screen Time. More Meaningful Learning.',
  badge: 'Published Educational Resource',
  shortIntro:
    'Anand Group Charitable Trust has published and distributed an educational activity book designed to help children reduce unnecessary mobile phone usage and engage in constructive offline learning.',
  purpose:
    'To encourage children and families to transition away from excessive passive screen time toward hands-on reading, creative reflection, constructive daily routines, and offline learning activities.',
  audience:
    'School-going children, students, parents, and educators participating in the Trust’s educational awareness and digital wellness outreach.',
  distributionStatus:
    'Published and distributed by Anand Group Charitable Trust during educational outreach and school awareness activities.',
  keyFocusAreas: [
    'Reducing unnecessary mobile phone and recreational screen usage',
    'Encouraging offline reading, reflection, and constructive exercises',
    'Strengthening healthy daily routines, focus, and student self-awareness',
    'Supporting conversations between parents, teachers, and students on screen balance',
  ],
};

export const EDUCATIONAL_SUBPROGRAMS = {
  'mobile-phone-awareness': {
    slug: 'mobile-phone-awareness',
    parentSlug: 'education',
    parentTitle: 'Education & Child Development',
    title: 'Mobile Phone Awareness',
    tag: 'Digital Wellness Programme',
    heading: 'Helping Children Build Healthier Digital Habits.',
    icon: 'fa-mobile-screen-button',
    heroImage: '/images/school-awareness/school-awareness-student-civic-pledge.webp',
    lead: 'Guiding students, parents, and educators on responsible smartphone usage, age-appropriate digital habits, online safety, and balanced offline learning.',
    overview:
      'While digital tools play a supportive role in modern education, unstructured and excessive smartphone usage can disrupt focus, physical activity, sleep, and classroom engagement. Anand Group Charitable Trust conducts dedicated Mobile Phone Awareness programmes to help young learners cultivate disciplined, intentional technology habits.',
    statusBreakdown: {
      completedTitle: 'Completed Programmes',
      completedDesc:
        'Anand Group Charitable Trust has already conducted initial mobile phone awareness programmes reaching students and school communities with guidance on balanced smartphone usage and published activity book support.',
      plannedTitle: 'Upcoming Planned Activities',
      plannedDesc:
        'Additional mobile phone awareness sessions and follow-up digital wellness outreaches are planned across partner schools and student groups in Andhra Pradesh and Telangana.',
    },
    pillars: [
      {
        name: 'Responsible Smartphone Use',
        items: [
          'Understanding the difference between purposeful educational use and passive screen distraction',
          'Encouraging intentional, time-bounded mobile phone habits for learners',
          'Preventing disruption to classroom attention and homework concentration',
        ],
      },
      {
        name: 'Age-Appropriate Screen Habits',
        items: [
          'Guiding families toward sensible screen boundaries suitable for a child’s stage of growth',
          'Replacing mindless scrolling with structured family conversation and shared activities',
          'Supporting healthier sleep hygiene by keeping screens away before bedtime',
        ],
      },
      {
        name: 'Online Safety & Digital Awareness',
        items: [
          'Awareness on safe internet conduct, personal privacy, and respectful online communication',
          'Recognizing online distractions, gaming over-engagement, and unhelpful content',
          'Encouraging open communication with parents and teachers when facing digital difficulties',
        ],
      },
      {
        name: 'Reading, Physical Play & Offline Learning',
        items: [
          'Rebuilding daily enjoyment in physical books, notebooks, and hands-on puzzles',
          'Promoting outdoor sports, teamwork, and physical play for healthy childhood growth',
          'Integrating our published digital wellness activity book into regular student routines',
        ],
      },
    ],
    photos: [
      {
        src: '/images/school-awareness/school-awareness-student-civic-pledge.webp',
        title: 'Student Discipline & Responsible Living Pledge',
        tag: 'Digital & Civic Discipline',
        caption: 'Students taking an active oath toward personal discipline, focused study habits, and responsible living.',
      },
      {
        src: '/images/school-awareness/school-awareness-auditorium-mentorship-session.webp',
        title: 'Auditorium Awareness Session',
        tag: 'Student Guidance',
        caption: 'Interactive guidance addressing students on positive habits, focus, and responsible digital conduct.',
      },
    ],
    showActivityBook: true,
  },

  'school-awareness-programs': {
    slug: 'school-awareness-programs',
    parentSlug: 'education',
    parentTitle: 'Education & Child Development',
    title: 'School Awareness Camps',
    tag: 'Campus Outreach & Student Guidance',
    heading: 'Guiding Young Minds in Schools Through Values & Awareness.',
    icon: 'fa-school',
    heroImage: '/images/school-awareness/school-awareness-youth-inspiration-assembly.webp',
    lead: 'Hands-on school awareness camps combining educational guidance, student behaviour awareness, digital wellness, positive daily habits, and child development sessions.',
    overview:
      'Schools shape a student’s worldview, discipline, and confidence. Through dedicated School Awareness Camps across government and private campuses, Anand Group Charitable Trust engages learners interactively on character building, study motivation, respectful behaviour, and personal responsibility.',
    pillars: [
      {
        name: 'School Awareness Camps & Assemblies',
        items: [
          'Interactive morning assemblies and classroom awareness talks with students and faculty',
          'Encouraging active student participation, curiosity, and leadership spirit',
          'Engaging campuses across rural and urban centers in Andhra Pradesh and Telangana',
        ],
      },
      {
        name: 'Educational Guidance & Study Discipline',
        items: [
          'Motivating students toward regular attendance, curiosity, and structured self-study',
          'Providing essential learning materials, notebooks, and encouragement',
          'Inspiring first-generation learners to pursue long-term academic goals',
        ],
      },
      {
        name: 'Student Behaviour, Emotional & Digital Awareness',
        items: [
          'Facilitating age-appropriate conversations on emotions, empathy, and positive behaviour',
          'Reinforcing digital wellness and reducing unhealthy smartphone distractions',
          'Cultivating respectful dialogue among peers, teachers, and family members',
        ],
      },
      {
        name: 'Positive Habits, Values & Child Development',
        items: [
          'Promoting campus cleanliness, environmental care, and plastic-free practices',
          'Instilling respect for parents, elders, and community helpers',
          'Connecting child development sessions with practical everyday routines',
        ],
      },
    ],
    photos: [
      {
        src: '/images/school-awareness/school-awareness-youth-inspiration-assembly.webp',
        title: 'Youth Inspiration School Assembly',
        tag: 'School Awareness',
        caption: 'Students participating enthusiastically during an interactive awareness and leadership assembly.',
      },
      {
        src: '/images/school-awareness/school-awareness-rural-government-high-school-outreach.webp',
        title: 'Rural High School Outreach — Pedapullalanka',
        tag: 'Government School Camp',
        caption: 'Student outreach and assembly at Zilla Praja Parishad High School, Pedapullalanka.',
      },
      {
        src: '/images/school-awareness/school-awareness-press-clipping-dav-school-civic-awareness.webp',
        title: 'DAV Public School Awareness Coverage',
        tag: 'Media Coverage',
        caption: 'Press coverage of school awareness address inspiring students on discipline and civic values.',
      },
      {
        src: '/images/education/anand-vidyalaya-school-anniversary-celebration.webp',
        title: 'Anand Vidyalaya School 1st Anniversary Celebrations',
        tag: 'School Celebrations',
        caption: 'Managing Trustee Ambati Srinivasa Rao on stage during the 1st Anniversary Celebrations of Anand Vidyalaya.',
      },
    ],
    showActivityBook: false,
  },

  'teacher-training': {
    slug: 'teacher-training',
    parentSlug: 'education',
    parentTitle: 'Education & Child Development',
    title: 'Teacher Training',
    tag: 'Educator Empowerment & Values',
    heading: 'Empowering Teachers to Shape Better Futures.',
    icon: 'fa-chalkboard-user',
    heroImage: '/images/about_mentorship.jpg',
    lead: 'Strengthening educators with training focused on moral values, child psychology, positive classroom communication, and compassionate individual attention.',
    overview:
      'Every meaningful transformation in a student’s life begins with an empathetic, well-supported teacher. Anand Group Charitable Trust conducts teacher training initiatives designed to deepen educators’ understanding of student behaviour, emotional development, and value-centered teaching.',
    pillars: [
      {
        name: 'Moral Values & Character Development',
        items: [
          'Integrating integrity, kindness, and civic ethics into everyday classroom interactions',
          'Helping educators model patience, fairness, and purposeful mentorship',
          'Guiding students to respect parents, elders, peers, and their community',
        ],
      },
      {
        name: 'Child Psychology & Student Behaviour',
        items: [
          'Recognizing underlying emotional and developmental factors behind student behaviour',
          'Shifting from punitive reactions toward constructive understanding and encouragement',
          'Supporting attention, curiosity, and varied learning paces among children',
        ],
      },
      {
        name: 'Positive Classroom Communication',
        items: [
          'Practicing active listening and encouraging dialogue so students feel safe asking questions',
          'Communicating expectations clearly while preserving a child’s self-esteem',
          'Fostering cooperative classroom atmospheres built on mutual trust',
        ],
      },
      {
        name: 'Individual Attention, Empathy & Responsibility',
        items: [
          'Noticing quiet, struggling, or withdrawn learners early and offering supportive attention',
          'Balancing gentle discipline with warmth and steady student encouragement',
          'Responding attentively to both the educational and emotional needs of each child',
        ],
      },
    ],
    photos: [
      {
        src: '/images/about_mentorship.jpg',
        title: 'Educator Mentorship & Student Guidance',
        tag: 'Teacher Support',
        caption: 'Supporting educators in creating attentive, compassionate learning spaces.',
      },
      {
        src: '/images/school-awareness/school-awareness-auditorium-mentorship-session.webp',
        title: 'School Values & Mentorship Session',
        tag: 'Values Education',
        caption: 'Sharing value-driven guidance alongside educators and students.',
      },
    ],
    showActivityBook: false,
  },

  'child-development': {
    slug: 'child-development',
    parentSlug: 'education',
    parentTitle: 'Education & Child Development',
    title: 'Child Psychology & Individual Attention',
    tag: 'Child Development & Guidance',
    heading: 'Every Child Deserves to Be Understood.',
    icon: 'fa-child-reaching',
    heroImage: '/images/school-awareness/school-awareness-rural-government-high-school-outreach.webp',
    lead: 'Individual child attention, child psychology awareness sessions conducted by qualified psychologists and counsellors, emotional support, and positive learning environments.',
    overview:
      'No two children learn, process emotions, or respond to challenges in exactly the same way. When children receive patient, attentive understanding, their confidence and learning flourish. Our child psychology and individual attention programmes—conducted by qualified psychologists and counsellors—help schools and families nurture healthy emotional and developmental growth.',
    pillars: [
      {
        name: 'Qualified Psychology & Counselling Sessions',
        items: [
          'Child psychology awareness and supportive sessions conducted by qualified psychologists and counsellors',
          'Helping students and families build clarity around developmental stages and healthy coping habits',
          'Non-judgmental guidance focused on emotional safety and constructive encouragement',
        ],
      },
      {
        name: 'Individual Attention & Behaviour Understanding',
        items: [
          'Recognizing each child’s distinct strengths, interests, and areas needing patience',
          'Understanding behavioural changes as signals of emotional or environmental needs',
          'Supporting quiet or hesitant learners so no child is overlooked in a crowded classroom',
        ],
      },
      {
        name: 'Emotional Development & Confidence Building',
        items: [
          'Helping children identify and express their feelings in healthy, respectful ways',
          'Building genuine self-confidence through encouragement rather than comparison',
          'Developing resilience when handling academic pressure and peer interactions',
        ],
      },
      {
        name: 'Parent-Teacher Communication & Environments',
        items: [
          'Strengthening constructive communication between parents and classroom educators',
          'Creating calm, supportive, and respectful educational environments at home and school',
          'Encouraging consistent routines that protect both learning and emotional well-being',
        ],
      },
    ],
    photos: [
      {
        src: '/images/school-awareness/school-awareness-rural-government-high-school-outreach.webp',
        title: 'Attentive Student Engagement in Rural Schools',
        tag: 'Child Development',
        caption: 'Understanding and encouraging students in rural school environments.',
      },
      {
        src: '/images/school-awareness/school-awareness-youth-inspiration-assembly.webp',
        title: 'Student Confidence & Active Participation',
        tag: 'Confidence Building',
        caption: 'Creating encouraging school settings where every learner feels seen and motivated.',
      },
    ],
    showActivityBook: false,
  },

  'mental-wellness': {
    slug: 'mental-wellness',
    parentSlug: 'education',
    parentTitle: 'Education & Child Development',
    title: 'Mental Wellness',
    tag: 'Emotional Well-Being Awareness',
    heading: 'Supporting Emotional Well-Being Through Awareness.',
    icon: 'fa-brain',
    heroImage: '/images/school-awareness/school-awareness-auditorium-mentorship-session.webp',
    lead: 'Promoting mental wellness education, emotional awareness, constructive stress management, and awareness of qualified professional counselling support for students and educators.',
    overview:
      'Academic expectations, family pressures, and constant digital stimulation can weigh heavily on both young learners and teachers. Anand Group Charitable Trust conducts mental wellness awareness initiatives focused on opening compassionate conversations, building emotional literacy, and connecting communities with appropriate professional guidance.',
    pillars: [
      {
        name: 'Mental Wellness & Emotional Awareness',
        items: [
          'Normalizing healthy, respectful conversations around emotions and inner well-being',
          'Helping students and educators recognize early signs of fatigue, anxiety, or emotional overwhelm',
          'Replacing stigma with empathy, patience, and community understanding',
        ],
      },
      {
        name: 'Stress Management Education',
        items: [
          'Practical, age-appropriate education on managing exam pressure and everyday stress',
          'Encouraging healthy rest, outdoor physical activity, and balanced study schedules',
          'Reducing comparison-driven stress in classrooms and family conversations',
        ],
      },
      {
        name: 'Student & Educator Well-Being',
        items: [
          'Fostering supportive communication cultures between educators, peers, and students',
          'Supporting teacher emotional resilience alongside student well-being awareness',
          'Encouraging respectful listening within school and home spaces',
        ],
      },
      {
        name: 'Professional Counselling Awareness',
        items: [
          'Raising awareness of the supportive role of qualified psychologists and counsellors',
          'Encouraging families and institutions to seek appropriate professional support when needed',
          'Note: Programmes are educational and awareness-oriented, complementing rather than replacing professional clinical evaluation',
        ],
      },
    ],
    photos: [
      {
        src: '/images/school-awareness/school-awareness-auditorium-mentorship-session.webp',
        title: 'Educator & Student Well-Being Dialogue',
        tag: 'Mental Wellness',
        caption: 'Building supportive dialogue and emotional awareness within school communities.',
      },
      {
        src: '/images/swachh-bharat/swachh-bharat-mind-cleanliness-news-speech.webp',
        title: 'Public Awareness on Healthy Minds & Positive Habits',
        tag: 'Community Awareness',
        caption: 'Press coverage highlighting the connection between positive mindsets and healthy communities.',
      },
    ],
    showActivityBook: false,
  },
};

export const EDUCATIONAL_SUBPROGRAMS_LIST = Object.values(EDUCATIONAL_SUBPROGRAMS);

export const SOCIAL_AWARENESS_CAMPAIGNS = [
  {
    id: 'traffic-awareness',
    title: 'Traffic Awareness',
    icon: 'fa-traffic-light',
    badge: 'Road Safety Education',
    image: '/images/swachh-bharat/swachh-bharat-road-safety-traffic-awareness-launch.webp',
    summary:
      'Promoting disciplined road behaviour, helmet and seatbelt compliance, pedestrian safety, and responsible commuting habits.',
    points: [
      'Road safety education for students and daily commuters',
      'Mandatory helmet and seatbelt awareness drives',
      'Pedestrian crossing and signal discipline awareness',
      'Promoting responsible road behaviour in communities',
    ],
    href: '/initiatives/social-environmental#traffic-awareness',
  },
  {
    id: 'swachh-bharat',
    title: 'Swachh Bharat',
    icon: 'fa-broom',
    badge: 'Cleanliness & Hygiene',
    image: '/images/swachh-bharat/swachh-bharat-school-campus-cleanliness-drive.webp',
    summary:
      'Mobilizing students, volunteers, and community members in street sweeps, public hygiene education, and responsible waste management.',
    points: [
      'Hands-on community and campus cleanliness drives',
      'Public hygiene and sanitation awareness',
      'Active youth, student, and volunteer participation',
      'Waste segregation and plastic reduction awareness',
    ],
    href: '/initiatives/social-environmental#swachh-bharat',
  },
  {
    id: 'save-water',
    title: 'Save Water',
    icon: 'fa-droplet',
    badge: 'Water Conservation',
    image: '/images/haritha-haram/haritha-haram-community-tree-plantation-drive.webp',
    summary:
      'Educating households, schools, and local communities to conserve water, avoid daily wastage, and protect local ecosystems.',
    points: [
      'Water conservation awareness in homes and schools',
      'Encouraging responsible daily water usage habits',
      'Preventing avoidable urban and rural water wastage',
      'Community environmental conservation education',
    ],
    href: '/initiatives/social-environmental#save-water',
  },
];

