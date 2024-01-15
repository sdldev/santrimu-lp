import React, { useState } from "react";
import { motion, useSpring, useMotionTemplate, transform } from "framer-motion";
import { Facebook, Instagram } from "lucide-react";
import { BsWhatsapp, BsTelegram } from "react-icons/bs";
import { FadeIn } from "@/components/FadeIn";

export default function MotionOne() {
  /* State */
  const [frame, setFrame] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  /* Constants */
  /* Customize these to change the intensity of the 
  transforms and the bounciness of the animations. */
  const rotateValue = 25;
  const transformValue = rotateValue * 1;
  const springValue = { stiffness: 400, damping: 30 };

  /* UseSpring MotionValues */
  const rotateX = useSpring(0, springValue);
  const rotateY = useSpring(0, springValue);
  const x = useSpring(0, springValue);
  const y = useSpring(0, springValue);
  const shadowX = useSpring(0, springValue);
  const shadowY = useSpring(60, springValue);

  /* MotionTemplate for shadow property */
  /* With useMotionTemplate, you can use MotionValues (and thus, useSpring) within strings. This is useful for animating and interpolating properties like Drop Shadow, Box Shadow, Gradients, and many more. */
  const filter = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0, 0, 68, 0.25))`;

  /* Convert cursor position values */
  const convertCursorPosition = (e) => {
    const objectX = (e.nativeEvent.clientX - frame.left) / frame.width;
    const objectY = (e.nativeEvent.clientY - frame.top) / frame.height;

    rotateX.set(transform(objectY, [0, 1], [rotateValue, -rotateValue]));
    rotateY.set(transform(objectX, [0, 1], [-rotateValue, rotateValue]));
    x.set(transform(objectX, [0, 1], [-transformValue, transformValue]));
    y.set(transform(objectY, [0, 1], [-transformValue, transformValue]));

    shadowX.set(transform(objectX, [0, 1], [20, -20]));
    shadowY.set(transform(objectY, [0, 1], [60, 20]));
  };

  /* On Mouse Enter, get object frame and convert values */
  const handleMouseEnter = (e) => {
    const currentElement = e.target.getBoundingClientRect();

    setFrame({
      width: currentElement.width,
      height: currentElement.height,
      top: currentElement.top,
      left: currentElement.left,
    });

    convertCursorPosition(e);
  };

  /* On Mouse Move, convert values */
  const handleMouseMove = (e) => {
    convertCursorPosition(e);
  };

  /* On Mouse Leave, reset */
  const handleMouseLeave = (e) => {
    rotateX.set(0);
    rotateY.set(0);
    x.set(0);
    y.set(0);
    shadowX.set(0);
    shadowY.set(40);
  };

  return (
    <>
      <FadeIn>
        <div className="grid">
          <motion.div
            className="flex mx-auto w-[50vh] h-[50vh] items-center justify-center"
            style={{
              perspective: 800,
            }}
          >
            <motion.div
              className="w-[400px] cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                className="flex w-[400px] h-[400px] rounded-3xl items-center justify-center"
                style={{
                  rotateX,
                  rotateY,
                }}
              >
                <motion.img
                  className="rounded-full shadow-teal-700 dark:shadow-teal-300 ring-2 shadow-xl border-4 bg-gradient-to-br from-sky-300 via-sky-500 to-sky-700 border-teal-900"
                  src="/teams/agus-susanto.webp"
                  style={{
                    x,
                    y,
                    filter,
                  }}
                  height="186"
                  width="186"
                />
              </motion.div>
            </motion.div>
          </motion.div>
          <div className=" pb-10 md:pb-12">
            <motion.h1 className="flex flex-row justify-center text-center font-semibold leading-none tracking-normal text-xl xl:text-2xl bg-clip-text bg-gradient-to-r text-teal-900 dark:text-white">
              Agus Susanto
            </motion.h1>
            <motion.span className="block md:-mb-1 mx-auto text-center text-sm md:text-lg text-gray-800 dark:text-white/70">
              Noob Developer <br />
              FrontEnd/Website/Hosting
            </motion.span>
          </div>
          <div className="grid gap-4">
            <div className="grid mx-auto gap-4">
              <div className="mb-6 text-xs sm:text-lg space-y-3 text-gray-900 dark:text-white">
                <FadeIn>
                  <div className="flex bg-gradient-to-br m-2 h-12 from-teal-300 via-sky-800 to-teal-700 p-2 items-center gap-2 border-2 border-blue-900 rounded-xl">
                    <a href="https://t.me/cidara_sdl" target="_blank">
                      <p className="flex flex-row pr-2 text-white font-semibold">
                      <BsTelegram
                          title="telegram"
                          role="button"
                          name="stars-outline"
                          className="text-white h-8 w-8 p-1 rounded-sm mr-2"
                        />
                        Komunikasi via Telegram
                      </p>
                    </a>
                  </div>
                </FadeIn>
                <FadeIn>
                  <div className="flex flex-grow bg-gradient-to-br m-2 h-12 from-teal-300 via-sky-800 to-teal-700 p-2 items-center gap-2 border-2 border-blue-900 rounded-xl">
                    <a href="https://api.whatsapp.com/send/?phone=6289629143617&text=Hallo%2C%20indatechno%20support." target="_blank">
                      <p className="flex flex-row pr-2 text-white font-semibold">
                        <BsWhatsapp
                          title="whatsapp"
                          role="button"
                          name="stars-outline"
                          className="size-6 text-green-500 mr-4"
                        />
                        Whatsapp Official
                      </p>
                    </a>
                  </div>
                </FadeIn>
                <FadeIn>
                  <div className="flex bg-gradient-to-br m-2 h-12 from-teal-300 via-sky-800 to-teal-700 p-2 items-center gap-2 border-2 border-blue-900 rounded-xl">
                    <a href="https://www.facebook.com/ndaiponsel" target="_blank">
                      <p className="flex flex-row pr-2 text-white font-semibold">
                        <Facebook
                          title="Facebook"
                          role="button"
                          name="stars-outline"
                          className="text-white rounded-sm bg-sky-600 mr-4"
                        />
                        Facebook Official
                      </p>
                    </a>
                  </div>
                </FadeIn>
                <FadeIn>
                  <div className="flex bg-gradient-to-br m-2 h-12 from-teal-300 via-sky-800 to-teal-700 p-2 items-center gap-2 border-2 border-blue-900 rounded-xl">
                    <a href="https://www.instagram.com/argakampret" target="_blank">
                      <p className="flex flex-row pr-2 text-white font-semibold">
                        <Instagram
                          title="instagram"
                          role="button"
                          name="stars-outline"
                          className="text-orange-600 rounded-sm bg-transparent mr-4"
                        />
                        Instagram Official
                      </p>
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  );
}
