// Aquí puedes editar toda la información de tu portafolio fácilmente sin tocar el código de diseño.

const driftWallItems = [
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", title: "JavaScript" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", title: "TypeScript" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", title: "Java" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", title: "Python" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", title: "C++" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", title: "HTML5" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", title: "CSS3" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", title: "React" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg", title: "Vue.js" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", title: "Node.js" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", title: "Express" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/denojs/denojs-original.svg", title: "Deno" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", title: "PostgreSQL" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", title: "GitHub" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", title: "Figma" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", title: "Tailwind" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", title: "MongoDB" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg", title: "IntelliJ" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", title: "Postman" },
  { image: "https://cdn.simpleicons.org/n8n/FF6666", title: "n8n" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", title: "SQL" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg", title: "Spring Boot" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg", title: "TensorFlow" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", title: "Docker" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg", title: "SQLite" },
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vite/vite-original.svg", title: "Vite" }
];

const contact = {
  email: "jesusobandocode@gmail.com",
  phone: "+58 424-161-9059",
  location: "La Florida, Caracas, Venezuela",
  linkedinUrl: "https://www.linkedin.com/in/jesusobando/",
  linkedinLabel: "Jesús Obando",
  githubUrl: "https://github.com/jesusobando32",
  githubLabel: "jesusobando32"
};

export const portfolioData = {
  es: {
    hero: {
      name: "Jesus Obando",
      title: "Front-End / Full-Stack Developer",
      subtitle: "Building scalable systems and high-contrast interfaces."
    },
    about: {
      description1: "Soy estudiante del 7mo semestre de Ingeniería Informática en la Universidad Católica Andrés Bello (UCAB), la universidad mejor clasificada de mi país, Venezuela. Estoy cerca de culminar mi carrera y decidí crear este portafolio para compartir mis conocimientos y experiencias con el mundo.",
      description2: "Tengo experiencia en el desarrollo de aplicaciones web, móviles y de escritorio. Me apasiona crear soluciones innovadoras y resolver problemas complejos. Cuento con una sólida base teórica y técnica, y siempre estoy en la búsqueda de nuevos retos para crecer y mejorar mis habilidades.",
      description3: "Soy una persona que aprende rápido y disfruto mucho trabajando en entornos colaborativos.",
      skillsText: "// A lo largo de mi formación y experiencia, he aprendido a trabajar con diversas tecnologías, frameworks y herramientas, incluyendo:"
    },
    driftWallItems,
    projects: [
      {
        id: "viajes-ucab",
        title: "Viajes UCAB",
        role: "Full Stack",
        description: "Plataforma integral para la gestión de servicios turísticos con arquitectura relacional normalizada, delegación lógica en base de datos y generación asíncrona de reportes.",
        tech: ["Vue.js 3", "Node.js", "Express", "PostgreSQL"],
        githubUrl: "https://github.com/jesusobando32/viajes-ucab-fullstack",
        image: "https://raw.githubusercontent.com/jesusobando32/viajes-ucab-fullstack/main/docs/dashboardViajero.png"
      },
      {
        id: "secure-firmware",
        title: "Secure Firmware Portal",
        role: "Backend / Seguridad",
        description: "Sistema de gestión con enfoque AppSec desarrollado para mitigar vulnerabilidades del OWASP Top 10 mediante controles criptográficos estrictos y prevención de vectores RCE.",
        tech: ["Python", "Flask", "SQLite", "Criptografía"],
        githubUrl: "https://github.com/jesusobando32/secure-firmware-portal",
        image: "https://raw.githubusercontent.com/jesusobando32/secure-firmware-portal/main/docs/dashboard.png"
      },
      {
        id: "connect6-ai",
        title: "Connect6 AI Agent",
        role: "IA / Backend",
        description: "Agente inteligente basado en una arquitectura híbrida de Deep Learning y heurística, orquestado mediante microservicios de ultra-baja latencia.",
        tech: ["Python", "TensorFlow", "MCTS", "gRPC", "Docker"],
        githubUrl: "https://github.com/jesusobando32/Connect6-AI-Agent"
      },
      {
        id: "b2b-aldebaran",
        title: "B2B Aldebaran Platform",
        role: "Full Stack",
        description: "Plataforma de gestión comercial End-to-End impulsada por una API RESTful escalable, diseñada con arquitectura zero-config para optimizar operaciones B2B.",
        tech: ["Java", "Spring Boot", "HTML5", "JS", "H2", "JPA"],
        githubUrl: "https://github.com/jesusobando32/b2b-aldebaran-platform",
        image: "https://raw.githubusercontent.com/jesusobando32/b2b-aldebaran-platform/main/docs/main-menu.png"
      },
      {
        id: "battleship-web",
        title: "Batalla Naval (Multiplayer)",
        role: "Full Stack",
        description: "Motor de juego cliente-servidor de baja latencia capaz de gestionar estados concurrentes y sincronización bidireccional en tiempo real para múltiples salas.",
        tech: ["Deno", "Vanilla JS", "HTML5", "CSS3", "WebSockets"],
        githubUrl: "https://github.com/jesusobando32/Batalla-Naval-RealTime-Multiplayer",
        image: "https://raw.githubusercontent.com/jesusobando32/Batalla-Naval-RealTime-Multiplayer/main/docs/battleship-gameplay.png"
      },
      {
        id: "uno-game",
        title: "UNO Card Game",
        role: "Desarrollador Java",
        description: "Aplicación de escritorio orientada a eventos construida bajo el patrón MVC, integrando un motor lógico robusto, interfaces asíncronas y serialización para persistencia de estado.",
        tech: ["Java 21", "JavaFX", "MVC", "Gson", "Maven"],
        githubUrl: "https://github.com/jesusobando32/UNO-GAME",
        image: "https://raw.githubusercontent.com/jesusobando32/UNO-GAME/main/docs/gameplay.png"
      }
    ],
    experience: [
      {
        year: "2024",
        title: "Reto Banca Digital Banesco",
        subtitle: "Participante del equipo ganador.",
        description: "Diseño de propuesta innovadora usando Lean Canvas y prototipado en Figma. Demostrando capacidad de innovación y trabajo en equipo en un entorno competitivo."
      }
    ],
    education: [
      {
        year: "2022 - Presente",
        title: "Ingeniería Informática",
        description: "Universidad Católica Andrés Bello (UCAB). Desarrollo de fundamentos sólidos en algoritmos, estructuras de datos y arquitectura de sistemas."
      },
      {
        year: "2011 - 2022",
        title: "Bachiller en Ciencias",
        description: "Colegio Don Bosco."
      }
    ],
    contact
  },
  
  en: {
    hero: {
      name: "Jesus Obando",
      title: "Front-End / Full-Stack Developer",
      subtitle: "Building scalable systems and high-contrast interfaces."
    },
    about: {
      description1: "I am a 7th-semester Computer Engineering student at Universidad Católica Andrés Bello (UCAB), the top-ranked university in my country, Venezuela. I am close to finishing my degree and decided to create this portfolio to share my knowledge and experiences with the world.",
      description2: "I have experience in developing web, mobile, and desktop applications. I am passionate about creating innovative solutions and solving complex problems. I have a solid theoretical and technical foundation, and I am always looking for new challenges to grow and improve my skills.",
      description3: "I am a fast learner and I really enjoy working in collaborative environments.",
      skillsText: "// Throughout my education and experience, I have learned to work with various technologies, frameworks, and tools, including:"
    },
    driftWallItems,
    projects: [
      {
        id: "viajes-ucab",
        title: "Viajes UCAB",
        role: "Full Stack",
        description: "Comprehensive platform for tourism services management with a normalized relational architecture, logical delegation in the database, and asynchronous report generation.",
        tech: ["Vue.js 3", "Node.js", "Express", "PostgreSQL"],
        githubUrl: "https://github.com/jesusobando32/viajes-ucab-fullstack",
        image: "https://raw.githubusercontent.com/jesusobando32/viajes-ucab-fullstack/main/docs/dashboardViajero.png"
      },
      {
        id: "secure-firmware",
        title: "Secure Firmware Portal",
        role: "Backend / Security",
        description: "Management system with an AppSec approach developed to mitigate OWASP Top 10 vulnerabilities through strict cryptographic controls and RCE vector prevention.",
        tech: ["Python", "Flask", "SQLite", "Cryptography"],
        githubUrl: "https://github.com/jesusobando32/secure-firmware-portal",
        image: "https://raw.githubusercontent.com/jesusobando32/secure-firmware-portal/main/docs/dashboard.png"
      },
      {
        id: "connect6-ai",
        title: "Connect6 AI Agent",
        role: "AI / Backend",
        description: "Intelligent agent based on a hybrid Deep Learning and heuristic architecture, orchestrated through ultra-low latency microservices.",
        tech: ["Python", "TensorFlow", "MCTS", "gRPC", "Docker"],
        githubUrl: "https://github.com/jesusobando32/Connect6-AI-Agent"
      },
      {
        id: "b2b-aldebaran",
        title: "B2B Aldebaran Platform",
        role: "Full Stack",
        description: "End-to-End commercial management platform driven by a scalable RESTful API, designed with a zero-config architecture to optimize B2B operations.",
        tech: ["Java", "Spring Boot", "HTML5", "JS", "H2", "JPA"],
        githubUrl: "https://github.com/jesusobando32/b2b-aldebaran-platform",
        image: "https://raw.githubusercontent.com/jesusobando32/b2b-aldebaran-platform/main/docs/main-menu.png"
      },
      {
        id: "battleship-web",
        title: "Battleship (Multiplayer)",
        role: "Full Stack",
        description: "Low-latency client-server game engine capable of managing concurrent states and real-time bidirectional synchronization for multiple rooms.",
        tech: ["Deno", "Vanilla JS", "HTML5", "CSS3", "WebSockets"],
        githubUrl: "https://github.com/jesusobando32/Batalla-Naval-RealTime-Multiplayer",
        image: "https://raw.githubusercontent.com/jesusobando32/Batalla-Naval-RealTime-Multiplayer/main/docs/battleship-gameplay.png"
      },
      {
        id: "uno-game",
        title: "UNO Card Game",
        role: "Java Developer",
        description: "Event-driven desktop application built under the MVC pattern, integrating a robust logic engine, asynchronous interfaces, and serialization for state persistence.",
        tech: ["Java 21", "JavaFX", "MVC", "Gson", "Maven"],
        githubUrl: "https://github.com/jesusobando32/UNO-GAME",
        image: "https://raw.githubusercontent.com/jesusobando32/UNO-GAME/main/docs/gameplay.png"
      }
    ],
    experience: [
      {
        year: "2024",
        title: "Banesco Digital Banking Challenge",
        subtitle: "Winning team participant.",
        description: "Design of an innovative proposal using Lean Canvas and prototyping in Figma. Demonstrating innovation capacity and teamwork in a competitive environment."
      }
    ],
    education: [
      {
        year: "2022 - Present",
        title: "Computer Engineering",
        description: "Universidad Católica Andrés Bello (UCAB). Development of solid foundations in algorithms, data structures, and systems architecture."
      },
      {
        year: "2011 - 2022",
        title: "High School Diploma in Sciences",
        description: "Colegio Don Bosco."
      }
    ],
    contact: {
      ...contact,
      location: "La Florida, Caracas, Venezuela"
    }
  }
};
