import { FadeIn } from "@/components/FadeIn";
import { Container } from "@/components/Container";

const LinkTree = () => {
  return (
    <Container>
      <FadeIn>
        <div className="grid grid-cols-1 w-full md:w-[80%] md:grid-cols-2 mx-auto">
          <div className="grid">
            <div className="flex flex-col p-2.5 my-2 md:my-4 shadow-up max-w-lg sm:mx-auto rounded-3xl">
              <div className="flex flex-col items-end justify-center">
                <div className="atropos shadow-gray-700 rounded-lg pt-4 px-6 shadow-down dark:shadow-orange-dark w-full">
                  <div className="atropos-scale">
                    <div className="atropos-rotate">
                      <div className="atropos-inner transition-all duration-800 relative p-2 dark:bg-transparent md:backdrop-blur-sm flex flex-col focus:outline-none">
                        <div className="atropos-inner transition-all duration-800 relative py-6 px-2 md:px-4 2xl:px-15 md:backdrop-blur-sm flex flex-col dark:border-gray-800 dark:bg-transparent dark:shadow-orange-800">
                          <div
                            className="flex items-center justify-center pt-2"
                            data-atropos-offset="5"
                          >
                            <img
                              className="rounded-full shadow-teal-700 ring-2 shadow-md border-4 bg-gradient-to-br from-sky-300 via-sky-500 to-sky-700 border-teal-900"
                              src="/teams/kangwie.webp"
                              height="186"
                              width="186"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h1
                className="flex flex-row pt-1 md:pt-2 2xl:pt-3 justify-center text-center font-semibold leading-none tracking-normal text-xl xl:text-2xl bg-clip-text bg-gradient-to-r text-teal-900 dark:text-white"
                data-atropos-offset="2"
              >
                Dwi Anshori
              </h1>
              <span className="block md:-mb-1 mx-auto text-center text-sm md:text-lg text-gray-800 dark:text-white/70">
                Leader Project <br />
                Backend Developer/Website/Hosting
              </span>
            </div>

            <div className="grid gap-4">
              <div className="grid mx-auto gap-4">
                <div className="mb-6 text-xs sm:text-lg space-y-2 text-gray-900 dark:text-white">
                  <div className="flex flex-grow bg-gradient-to-br m-2 h-12 from-teal-300 via-sky-800 to-teal-700 p-2 items-center gap-2 border-2 border-blue-900 rounded-xl">
                    <svg
                      className="rounded-full p-1 text-white dark:text-blue-600 dark:bg-gray-700"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z"
                        stroke="currentColor"
                      ></path>
                    </svg>
                    <a href="/" target="_blank">
                      <p className="pr-2 text-white font-semibold">
                        Instagram Official
                      </p>
                    </a>
                  </div>
                  <div className="flex bg-gradient-to-br m-2 h-12 from-teal-300 via-sky-800 to-teal-700 p-2 items-center gap-2 border-2 border-blue-900 rounded-xl">
                    <svg
                      className="rounded-full p-1 text-white dark:text-blue-600 dark:bg-gray-700"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"
                        stroke="currentColor"
                      ></path>
                    </svg>
                    <a href="/" target="_blank">
                      <p className="pr-2 text-white font-semibold">
                        Facebook Official
                      </p>
                    </a>
                  </div>
                  <div className="flex bg-gradient-to-br m-2 h-12 from-teal-300 via-sky-800 to-teal-700 p-2 items-center gap-2 border-2 border-blue-900 rounded-xl">
                    <svg
                      className="rounded-full p-1 text-white dark:text-blue-600 dark:bg-gray-700"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 5.8a8.49 8.49 0 0 1-2.36.64a4.13 4.13 0 0 0 1.81-2.27a8.21 8.21 0 0 1-2.61 1a4.1 4.1 0 0 0-7 3.74a11.64 11.64 0 0 1-8.45-4.29a4.16 4.16 0 0 0-.55 2.07a4.09 4.09 0 0 0 1.82 3.41a4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4a3.93 3.93 0 0 1-1.1.17a4.9 4.9 0 0 1-.77-.07a4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a7.93 7.93 0 0 1-1-.06a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.43 8.43 0 0 0 2-2.12Z"
                        stroke="currentColor"
                      ></path>
                    </svg>
                    <a href="/" target="_blank">
                      <p className="pr-2 text-white font-semibold">
                        Twitter Official
                      </p>
                    </a>
                  </div>
                  <div className="flex bg-gradient-to-br m-2 h-12 from-teal-300 via-sky-800 to-teal-700 p-2 items-center gap-2 border-2 border-blue-900 rounded-xl">
                    <svg
                      className="rounded-full p-1 text-white dark:text-blue-600 dark:bg-gray-700"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"
                        stroke="currentColor"
                      ></path>
                    </svg>
                    <a href="/" target="_blank">
                      <p className="pr-2 text-white font-semibold">
                        Tiktok Official
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="flex flex-col p-2.5 my-2 md:my-4 shadow-up max-w-lg sm:mx-auto rounded-3xl">
              <div className="flex flex-col items-end justify-center">
                <div className="atropos1 shadow-gray-700 rounded-lg pt-4 px-6 shadow-down dark:shadow-orange-dark w-full">
                  <div className="atropos1-scale">
                    <div className="atropos1-rotate">
                      <div className="atropos1-inner transition-all duration-800 relative p-2 dark:bg-transparent md:backdrop-blur-sm flex flex-col focus:outline-none">
                        <div className="atropos1-inner transition-all duration-800 relative py-6 px-2 md:px-4 2xl:px-15 md:backdrop-blur-sm flex flex-col dark:border-gray-800 dark:bg-transparent dark:shadow-orange-800">
                          <div
                            className="flex items-center justify-center pt-2"
                            data-atropos1-offset="5"
                          >
                            <img
                              className="rounded-full shadow-teal-700 ring-2 shadow-md border-4 bg-gradient-to-br from-sky-300 via-sky-500 to-sky-700 border-teal-900"
                              src="/teams/agus-susanto.webp"
                              height="186"
                              width="186"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h1
                className="flex flex-row pt-1 md:pt-2 2xl:pt-3 justify-center text-center font-semibold leading-none tracking-normal text-xl xl:text-2xl bg-clip-text bg-gradient-to-r text-teal-900 dark:text-white"
                data-atropos1-offset="2"
              >
                Agus Susanto
              </h1>
              <span className="block md:-mb-1 mx-auto text-center text-sm md:text-lg text-gray-800 dark:text-white/70">
                Newbie Developer <br />
                Website/FrontEnd/Hosting
              </span>
            </div>

            <div className="grid gap-4">
              <div className="grid mx-auto gap-4">
                <div className="mb-6 text-xs sm:text-lg space-y-2 text-gray-900 dark:text-white">
                  <div className="flex flex-grow bg-gradient-to-br m-2 h-12 from-teal-300 via-sky-800 to-teal-700 p-2 items-center gap-2 border-2 border-blue-900 rounded-xl">
                    <svg
                      className="rounded-full p-1 text-white dark:text-blue-600 dark:bg-gray-700"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z"
                        stroke="currentColor"
                      ></path>
                    </svg>
                    <a href="/" target="_blank">
                      <p className="pr-2 text-white font-semibold">
                        Instagram Official
                      </p>
                    </a>
                  </div>
                  <div className="flex bg-gradient-to-br m-2 h-12 from-teal-300 via-sky-800 to-teal-700 p-2 items-center gap-2 border-2 border-blue-900 rounded-xl">
                    <svg
                      className="rounded-full p-1 text-white dark:text-blue-600 dark:bg-gray-700"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z"
                        stroke="currentColor"
                      ></path>
                    </svg>
                    <a href="/" target="_blank">
                      <p className="pr-2 text-white font-semibold">
                        Facebook Official
                      </p>
                    </a>
                  </div>
                  <div className="flex bg-gradient-to-br m-2 h-12 from-teal-300 via-sky-800 to-teal-700 p-2 items-center gap-2 border-2 border-blue-900 rounded-xl">
                    <svg
                      className="rounded-full p-1 text-white dark:text-blue-600 dark:bg-gray-700"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 5.8a8.49 8.49 0 0 1-2.36.64a4.13 4.13 0 0 0 1.81-2.27a8.21 8.21 0 0 1-2.61 1a4.1 4.1 0 0 0-7 3.74a11.64 11.64 0 0 1-8.45-4.29a4.16 4.16 0 0 0-.55 2.07a4.09 4.09 0 0 0 1.82 3.41a4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4a3.93 3.93 0 0 1-1.1.17a4.9 4.9 0 0 1-.77-.07a4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a7.93 7.93 0 0 1-1-.06a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.43 8.43 0 0 0 2-2.12Z"
                        stroke="currentColor"
                      ></path>
                    </svg>
                    <a href="/" target="_blank">
                      <p className="pr-2 text-white font-semibold">
                        Twitter Official
                      </p>
                    </a>
                  </div>
                  <div className="flex bg-gradient-to-br m-2 h-12 from-teal-300 via-sky-800 to-teal-700 p-2 items-center gap-2 border-2 border-blue-900 rounded-xl">
                    <svg
                      className="rounded-full p-1 text-white dark:text-blue-600 dark:bg-gray-700"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"
                        stroke="currentColor"
                      ></path>
                    </svg>
                    <a href="/" target="_blank">
                      <p className="pr-2 text-white font-semibold">
                        Tiktok Official
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};
export default LinkTree;
