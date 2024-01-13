import { FadeIn } from '@/components/FadeIn'
import { Container } from '@/components/Container'
import { List, ListItem } from '@/components/List'

const HomeServices = () => {
  return (
    <Container className="mt-8 py-32 sm:mt-8 md:py-32">
      <FadeIn className='mb-6 block font-display text-xl font-semibold'>
        Services
      </FadeIn>
      <h2 className='mb-6 block font-display text-3xl font-semibold'>
        Bersama dalam kebaikan
      </h2>

      <FadeIn
        className='block font-display '
      >
        Service yang disediakan oleh tim Santri-Mu
        sepenuhnya gratis.
      </FadeIn>
      <FadeIn
        className='block font-display'
      >
        Tim developer siap siap memberikan pendampingan
      </FadeIn>


      <div className="lg:flex lg:items-center lg:justify-end">
        <div className="flex justify-center lg:w-1/2 lg:justify-end">
          <FadeIn className="w-[33.75rem] flex-none">
            <img
              src="/images/share.webp"
              className="rounded-3xl "
              alt='services santrimu'
            />
          </FadeIn>
        </div>
        <List className="mt-8 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
          <ListItem title="Networking">
            <p>
              Jaringan Lokal dan Intranet yang bisa memenuhi kebutuhan lembaga.
            </p>
          </ListItem>
          <ListItem title="Data Center">
            <p>
              Mewujudkan kemandirian data, dengan fasilitas datacenter sendiri
            </p>
          </ListItem>
          <ListItem title="Application development">
            <p>
              Membangun aplikasi yang disesuaikan dengan kebutuhan lembaga, untuk memperlancar aktivitas rutin
            </p>
          </ListItem>
          <ListItem title="Sharing is Caring">
            <p>
              Peduli dan berbagi dengan sesama sekaligus memberi contoh kepada generasi penerus untuk mulai belajar menanamkan jiwa "peduli ummat"
            </p>
          </ListItem>
        </List>
      </div>
    </Container>
  );
};
export default HomeServices;
