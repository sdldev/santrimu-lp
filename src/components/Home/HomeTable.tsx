import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

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
        <div
            className=" py-8 leading-normal text-muted-foreground sm:text-lg sm:leading-7"
        >
            <Table>
                <TableCaption className="test-sm text-red-800">*desclaimer: data tidak mewakili data manapun dan dari pihak manapun. data hanya berupa contoh</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Problem</TableHead>
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
        </div>
    )
}
export default HomeTable;
