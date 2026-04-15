import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database with current website content...");

  // HOMEPAGE
  await prisma.pageContent.upsert({
    where: { slug: 'home' },
    update: {},
    create: {
      slug: 'home',
      title: 'Spektrum Pocitov – spojenie tradičnej a alternatívnej psychológie',
      description: 'Psychologická podpora a rozvoj vedomia',
      keywords: 'psychológia, rozvoj vedomia, psychologická podpora',
      content: {
        heroTitleStart: "Spolu objavme ",
        heroTitleHighlight1: "svetlo",
        heroTitleMiddle: " v ",
        heroTitleHighlight2: "tme",
        heroBody1: "Som tu pre všetkých, ktorí túžia po pochopení a podpore. Pre tých, ktorí chcú lepšie porozumieť vlastnej situácii, aj pre tých, ktorí hľadajú cestu z trápení, vzťahových kríz či výchovných dilem.",
        heroBody2: "Ľudí vnímam a prijímam práve takých, akí sú, bez hodnotenia, nálepiek či tlaku. Spolu môžeme nájsť odpovede na vaše otázky, správny smer na ceste riešenia vašich problémov a vytúžený vnútorný pokoj.",
        heroBody3: "Ponúkam autentický a ľudský prístup, spojenie tradičnej a alternatívnej psychológie.",
        
        feelingsTitle: "Odpoveď sa skrýva vo vás",
        feelingsSubtitle: "Spolu ju môžeme objaviť, pomenovať a v bezpečnom prostredí na nej postaviť váš život opäť na nohy.",
        feelingsCards: [
          { emoji: "🟡", color: "#F5C842", bg: "#fdf5d6ff", label: "Rodiny", text: "Rodinná dynamika, jasne nastavené pravidlá a hranice aj funkčná spolupráca tvoria základ bezpečného prostredia, v ktorom môžu rásť deti aj dospelí. Ponúkam vám podporu na ceste k väčšiemu porozumeniu, rešpektu a blízkosti medzi vami a vašimi blízkymi." },
          { emoji: "🔵", color: "#5BC8C8", bg: "#EAF6FB", label: "Deti", text: "Podporujem rozvoj rôznych schopností a zručností dieťaťa..." },
          { emoji: "🔴", color: "#F5A0A0", bg: "#FDF0F0", label: "Jednotlivci", text: "Cesta k hlbšiemu sebapoznaniu, vnútornému pokoju a zmene postoja..." },
          { emoji: "🟢", color: "#6DBF67", bg: "#EDF7ED", label: "Páry", text: "Objavíme vzájomný jazyk lásky, nastavíme efektívnu komunikáciu..." }
        ],

        approachTitle: "Témy, ktorým sa venujem",
        approachCards: [
          { icon: "", title: "Podpora v osobnom raste...", text: "Sprevádzam vás...", accentBg: "#EDF7ED" },
          { icon: "", title: "Krízová intervencia...", text: "Pomáham nájsť stabilitu...", accentBg: "#FDF0F0" },
          { icon: "", title: "Tréning efektívnej komunikácie...", text: "Učím, ako pomenovať...", accentBg: "#EAF6FB" }
        ],

        ctaTitleStart: "Vykročte na cestu ku ",
        ctaTitleHighlight: "krajším dňom",
        ctaSubtitle: ""
      }
    }
  });

  // SLUZBY
  await prisma.pageContent.upsert({
    where: { slug: 'sluzby' },
    update: {},
    create: {
      slug: 'sluzby',
      title: 'Služby | Spektrum Pocitov',
      description: 'Prehľad služieb',
      keywords: 'služby, cenník, terapia',
      content: {
        pageTitle: "Služby",
        sections: [
          {
            title: "Individuálne poradenstvo pre dospelých a dospievajúcich",
            price: "50€ / 50 min.",
            text: "Cesta k vnútornému pokoju a zdravému postoju k životným výzvam..."
          },
          {
            title: "Párové poradenstvo",
            price: "80€ / 80 min.",
            text: "Pomoc párom pri hľadaní vzájomného porozumenia..."
          }
        ]
      }
    }
  });

  // O MNE
  await prisma.pageContent.upsert({
    where: { slug: 'o-mne' },
    update: {},
    create: {
      slug: 'o-mne',
      title: 'O mne | Spektrum Pocitov',
      description: 'Zoznámte sa so mnou',
      keywords: 'o mne, psychológ, profil',
      content: {
        pageTitle: "Mgr. Veronika Fersch",
        pageSubtitle: "Moja cesta a vzdelanie",
        bodyText1: "Volám sa Veronika a venujem sa psychológii...",
        bodyText2: "Moje vzdelanie tvorí pevný základ pre pomoc..."
      }
    }
  });

  // KONTAKT
  await prisma.pageContent.upsert({
    where: { slug: 'kontakt' },
    update: {},
    create: {
      slug: 'kontakt',
      title: 'Kontakt | Spektrum Pocitov',
      description: 'Kontaktujte ma',
      keywords: 'kontakt, adresa, telefón, email',
      content: {
        pageTitle: "Kontaktujte ma",
        email: "poradna@spektrumpocitov.sk",
        phone: "+421 911 364 163",
        address: "Seberíniho 1, 821 03 Bratislava - Ružinov",
        companyDetails: "IČO: 56254421, DIČ: 1121171804",
        formTitle: "Napíšte mi",
        mapUrl: "https://www.google.com/maps/embed?..."
      }
    }
  });

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
