import { FadeIn } from "@/components/FadeIn";
import { Container } from "@/components/Container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
const banks = [
  ['1132142132', 'Bank Lampung', '/teams/bank-lampung.webp', 'a/n Santrimu'],
  [ '43245434663', 'Bank Mandiri', '/teams/mandiri.webp', 'a/n Santrimu'],
  ['346355654', 'Bank BRI', '/teams/bri.webp', 'a/n Santrimu'],
  ['679645633', 'Bank BSI', '/teams/bsi.webp', 'a/n Santrimu'],
  ['8643563434', 'Bank BNI', '/teams/bni.webp', 'a/n Santrimu'],
]
const AboutContent = () => {
  return (
    <Container>
      <FadeIn className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4">
        <h2 className="font-heading text-2xl py-12 font-semibold leading-[1.1] sm:text-3xl md:text-5xl">
        Salurkan donasi Anda
        </h2>
        <p className="mx-auto text-center w-4/6 leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        مَثَلُ الَّذِيْنَ يُنْفِقُوْنَ اَمْوَالَهُمْ فِيْ سَبِيْلِ اللّٰهِ كَمَثَلِ حَبَّةٍ اَنْۢبَتَتْ سَبْعَ سَنَابِلَ فِيْ كُلِّ سُنْۢبُلَةٍ مِّائَةُ حَبَّةٍ ۗ وَاللّٰهُ يُضٰعِفُ لِمَنْ يَّشَاۤءُ ۗوَاللّٰهُ وَاسِعٌ عَلِيْمٌ 

        </p>
        <p className="mx-auto text-center w-5/6 leading-normal text-muted-foreground text-xs md:text-sm sm:leading-7">
        Artinya: "Perumpamaan orang-orang yang menginfakkan hartanya di jalan Allah adalah seperti (orang-orang yang menabur) sebutir biji (benih) yang menumbuhkan tujuh tangkai, pada setiap tangkai ada seratus biji. Allah melipatgandakan (pahala) bagi siapa yang Dia kehendaki. Allah Maha Luas lagi Maha Mengetahui."

        </p>
    <div className="rounded-4xl py-16 md:py-24">

          <ul role="list" className="mt-6 grid gap-x-32 gap-y-10 lg:grid-cols-3">

            {banks.map(([norek, bank, logo, rekening]) => (
              <li key={norek}>
                <FadeIn>
                  <div className="flex items-center">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={logo} alt={norek} />
                      <AvatarFallback>MBS</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm leading-none">{bank}</p>
                      <p className="text-xs text-muted-foreground">{norek}</p>
                      <p className="text-xs">
                        {rekening}
                      </p>
                    </div>
                  </div>

                </FadeIn>
              </li>
            ))}
          </ul>
    </div>
      </FadeIn>
    </Container>
  );
};
export default AboutContent;
