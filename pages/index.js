import Head from "next/head";
import Project from "../components/Project";
import { FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFastapi,
  SiMongodb,
  SiNextdotjs,
  SiSupabase,
  SiNginx,
  SiGithub,
  SiTwitter,
  SiLinkedin,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DiPhp, DiHtml5, DiCss3 } from "react-icons/di";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl py-10 px-5">
      <Head>
        <title>Clemente Solorio</title>
        <meta name="description" content="20 year old CS Major at CSUF." />
        <link rel="icon" href="https://github.com/clxmente.png" />
      </Head>

      <NavBar active={"home"} />
      <main className="mx-auto max-w-3xl space-y-12 py-12">
        {/* Title/Intro Section */}
        <div className="space-y-4">
          <div className="flex space-x-5">
            <a
              href="https://github.com/clxmente"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <SiGithub
                size={"26"}
                color={"white"}
                className={"group-hover:fill-sky-500"}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/clementesolorio/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <SiLinkedin
                size={"26"}
                color={"white"}
                className={"group-hover:fill-sky-500"}
              />
            </a>
            <a
              href="https://twitter.com/clxmente"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <SiTwitter
                size={"26"}
                color={"white"}
                className={"group-hover:fill-sky-500"}
              />
            </a>
          </div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-6xl">
            Hello, I&apos;m Clemente.
          </h1>
          <p className="font-semibold text-white opacity-80">
            I&apos;m a 20 year old student enrolled{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.fullerton.edu/"
              className="text-sky-500 hover:text-sky-300"
            >
              @CSUF
            </a>
            . I am currently in my 3rd year of unviersity, completing my
            Bachelors of Science in Computer Science.
          </p>
        </div>
        {/* End Title/Intro Section */}

        {/* About Me Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            About Me 🔍
          </h2>
          <p className="font-semibold text-white opacity-80">
            I&apos;m interested in building fullstack web applications, with
            experience in multiple languages and frameworks. I started
            programming in Python and have since gained experiences in a variety
            of other languages like JavaScript, C++, HTML/CSS, and more! I enjoy
            designing the frontend of web applications and am gaining more
            experience in building scalable backend solutions.
          </p>
          <p className="font-semibold text-white opacity-80">
            When I&apos;m not programming, I like to watch or play a variety of
            sports, but basketball is the one I enjoy the most and have been
            playing the longest. Other than sports, I also enjoy hiking and
            watching lots of movies. You can find some of my favorite films{" "}
            <a
              target={"_blank"}
              rel={"noopener noreferrer"}
              href={"https://letterboxd.com/clxm/"}
              className="text-sky-500 hover:text-sky-300"
            >
              here!
            </a>
          </p>
        </div>
        {/* End About Me Section */}

        {/* Projects Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Projects 🕹️
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <Project
              title={"🎮 NBA Players Game \u2197"}
              description={
                "Fun web-app to see how many NBA Players a user can guess within a time limit. Built with next.js, tailwindcss, and Supabase."
              }
              url={"https://nba-game.solorio.dev/"}
              icons={[
                <SiNextdotjs key={"1"} size={"24"} color={"white"} />,
                <FaNodeJs key={"2"} size={"24"} color={"white"} />,
                <SiSupabase key={"3"} size={"24"} color={"white"} />,
                <SiTailwindcss key={"4"} size={"24"} color={"white"} />,
              ]}
            />
            <Project
              title={"🔒 Python Password Manager \u2197"}
              description={
                "command-line password manager that stores AES encrypted passwords protected by a SHA256 hashed master password."
              }
              url={"https://github.com/clxmente/Python-Password-Manager"}
              icons={[<FaPython key={"1"} size={"24"} color={"white"} />]}
            />
            <Project
              title={"🗄️ University Database "}
              description={
                "Designed a university database and user interface using MySQL, PHP, HTML, and CSS."
              }
              url={"#"}
              icons={[
                <GrMysql key={"1"} size={"24"} color={"white"} />,
                <DiPhp key={"2"} size={"24"} color={"white"} />,
                <DiHtml5 key={"3"} size={"24"} color={"white"} />,
                <DiCss3 key={"4"} size={"24"} color={"white"} />,
              ]}
            />
            <Project
              title={"🚀 api.solorio.dev \u2197"}
              description={
                "A REST API built with FastAPI for the backend of some of my personal projects."
              }
              url={"https://github.com/clxmente/api.solorio.dev"}
              icons={[
                <SiMongodb key={"1"} size={"24"} color={"white"} />,
                <SiFastapi key={"2"} size={"24"} color={"white"} />,
                <SiNginx key={"3"} size={"24"} color={"white"} />,
                <FaPython key={"4"} size={"24"} color={"white"} />,
              ]}
            />
            <Project
              title={"🏛️ solorio.dev \u2197"}
              description={
                "Personal website built with next.js and tailwindcss."
              }
              url={"https://github.com/clxmente/solorio.dev"}
              icons={[
                <SiNextdotjs key={"1"} size={"24"} color={"white"} />,
                <SiTailwindcss key={"3"} size={"24"} color={"white"} />,
              ]}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
