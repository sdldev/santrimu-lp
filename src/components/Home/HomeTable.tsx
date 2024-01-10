import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { motion, AnimatePresence } from 'framer-motion'

const problems = [
    {
        invoice: "Wali santri ingin mendapat informasi terkini perkembangan belajar anak.",
        paymentStatus: "Pada aplikasi, terdapat fitur dimana wali santri bisa mendapat informasi terkini perkembangan anak",
    },
    {
        invoice: "Keadaan uang saku santri",
        paymentStatus: "Update terkini keadaan uang saku santri. Jika kondisi tertentu (santri mengambil uang saku mingguan, uang saku tinggal sedikit) maka ada notifikasi otomatis ke wali santri.",
    },
    {
        invoice: "Transfer uang saku santri",
        paymentStatus: "Pada aplikasi terdapat nomer rekening wali hujroh. Jika wali santri melakukan transfer uang saku, dan kemudian wali santri mengisi form bukti transfer, maka terdapat notifikasi ke wali hujroh ",
    },
    {
        invoice: "Aktifitas Wali hujroh terganggu dengan komunikasi wali santri yang waktunya RANDOM",
        paymentStatus: "Hal2 mengenai pertanyaan, usulan, dan apapun yang menyangkut santri, di lakukan dalam aplikasi, sehingga tidak mengganggu konsentrasi belajar mengajar. Wali hujroh, bisa membuka aplikasi secara terjadwal dan menanggapi pertanyaan / usulan dari wali santri",
    },
    {
        invoice: "Efektifitas Group SOSMED (WA)",
        paymentStatus: "Komuniksi 2 arah terjadi di applikasi. Sehingga group WA bisa di gunakan hanya untuk update info",
    },
    {
        invoice: "Keadaan Darurat",
        paymentStatus: "BY PHONE sesuai kebijakan masing2",
    },
]
export function HomeTable() {
    return (
        <AnimatePresence>
            <section id="about" className="container py-8">
                <div
                    className=" py-8 leading-normal  sm:text-lg sm:leading-7"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                        Latar Belakang
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        className="max-w-full leading-normal text-muted-foreground sm:text-lg sm:leading-7"
                    >
                        Aplikasi ini di gagas berdasarkan keadaan di lapangan, yang menjadi
                        kebutuhan pengelola pondok, wali pendamping <i>(ustaz/ustazah)</i>, dan
                        wali santri.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        className="max-w-full leading-normal text-muted-foreground sm:text-lg sm:leading-7"
                    >
                        Kami sebagai tim pengembang, sangat mengharapkan masukan dan bantuan
                        kepada semua pihak, demi berkembangnya aplikasi ini, sehingga applikasi
                        ini bisa bermanfaat untuk kita semua
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="py-8 leading-normal text-muted-foreground sm:text-lg sm:leading-7"
                    >
                        <Table>
                            <TableCaption className="text-sm text-red-800">*desclaimer: data tidak mewakili data manapun dan dari pihak manapun. data hanya berupa contoh</TableCaption>
                            <TableHeader>
                                <TableRow className="text-xl">
                                    <TableHead >Problem</TableHead>
                                    <TableHead>Solusi</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {problems.map((problem) => (
                                    <TableRow key={problem.invoice}>
                                        <TableCell>{problem.invoice}</TableCell>
                                        <TableCell>{problem.paymentStatus}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </motion.div>
                </div>
            </section>
        </AnimatePresence>
    )
}
export default HomeTable;
