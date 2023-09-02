import Image from "next/image";
import aizen from "../public/aizen.jpg";
import kamui from "../public/kamui.jpg";
import pokedex from "../public/pokedex.jpg";
import portfolio from "../public/portfolio.jpg";
import cryptohunter from "../public/crypto-hunter.jpg";
import redeye from "../public/red-eye.jpg";
import evo from "../public/evo.jpg";
import nft from "../public/nft.jpg";
import nike from "../public/nike.jpg";
import Link from "next/link";

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: aizen,
      title: "Smart Calculator",
      description: "Create beautiful images and gifs of your source code",
      link: "https://jovial-sorbet-b4fe4b.netlify.app/",
      target: "_blank",
    },
    {
      id: 2,
      image: kamui,
      title: "Booken",
      description: "Its a Online Book Store",
      link: "https://kundankumaryadav88.github.io/bookstore-main/#",
      target: "_blank",
    },
    {
      id: 3,
      image: pokedex,
      title: "face Attendance System",
      description: "Its a face Attendance System using Flutter with firebase and google Ml kit",
      link: "https://drive.google.com/file/d/12SWlwHabBXB-wxdgjojQGIL2nWvr2E0L/view?usp=sharing",
      target: "_blank",
    },
    {
      id: 4,
      image: evo,
      title: "Todo Application",
      description: "Check and mark your task",
      link: "https://64abfc34ad158c12b6fd4964--cool-pastelito-e18e85.netlify.app/",
      target: "_blank",
    },
    {
      id: 5,
      image: nike,
      title: "E Commerce",
      description: "E-commerce Application intigrated with free Api ",
      link: "https://64ad2fad9da4ce0c1292fd76--melodic-salamander-66ed9d.netlify.app/",
      target: "_blank",
    },
    {
      id: 6,
      image: nft,
      title: "Instagram feed page",
      description: "Instagram feed page",
      link: "https://github.com/kundankumaryadav88/Instagramdemo",
      target: "_blank",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : "";
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="200"
                className="rounded-md drop-shadow-2xl hover:scale-110"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
