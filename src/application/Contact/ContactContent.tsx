import { FadeIn } from "@/components/FadeIn";
import { Container } from "@/components/Container";

const ContactContent = () => {
  return (
    <Container>
      <FadeIn>
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
          <div className="max-w-4xl mx-auto w-full">
            <div className="flex flex-col md:flex-row h-full">
              <div className="bg-teal-900 p-10 col-span-2">
                <h2 className="mb-10 font-bold text-2xl text-teal-100 before:block before:absolute before:bg-teal-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
                  Info Kontak
                </h2>
                <p className="font-bold text-teal-100 py-8 border-b border-teal-700">
                  Alamat
                  <span className="font-normal text-xs text-teal-300 block">
                    Romada, 16/A, YoYo City, USA
                  </span>
                </p>
                <p className="font-bold text-teal-100 py-8 border-b border-teal-700">
                  Telepon
                  <span className="font-normal text-xs text-teal-300 block">
                    +889 (909) 567 87 9
                  </span>
                </p>
                <p className="font-bold text-teal-100 py-8 border-b border-teal-700">
                  Email
                  <span className="font-normal text-xs text-teal-300 block">
                    admin@santrimu.com
                  </span>
                </p>
                <p className="font-bold text-teal-100 py-8 border-b border-teal-700">
                  Website
                  <span className="font-normal text-xs text-teal-300 block">
                    santrimu.com
                  </span>
                </p>
              </div>
              <div className="p-6 md:pl-24 md:p-0 col-span-4">
                <h2 className="mb-14 font-bold text-4xl text-teal-900 before:block before:absolute before:bg-teal-600 before:content[''] relative before:w-32 md:before:w-72 before:h-1 before:-skew-y-2 before:-bottom-4">
                  Hubungi Kami via Email
                </h2>
                <div className="gap-6 mb-6 flex flex-col md:flex-row">
                  <div className="flex flex-col md:flex-row text-gray-900">
                    <input
                      className="bg-teal-100 py-3 rounded-full px-6 placeholder:text-xs"
                      aria-placeholder="name"
                      placeholder="Nama Anda"
                    ></input>
                  </div>
                  <div className="flex flex-col">
                    <input
                      className="bg-teal-100 py-3 rounded-full px-6 placeholder:text-xs"
                      aria-placeholder="email"
                      placeholder="Alamat Email"
                    ></input>
                  </div>
                </div>
                <div className="mb-6">
                  <textarea
                    className="w-full bg-teal-100 rounded-2xl placeholder:text-xs px-6 py-4"
                    placeholder="Pesan"
                    name=""
                    id=""
                    rows={8}
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button className="rounded-full bg-teal-900 text-white font-bold py-4 px-6 min-w-40 hover:bg-teal-800 transition-all">
                    Kirim
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
};
export default ContactContent;
