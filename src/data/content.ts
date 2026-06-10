export const brand = {
  name: "Lopexa Technologies",
  logo: "/images/lopexa-logo.png",
  logoAlt: "Lopexa Technologies logo",
  description:
    "Lopexa Technologies is a global web and mobile development agency. We build scalable products, craft intuitive experiences, and help brands grow through technology.",
};

/** Hero rotating headline — interval matches `heroRotationIntervalMs` */
export const heroRotationIntervalMs = 2500;

export const heroRotatingPhrases = [
  "#weInnovate",
  "#weDesign",
  "#weDevelop",
] as const;

export type HeroRotatingPhrase = (typeof heroRotatingPhrases)[number];

export const heroSlides: Record<
  HeroRotatingPhrase,
  { image: string; imageAlt: string }
> = {
  "#weInnovate": {
    image: "/images/hero/we-innovate.svg",
    imageAlt: "Light bulb illustration representing innovation",
  },
  "#weDesign": {
    image: "/images/hero/we-design.svg",
    imageAlt: "Design frame and cursor illustration",
  },
  "#weDevelop": {
    image: "/images/hero/we-develop.svg",
    imageAlt: "Terminal and code cursor illustration",
  },
};

export const contactEmail = "lopexatech@gmail.com";
export const contactMailto = `mailto:${contactEmail}?subject=${encodeURIComponent("Project Inquiry - Lopexa Technologies")}`;
export const bookingUrl = "https://calendly.com/lopexatech/30min";

export const heroSection = {
  ctaPrimary: { label: "Book a Call", href: bookingUrl },
  ctaSecondary: { label: "View Our Work", href: "#work" },
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Offerings", href: "#offerings" },
  { label: "Contact", href: "#contact" },
];

export const clientLogos = [
  "Talktivity",
  "Lopexa Technologies",
  "Lead Achievers",
  "Locallity",
  "keep-singing",
  "Vinno Noksha",
];

export type CaseStudy = {
  client: string;
  title: string;
  industry: string;
  tagline: string;
  challenge: string;
  solution: string;
  services: string[];
  stack: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
};

export const portfolioSection = {
  title: "Experiences that engage, convert, and inspire",
};

export const caseStudies: CaseStudy[] = [
  {
    client: "English Learning Platform",
    title: "EdTech Learning Platform",
    industry: "Education",
    tagline:
      "Interactive language-learning experience with intuitive UX and engaging lesson flows.",
    challenge:
      "Learners needed a platform that made progress visible and kept engagement high across devices.",
    solution:
      "Structured lesson paths, progress tracking, and a clean interface designed for learners at every level.",
    services: ["EdTech", "UX/UI", "Web Development"],
    stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    image: "/English learning platform/Screenshot (498).png",
    imageAlt: "English learning platform homepage and lesson interface",
    featured: true,
  },
  {
    client: "App",
    title: "Web & Mobile Application",
    industry: "Product",
    tagline:
      "End-to-end product design and development for a modern, scalable application platform.",
    challenge:
      "The product needed a cohesive experience across web and mobile without sacrificing performance or usability.",
    solution:
      "Full-stack application with responsive UI, streamlined user flows, and a design system built for rapid iteration.",
    services: ["Web App", "UI/UX", "Development"],
    stack: ["React", "React Native", "Node.js", "PostgreSQL"],
    image: "/App/original-edc98ff29600cb49ea833c2d92e6fb61.webp",
    imageAlt: "App web and mobile application interface",
    featured: false,
  },
  {
    client: "Portfolio Website",
    title: "Awwwards-Caliber Portfolio",
    industry: "Creative",
    tagline:
      "Award recognition portfolio for a designer. Refined visuals and immersive storytelling.",
    challenge:
      "A designer recognized on Awwwards needed a portfolio that matched the caliber of their craft.",
    solution:
      "Bold typography, full-bleed imagery, and smooth interactions that showcase design work with editorial polish.",
    services: ["Portfolio Design", "Visual Identity", "Development"],
    stack: ["Next.js", "Framer Motion", "Tailwind", "Vercel"],
    image:
      "/Potfolio_website _for a desinger that recognized on awward/dot-lung-interior.jpg",
    imageAlt: "Award-winning designer portfolio website",
    featured: false,
  },
  {
    client: "Mahaveer Drugs House",
    title: "B2B Pharmacy Ordering Platform",
    industry: "Healthcare",
    tagline:
      "B2B ordering platform connecting pharmaceutical suppliers with pharmacy shops for direct, streamlined drug supply.",
    challenge:
      "Pharmacy shops relied on manual ordering to source drugs from their supplier, slowing replenishment and adding operational friction.",
    solution:
      "A dedicated B2B platform where pharmacy partners browse inventory, place orders directly with Mahaveer Drugs House, and manage supply through clear, healthcare-focused workflows.",
    services: ["Full Stack", "B2B Platform", "UX/UI"],
    stack: ["Next.js", "React", "Tailwind", "CMS"],
    image: "/Mahaveer drugs house/Screenshot (507).png",
    imageAlt:
      "Mahaveer Drugs House B2B pharmacy ordering platform interface",
    featured: false,
  },
];

export type OurServiceItem = {
  title: string;
  description: string;
};

export const ourServicesSection = {
  title: "Our Services.",
  intro:
    "We work small, but we think big. We wrestle with business challenges, discover new opportunities, and provide innovative solutions that will help you define and refine your product ideas, design them, develop web and mobile apps, ensuring they are scalable, reliable, easy to use, and secure.",
  items: [
    {
      title: "Full Stack Development",
      description:
        "With the experience of building companies from the idea stage to multiple rounds of funding. We will implement all the development needs of your brand.",
    },
    {
      title: "UX/UI",
      description:
        "We will create the best user experience for applications and run across multiple levels of user validations to ensure the end-user has the best experience of your platform.",
    },
    {
      title: "Backend Development",
      description:
        "With over 50 years of cumulative experience in backend development for multiple organizations. We will develop the backend structure strongly focused on flexibility, scalability, and security.",
    },
    {
      title: "Frontend Development",
      description:
        "Looking for a team that integrates your backend business logic into user-centric platforms? We will help you create the right designs, implement the APIs and take your dream to users.",
    },
    {
      title: "Hybrid App Development",
      description:
        "Developing an app that does not need native-intensive features? We develop apps using cross-platform frameworks like Flutter, React Native, Ionic, and Xamarin.",
    },
    {
      title: "Automation Testing",
      description:
        "Efficient web and mobile test automation for enhanced software quality and rapid release cycles.",
    },
    {
      title: "Manual Testing",
      description:
        "Guarantee software reliability and user satisfaction through comprehensive testing, including rigorous regression scenarios.",
    },
    {
      title: "RPA",
      description:
        "Robotic Process Automation (RPA) deploys software bots to automate repetitive, rule-based tasks in business processes, enhancing efficiency and reducing human intervention.",
    },
    {
      title: "BPA",
      description:
        "Business Process Automation (BPA) optimizes workflows by integrating technology, with RPA for efficiency, aiming to improve business performance.",
    },
  ] satisfies OurServiceItem[],
};

export const teamSection = {
  title: "Our Team.",
  intro:
    "Our team consist of dreamers and innovators coming from various multidisciplinary backgrounds. We provide different services.",
  roles: [
    "App Developers",
    "Content Writers",
    "UI/UX Experts",
    "Full-stack Developers",
    "SEO Experts",
    "Strategic Advisors",
    "Technical Architects",
  ],
};

export type OfferingItem = {
  title: string;
  description: string;
};

export const offeringsSection = {
  title: "Offerings.",
  intro:
    "Empowering client success, we offer tailored solutions meeting project-specific needs. Whether augmenting resources, establishing offshore development centres, or exploring revenue-sharing models, our offerings are crafted for easy development and client success.",
  items: [
    {
      title: "Time and Materials Contract",
      description:
        "Flexible billing based on actual hours and materials used, offering adaptability for evolving project needs.",
    },
    {
      title: "Fixed Price Contract",
      description:
        "Predetermined cost for a specific scope of work, providing budget predictability and financial clarity.",
    },
    {
      title: "Offshore Development Center",
      description:
        "Establish a dedicated remote team for comprehensive development services and collaborative project management.",
    },
    {
      title: "Resource Augmentation",
      description:
        "On-demand skilled professionals to supplement existing teams, ensuring project scalability and success.",
    },
    {
      title: "Incremental or Milestone-based Contract",
      description:
        "Payment tied to project milestones, ensuring alignment of progress with financial commitments.",
    },
    {
      title: "Revenue and Royalty Sharing Agreement",
      description:
        "A collaborative model where compensation is tied to project success and revenue outcomes, aligning incentives for sustained success and profitability.",
    },
  ] satisfies OfferingItem[],
};

export type Testimonial = {
  quote: string;
  snippet: string;
  name: string;
  role: string;
  company: string;
  location?: string;
  featured?: boolean;
};

export const testimonialsSection = {
  title: "What founders say about working with us",
  subtitle:
    "Real feedback from teams we have partnered with on UI/UX, full-stack builds, and product delivery from first concept through launch.",
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Working with Lopexa Technologies was a really smooth experience. They handled our UI/UX work very well, the team is responsive, and they quickly understood what we were trying to build for Talktivity. The design process felt easy, and the final output was clean and well thought out.",
    snippet:
      "A smooth experience with responsive UI/UX work for Talktivity.",
    name: "Farding Ahmed",
    role: "Founder",
    company: "Talktivity",
    featured: true,
  },
  {
    quote:
      "Lopexa Technologies with their commitment towards clients' business growth helped us get our full-stack application live with their seamless development process. They have also helped us build scalable solutions and structure our business dictionary app for better operational benefits.",
    snippet:
      "Helped us get our full-stack application live with a seamless process.",
    name: "Emmanuel",
    role: "Founder",
    company: "Locallity",
  },
  {
    quote:
      "Lopexa Technologies did a great job delivering the full project for keep-singing.com. The team was professional, reliable, and very easy to communicate with throughout the process. They handled everything from fixing critical issues to making sure the site was stable and working properly. Overall, a smooth and dependable experience working with them.",
    snippet:
      "Professional, reliable delivery for the full keep-singing.com project.",
    name: "Nicola",
    role: "Founder",
    company: "keep-singing",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqSection = {
  title: "Have questions?",
  cta: {
    headline: "Find the right build for your product. Let’s talk scope, stack, and timeline.",
    buttonLabel: "Book a Quick Call",
    href: bookingUrl,
    avatars: [
      { initials: "AR", className: "bg-sky-500" },
      { initials: "JL", className: "bg-emerald-500" },
      { initials: "SC", className: "bg-violet-500" },
    ],
  },
  items: [
    {
      question: "What do you focus on as a full-stack development agency?",
      answer:
        "We ship web and mobile products end to end: full-stack engineering, UX/UI, backend architecture, hybrid apps, and QA. Our remote teams support funded startups through enterprise platforms.",
    },
    {
      question: "How is Lopexa Technologies different from other dev shops?",
      answer:
        "Senior engineers and designers work in one squad with shared milestones. You get transparent async updates, design-led delivery, and measurable outcomes, not handoffs between disconnected vendors.",
    },
    {
      question: "Do you work with startups on MVPs and early products?",
      answer:
        "Yes. We help founders prioritize features, validate UX, stand up MVPs, and automate testing so you can ship faster and scale architecture as traction grows.",
    },
    {
      question: "Can you redesign or rebuild our existing app or platform?",
      answer:
        "We take on greenfield builds, re-platforming, and phased modernization: new frontends, API layers, mobile apps, or full rebuilds, with minimal disruption to live users where needed.",
    },
    {
      question: "How do you estimate project timelines?",
      answer:
        "After a discovery call we scope requirements, define milestones, and propose a timeline based on team size and complexity. Agile sprints with regular demos keep stakeholders aligned.",
    },
    {
      question: "What does a typical engagement cost?",
      answer:
        "Budgets depend on scope, from focused MVPs to multi-phase programs. Share your goals and constraints; we’ll outline options and a delivery plan that fits your range.",
    },
  ] satisfies FaqItem[],
};

export type ContactPerson = {
  name: string;
  role: string;
  email: string;
};

export const contactSection = {
  title: "Contact Us.",
  intro:
    "Share your idea, scope, and timeline — we'll get back to you with next steps.",
  responseTime: "Typical reply within 1 business day.",
};

export const contactPeople: ContactPerson[] = [
  {
    name: "Muhammad Rafi",
    role: "Co-founder",
    email: contactEmail,
  },
];
export const footerCopy = {
  copyright: `©${new Date().getFullYear()} Copyright - Lopexa Technologies. All rights reserved.`,
};
