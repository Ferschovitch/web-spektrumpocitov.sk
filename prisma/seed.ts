import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    console.log("Seeding database...");

    const initialContent = [
        {
            slug: "home",
            content: {
                heroTitleStart: "Spektrum ",
                heroTitleHighlight1: "Pocitov",
                heroTitleMiddle: " – priestor pre Váš ",
                heroTitleHighlight2: "slobodný",
                heroBody1: "Ocitli ste sa na mieste, kde sa rodí rovnováha. Mnohí ku mne prichádzajú, keď cítia, že staré spôsoby už nefungujú.",
                heroBody2: "Ponúkam bezpečné prostredie, kde spájame klasickú psychológiu s inovatívnymi metódami.",
                heroBody3: "Spoločne môžeme odhľadovať príčiny, nie iba následky.",
                feelingsTitle: "Aké pocity vás k nám priviedli?",
                feelingsSubtitle: "Nech už prežívate čokoľvek, každá emócia má svoj zmysel.",
                feelingsCards: [
                    { emoji: "🌧", color: "#F5A0A0", bg: "#FDF0F0", label: "Smútok a úzkosť", text: "Pocit ťažkosti, tlaku alebo straty radosti." },
                    { emoji: "🌪", color: "#F5C842", bg: "#fdf5d6ff", label: "Hnev a frustrácia", text: "Silné emócie, ktoré sa ťažko ovládajú." },
                    { emoji: "⚡", color: "#5BC8C8", bg: "#EAF6FB", label: "Vyčerpanie", text: "Dlhodobý stres a strata životnej energie." },
                    { emoji: "✨", color: "#6DBF67", bg: "#EDF7ED", label: "Túžba po raste", text: "Hľadanie sebapoznania a voľba vlastnej cesty." },
                ],
                approachTitle: "Naše oblasti podpory",
                approachCards: [
                    { icon: "🧸", title: "Deti a adolescenti", text: "Poskytujeme podporu pri zvládaní strachov a školských ťažkostí.", accentBg: "#EDF7ED" },
                    { icon: "👤", title: "Individuálne poradenstvo", text: "Využívame kombináciu psychológie a terapie.", accentBg: "#EAF6FB" },
                    { icon: "🤝", title: "Páry a rodina", text: "Pracujeme na zlepšení komunikácie a obnove dôvery.", accentBg: "#FDF0F0" },
                    { icon: "🌱", title: "Rozvoj vedomia", text: "Pomáhame rozvíjať potenciál u detí a dospelých.", accentBg: "#fdf5d6ff" },
                ],
                ctaTitleStart: "Ste pripravení spraviť prvý ",
                ctaTitleHighlight: "krok?",
                ctaSubtitle: "Objednajte sa na úvodnú konzultáciu. Spolu nájdeme cestu k väčšej rovnováhe a spokojnosti."
            }
        },
        {
            slug: "sluzby",
            content: {
                pageTitle: "Služby",
                konzultaciaTitle: "Konzultácia",
                konzultaciaDesc: "Porozprávame sa a nastavíme si spoluprácu.",
                konzultaciaBtn: "Mám záujem o konzultáciu",
                treningTitle: "Tréning vybranej oblasti",
                treningDesc: "Cielený rozvoj konkrétnej zručnosti.",
                treningBtn: "Mám záujem o tréning",
                detiTitle: "Kurz rozvoja vedomia pre deti",
                detiSubtitle: "Extraokulárne videnie",
                detiDesc: "Dieťa získa prístup k vnútornému zdroju istoty a sebadôvery, trénuje svoju pozornosť a vytrvalosť. Zručnosti, ktoré dieťa získa, si môže nosiť po celý život a pozitívne ovplyvniť akúkoľvek tému vo svojom živote.",
                detiHelpsWith: [
                    { text: "Strachy a nočné mory" },
                    { text: "Plačlivosť a šikana" },
                    { text: "Problémy v škole – učenie, čítanie, sústredenie" },
                    { text: "Problémy v kolektíve" },
                    { text: "Nízka sebadôvera" },
                    { text: "Hyperaktivita" },
                    { text: "Prekážky v športe" },
                    { text: "Problémy s autoritou" },
                    { text: "Problémy so stravovacími návykmi, ..." },
                ],
                detiBenefits: [
                    { text: "Upokojenie a dôvera v seba a v život" },
                    { text: "Lepšie rodinné a priateľské vzťahy" },
                    { text: "Otvorenosť emóciám a schopnosť o nich komunikovať" },
                    { text: "Samostatnosť a zodpovednosť" },
                    { text: "Odchádzajú strachy a nočné mory" },
                    { text: "Rýchlejšie učenie — škola, šport, hudba" },
                    { text: "Rozvinutá myseľ, vedomie a intuícia" },
                    { text: "Lepšie správanie doma, v škole aj v spoločnosti" },
                ],
                dospeliTitle: "Kurz rozvoja vedomia pre dospelých",
                dospeliSubtitle: "Extraokulárne videnie",
                dospeliDesc: "Na obsahu sa pracuje",
            }
        },
        {
            slug: "o-mne",
            content: {
                name: "Mgr. Linda Stanislavová",
                paragraph1: "Som psychologička, koučka a lektorka rozvoja mysle, vedomia a intuície. Venujem sa deťom, jednotlivcom, párom aj rodinám.",
                paragraph2: "Verím, že vzťah, ktorý máme sami k sebe, ovplyvňuje celý náš život. Vo svojej práci sa aj preto zameriavam na rozvoj sebapoznania, rozšírenie vedomia, ako aj na psychosomatiku, teda citlivé prepojenie tela, mysle, emócií, správania...",
                paragraph3: "Pomáham harmonizovať rodinné vzťahy a podporujem otvorenú, rešpektujúcu komunikáciu. V partnerských vzťahoch vytváram bezpečný priestor pre porozumenie, blízkosť a obnovu dôvery. Rodičom pomáham pozrieť sa na výchovu detskými očami. Keď porozumieme tomu, čo sa deje pod povrchom, dokážeme prirodzene meniť aj to, čo sa deje navonok.",
                expertiseTags: [
                    { label: "Základné školy", color: "#F5C842", bg: "#fdf5d6ff" },
                    { label: "Materské školy", color: "#5BC8C8", bg: "#EAF6FB" },
                    { label: "Krízová intervencia", color: "#F5A0A0", bg: "#FDF0F0" },
                    { label: "Terapeutické princípy", color: "#6DBF67", bg: "#EDF7ED" },
                    { label: "Vision Extra Ocular - rozvoj mysle, vedomia a intuície", color: "#F5C842", bg: "#fdf5d6ff" },
                    { label: "Sny, podverdomie a mimozmyslové vnímanie", color: "#5BC8C8", bg: "#EAF6FB" },
                    { label: "Theta liečenie", color: "#6DBF67", bg: "#EDF7ED" },
                    { label: "Etikoterapia", color: "#F5A0A0", bg: "#FDF0F0" },
                    { label: "Energetické zákony a kvantová fyzika", color: "#5BC8C8", bg: "#EAF6FB" },
                ],
                bulletPoints: [
                    { text: "Emocionálne liečenie, práca s energiou.", color: "#F5A0A0", bg: "#FDF0F0" },
                    { text: "Uvoľnenie napätia, tráum, psychosomatických ťažkostí.", color: "#5BC8C8", bg: "#EAF6FB" },
                    { text: "Pochopenie seba samého, konštruktívne uchopenie životných skúseností a udalostí.", color: "#F5C842", bg: "#fdf5d6ff" },
                    { text: "Vnútorná sloboda a autenticita.", color: "#6DBF67", bg: "#EDF7ED" },
                ],
                valuesTitle: "Čo nám pri práci pomáha",
                valuesCards: [
                    { color: "#F5C842", bg: "#fdf5d6ff", label: "Rešpekt k jedinečnosti", text: "Každý príbeh je iný, každý z nás žije iným tempom. Vytváram priestor, kde môžete byť prijatí bez strachu z toho, že vás niekto bude posudzovať." },
                    { color: "#5BC8C8", bg: "#EAF6FB", label: "Prepojenie telo – myseľ – emócie", text: "Vnímam človeka ako celok. To, čo prežívame vnútri, sa odráža v našom tele aj vo vzťahoch, a práve v tomto prepojení často nachádzame odpovede." },
                    { color: "#F5A0A0", bg: "#FDF0F0", label: "Bezpečie a dôvera", text: "Skutočná zmena je možná tam, kde je na ňu bezpečný priestor. Mojou prioritou je vytvoriť prostredie, v ktorom môžete hovoriť otvorene a bez obáv." },
                    { color: "#6DBF67", bg: "#EDF7ED", label: "Vedomý rast a vnútorná rovnováha", text: "Verím, že rovnováha neprichádza zvonka, ale vzniká v nás. Podporujem kroky, ktoré vedú k väčšiemu pokoju a dôvere v samého seba." },
                ]
            }
        },
        {
            slug: "kontakt",
            content: {
                title: "Začnime spolu už dnes",
                subtitle: "Máte otázky alebo si chcete rezervovať konzultáciu? Tak napíšte alebo zavolajte.",
                formTitle: "Napíšte mi",
                email: "info@spektrumpocitov.sk",
                phone: "+421 908 500 266",
                address: "Bratislava",
                partnerLinks: [
                    { title: "Světladíl", url: "https://www.svetladil.cz/", subtitle: "", color: "#5BC8C8", bg: "#EAF6FB", icon: "✨" },
                    { title: "OZ Pre detské hlavičky", url: "https://www.facebook.com/profile.php?id=61574330332603", subtitle: "", color: "#F5A0A0", bg: "#FDF0F0", icon: "" },
                ]
            }
        },
        {
            slug: "global",
            content: {
                footerText: "Spojenie tradičnej a alternatívnej psychológie.",
                footerEmail: "info@spektrumpocitov.sk",
                footerPhone: "+421 908 500 266",
                footerAddress: "Bratislava, Slovensko",
                footerCopyright: "© 2026 Spektrum Pocitov"
            }
        }
    ];

    for (const page of initialContent) {
        await prisma.pageContent.upsert({
            where: { slug: page.slug },
            update: { content: page.content },
            create: { slug: page.slug, content: page.content },
        });
    }

    console.log("Database seeded / updated successfully!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
