    import React from 'react';
    import contributorsData from './date.json';
    import Card from './Card';

    interface Contributor {
      id: string;
      name: string;
      github: string;
      picture: string;
    }
 
    function Contributors(): JSX.Element {
      return (
        <section>
          <div style={{ textAlign: 'center', fontSize: '24px' }}>
            <h1
              className="mb-6 font-heading text-7xl md:text-10xl xl:text-12xl font-bold dark:text-white"
              data-config-id="auto-txt-14-2"
              data-path="0.1.0.0.0.1"
            >
              {' '}
              Contributors
            </h1>
            <p
              className="mb-9 text-gray-600 text-lg dark:text-gray-400"
              data-config-id="auto-txt-15-2"
              data-path="0.1.0.0.0.2"
            >
              Meet the amazing people who contributed to this project:
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center max-w-[1400px] items-center -m-6 pt-32 pb-36 dark:text-white">
            {contributorsData.contributors?.map((contributor: Contributor) => (
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
