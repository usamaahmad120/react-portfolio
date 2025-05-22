// Import your local images
import myLocalImage from './assets/images/ai_repair_20250504014022465.png';
import nicePage from './assets/images/bootstrap.jpeg'
import aiRepairImg from './assets/images/modern website.png'; 
import bubbleGame from './assets/images/bubble game.jpeg'// Ensure this image exists inside src/assets/images

const logotext = "Usama";

const meta = {
    title: "Usama Ahmad",
    description: "I’m Usama Ahmad Front-end Web Developer, Currently working in MoroSoft Lab",
};

const introdata = {
    title: "I’m Usama Ahmad",
    animated: {
        first: "I love coding",
        second: "I'm a Front-end Web Developer",
        third: "I code cool websites",
    },
    description:
        "I am a dedicated front-end web developer with a strong passion for creating responsive, user-friendly, and visually appealing websites. With a solid foundation in HTML, CSS, and JavaScript, I specialize in modern front-end frameworks and tools such as Bootstrap, Tailwind CSS, and React.js. I take pride in writing clean, efficient code and building seamless digital experiences that not only look great but also perform exceptionally across all devices",
    your_img_url: myLocalImage,
};

const dataabout = {
    title: "A bit about myself",
    aboutme:
        "I'm a passionate front-end web developer who loves bringing ideas to life in the browser. I enjoy crafting clean and responsive user interfaces using technologies like HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, and React.js. I'm always exploring new tools and techniques to improve my skills and build better digital experiences. Whether it's a simple landing page or a full-fledged web app, I strive to write code that’s both functional and elegant. Outside of coding, I’m always curious about learning new trends in web development and UI/UX design.",
};

const worktimeline = [
    {
        jobtitle: "Front-End Developer",
        where: "MoroSoft Labs",
        date: "March 2025 - Present",
    },
    {
        jobtitle: "WordPress Developer",
        where: "Remote | QA Solutions BPO",
        date: "Jan 2022 - Feb 2023",
    },
];

const skills = [
    { name: "HTML5", value: 90 },
    { name: "CSS3 / Bootstrap/ Tailwind CSS", value: 80 },
    { name: "Javascript", value: 85 },
    { name: "React", value: 60 },
    { name: "Responsive Web Design", value: 90 },
    { name: "Git & GitHub", value: 92 },
    { name: "VS Code", value: 85 },
];

const services = [
    {
        title: "Front-End Web Development",
        description:
            "Building responsive, accessible, and user-friendly interfaces using HTML5, CSS3, JavaScript, and modern frameworks like React.js. I ensure smooth user experiences across all devices and screen sizes.",
    },
    {
        title: "Responsive UI/UX Design",
        description:
            "Designing clean and engaging user interfaces with a focus on usability and visual aesthetics. I use frameworks like Bootstrap and Tailwind CSS to craft consistent and elegant layouts.",
    },
];

const dataportfolio = [
    {
        img: nicePage,
        description: "A responsive website using HTML5, CSS3, Bootstrap5 and JavaScript.",
        link: "https://github.com/usamaahmad120/nice-page",
    },
    {
        img: aiRepairImg,
        description: "A responsive website with smooth animations using HTML, CSS, and JavaScript.",
        link: "https://github.com/usamaahmad120/modern-website",
    },
    {
        img: bubbleGame,
        description: "A simple bubble-click game built with HTML, CSS, and JavaScript.",
        link: "https://github.com/usamaahmad120/Bubble-game",
    },
];

const contactConfig = {
    YOUR_EMAIL: "usama.bscs8th78@bkuc.edu.pk",
    YOUR_FONE: "(+92)3449572884",
    description:
        "I'm always open to discussing new projects, collaborations, or just having a quick tech chat. Whether you have a question, a freelance opportunity, or simply want to connect — feel free to drop me a message!",
    YOUR_SERVICE_ID: "service_cc3dy4l",
    YOUR_TEMPLATE_ID: "template_833sy8j",
    YOUR_USER_ID: "8HkTQAhnb19By_Q4U",
};

const socialprofils = {
    github: "https://github.com/usamaahmad120",
    facebook: "#",
    linkedin: "https://www.linkedin.com/in/usama-ahmad-983792231/",
    twitter: "#",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
