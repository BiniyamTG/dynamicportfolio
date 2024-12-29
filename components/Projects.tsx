import { amazonImg, cyberImg, noorShop } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="My Projects" titleNo="03" />

      {/* Project One */}
      <div className="flex flex-col xl:flex-row gap-6">
        <a
          className="w-full xl:w-1/2 h-auto relative group"
          href="https://bunavisa.com/"
          target="_blank"
        >
          <div>
            <Image
              className="w-full h-full object-contain"
              src={noorShop}
              alt="noorShop"
            />
            <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </div>
        </a>
        <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
          <div>
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">Buna Visa</h3>
          </div>
          <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
            The Buna Visa project is a{" "}
            <span className="text-textGreen">
              visually appealing and interactive travel agency website
            </span>{" "}
            designed to assist users in exploring study, work, and tourist visa
            options. It features mobile responsiveness, modern UI/UX elements,
            and detailed sections like FAQs, testimonials, and visa plans to
            enhance user experience and engagement.
          </p>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            <li>React</li>
            <li>Vercel</li>
          </ul>
          <div className="text-2xl flex gap-4">
            <a
              className="hover:text-textGreen duration-300"
              href="https://bunavisa.com/"
              target="_blank"
            >
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
      </div>

      {/* Project Two */}
      <div className="flex flex-col xl:flex-row-reverse gap-6">
        <a
          className="w-full xl:w-1/2 h-auto relative group"
          href="https://kelal-gebeya-frontend-4zqglzb7c-biniyam-teketels-projects.vercel.app/"
          target="_blank"
        >
          <div>
            <Image
              className="w-full h-full object-contain"
              src={cyberImg}
              alt="cyberImg"
            />
            <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </div>
        </a>
        <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
          <div>
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">Kelal Gebeya</h3>
          </div>
          <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
            <span className="text-textGreen">
              Kelal Gebeya is an eCommerce platform designed and built by
              Biniyam Teketel which is -
            </span>{" "}
            User-friendly interface | Detailed product listings | Streamlined
            shopping cart and checkout | Responsive design
          </p>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            <li>JS</li>
            <li>React</li>
            <li>Vite</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB Atlas</li>
            <li>Axios</li>
            <li>JWT</li>
          </ul>
          <div className="text-2xl flex gap-4">
            <a
              className="hover:text-textGreen duration-300"
              href="https://biniyamtg.github.io/CoupleCard/"
              target="_blank"
            >
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
      </div>

      {/* Project Three */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://biniyamtg.github.io/Nextflix/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={amazonImg}
                alt="amazonImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Nextflix</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              A movie app with <span className="text-textGreen">enhanced search engine</span> 
              and display <span className="text-textGreen">titles, ratings, posters, and overviews</span> plus user can access 
              <span className="text-textGreen"> thrillers</span> for the movies.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>React</li>
              <li>Vite</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://biniyamtg.github.io/Nextflix/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Four */}
      <div className="flex flex-col xl:flex-row-reverse gap-6">
        <a
          className="w-full xl:w-1/2 h-auto relative group"
          href="https://biniyamtg.github.io/CoupleCard/"
          target="_blank"
        >
          <div>
            <Image
              className="w-full h-full object-contain"
              src={cyberImg}
              alt="cyberImg"
            />
            <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </div>
        </a>
        <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
          <div>
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">እንጠያየቅ?</h3>
          </div>
          <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
            Is designed to foster <span className="text-textGreen">deeper conversations between couples.</span> It provides a collection of thought-provoking prompts and questions that encourage meaningful discussions and strengthen emotional connections.
          </p>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            <li>js</li>
          </ul>
          <div className="text-2xl flex gap-4">
            <a
              className="hover:text-textGreen duration-300"
              href="https://biniyamtg.github.io/CoupleCard/"
              target="_blank"
            >
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
      </div>

      {/* Project Five */}
      <div className="flex flex-col xl:flex-row gap-6">
        <a
          className="w-full xl:w-1/2 h-auto relative group"
          href="https://biniyamtg.github.io/Ben_poems/"
          target="_blank"
        >
          <div>
            <Image
              className="w-full h-full object-contain"
              src={noorShop}
              alt="noorShop"
            />
            <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
          </div>
        </a>
        <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
          <div>
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">Ben Poems</h3>
          </div>
          <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
            A website showcasing poetry by <span className="text-textGreen">Biniyam Teketel.</span> 
            The site includes a collection of thoughtful poems displayed elegantly, allowing for easy reading and enjoyment.
          </p>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
          </ul>
          <div className="text-2xl flex gap-4">
            <a
              className="hover:text-textGreen duration-300"
              href="https://biniyamtg.github.io/Ben_poems/"
              target="_blank"
            >
              <RxOpenInNewWindow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
