import { motion } from "framer-motion";

const HomeContent = () => {
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
        delay: 0.8,
        duration: 1.5,
      },
    },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerHomeVariants}
        className="text-white flex flex-col items-center text-center"
      >
        <h1 className="mx-2 xl:text-[82px] md:text-[70px] text-[32px] font-bold">
          Santri <span className="text-green-600">MU</span>
        </h1>
        <h2 className="text-gray-300 xl:text-5xl md:text-4xl text-xl">
          Aplikasi Terpadu Santri Boarding School
        </h2>
        <div className="relative -z-10"></div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={descriptionHomeVariants}
        className="md:text-[24px] max-w-3xl  md:leading-10 leading-6"
      >
        <h3 className="text-gray-300 text-sm text-center">
          Aplikasi Satri-MU digagas untuk memenuhi kebutuhan management dan
          sistem informasi pondok, baik untuk pengelola, yayasan, maupun wali
          santri
        </h3>

        <p className="text-green-500 text-bold text-center pt-10">
          v.1.0.1 Beta
        </p>
      </motion.div>
    </>
  );
};

export default HomeContent;
