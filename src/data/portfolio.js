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
  { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", title: "SQL" }
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
        id: "agencia-viajes",
        title: "Agencia de Viajes Web",
        role: "Full Stack",
        description: "E-commerce turístico con flujo de compra multi-paso, servidor conectado a base de datos relacional y Stored Procedures para validar compras en tiempo real.",
        tech: ["Vue.js", "Node.js", "Express", "PostgreSQL"],
        githubUrl: "https://github.com/ArtP10/bdd-proyect"
      },
      {
        id: "battleship-web",
        title: "Battleship Web Multijugador",
        role: "Full Stack",
        description: "Juego interactivo con tableros, power-ups y arquitectura Back-End con comunicación bidireccional en tiempo real.",
        tech: ["HTML", "CSS", "JavaScript", "Node.js", "Deno", "WebSockets"],
        githubUrl: "https://github.com/jesusobando32/Battleship-WEB"
      },
      {
        id: "uno-game",
        title: "Juego de UNO",
        role: "Desarrollador Java",
        description: "Implementación local del clásico juego de cartas UNO desarrollado en Java, enfocado en el uso y aplicación de la Programación Orientada a Objetos (POO).",
        tech: ["Java", "POO", "Lógica de Juegos"],
        githubUrl: "https://github.com/jesusobando32/UNO-GAME"
      },
      {
        id: "gestion-pedidos",
        title: "Gestión de Pedidos (Abasto Albedarán)",
        role: "Full Stack",
        description: "Plataforma de administración con interfaz visual, servidor Java bajo patrón MVC y base de datos relacional segura.",
        tech: ["Java", "MVC", "HTML", "CSS", "JavaScript", "SQL"],
        githubUrl: "https://github.com/jesusobando32/PedidosAbastoAlbedaran"
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
        id: "agencia-viajes",
        title: "Web Travel Agency",
        role: "Full Stack",
        description: "Tourism E-commerce with a multi-step purchase flow, server connected to a relational database, and Stored Procedures for real-time purchase validation.",
        tech: ["Vue.js", "Node.js", "Express", "PostgreSQL"],
        githubUrl: "https://github.com/ArtP10/bdd-proyect"
      },
      {
        id: "battleship-web",
        title: "Multiplayer Web Battleship",
        role: "Full Stack",
        description: "Interactive game with boards, power-ups, and a Back-End architecture with real-time bidirectional communication.",
        tech: ["HTML", "CSS", "JavaScript", "Node.js", "Deno", "WebSockets"],
        githubUrl: "https://github.com/jesusobando32/Battleship-WEB"
      },
      {
        id: "uno-game",
        title: "UNO Game",
        role: "Java Developer",
        description: "Local implementation of the classic UNO card game developed in Java, focused on the use and application of Object-Oriented Programming (OOP).",
        tech: ["Java", "OOP", "Game Logic"],
        githubUrl: "https://github.com/jesusobando32/UNO-GAME"
      },
      {
        id: "gestion-pedidos",
        title: "Order Management (Abasto Albedarán)",
        role: "Full Stack",
        description: "Management platform with a visual interface, Java server under MVC pattern, and a secure relational database.",
        tech: ["Java", "MVC", "HTML", "CSS", "JavaScript", "SQL"],
        githubUrl: "https://github.com/jesusobando32/PedidosAbastoAlbedaran"
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
