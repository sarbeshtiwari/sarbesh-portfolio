// Verified against the certificate scans in public/assets/certs.
// A credential can include its certificate, continuation pages, and badge.
export type Certificate = {
  name: string;
  issued: string;
  category: string;
  image: string;
  relatedImages: { image: string; label: string }[];
};

export const certs: Certificate[] = [
  {
    name: "Smart India Hackathon Finalist",
    issued: "Gov. of India - SIH 2022",
    category: "Achievement",
    image: "/assets/certs/1665763375951.jpg",
    relatedImages: [],
  },
  {
    name: "Flutter & Dart",
    issued: "Udemy",
    category: "Mobile Dev",
    image: "/assets/certs/UC-30ed9331-1fd2-45cf-ae51-f48805ad8d3b.jpg",
    relatedImages: [],
  },
  {
    name: "Android Bug Bounty Hunting",
    issued: "EC-Council",
    category: "Cybersecurity",
    image: "/assets/certs/2140d980-ff9b-41d5-ab51-3eb8b817d2a7.png",
    relatedImages: [],
  },
  {
    name: "Developer Virtual Experience Program",
    issued: "Accenture / Forage",
    category: "Software Engineering",
    image: "/assets/certs/accenture_page-0001.jpg",
    relatedImages: [],
  },
  {
    name: "Big Data 101",
    issued: "IBM",
    category: "Data Science",
    image: "/assets/certs/Big Data_page-0001.jpg",
    relatedImages: [
      {
        image:
          "/assets/certs/Big_Data_Foundations___Level_1_Badge20220918-46-p35sng_page-0001.jpg",
        label: "Big Data Foundations - Level 1 badge",
      },
    ],
  },
  {
    name: "Hadoop 101",
    issued: "IBM",
    category: "Data Science",
    image: "/assets/certs/Hadoop_page-0001.jpg",
    relatedImages: [
      {
        image:
          "/assets/certs/Hadoop_Foundations___Level_1_Badge20220916-46-1jubit2_page-0001.jpg",
        label: "Hadoop Foundations - Level 1 badge",
      },
    ],
  },
  {
    name: "Machine Learning with Python",
    issued: "IBM",
    category: "AI/ML",
    image: "/assets/certs/Ml with python_page-0001.jpg",
    relatedImages: [
      {
        image: "/assets/certs/Ml with python_page-0002.jpg",
        label: "Certificate - page 2",
      },
      {
        image:
          "/assets/certs/Machine_Learning_with_Python___Level_1_Badge20220916-46-f025h7_page-0001.jpg",
        label: "Machine Learning with Python - Level 1 badge",
      },
    ],
  },
  {
    name: "SQL and Relational Databases 101",
    issued: "Cognitive Class / IBM Developer Skills Network",
    category: "Database",
    image: "/assets/certs/Database management_page-0001.jpg",
    relatedImages: [],
  },
  {
    name: "Python for Data Science",
    issued: "Cognitive Class / IBM Developer Skills Network",
    category: "Data Science",
    image: "/assets/certs/Data Science Python_page-0001.jpg",
    relatedImages: [
      {
        image:
          "/assets/certs/Python_for_Data_Science_Badge20220914-46-smqr71_page-0001.jpg",
        label: "Python for Data Science badge",
      },
    ],
  },
  {
    name: "Data Analysis with Python",
    issued: "IBM",
    category: "Data Science",
    image: "/assets/certs/python certificate_page-0001.jpg",
    relatedImages: [
      {
        image:
          "/assets/certs/Data_Analysis_Using_Python_Badge20220918-46-gdenjf_page-0001.jpg",
        label: "Data Analysis Using Python badge",
      },
    ],
  },
  {
    name: "Introduction to Machine Learning with Sound",
    issued: "Cognitive Class / IBM Developer Skills Network",
    category: "AI/ML",
    image: "/assets/certs/ML with sound_page-0001.jpg",
    relatedImages: [
      {
        image:
          "/assets/certs/Introduction_to_Machine_Learning_with_Sound_Badge20220916-46-qs1ptk_page-0001.jpg",
        label: "Introduction to Machine Learning with Sound badge",
      },
    ],
  },
  {
    name: "Enterprise Design Thinking Practitioner",
    issued: "IBM",
    category: "Design Thinking",
    image:
      "/assets/certs/Enterprise_Design_Thinking_Practitioner_Badge20211118-36-1jvaqjc_page-0001.jpg",
    relatedImages: [],
  },
  {
    name: "Java Fundamentals",
    issued: "IBM / Allsoft Solutions & Services",
    category: "Programming",
    image:
      "/assets/certs/Sarbesh Kumar Tiwari_IBM CEJAVA1IN Certificate_page-0001.jpg",
    relatedImages: [],
  },
  {
    name: "Introduction to Python",
    issued: "IBM / Allsoft Solutions & Services",
    category: "Programming",
    image:
      "/assets/certs/Sarbesh Kumar Tiwari_IBM CEPYT1IN Certificate_page-0001.jpg",
    relatedImages: [],
  },
  {
    name: "Chegg Honor Code",
    issued: "Chegg",
    category: "Expert Training",
    image:
      "/assets/certs/certificate-of-completion-for-honor-code-violation_page-0001.jpg",
    relatedImages: [],
  },
  {
    name: "Mastering the Guidelines",
    issued: "Chegg",
    category: "Expert Training",
    image:
      "/assets/certs/certificate-of-completion-for-mastering-the-guidelines_page-0001.jpg",
    relatedImages: [],
  },
  {
    name: "Q&A Best Practices",
    issued: "Chegg",
    category: "Expert Training",
    image:
      "/assets/certs/certificate-of-completion-for-q-a-best-practices_page-0001.jpg",
    relatedImages: [],
  },
  {
    name: "Solving International Questions",
    issued: "Chegg",
    category: "Expert Training",
    image:
      "/assets/certs/certificate-of-completion-for-solving-international-questions_page-0001.jpg",
    relatedImages: [],
  },
  {
    name: "Welcome Training for New Experts",
    issued: "Chegg",
    category: "Expert Training",
    image:
      "/assets/certs/certificate-of-completion-for-welcome-training-for-new-experts_page-0001.jpg",
    relatedImages: [],
  },
];
