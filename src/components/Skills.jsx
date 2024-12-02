
import SkillCard from "./SkillCard";

const skillItem = [
  // MERN stack
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  // PHP and its frameworks
  {
    imgSrc: "/images/php.svg",
    label: "PHP",
    desc: "Backend Language",
  },
  {
    imgSrc: "/images/laravel.svg",
    label: "Laravel",
    desc: "PHP Framework",
  },
  {
    imgSrc: "/images/wordpress.svg",
    label: "WordPress",
    desc: "CMS",
  },
  {
    imgSrc: "/images/mysql.svg",
    label: "MySQL",
    desc: "Database",
  },
  // Styling and UI
  {
    imgSrc: "/images/html5.svg",
    label: "HTML",
    desc: "Markup Language",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/bootstrap.svg",
    label: "Bootstrap",
    desc: "UI Framework",
  },
  // General programming
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/python.svg",
    label: "Python",
    desc: "Programming Language",
  },
  {
    imgSrc: "/images/java.svg",
    label: "Java",
    desc: "Programming Language",
  },
  {
    imgSrc: "/images/git.svg",
    label: "Git",
    desc: "Version Control",
  },
];



const Skills = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Technologies I use</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Crafting digital masterpieces with a toolkit of industry-leading
          technologies, designed to captivate and inspire.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard 
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            ))
          }
        </div>

      </div>
    </section>
  );
}

export default Skills