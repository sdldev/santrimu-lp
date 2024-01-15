import { FadeIn } from "@/components/FadeIn";
import { Container } from "@/components/Container";
const AboutContent = () => {
  return (
    <Container>
      <FadeIn className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          About Santri-Mu
        </h2>
        <p className="max-w-full leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Santri-Mu lahir pada bulan Januari 2024. Berawal dari keresahan wali
          santri yang ingin mendapatkan informasi tentang perkembangan anaknya
          yang baru mondok. Dan ternyata memang lazim terjadi pada seorang wali
          yang baru pertama kali melepas anaknya pisah dari orang tua untuk
          menuntut ilmu agama.
        </p>
        <p className="max-w-full leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Berbekal informasi dari diskusi dengan beberapa beberapa wali santri,
          pengasuh pondok pesantren, dan ustadz/ustadzah pendamping, ternyata
          banyak sekali permasalahan-permasalahan yang penyelesaiannya bisa
          melibatkan peran aktiv wali santri.
        </p>
        <p className="max-w-full leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Sebut saja salah satu permasalahan di podok (<i>Bording School</i>)
          tentang uang saku santri. Terlihat sepele tapi dampaknya besar. Yang
          semestinya ustadz/ustadzah pendamping bisa fokus memberikan ilmu,
          alih-alih jajan santri tidak telat, ustadz/ustadzah pendamping malah
          sibuk urusi tranferan, mencatat uang saku, membagikan uang saku kepada
          santri dan lain2.
        </p>
        <p className="max-w-full leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Tidak semua pondok pesantren memiliki kemampuan di bidang IT untuk
          membuat sebuah sistem yang bisa membantu meringankan tugas
          ustadz/ustadzah pendamping tersebut.
        </p>
        <p className="max-w-full leading-normal text-muted-foreground sm:text-lg sm:leading-7"></p>
        <p className="max-w-full leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Kami developer <a href="https://indatechno.com">Indatechno</a>
          bekerjasama dengan beberapa pondok pesantren, berniat untuk memberikan
          bantuan di bidang IT berupa aplikasi2 sederhana, yang bisa meringankan
          beban ustadz/ustadzah pendamping, pengasuh pondok, pengelola dan
          yayasan, dalam mengelola dan menata menajemen ponpes.
        </p>
        <p className="max-w-full leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Tanpa duduk bersama, tentunya apa yang akan kami lakukan tidaklah
          gampang. Mengingat apa yang akan di buat berasal dari pemikiran dan
          keadaan yang berbeda-beda. Tapi kami yakin dan percaya, apa yang akan
          kami lakukan akan memberikan kebaikan dan manfaat.
        </p>
        <p className="max-w-full leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Akhir kata, kami mengharapkan kritik dan saran, serta support untuk
          mewujudkan cita2 kita bersama.
        </p>
        <div className="flex flex-col md:flex-row w-full lg:justify-center lg:items-center">
            <div
            className="mx-auto md:w-1/4 h-1/2 flex">
            <img
              src="/images/santrimu.png"
              decoding="async"
              loading="lazy"
              alt="Santri-MU"
              width="300"
              height="250"
              className="mt-6 max-w-full"
            />
          </div>
        <div className="mx-auto md:w-3/4 px-4 md:px-8 2xl:px-16">
          <div className="flex flex-col py-7 md:py-9 mt-7">
            <h4 className="text-xl 2xl:text-2xl font-semibold text-heading">
              Tertarik Bekerja Dengan Kami?
            </h4>
            <p className="text-base">Hubungi Kami via e-mail</p>
          </div>
          <div className="md:w-full flex h-full ltr:md:ml-7 rtl:md:mr-7 flex-col ltr:lg:pl-7 rtl:lg:pr-7">
            <form
              className="w-full mx-auto flex flex-col justify-center "
              noValidate
            >
              <div className="flex flex-col space-y-5">
                <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 gap-4">
                  <div className="w-full ">
                    <label
                      htmlFor="name"
                      className="block font-semibold text-sm leading-none mb-3 cursor-pointer"
                    >
                      Nama Anda (<span className="text-red-600 text-xl">*</span>)
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Tulis Nama Anda"
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                      autoComplete="off"
                      spellCheck="false"
                      aria-invalid="false"
                    />
                  </div>
                  <div className="w-full ltr:md:ml-2.5 rtl:md:mr-2.5 ltr:lg:ml-5 rtl:lg:mr-5 mt-2 md:mt-0">
                    <label
                      htmlFor="email"
                      className="block font-semibold text-sm leading-none mb-3 cursor-pointer"
                    >
                      E-mail (<span className="text-red-600 text-xl">*</span>)
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Tulis E-mail Anda"
                      className="py-2 px-4 md:px-5 w-full appearance-none border text-input text-xs lg:text-sm font-body placeholder-body min-h-12 transition duration-200 ease-in-out border-gray-300 focus:outline-none focus:border-heading h-11 md:h-12"
                      autoComplete="off"
                      spellCheck="false"
                      aria-invalid="false"
                    />
                  </div>
                </div>
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="block font-semibold text-sm leading-none mb-3"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="px-4 py-3 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 bg-white border border-gray-300 focus:shadow focus:outline-none focus:border-heading placeholder-body"
                    autoComplete="off"
                    spellCheck="false"
                    rows={4}
                    placeholder="Tulis Pesan Anda disini"
                  ></textarea>
                </div>
                <div className="relative">
                  <button
                    data-variant="flat"
                    className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none  bg-black text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart h-12 lg:h-14 mt-1 text-sm lg:text-base w-full sm:w-auto"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
          </div>
      </FadeIn>
    </Container>
  );
};
export default AboutContent;
