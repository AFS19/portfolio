import React from "react";

const Card = () => {
  return (
    <div className="lg:flex gap-10">
      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 dark:text-gray-400">
        <img
          src={process.env.PUBLIC_URL + "design.png"}
          alt=""
          className="w-100 h-100"
        />
        <h3 className="text-xl font-bold pt-8 pb-2">Beautiful Designs</h3>
        <p className="py-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam,
          veniam incidunt iste nisi ipsa accusamus est id quas reprehenderit
          iure.
        </p>
        <h4 className="py-4 text-teal-600 font-medium">Design tools I use</h4>
        <p className="text-gray-800 font-medium dark:text-gray-400 border-b  py-1 my-2">
          Photoshop
        </p>
        <p className="text-gray-800 font-medium dark:text-gray-400 border-b  py-1 my-2">
          Illustrator
        </p>
        <p className="text-gray-800 font-medium dark:text-gray-400 border-b  py-1 my-2">
          Figma
        </p>
      </div>

      <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 dark:text-gray-400">
        <img
          src={process.env.PUBLIC_URL + "consulting.png"}
          alt=""
          className="w-100 h-100"
        />
        <h3 className="text-xl font-bold pt-8 pb-2">Beautiful Designs</h3>
        <p className="py-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam,
          veniam incidunt iste nisi ipsa accusamus est id quas reprehenderit
          iure.
        </p>
        <h4 className="py-4 text-teal-600 font-medium">Design tools I use</h4>
        <p className="text-gray-800 font-medium dark:text-gray-400 border-b  py-1 my-2">
          Photoshop
        </p>
        <p className="text-gray-800 font-medium dark:text-gray-400 border-b  py-1 my-2">
          Illustrator
        </p>
        <p className="text-gray-800 font-medium dark:text-gray-400 border-b  py-1 my-2">
          Figma
        </p>
      </div>

      <div className="text-center  shadow-2xl p-10 rounded-xl my-10 dark:bg-gray-800 dark:text-gray-400">
        <img
          src={process.env.PUBLIC_URL + "code.png"}
          alt=""
          className="w-100 h-100"
        />
        <h3 className="text-xl font-bold pt-8 pb-2">Beautiful Designs</h3>
        <p className="py-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam,
          veniam incidunt iste nisi ipsa accusamus est id quas reprehenderit
          iure.
        </p>
        <h4 className="py-4 text-teal-600 font-medium">Design tools I use</h4>
        <p className="text-gray-800 font-medium dark:text-gray-400 border-b  py-1 my-2">
          Photoshop
        </p>
        <p className="text-gray-800 font-medium dark:text-gray-400 border-b  py-1 my-2">
          Illustrator
        </p>
        <p className="text-gray-800 font-medium dark:text-gray-400 border-b  py-1 my-2">
          Figma
        </p>
      </div>
    </div>
  );
};

export default Card;
