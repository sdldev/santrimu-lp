import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Container } from '@/components/Container'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const clients = [
  ['Abu Dzar al-Ghifari', '/teams/abudzar-al-ghifari.png', 'Batanghari - LamTim'],
  ['Ponpes Al Amin', '/teams/al-amin-cintamulya.png', 'Cintamulya - Lamsel'],
  ['Ponpes Al Hamid', '/teams/al-hamid-cintamulya.png', 'Cintamulya - Lamsel'],
  ['Tahfizul Quran Baabus Saadah', '/teams/tahfizul-quran-baabus-saadah.webp', 'Kep Meranti - Riau'],
  ['MBS Cintamulya', '/teams/mbs-cintamulya.webp', 'Cintamulya - Lamsel'],
]

const HomeFeature = () => {
  return (
    <div className="mt-8 rounded-4xl bg-green-900 dark:bg-neutral-800 py-32 sm:mt-8 md:py-32">
      <Container >
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-4xl font-semibold tracking-wider text-white sm:text-left">
            We’ve worked Bording School
          </h2>
          <div className="h-px flex-auto bg-neutral-100" />
        </FadeIn>
        <FadeInStagger faster>

          <ul role="list" className="mt-10 grid gap-x-8 gap-y-10 lg:grid-cols-5">

            {clients.map(([client, logo, location]) => (
              <li key={client}>
                <FadeIn>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={logo} alt={client} />
                      <AvatarFallback>MBS</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <p className="leading-none text-white">{client}</p>
                      <p className="text-xs text-white text-muted-foreground">
                        {location}
                      </p>
                    </div>
                  </div>

                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};
export default HomeFeature;
