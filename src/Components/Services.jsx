import Card from "./Card";

const Services = () => {
  return (
    <div>
      <div>
        <h2 className="text-3xl py-1 font-bold dark:text-gray-300">
          Service I offer
        </h2>
        <p className="text-md py2 leading-8 text-gray-800 dark:text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laborum
          aspernatur accusamus exercitationem corrupti. Voluptatem quo molestiae
          mollitia laborum id?
          <span className="text-teal-500"> agencies </span> Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Debitis, quae.
          <span className="text-teal-500"> startups </span> Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Provident, earum?
        </p>
        <p className="text-md py2 leading-8 text-gray-800 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
          repellendus provident. Saepe consequatur vero dignissimos, commodi
          sequi ducimus dolor harum.
        </p>
      </div>

      <Card />
    </div>
  );
};

export default Services;
