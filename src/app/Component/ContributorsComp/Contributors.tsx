import React from "react";
import contributorsData from "./date.json";
import Card from "./Card";

function Contributors(): JSX.Element {
  return (
    <section
    className="flex flex-col justify-center items-center w-full overflow-hidden"
    >
    
        <div
          className="text-center max-w-4xl w-full  mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32 relative z-10 space-y-12 lg:space-y-24 text-white dark:text-gray-100 font-bold text-3xl lg:text-6xl
      
       "
        >
          <h2 className=" font-bold mb-8 bg-black  before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            Contributors
          </h2>
          <p
            className="mb-9 text-gray-600 text-lg dark:text-gray-400"
            data-config-id="auto-txt-15-2"
            data-path="0.1.0.0.0.2"
          >
            Meet the amazing people who contributed to this project:
          </p>
        </div>
    
      <div className="flex flex-wrap gap-2 justify-center max-w-[1400px] items-center -m-6 pt-32 pb-36 dark:text-white">
        {contributorsData.contributors?.map((contributor) => (
          <Card
            key={contributor.id}
            name={contributor.name}
            username={contributor.github}
            picture={contributor.picture}
          />
        ))}
      </div>
    </section>
  );
}

export default Contributors;
