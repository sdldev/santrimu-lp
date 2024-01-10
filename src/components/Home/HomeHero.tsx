import { motion, AnimatePresence } from 'framer-motion'

const HomeHero = () => {
  return (
    <AnimatePresence>
      <section id="home" className="container py-8">
        <div
          className="container flex max-w-[64rem] h-screen flex-col items-center gap-5 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            className="flex flex-col items-center text-center leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-balance"
          >
            Aplikasi Satri-MU digagas untuk memenuhi kebutuhan management dan sistem
            informasi pondok, yang bisa di manfaatkan oleh pengelola, yayasan, maupun
            wali santri

            <p className="text-green-500 text-bold text-center pt-10">
              v.1.0.1 Beta
            </p>
          </motion.div>

        </div>
      </section>
    </AnimatePresence>
  );
};
export default HomeHero;
