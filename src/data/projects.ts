export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: "academic" | "web" | "personal" | "ai";
  role: string;
  date: string;
  status?: string;
  course?: string;
  technologies: string[];
  features: string[];
  github?: string;
  liveDemo?: string;
  researchPaper?: string;
  thumbnail: string;
  images: string[];
}

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "academic", label: "Academic Projects" },
  { id: "web", label: "Web Development" },
  { id: "personal", label: "Personal Projects" },
] as const;

export const projects: Project[] = [
  {
    slug: "face-entry-pro",
    name: "Face Entry Pro",
    shortDescription: "AI-Powered Biometric Attendance & Campus Security System.",
    description:
      "FaceEntryPro is an AI-powered biometric attendance and campus intelligence system developed to modernize attendance management and enhance campus security. The system uses facial recognition technology to automatically identify students and record attendance without manual intervention. To ensure accuracy and prevent fraudulent attendance, it incorporates advanced features such as face enrollment, liveness detection, and anti-spoofing verification. Beyond attendance management, the system offers attendance history, report generation, real-time notifications, smart video search, incident detection, and security monitoring.\n\nIt is designed to support multiple user roles, including students, faculty members, parents, security officers, and administrators, providing each with role-based access and functionalities. By combining AI, computer vision, and intelligent surveillance, FaceEntryPro aims to create a faster, more secure, and efficient smart campus environment.",
    category: "academic",
    role: "Team Leader & System Analyst",
    date: "May 12, 2026",
    status: "Ongoing",
    course: "System Analysis & Design Capstone Project",
    technologies: [
      "AI Camera / CCTV Camera",
      "Raspberry Pi 4",
      "TensorFlow Lite",
      "Canva",
      "Figma",
      "Draw IO",
      "Lucid Chart",
      "GitHub",
    ],
    features: [
      "Face enrollment",
      "Liveness detection",
      "Anti-spoofing verification",
      "Attendance history",
      "Report generation",
      "Real-time notifications",
      "Smart video search",
      "Incident detection",
      "Security monitoring",
      "Role-based access for students, faculty, parents, security officers, and administrators",
    ],
    thumbnail: "/images/projects/face-entry-pro/face-entry-pro1.webp",
    images: ["/images/projects/face-entry-pro/face-entry-pro1.webp"],
  },
  {
    slug: "amar-pashe",
    name: "Amar Pashe",
    shortDescription: "A smart nearby place finder that helps you discover useful places around you.",
    description:
      "Amar Pashe is a location-based web application designed to help users discover nearby places such as restaurants, cafes, hospitals, pharmacies, hotels, and supermarkets based on their current location. Users can search for places using keywords or categories, choose a preferred search distance, and explore nearby results with information such as ratings, distance, address, and availability. The application also provides an interactive map with location markers for an easier and more visual way to explore nearby places.\n\nThe project was developed using HTML, CSS, and JavaScript, with the Geoapify Places API used for nearby place data and the Browser Geolocation API for detecting the user's location. Leaflet.js and OpenStreetMap are used to provide the interactive map experience, while LocalStorage enables users to save favorite places. The project is deployed on Vercel and was built as a practical project to improve skills in API integration, geolocation, interactive maps, frontend development, and real-world web application development.",
    category: "personal",
    role: "Solo Developer",
    date: "September 20, 2026",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Geoapify Places API",
      "Browser Geolocation API",
      "Leaflet.js",
      "OpenStreetMap",
      "LocalStorage",
      "Vercel",
    ],
    features: [
      "Search nearby places (restaurants, cafes, hospitals, pharmacies, hotels, supermarkets)",
      "Search by keywords or categories",
      "Customizable search distance",
      "Ratings, distance, address, and availability info",
      "Interactive map with location markers",
      "Save favorite places via LocalStorage",
      "Location-aware using browser geolocation",
    ],
    github: "https://github.com/rhpiyas/nearby-place-finder",
    liveDemo: "https://amarpashe.vercel.app/",
    thumbnail: "/images/projects/amar-pashe/amar-pashe-1.webp",
    images: [
      "/images/projects/amar-pashe/amar-pashe-1.webp",
      "/images/projects/amar-pashe/amar-pashe-2.webp",
    ],
  },
  {
    slug: "amar-weather",
    name: "Amar Weather",
    shortDescription: "A JavaScript-based weather app that displays real-time weather data based on the user's location.",
    description:
      "Amar Weather is a JavaScript-based web application designed to provide real-time weather information based on the user's current location. The application uses the browser's Geolocation API to detect the user's latitude and longitude and then uses external APIs to retrieve relevant weather and location data. It displays essential information such as the current temperature, current date and time, rain probability, and the user's location name. The application is designed with a simple and user-friendly interface so that users can quickly check their current weather conditions without manually entering a location.\n\nThis project helped gain practical experience with asynchronous JavaScript, the Fetch API, API integration, JSON data handling, and browser geolocation. Working with dynamic API requests using the user's coordinates instead of fixed locations made the application more flexible and location-aware. The project strengthened understanding of working with external APIs, handling responses and errors, and dynamically updating webpage content using JavaScript and the DOM.",
    category: "personal",
    role: "Solo Developer",
    date: "September 17, 2026",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Fetch API",
      "Browser Geolocation API",
      "REST APIs",
      "VS Code",
      "GitHub",
    ],
    features: [
      "Real-time weather based on current location",
      "Auto-detect user location via Geolocation API",
      "Current temperature display",
      "Date and time display",
      "Rain probability",
      "Location name display",
      "Simple user-friendly interface",
    ],
    github: "https://github.com/rhpiyas/weather-app",
    liveDemo: "https://amarweather.vercel.app/",
    thumbnail: "/images/projects/weather-app/weather-app-1.webp",
    images: [
      "/images/projects/weather-app/weather-app-1.webp",
      "/images/projects/weather-app/weather-app-2.jpeg",
    ],
  },
  {
    slug: "download-manager",
    name: "Download Manager",
    shortDescription: "A desktop-based Download Manager built with Electron.js for managing file downloads efficiently.",
    description:
      "A desktop-based Download Manager built with Electron.js for managing file downloads efficiently. Users can enter a downloadable URL, select a destination folder, and monitor download progress in real time. The application provides a simple and user-friendly interface for a smooth downloading experience.\n\nThis project was developed as part of the Lab Final for the Desktop and Web Programming course to demonstrate practical knowledge of desktop application development using Electron.js.",
    category: "academic",
    role: "Solo Developer",
    date: "August 12, 2026",
    course: "Desktop and Web Programming Lab",
    technologies: [
      "Electron.js",
      "Node.js",
      "JavaScript",
      "HTML",
      "CSS",
      "HTTP/HTTPS",
      "File System (FS)",
    ],
    features: [
      "Enter downloadable URL",
      "Select destination folder",
      "Real-time download progress monitoring",
      "Simple user-friendly interface",
    ],
    github: "https://github.com/rhpiyas/download-manager",
    thumbnail: "/images/projects/download-manager/download-manager1.webp",
    images: [
      "/images/projects/download-manager/download-manager1.webp",
      "/images/projects/download-manager/download-manager2.webp",
    ],
  },
  {
    slug: "diu-info-corner",
    name: "DIU Info Corner",
    shortDescription: "A smart platform that provides all essential DIU admission information in one place.",
    description:
      "A smart and user-friendly application designed to help prospective students get all necessary admission-related information about Daffodil International University (DIU) in one place. The application provides department information, waiver details, seat availability, direct admission eligibility checking, and important admission notifications to make the admission process easier and faster.\n\nEvery year, many students face difficulties finding accurate admission information such as department details, available seats, waiver opportunities, and admission requirements. DIU Info Corner solves this problem by providing a centralized platform where students can easily access all admission-related information.",
    category: "academic",
    role: "Team Leader",
    date: "August 20, 2025",
    status: "Released (v1.1.1)",
    course: "Software Development Capstone Project",
    technologies: ["C", "File Handling", "VS Code", "Code Blocks", "Canva", "Draw IO", "GitHub"],
    features: [
      "Department information",
      "Waiver details",
      "Seat availability",
      "Direct admission eligibility checking",
      "Important admission notifications",
      "Centralized information platform",
    ],
    github: "https://github.com/rhpiyas/diu-info-corner",
    thumbnail: "/images/projects/diu-info-corner/diu-info-corner1.webp",
    images: ["/images/projects/diu-info-corner/diu-info-corner1.webp"],
  },
  {
    slug: "count-me",
    name: "Count Me",
    shortDescription: "A beginner-friendly counter web application featuring Click, Decrease, and Clear actions.",
    description:
      "Count Me is a beginner-friendly web application built with HTML5, CSS3, and Vanilla JavaScript. Designed as a learning project, it features three essential functions — Click, Decrease, and Clear — to manage a counter with instant visual updates.\n\nThe application showcases key front-end development concepts such as DOM manipulation, event-driven programming, and responsive user interaction. Its clean interface and lightweight implementation make it an excellent demonstration of fundamental JavaScript skills and modern web development practices.",
    category: "web",
    role: "Solo Developer",
    date: "July 10, 2026",
    technologies: ["HTML", "CSS", "JavaScript", "VS Code", "GitHub"],
    features: [
      "Click to increment counter",
      "Decrease to decrement counter",
      "Clear to reset counter",
      "Instant visual updates",
      "DOM manipulation demonstration",
      "Event-driven programming",
    ],
    github: "https://github.com/rhpiyas/Count-Me",
    liveDemo: "https://rhpiyas.github.io/Count-Me/",
    thumbnail: "/images/projects/count-me/count-me1.webp",
    images: [
      "/images/projects/count-me/count-me1.webp",
      "/images/projects/count-me/count-me2.webp",
    ],
  },
  {
    slug: "smart-parking-system",
    name: "Smart Parking System",
    shortDescription: "An Arduino-based smart parking system that detects available spaces and automates vehicle entry.",
    description:
      "The Smart Parking System is an Arduino-based automation project designed to improve parking management by detecting available parking spaces and controlling vehicle entry. The system uses ultrasonic sensors to monitor parking slots in real time and displays the number of available spaces on an LCD. When a vehicle arrives at the entrance, the gate opens automatically if a parking space is available; otherwise, it remains closed and activates a buzzer to notify the driver that the parking area is full.\n\nThis project helps reduce unnecessary traffic inside parking areas, saves drivers' time, improves parking efficiency, and demonstrates how embedded systems and automation can solve everyday urban challenges.",
    category: "academic",
    role: "Team Leader",
    date: "April 17, 2026",
    course: "Introduction To Robotics",
    technologies: [
      "Arduino Uno",
      "HC-SR04 Ultrasonic Sensors",
      "Servo Motor SG90",
      "16×2 LCD Display with I2C Module",
      "Buzzer",
      "Breadboard & Jumper Wires",
      "Arduino IDE",
      "C++",
    ],
    features: [
      "Detect available parking spaces",
      "Real-time slot monitoring via ultrasonic sensors",
      "LCD display showing available spaces",
      "Automatic gate opening/closing via servo motor",
      "Buzzer notification when parking is full",
      "Embedded automation system",
    ],
    researchPaper: "https://www.researchgate.net/publication/404082539_Smart_Parking_System",
    thumbnail: "/images/projects/smart-parking/smart-parking1.webp",
    images: [
      "/images/projects/smart-parking/smart-parking1.webp",
      "/images/projects/smart-parking/smart-parking2.webp",
      "/images/projects/smart-parking/smart-parking4.webp",
      "/images/projects/smart-parking/smart-parking5.webp",
    ],
  },
];

