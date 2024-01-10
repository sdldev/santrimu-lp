import { motion } from "framer-motion";

const HomeHero = () => {
  const containerHomeVariants = {
    hidden: {
      opacity: 0,
      x: -25,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 150,
      },
    },
  };

  const descriptionHomeVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1.0,
      },
    },
  };

  return (
    <>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        className="flex xl:justify-center">
        <img
          src="/images/background-santrimu.webp"
          decoding="async"
          loading="lazy"
          alt="Santri-MU"
          width="300"
          height="300"
          className="mt-1 max-w-full"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerHomeVariants}
        className="flex flex-col items-center text-center"
      >
        <h1
          className="font-heading text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl !leading-[1.1] text-balance"
        >
          <span className="text-gradient_indigo-purple">
            Santri <span className="font-sans font-bold">+</span>MU
          </span>
        </h1>
        <h2 className="max-w-[42rem] leading-normal sm:text-xl sm:leading-8 text-2xl">
          Aplikasi Terpadu Santri Boarding School
        </h2>
        <div className="relative -z-10"></div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={descriptionHomeVariants}
        className="flex flex-col items-center text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-balance"
      >
        Aplikasi Satri-MU digagas untuk memenuhi kebutuhan management dan sistem
        informasi pondok, yang bisa di manfaatkan oleh pengelola, yayasan, maupun
        wali santri

        <p className="text-green-500 text-bold text-center pt-10">
          v.1.0.1 Beta
        </p>
      </motion.div>
    </>
  );
};

export default HomeHero;
