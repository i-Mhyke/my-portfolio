import type { NextPage } from "next";
import Image from "next/image";
import { BsArrowDown } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";
import { AiOutlineContacts } from "react-icons/ai";

const Home: NextPage = () => {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
      <div className="flex flex-col justify-center pt-10 pb-20 sm:text-center sm:mx-auto sm:mb-0 h-screen">
        <div className="max-w-xl mb-10 text-left lg:max-w-6xl mx-auto md:mb-12 my-auto">
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-bold text-base"
          >
            {" "}
            Hi there 👋, I&#39;m
          </p>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-gray-200 sm:text-7xl app-font"
          >
            Michael Madumere
          </h2>
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="mb-6 font-sans text-4xl font-bold leading-none tracking-tight text-gray-400 sm:text-7xl app-font"
          >
            Fullstack Web Developer
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-base text-gray-200 md:text-lg max-w-3xl"
          >
            I&#39;m a fullstack engineer, passionate about solving problems
            using web and mobile technologies whilst creating responsive and
            highly performant products with clean designs.
          </p>
          <div className="pt-6">
            <a
              data-aos="zoom-in"
              data-aos-delay="400"
              href="#portfolio"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
            >
              View My Portfolio
            </a>
          </div>
        </div>
        <div className="mt-auto">
          <BsArrowDown size={32} className="bouncy mx-auto" />
        </div>
      </div>
      <div className="max-w-xl lg:max-w-4xl mx-auto pb-20 pt-32">
        <div>
          <h3
            data-aos="zoom-in"
            data-aos-delay="100"
            className="font-bold text-4xl app-font relative text-center mb-16 text-shadow"
          >
            About Me
          </h3>
        </div>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-gray-400 md:text-xl leading-relaxed mx-auto text-justify"
        >
          Hi, I am Michael Madumere. I am a self taught frontend web and mobile
          developer. I have about one year experience in frontend development,
          using
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <span className="text-shadow">Javascript</span>,
          </a>
          <a
            href="https://www.typescriptlang.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <span className="text-shadow">Typescript</span>,
          </a>
          <a
            href="https://angular.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <span className="text-shadow">Angular</span>,
          </a>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <span className="text-shadow">React Js</span>,
          </a>
          <a
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <span className="text-shadow">Node Js</span>
          </a>
          and other frameworks and libraries to create responsive web
          applications.
          <br />
          <br />
          I&#39;m passionate about building excellent software that improves the
          lives of those around me and creates delightful experiences for users.
          I take every opportunity to learn new technologies and skills that
          would be beneficial to my growth and progress as a developer.
          <br />
          <br />I am a diligent, hard working and result oriented person, I am
          always determined to ensure that I achieve the best results while
          working on a project. You can find me on
          <a href="https://www.linkedin.com/in/michael-madumere/">
            <span className="hover-effect">LinkedIn</span>
          </a>
          to get more information.
        </p>
      </div>
      <div className="max-w-xl lg:max-w-4xl mx-auto pb-20 pt-32">
        <div>
          <h3
            data-aos="zoom-in"
            data-aos-delay="100"
            className="font-bold text-4xl relative text-center mb-16 app-font text-shadow"
          >
            Experience
          </h3>
        </div>
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-8 justify-between">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="md:w-1/2 mt-10 md:mt-0"
          >
            <h3 className="font-bold text-gray-200 text-3xl">Cribstack</h3>
            <h4 className="font-bold text-gray-200 text-xl mb-3">
              Frontend Developer (Contract)
            </h4>
            <h6 className="font-semibold text-gray-400">
              November 2021 - February 2022
            </h6>
            <ul className="text-gray-400 list-disc list-inside mt-5">
              <li>
                Collaborated with designers and the backend team to build the
                frontend of the platform, ranging from the landing page to the
                user&#39;s portals
              </li>
              <li>
                Worked primarily as the frontend engineer, ensuring that the
                designs are perfectly implemented in code and maintaining a
                clean and scalable code base.
              </li>
              <li>
                Ensured the website was responsive, highly interactive and
                optimized to excellent user experince.
              </li>
            </ul>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="md:w-1/2 mt-10 md:mt-0"
          >
            <h3 className="font-bold text-gray-200 text-3xl">Tegence AI</h3>
            <h4 className="font-bold text-gray-200 text-xl mb-3">
              Frontend Developer
            </h4>
            <h6 className="font-semibold text-gray-400">
              July 2020 - October 2021
            </h6>
            <ul className="text-gray-400 list-disc list-inside mt-5">
              <li>
                Built and designed the company landing page using modern
                technologies including React(Nextjs), Tailwind Css, Styled
                Components, etc.
              </li>
              <li>
                Built an e-commerce web application using Angular, Shopify,
                Graphql, for a client that needed an optimised and fast way for
                customers to buy their products.
              </li>
              <li>
                Handled deployment of these websites using cloud platforms
                including firebase, google cloud functions, google compute
                engine, vercel, heroku, etc.
              </li>
              <li>
                Built an audio manipulation tool using various backend and
                frontend frameworks and tools including Angular Js, Typescript,
                Firebase cloud storage, Python(Flask REST) for interacting with
                the AI Model.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="portfolio" className="max-w-xl lg:max-w-4xl mx-auto pb-20 pt-32">
        <div>
          <h3
            data-aos="zoom-in"
            data-aos-delay="100"
            className="font-bold text-4xl relative text-center mb-16 text-shadow app-font"
          >
            Projects
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-100">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="w-100 p-5 border-2 border-gray-800 shadow-lg shadow-purple-800/20 rounded-md"
          >
            <div className="flex flex-row justify-between items-center">
              <Image
                width={40}
                height={40}
                src="/images/icons/folder_open.svg"
                alt="Folder"
              />
              <div>
                <a
                  href="https://tprcc-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Go to site"
                >
                  <IoOpenOutline size={24} />
                </a>
              </div>
            </div>
            <div className="pt-4">
              <a
                href="https://tprcc-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="font-bold text-xl mb-5 text-gray-200 font-sans hover:underline">
                  TPRCC
                </h4>
              </a>
              <p className="text-gray-400 text-base">
                I worked on both the frontend and the backend of this
                application using Next js on the frontend and Nodejs (Nestjs) on
                the backend. The app is a directory for property cosultants and
                investors.
              </p>
              <div className="text-xs text-purple-600 pt-3 flex flex-wrap">
                <span className="bg-purple-600/20 rounded-full py-1 px-3 m-1">
                  Node Js
                </span>
                <span className="bg-purple-600/20 rounded-full py-1 px-3 m-1">
                  Next Js
                </span>
                <span className="bg-purple-600/20 rounded-full py-1 px-3 m-1">
                  Mongo Db
                </span>
                <span className="bg-purple-600/20 rounded-full py-1 px-3 m-1">
                  Heroku
                </span>
                <span className="bg-purple-600/20 rounded-full py-1 px-3 m-1">
                  Vercel
                </span>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="w-100 p-5 border-2 border-gray-800 shadow-lg shadow-purple-800/20 rounded-md"
          >
            <div className="flex flex-row justify-between items-center">
              <Image
                width={40}
                height={40}
                src="/images/icons/folder_open.svg"
                alt="Folder"
              />
              <div>
                <a
                  href="https://tegence.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Go to site"
                >
                  <IoOpenOutline size={24} />
                </a>
              </div>
            </div>
            <div className="pt-4">
              <a
                href="https://tegence.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="font-bold text-xl mb-5 text-gray-200 font-sans hover:underline">
                  Tegence Website
                </h4>
              </a>
              <p className="text-gray-400 text-base">
                Tegence is a tech start-up that specializes in solving problems
                using Machine learning and Deep learning algorithms. I built and
                initiated the design of the company&#39;s landing page.
              </p>
              <div className="text-xs text-purple-600 pt-3 flex flex-wrap">
                <span className="bg-purple-600/20 rounded-full py-1 px-3 m-1">
                  React Js
                </span>
                <span className="bg-purple-600/20 rounded-full py-1 px-3 m-1">
                  Next Js
                </span>
                <span className="bg-purple-600/20 rounded-full py-1 px-3 m-1">
                  Typescript
                </span>
                <span className="bg-purple-600/20 rounded-full py-1 px-3 m-1">
                  Vercel
                </span>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="w-100 p-5 border-2 border-gray-800 shadow-lg shadow-purple-800/20 rounded-md"
          >
            <div className="flex flex-row justify-between items-center">
              <Image
                width={40}
                height={40}
                src="/images/icons/folder_open.svg"
                alt="Folder"
              />
              <div>
                <a
                  href="https://rendfx.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Go to site"
                >
                  <IoOpenOutline size={24} />
                </a>
              </div>
            </div>
            <div className="pt-4">
              <a
                href="https://rendfx.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="font-bold text-xl mb-5 text-gray-200 font-sans hover:underline">
                  RendFx
                </h4>
              </a>
              <p className="text-gray-400 text-base">
                Rendfx is an audio manipulation tool, that helps content
                creators edit audio by reducing the background noise. I worked
                on the frontend of this project, using Angular Js to interact
                with the Flask api on the server.
              </p>
              <div className="text-xs text-purple-600 pt-3 flex flex-wrap">
                <span className="bg-purple-600/20 rounded-full py-1 px-3 m-1">
                  Angular Js
                </span>
                <span className="bg-purple-600/20 rounded-full py-1 px-3 m-1">
                  Material UI
                </span>
                <span className="bg-purple-600/20 rounded-full py-1 px-3 m-1">
                  Typescript
                </span>
                <span className="bg-purple-600/20 rounded-full py-1 px-3 m-1">
                  Google cloud
                </span>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="w-100 p-5 border-2 border-gray-800 shadow-lg shadow-purple-800/20 rounded-md"
          >
            <div className="flex flex-row justify-between items-center">
              <Image
                width={40}
                height={40}
                src="/images/icons/folder_open.svg"
                alt="Folder"
              />
              <div>
                <a
                  href="https://tegence-shop.web.app/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Go to site"
                >
                  <IoOpenOutline size={24} />
                </a>
              </div>
            </div>
            <div className="pt-4">
              <a
                href="https://tegence-shop.web.app/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="font-bold text-xl mb-5 text-gray-200 font-sans hover:underline">
                  Naturbon Demo
                </h4>
              </a>
              <p className="text-gray-400 text-base">
                Naturbon is a skin-care products distribution company. This is
                an e-commerce webapp. I built this website for the client using
                the shopify Graphql Api to query the client products.
              </p>
              <div className="text-xs text-purple-600 pt-3 flex flex-wrap">
                <span className="bg-purple-600/20 rounded-full py-1 px-3 m-1">
                  Angular Js
                </span>
                <span className="bg-purple-600/20 rounded-full py-1 px-3 m-1">
                  Graphql
                </span>
                <span className="bg-purple-600/20 rounded-full py-1 px-3 m-1">
                  Firebase
                </span>
                <span className="bg-purple-600/20 rounded-full py-1 px-3 m-1">
                  Shopify
                </span>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="w-100 p-5 border-2 border-gray-800 shadow-lg shadow-purple-800/20 rounded-md"
          >
            <div className="flex flex-row justify-between items-center">
              <Image
                width={40}
                height={40}
                src="/images/icons/folder_open.svg"
                alt="Folder"
              />
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/i-Mhyke/WEATHER-APP"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithubAlt size={24} />
                </a>
                <a
                  href="https://i-mhyke.github.io/WEATHER-APP/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Go to site"
                >
                  <IoOpenOutline size={24} />
                </a>
              </div>
            </div>
            <div className="pt-4">
              <a
                href="https://i-mhyke.github.io/WEATHER-APP/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="font-bold text-xl mb-5 text-gray-200 font-sans hover:underline">
                  Weather App
                </h4>
              </a>
              <p className="text-gray-400 text-base">
                A simple weather app that visualizes the current weather
                condition in different cities around the world.
              </p>
              <div className="text-xs text-purple-600 pt-3 flex flex-wrap">
                <span className="bg-purple-600/20 rounded-full py-1 px-3 m-1">
                  HTML
                </span>
                <span className="bg-purple-600/20 rounded-full py-1 px-3 m-1">
                  Javascript
                </span>
                <span className="bg-purple-600/20 rounded-full py-1 px-3 m-1">
                  Bootstrap
                </span>
                <span className="bg-purple-600/20 rounded-full py-1 px-3 m-1">
                  Weather-Api
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-xl lg:max-w-4xl mx-auto pb-20 pt-32">
        <div>
          <h3
            data-aos="zoom-in"
            data-aos-delay="100"
            className="font-bold text-4xl relative text-center mb-16 text-shadow app-font"
          >
            Get In Touch
          </h3>
        </div>
        <div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="app-font text-5xl text-gray-400"
          >
            I&#39;d love to hear from you. Whether you have a question or you
            want me to handle your project — send me a message.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20">
            <div>
              <h4 className="font-bold text-2xl mb-5">
                Contact Me <AiOutlineContacts className="inline-block" />
              </h4>
              <p className="mb-3">
                <a
                  className="text-lg text-shadow"
                  href="mailto:ihunayamadu@gmail.com"
                >
                  ihunayamadu@gmail.com
                </a>
              </p>
              <p className="mb-3">
                <a className="text-lg text-shadow" href="tel:+2348170449749">
                  +2348170449749
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-bold text-2xl mb-5">Let&#39;s Connect 😎</h4>

              <p className="mb-2">
                <a
                  href="https://twitter.com/ihunayachukwu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="hover-effect social-links">Twitter</span>
                </a>
              </p>
              <p className="mb-2">
                <a
                  href="https://github.com/i-Mhyke"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="hover-effect social-links">Github</span>
                </a>
              </p>
              <p className="mb-2">
                <a
                  href="https://www.linkedin.com/in/michael-madumere/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="hover-effect social-links">LinkedIn</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-xl lg:max-w-4xl mx-auto pb-20 pt-10">
        <hr />
        <div className="mt-3 text-center">
          <p className="text-gray-400">
            &#169; Michael Madumere {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
