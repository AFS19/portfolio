import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const Hero = () => {
  return (
    <>
      <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl ">
        M.AFS
      </h2>
      <h3 className="text-2xl py-2 md:text-3xl">FullStack Developer</h3>
      <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-300">
        I'm currently enrolled as a Technician Specialized in Digital
        Development at ISTA AL ADARISA in Fez, Morocco. I'm constantly working
        to improve my profession.
      </p>
      <div className="flex justify-center gap-16 text-5xl py-3 text-gray-600 dark:text-gray-300">
        <a
          href="https://github.com/AFS19"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110"
        >
          <AiFillGithub />
        </a>

        <a
          href="https://linkedin.com/in/mohamed-afssas-04030a269"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://twitter.com/afssas_mohamed"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-110"
        >
          <AiFillTwitterCircle />
        </a>
      </div>
      <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto mt-20 overflow-hidden md:h-96 md:w-96">
        <img
          src={process.env.PUBLIC_URL + "/dev-ed-wave.png"}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default Hero;
