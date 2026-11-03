export interface PortfolioPage {
  id: number;
  pageNumber: number;
  title: string;
  subtitle: string;
  category: 'profile' | 'ar_3d' | 'media' | 'posters' | 'editorial' | 'photo' | 'branding' | 'film' | 'data_analyst';
  categoryLabel: string;
  image: string;
  thumbnail: string;
  description: string;
  highlights: string[];
  tools: string[];
  yearOrPeriod?: string;
  quote?: string;
}

const CATEGORY_DEFINITIONS = [
  { id: 'profile', label: 'Profile & Experience' },
  { id: 'ar_3d', label: 'AR & 3D Modelling' },
  { id: 'media', label: 'Campus Digital Media' },
  { id: 'editorial', label: 'Cover E-Book PKM' },
  { id: 'posters', label: 'Poster Design' },
  { id: 'photo', label: 'Photography & Color Grading' },
  { id: 'branding', label: 'Branding & Apparel' },
  { id: 'film', label: 'Film & Cinematography' },
  { id: 'data_analyst', label: 'Data Analyst Bootcamp' },
] as const;

export const PORTFOLIO_PAGES: PortfolioPage[] = [
  {
    id: 1,
    pageNumber: 1,
    title: 'Portfolio Cover',
    subtitle: 'Make with purpose · make some creations',
    category: 'profile',
    categoryLabel: 'Profile & Cover',
    image: '/pages/page_01.jpg',
    thumbnail: '/pages/thumb_01.jpg',
    description: 'The official portfolio cover of Kasih Dua Monika, featuring a bold visual identity with striking cobalt blue contrasts, electric lime accents, and dynamic 3D elements.',
    highlights: [
      'Visual Identity & Direction: Bold Neo-Brutalist & Modern 3D',
      'Art Direction: Make with purpose, make some creations',
      
    ],
    tools: ['3D Modeling', 'Photoshop', 'Graphic Design'],
    quote: 'Make with purpose, make some creations.'
  },
  {
    id: 2,
    pageNumber: 2,
    title: 'Introduction — Who I Am',
    subtitle: 'Hello, I’m Monika',
    category: 'profile',
    categoryLabel: 'Profile & Bio',
    image: '/pages/page_02.jpg',
    thumbnail: '/pages/thumb_02.jpg',
    description: 'A personal profile featuring Monika’s educational background in Information Systems and Technology and her official contact details.',
    highlights: [
      'Information Systems and Technology student at Universitas Muhammadiyah Pringsewu (2022–2026)',
      'Graduate of SMK Negeri Sukoharjo (2019 – 2022)',
      'Specializations: Graphic Design, Data Analysis, and Multimedia Management',
      'Possesses high adaptability, solid team communication, and strong design empathy'
    ],
    tools: ['Visual Design', 'Data Management', 'Multimedia Production'],
    yearOrPeriod: '2022 - 2026',
    quote: 'Graduate of the Information Systems and Technology program with a strong interest in technology, graphic design, and data analysis.'
  },
  {
    id: 3,
    pageNumber: 3,
    title: 'Skillset & Experience',
    subtitle: 'What I do best · Work and Organizational Experience',
    category: 'profile',
    categoryLabel: 'Skill & Career',
    image: '/pages/page_03.jpg',
    thumbnail: '/pages/thumb_03.jpg',
    description: 'A selection of creative software skills and a record of media leadership across campus organizations and industry.',
    highlights: [
      'Website Administrator — Universitas Muhammadiyah Pringsewu (UMPRI CENTRE) [2026–Present]',
      'Head of Media & Communications — Information Systems and Technology Student Association (HIMASTI) [2024–2025]',
      'Media Communications Team Member — Student Creativity Program (PKM) [Aug 2023–May 2024]',
      'General Treasurer — Muhammadiyah Student Association (IMM) [2023–2024]',
      'Internship Training Course — CV Ratu Mandiri [Feb - Apr 2021]'
    ],
    tools: ['Photoshop', 'Premiere Pro', 'Illustrator', 'After Effects', 'Lightroom', 'Unity', 'Canva', 'CapCut', 'Blender / Procreate'],
    yearOrPeriod: '2021 - 2026',
    quote: 'Graphic Design, Video/Photo Editing, 3D Modelling, Color Grading.'
  },
  {
    id: 4,
    pageNumber: 4,
    title: 'Vision and Mission',
    subtitle: 'How I make creations',
    category: 'profile',
    categoryLabel: 'Design Philosophy',
    image: '/pages/page_04.jpg',
    thumbnail: '/pages/thumb_04.jpg',
    description: 'The guiding principles, long-term vision, and professional mission behind Monika’s approach to combining art with interactive technology.',
    highlights: [
      'Vision: Integrate art and technology to create inspiring, functional designs, films, and 3D models',
      'Vision: Create expressive, high-quality multimedia work for diverse audiences',
      'Mission: Continuously explore graphic design, cinematography, and 3D modeling',
      'Mission: Raise the visual standard of every project through modern design principles and mastery of current tools'
    ],
    tools: ['Creative Direction', 'Design Philosophy', 'Visual Storytelling'],
    quote: 'Becoming a creator who seamlessly integrates art and technology to produce inspiring and functional designs, films, and 3D models.'
  },
  {
    id: 5,
    pageNumber: 5,
    title: 'Mobile Development — Budaya Nusantara AR',
    subtitle: 'Augmented Reality Mobile Project',
    category: 'ar_3d',
    categoryLabel: 'AR & 3D Modelling',
    image: '/pages/page_05.jpg',
    thumbnail: '/pages/thumb_05.jpg',
    description: 'Development of “Budaya Nusantara,” an augmented reality (AR) mobile app that brings traditional Indonesian architecture to life through interactive 3D experiences.',
    highlights: [
      'Interactive feature: An AR camera detects image targets and displays 3D objects in real time',
      'Educational module: An introduction to the history of Nuwo Sesat and Lampung’s traditional stilt architecture',
      'User interface: An intuitive menu (Play, About, Exit) with smooth transitions',
      'Immersive experience: Introduces Indonesian culture through interactive mobile technology'
    ],
    tools: ['Unity 3D', 'Vuforia / AR Core', 'UI/UX Mobile', 'C# Scripting'],
    quote: 'A quick look at my mobile AR projects, from thoughtful interface details to interactive features.'
  },
  {
    id: 6,
    pageNumber: 6,
    title: 'Campus Media — UMPRI Updates & Press Releases',
    subtitle: 'Campus Publications & Communication Design',
    category: 'media',
    categoryLabel: 'Campus Digital Media',
    image: '/pages/page_06.jpg',
    thumbnail: '/pages/thumb_06.jpg',
    description: 'Digital posters and official press materials created for Universitas Muhammadiyah Pringsewu, presenting timely campus news and information to the public.',
    highlights: [
      'National second-place ranking for UMPRI’s Nursing program (Excellent, Modern, Islamic)',
      'Youth Pledge Day poster: A story of youth and modern-day aspirations',
      'Visuals for UMPRI’s fourth graduation ceremony, academic year 2025–2026',
      'Press release for the inauguration of the rector of Universitas Muhammadiyah Lamongan, 2026–2030 term',
      'Outreach and coordination for the Diktisaintek Berdampak program'
    ],
    tools: ['Adobe Photoshop', 'Canva Pro', 'Typography Design', 'Social Media Layout'],
    quote: 'Synergy and Equality for Educational Excellence — National Transformation, Global Competitiveness.'
  },
  {
    id: 7,
    pageNumber: 7,
    title: 'Campus Media — Instagram Feeds & Campaigns',
    subtitle: 'Social Media Content & Community Engagement',
    category: 'media',
    categoryLabel: 'Campus Digital Media',
    image: '/pages/page_07.jpg',
    thumbnail: '/pages/thumb_07.jpg',
    description: 'Interactive Instagram carousel and feed designs for HIMASTI and student council activities, including national observances and recruitment campaigns.',
    highlights: [
      'Posts for National Teachers’ Day and World Children’s Day',
      'Happy Father’s Day and Indonesian Independence Day content',
      'Student council recruitment materials and HIMASTI leadership inauguration',
      'Campaigns highlighting Information Technology students’ interests and talents',
      'Instagram feed layouts optimized for readability and audience engagement'
    ],
    tools: ['Canva', 'Adobe Photoshop', 'Social Media Management', 'Instagram UI Mockup'],
    quote: 'Check this out: Engaging visual designs for student community building.'
  },
  {
    id: 8,
    pageNumber: 8,
    title: 'Project Showcase — Campus Information Guides',
    subtitle: 'Adobe Photoshop CS6 Visual Guides',
    category: 'media',
    categoryLabel: 'Campus Digital Media',
    image: '/pages/page_08.jpg',
    thumbnail: '/pages/thumb_08.jpg',
    description: 'Step-by-step guide posters that help students and staff follow campus technology procedures.',
    highlights: [
      'Guide to completing online course registration through mahasiswa.umpri.ac.id',
      'Operating procedure: How to safely turn laboratory computers on and off',
      'UMPRI new-student enrollment infographic with detailed instructions',
      'Precisely designed in Adobe Photoshop CS6'
    ],
    tools: ['Adobe Photoshop CS6', 'Infographic Design', 'Information Architecture'],
    quote: 'One of my best works is a poster design I created for several informational media contents at my campus, which I designed using Adobe Photoshop CS6.'
  },
  {
    id: 9,
    pageNumber: 9,
    title: 'E-Book Cover Design — Collaborative PKM Research',
    subtitle: 'Editorial as Emotion · Mathematics Learning Modules',
    category: 'editorial',
    categoryLabel: 'Cover E-Book PKM',
    image: '/pages/page_09.jpg',
    thumbnail: '/pages/thumb_09.jpg',
    description: 'A collection of e-book cover designs for Indonesia’s Merdeka Belajar (Independent Learning) curriculum, created with a faculty advisor through the Student Creativity Program (PKM).',
    highlights: [
      'Grade 12 mathematics: Integrating flat-sided 3D geometry with traditional Lampung houses',
      'Grade 11 module: Understanding geometric transformations through Lampung batik',
      'Grade 11 general mathematics: A module on function transformations',
      'Grade 11 digital worksheet: Circles through an ethnomathematics lens',
      'Combining local Lampung knowledge and ethnomathematics with modern design'
    ],
    tools: ['Canva', 'Adobe Illustrator', 'Editorial Design', 'Cover Mockup'],
    quote: 'An E-Book cover I designed for a collaborative PKM research project with a lecturer, crafted using Canva, stands out as one of my most refined visual works.'
  },
  {
    id: 10,
    pageNumber: 10,
    title: 'Ideas Through Posters — Data & Event Posters',
    subtitle: 'Designing Data with Depth',
    category: 'posters',
    categoryLabel: 'Poster Design',
    image: '/pages/page_10.jpg',
    thumbnail: '/pages/thumb_10.jpg',
    description: 'Posters across a range of themes, from esports tournaments and student organization gatherings to academic statistics and research.',
    highlights: [
      'Mobile Legends: Bang Bang tournament poster with dynamic gold and gaming visuals',
      'HIMASTI SIKRAB (Gathering and Fellowship) poster with vintage typography and a sense of community',
      'Environmental awareness poster: “Save Our Planet”',
      'Academic statistics poster: Lilliefors normality test and two-sample chi-square test'
    ],
    tools: ['Adobe Photoshop', 'Canva', 'Data Visualization', 'Event Branding'],
    quote: 'Several poster projects I have created, covering various themes ranging from math posters for student assignments to event posters for student organizations.'
  },
  {
    id: 11,
    pageNumber: 11,
    title: 'Captured Moments — A Journey in Frames',
    subtitle: 'What guides me · Passion in Photography',
    category: 'photo',
    categoryLabel: 'Photography & Color Grading',
    image: '/pages/page_11.jpg',
    thumbnail: '/pages/thumb_11.jpg',
    description: 'A personal exploration of Monika’s perspective and her love of capturing everyday moments through the camera lens.',
    highlights: [
      'An artistic reflection on the relationship between classical painting and modern photography',
      'Finding beauty in the everyday scenes of traditional markets and city streets',
      'A foundation in visual composition that informs the aesthetics of each digital design'
    ],
    tools: ['DSLR / Mirrorless', 'Lightroom Mobile', 'Storytelling'],
    quote: 'Photography is a passion I take with me wherever I go. I always make time to capture a moment, even while walking through a market.'
  },
  {
    id: 12,
    pageNumber: 12,
    title: 'The Photo and Coloring Archive',
    subtitle: 'Open to creative photography collaboration',
    category: 'photo',
    categoryLabel: 'Photography & Color Grading',
    image: '/pages/page_12.jpg',
    thumbnail: '/pages/thumb_12.jpg',
    description: 'A curated archive of street photography, natural landscapes, striking architecture, product still lifes, and professional color grading.',
    highlights: [
      'Coastal Lampung landscapes featuring natural sand and calm waves',
      'Architectural photography of the Petronas Twin Towers from a worm’s-eye view',
      'Urban street photography: Rainy city scenes, vintage trains, and market vendors',
      'Still-life and dramatic lighting: A Nescafé coffee bottle among natural green foliage',
      'Exploration of teal-orange, moody green, and warm vintage color palettes'
    ],
    tools: ['Adobe Lightroom', 'Adobe Camera Raw', 'Photoshop Color Grading'],
    quote: 'The Photo and Coloring Archive — Open to creative photography collaboration.'
  },
  {
    id: 13,
    pageNumber: 13,
    title: '3D Modelling — Skincare Packaging Design',
    subtitle: 'Ideas, Shapes, and 3D Space',
    category: 'ar_3d',
    categoryLabel: 'AR & 3D Modelling',
    image: '/pages/page_13.jpg',
    thumbnail: '/pages/thumb_13.jpg',
    description: '3D modeling and rendering for LOVELIEY beauty products, including a realistic skincare cream jar published and sold online.',
    highlights: [
      '3D skincare cream jar with detailed typography, ingredient labels, and an acrylic lid',
      'Transparent cosmetic glass, a serum dropper, and metallic gold cap accents',
      'Photorealistic studio lighting with soft shadows and glossy reflections',
      'A commercial 3D model published on an online marketplace'
    ],
    tools: ['Blender 3D', 'Cycles / Eevee Renderer', 'Substance 3D', 'Photoshop'],
    quote: 'Here’s a look at my 3D modeling projects! Just a simple 3D project of a skincare jar. I focused on making it look realistic and neat. It\'s one of my works that I’ve published for sale online!'
  },
  {
    id: 14,
    pageNumber: 14,
    title: 'Brand Logo Design — Snack & Community Identity',
    subtitle: 'Branding & Beyond',
    category: 'branding',
    categoryLabel: 'Branding & Apparel',
    image: '/pages/page_14.jpg',
    thumbnail: '/pages/thumb_14.jpg',
    description: 'Visual identity and logo development for the “PEDAAAS” and “CARAMEL” stand-up pouch products, alongside creative community logos.',
    highlights: [
      'Kraft stand-up pouch labels with dynamic, appetizing graphics',
      'Visual exploration of bold spicy and sweet caramel flavors',
      'Custom mascot and typography design for small-business retail appeal',
      'Designs applied to real snack-product packaging'
    ],
    tools: ['Adobe Illustrator', 'CorelDraw', 'Product Mockup', 'Packaging Design'],
    quote: 'I’ve also worked on some brand logos, community logos, and t-shirt designs. Some were freelance gigs, and others were projects I did for my own communities.'
  },
  {
    id: 15,
    pageNumber: 15,
    title: 'Logos & Threads — Apparel & Uniform Merch',
    subtitle: 'Campus Organization Uniforms & Merchandise',
    category: 'branding',
    categoryLabel: 'Branding & Apparel',
    image: '/pages/page_15.jpg',
    thumbnail: '/pages/thumb_15.jpg',
    description: 'Designs for SEMAURI UMPRI student organization uniforms (PDH) and casual merchandise, including T-shirts, sweaters, tote bags, and mugs.',
    highlights: [
      'Official SEMAURI (UMPRI Student Arts) uniform: Lampung-inspired woven and batik accents on the shoulders in elegant teal and brown',
      '“Lampungku” merchandise: White T-shirts, crewneck sweaters, beach tote bags, and ceramic mugs',
      'Precise computer-embroidery specifications for the left chest, right chest, and back'
    ],
    tools: ['Adobe Illustrator', 'Apparel Mockup', 'Fashion Graphic Design'],
    quote: 'Logos & Threads: Creating an identity you can wear with pride.'
  },
  {
    id: 16,
    pageNumber: 16,
    title: 'From Campus to Corporate — Recent Logo Drops',
    subtitle: 'Visual Identity for Organizations & a Construction Supplier',
    category: 'branding',
    categoryLabel: 'Branding & Apparel',
    image: '/pages/page_16.jpg',
    thumbnail: '/pages/thumb_16.jpg',
    description: 'Recent logo work, from campus student communities to the corporate identity of LKM, a professional construction-supply company.',
    highlights: [
      'LKM corporate identity: A strong, modern geometric pillar symbol for a construction supplier',
      'HIMASTI and Robotics community logos featuring bold gear and computer-monitor icons',
      'Die-cut sticker mockups on laptops, business cards, and office stationery',
      'Grid proportions and professional logo usage guidelines'
    ],
    tools: ['Adobe Illustrator', 'Brand Guidelines', 'Stationery Mockup'],
    quote: 'Here are some of my recent logo designs from a campus community logo to one for a construction distribution company.'
  },
  {
    id: 17,
    pageNumber: 17,
    title: 'Behind the Lens — Short Film Stills',
    subtitle: 'Frames & Experiences · Cinematography & Direction',
    category: 'film',
    categoryLabel: 'Film & Cinematography',
    image: '/pages/page_17.jpg',
    thumbnail: '/pages/thumb_17.jpg',
    description: 'Fictional and educational short films in which Monika contributed to cinematography, direction, and post-production.',
    highlights: [
      'Short film “The Repentance of a Gambler” (original title: “Taubatnya Manusia Penjudi”), produced by HIMASTI Group 1',
      'Religious educational film “Aisyah’s Endeavor” (original title: “Ikhtiar Aisyah”), produced at SMK Negeri Sukoharjo',
      '“Tax Awareness” (original title: “Sadar Pajak”), produced by the Tax Center at Universitas Muhammadiyah Pringsewu and co-directed by Kasih Dua Monika',
      'End-to-end experience in storyboarding, cinematography, camera angles, color grading, and audio synchronization'
    ],
    tools: ['Adobe Premiere Pro', 'After Effects', 'Cinematography', 'Sound Design'],
    yearOrPeriod: '2019 - 2025',
    quote: 'A few short films I’ve worked on. Even though they were small team efforts, they gave me so much new experience.'
  },
  
  {
    id: 19,
    pageNumber: 19,
    title: 'Data Analyst Bootcamp — SQL Mini Project',
    subtitle: 'KarirNex · Excel, SQL & Python',
    category: 'data_analyst',
    categoryLabel: 'Data Analyst Bootcamp',
    image: '/pages/data-analyst/page_19.png',
    thumbnail: '/pages/data-analyst/page_19.png',
    description: 'A practical bootcamp project analyzing a 10,000-row transaction dataset, with SQL exercises for recent orders, brand quantities, customer spending, and product prices.',
    highlights: [
      'KarirNex bootcamp held on 25, 27, and 29 November 2025',
      '10 hours of learning and a 5-hour mini project',
      'Worked with dummy transaction data containing 10,000 rows',
      'Curriculum covered data formatting and cleansing, introductory Python, data collection, visualization, career paths, and case studies',
      'SQL tasks included the 100 latest transactions, quantity by brand, top customers by grand total, and product price queries',
      'Day 3 included creating ATS-friendly and creative CVs'
    ],
    tools: ['Excel', 'SQL', 'SQLite', 'Google Colab', 'Python'],
    yearOrPeriod: 'November 2025',
    quote: 'A one-week intensive bootcamp using Excel, SQL, and Python.'
  },
  {
    id: 20,
    pageNumber: 20,
    title: 'Sales Quantity by Brand',
    subtitle: 'SQL aggregation · Grouping and sorting',
    category: 'data_analyst',
    categoryLabel: 'Data Analyst Bootcamp',
    image: '/pages/data-analyst/page_20.png',
    thumbnail: '/pages/data-analyst/page_20.png',
    description: 'A SQL query groups transaction quantities by brand and ranks the results to compare sales volume.',
    highlights: [
      'Aggregated quantities for each brand',
      'Used GROUP BY and SUM in SQL',
      'Sorted results from highest to lowest quantity'
    ],
    tools: ['SQL', 'SQLite', 'Data Analysis'],
    yearOrPeriod: '2025'
  },
  {
    id: 21,
    pageNumber: 21,
    title: 'Lowest-Priced Products',
    subtitle: 'SQL sorting · Product price analysis',
    category: 'data_analyst',
    categoryLabel: 'Data Analyst Bootcamp',
    image: '/pages/data-analyst/page_21.png',
    thumbnail: '/pages/data-analyst/page_21.png',
    description: 'A query returns ten products with the lowest prices from the transaction dataset.',
    highlights: [
      'Selected product names and prices',
      'Sorted prices in ascending order',
      'Limited the result to ten products'
    ],
    tools: ['SQL', 'SQLite', 'Data Analysis'],
    yearOrPeriod: '2025'
  },
  {
    id: 22,
    pageNumber: 22,
    title: 'Top Products by Quantity',
    subtitle: 'Data visualization · Product performance',
    category: 'data_analyst',
    categoryLabel: 'Data Analyst Bootcamp',
    image: '/pages/data-analyst/page_22.png',
    thumbnail: '/pages/data-analyst/page_22.png',
    description: 'A bar chart compares quantities sold across products to make high-volume items easy to identify.',
    highlights: [
      'Compared product quantities in a bar chart',
      'Highlighted the best-selling items in the dataset',
      'Practiced communicating findings visually'
    ],
    tools: ['Excel', 'Data Visualization'],
    yearOrPeriod: '2025'
  },
  {
    id: 23,
    pageNumber: 23,
    title: 'Product Price Comparison',
    subtitle: 'Data visualization · Price ranking',
    category: 'data_analyst',
    categoryLabel: 'Data Analyst Bootcamp',
    image: '/pages/data-analyst/page_23.png',
    thumbnail: '/pages/data-analyst/page_23.png',
    description: 'A chart compares product prices and makes the highest-priced items stand out in the transaction data.',
    highlights: [
      'Compared prices across products',
      'Identified the highest-priced items',
      'Presented the results with a bar chart'
    ],
    tools: ['Excel', 'Data Visualization'],
    yearOrPeriod: '2025'
  },
  {
    id: 24,
    pageNumber: 24,
    title: 'Brand Contribution by Price',
    subtitle: 'Data visualization · Brand comparison',
    category: 'data_analyst',
    categoryLabel: 'Data Analyst Bootcamp',
    image: '/pages/data-analyst/page_24.png',
    thumbnail: '/pages/data-analyst/page_24.png',
    description: 'A pie chart compares brands by their contribution to transaction value.',
    highlights: [
      'Compared price contribution across brands',
      'Visualized each brand’s share as a proportion',
      'Practiced summarizing categorical data'
    ],
    tools: ['Excel', 'Data Visualization'],
    yearOrPeriod: '2025'
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Pages', count: PORTFOLIO_PAGES.length },
  ...CATEGORY_DEFINITIONS.map(({ id, label }) => ({
    id,
    label,
    count: PORTFOLIO_PAGES.filter((page) => page.category === id).length,
  })),
];
