import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
      <div className="basis-1/3 flex-1">
        <img
          src={process.env.PUBLIC_URL + "web1.png"}
          alt=""
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <img
          src={process.env.PUBLIC_URL + "web2.png"}
          alt=""
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <img
          src={process.env.PUBLIC_URL + "web3.png"}
          alt=""
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <img
          src={process.env.PUBLIC_URL + "web4.png"}
          alt=""
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <img
          src={process.env.PUBLIC_URL + "web5.png"}
          alt=""
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <div className="basis-1/3 flex-1">
        <img
          src={process.env.PUBLIC_URL + "web6.png"}
          alt=""
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Projects;
