import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/Container'
const AboutContent = () => {
    return (
        <Container >
            <FadeIn
                className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4"
            >
                <h2
                    className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl"
                >
                    About Santri-Mu
                </h2>
                <p
                    className="max-w-full leading-normal text-muted-foreground sm:text-lg sm:leading-7"
                >
                    Santri-Mu lahir pada bulan Januari 2024. Berawal dari keresahan wali
                    santri yang ingin mendapatkan informasi tentang perkembangan anaknya yang
                    baru mondok. Dan ternyata memang lazim terjadi pada seorang wali yang baru
                    pertama kali melepas anaknya pisah dari orang tua untuk menuntut ilmu
                    agama.
                </p>
                <p
                    className="max-w-full leading-normal text-muted-foreground sm:text-lg sm:leading-7"
                >
                    Berbekal informasi dari diskusi dengan beberapa beberapa wali santri,
                    pengasuh pondok pesantren, dan ustadz/ustadzah pendamping, ternyata banyak
                    sekali permasalahan-permasalahan yang penyelesaiannya bisa melibatkan
                    peran aktiv wali santri.
                </p>
                <p
                    className="max-w-full leading-normal text-muted-foreground sm:text-lg sm:leading-7"
                >
                    Sebut saja salah satu permasalahan di podok (<i>Bording School</i>)
                    tentang uang saku santri. Terlihat sepele tapi dampaknya besar. Yang
                    semestinya ustadz/ustadzah pendamping bisa fokus memberikan ilmu,
                    alih-alih jajan santri tidak telat, ustadz/ustadzah pendamping malah sibuk
                    urusi tranferan, mencatat uang saku, membagikan uang saku kepada santri
                    dan lain2.
                </p>
                <p
                    className="max-w-full leading-normal text-muted-foreground sm:text-lg sm:leading-7"
                >
                    Tidak semua pondok pesantren memiliki kemampuan di bidang IT untuk membuat
                    sebuah sistem yang bisa membantu meringankan tugas ustadz/ustadzah
                    pendamping tersebut.
                </p>
                <p
                    className="max-w-full leading-normal text-muted-foreground sm:text-lg sm:leading-7"
                >
                </p>
                <p
                    className="max-w-full leading-normal text-muted-foreground sm:text-lg sm:leading-7"
                >
                    Kami developer <a href="https://indatechno.com">Indatechno</a>
                    bekerjasama dengan beberapa pondok pesantren, berniat untuk memberikan bantuan
                    di bidang IT berupa aplikasi2 sederhana, yang bisa meringankan beban ustadz/ustadzah
                    pendamping, pengasuh pondok, pengelola dan yayasan, dalam mengelola dan menata
                    menajemen ponpes.

                </p>
                <p
                    className="max-w-full leading-normal text-muted-foreground sm:text-lg sm:leading-7"
                >
                    Tanpa duduk bersama, tentunya apa yang akan kami lakukan tidaklah gampang.
                    Mengingat apa yang akan di buat berasal dari pemikiran dan keadaan yang
                    berbeda-beda. Tapi kami yakin dan percaya, apa yang akan kami lakukan akan
                    memberikan kebaikan dan manfaat.

                </p>
                <p
                    className="max-w-full leading-normal text-muted-foreground sm:text-lg sm:leading-7"
                >
                    Akhir kata, kami mengharapkan kritik dan saran, serta support untuk
                    mewujudkan cita2 kita bersama.

                </p>
            </FadeIn>

        </Container >

    );
};
export default AboutContent;
