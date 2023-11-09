

import React from 'react';
import Image from 'next/image';



function Card(props:any) {
    const githubLink = `https://github.com/${props.username}`;

    return (
        <div className="block rounded-lg bg-gray-700/40 shadow-lg ">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Image
                    className="rounded-t-lg"
                    src={props.picture}
                    alt=""
                    width={300} // specify the width
                    height={250} // specify the height
                />
            </a>
            <div className="p-6">
                <h2 className="mb-2 text-3xl font-bold leading-tight text-white dark:text-neutral-50 capitalize">
                    {props.name}
                </h2>

                <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white bg-yellow-500 hover:bg-yellow-600 dark:bg-neutral-700 dark:hover:bg-neutral-600"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="inline-block mr-2"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 .5a7.5 7.5 0 0 0-2.384 14.583c.374.069.511-.162.511-.361 0-.178-.006-.646-.01-1.266-2.082.452-2.524-1.006-2.524-1.006-.341-.866-.832-1.098-.832-1.098-.68-.465.052-.455.052-.455.753.053 1.149.773 1.149.773.668 1.146 1.754.815 2.183.625.067-.484.26-.815.474-1.002-1.658-.187-3.404-.829-3.404-3.688 0-.816.292-1.487.773-2.011-.077-.188-.335-.955.072-1.988 0 0 .633-.202 2.073.769a7.157 7.157 0 0 1 1.938-.262c.658 0 1.32.088 1.938.262 1.44-.971 2.073-.769 2.073-.769.407 1.033.15 1.8.073 1.988.482.524.772 1.195.772 2.011 0 2.866-1.747 3.498-3.411 3.682.268.231.506.686.506 1.384 0 1.001-.01 1.807-.01 2.052 0 .199.135.43.515.36A7.5 7.5 0 0 0 8 .5z"
                        />
                    </svg>
                    GitHub
                </a>
            </div>
        </div>
    );
}

export default Card;


