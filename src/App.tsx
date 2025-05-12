import { FaArrowDown, FaDownload } from "react-icons/fa";
import HeroImage from "../src/assets/hero.png";
import { listTools } from "./data";
function App() {
  return (
    <>
      <div
        className="hero grid md:grid-cols-2 pt-12 items-center xl:gap-0 gap-6 grid-cols-1"
        id="home"
      >
        <div>
          <div className="flex items-center gap-3 mb-6 dark:bg-zinc-700 bg-zinc-500 w-fit p-4 rounded-2xl text-light ">
            <img src={HeroImage} alt="Hero Image" className="w-10 rounded-md" />
            <q>Enjoy the moment, coding is life.🤘</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, My Name Is Muhammad Isa Nuruddin
          </h1>
          <p className="text-base/loose mb-6 opacity-70 text-dark dark:text-light dark:opacity-50 ">
            I'm delighted to connect with you and discuss everything related to
            technology, software development, or any other interesting topics.
            Let's collaborate, share ideas, and build beneficial relationships
            together! I'm looking forward to hearing from you soon.
          </p>
          <div className="flex items-center sm:gap-4 gap-2 ">
            <a
              href="#"
              className="bg-zinc-600 p-4 rounded-2xl hover:bg-zinc-500 dark:bg-primary dark:hover:bg-rose-400 flex text-light"
            >
              Download CV <FaDownload className="text-sm mt-1 mx-2" />
            </a>
            <a
              href="#proyek"
              className="bg-primary p-4 rounded-2xl hover:bg-rose-400 dark:bg-zinc-500 dark:hover:bg-zinc-500 flex text-light"
            >
              Lihat Proyek <FaArrowDown className="text-sm mt-1 mx-2" />
            </a>
          </div>
        </div>
        <img
          src={HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto"
        />
      </div>
      {/* ABOUT */}
      <div id="about" className="about mt-32 py-10">
        <div className="xl:w-2/3 lg:w3/4 w-full mx-auto dark:bg-zinc-800 bg-zinc-400 rounded-lg p-7">
          <p className="text-base/loose mb-10 text-light ">
            I am a fresh graduate in Informatics Engineering with a deep
            interest in web development, both on the frontend and backend sides.
            I am able to work effectively, both in a team and individually. I
            also have a strong understanding of modern web technologies and
            always strive to improve my skills in this field.
          </p>
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1  text-light">
                  10 <span className="text-secondary">+</span>
                </h1>
                <p className=" text-light">Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1 text-light">
                  1 <span className="text-secondary">+</span>
                </h1>
                <p className=" text-light">Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tools mt-32 ">
          <h1 className="text-4xl/snug font-bold mb-4 ">
            Tools yang digunakan
          </h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full  text-base/loose dark:opacity-50 opacity-80">
            Berikut ini beberapa tools yang biasa saya pakai ubtuk membuat
            website
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <a
                key={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="group flex items-center gap-2 p-3 border dark:border-zinc-600 border-zinc-300 rounded-md dark:hover:bg-zinc-800 hover:bg-zinc-300">
                  <img
                    src={tool.gambar}
                    alt="Tools Image"
                    className="w-14 bg-zinc-700 p-1 group-hover:bg-zinc-800"
                  />
                  <div>
                    <h4 className="font-semibold dark:font-bold ">
                      {tool.nama}
                    </h4>
                    <p className="dark:opacity-50 opacity-60">{tool.ket}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* END ABOUT */}
    </>
  );
}

export default App;
