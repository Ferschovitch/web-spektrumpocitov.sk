import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    console.log("Seeding database...");

    const initialContent = [
        {
            slug: "home",
            title: "Spektrum Pocitov – Psychologická podpora | Bratislava",
            description: "Psychologická podpora pre deti, páry, rodiny a jednotlivcov v Bratislave. Spojenie tradičnej a alternatívnej psychológie – terapia, koučing, krízová intervencia.",
            keywords: "psychologička Bratislava, terapia pre deti, rodinná terapia, krízová intervencia, toxické vzťahy, narcizmus, emočná sebaregulácia, Spektrum Pocitov",
            content: {
                heroTitleStart: "Spolu objavme",
                heroTitleHighlight1: "svetlo",
                heroTitleMiddle: "v",
                heroTitleHighlight2: "tme",
                heroBody1: "Som tu pre všetkých, ktorí túžia po pochopení a podpore. Pre tých, ktorí chcú lepšie porozumieť vlastnej situácii, aj pre tých, ktorí hľadajú cestu z trápení, vzťahových kríz či výchovných dilem.",
                heroBody2: "Ľudí vnímam a prijímam práve takých, akí sú, bez hodnotenia, nálepiek či tlaku. Spolu môžeme nájsť odpovede na vaše otázky, správny smer na ceste riešenia vašich problémov a vytúžený vnútorný pokoj.",
                heroBody3: "Ponúkam autentický a ľudský prístup, spojenie tradičnej a alternatívnej psychológie.",
                feelingsTitle: "Odpoveď sa skrýva vo vás",
                feelingsSubtitle: "Spolu ju môžeme objaviť, pomenovať a v bezpečnom prostredí na nej postaviť váš život opäť na nohy.",
                feelingsCards: [
                    { emoji: "🟡", color: "#F5C842", bg: "#fdf5d6ff", label: "Rodiny", text: "Rodinná dynamika, jasne nastavené pravidlá a hranice aj funkčná spolupráca tvoria základ bezpečného prostredia, v ktorom môžu rásť deti aj dospelí. Ponúkam vám podporu na ceste k väčšiemu porozumeniu, rešpektu a blízkosti medzi vami a vašimi blízkymi." },
                    { emoji: "🔵", color: "#5BC8C8", bg: "#EAF6FB", label: "Deti", text: "Podporujem rozvoj rôznych schopností a zručností dieťaťa, posilňujem jeho schopnosť zamerať pozornosť prospešným smerom a rozvíjať emočnú sebareguláciu, pričom spolu hľadáme a citlivo identifikujeme jeho skutočné potreby, ktoré konzultujeme s rodičmi s cieľom udržať pokrok dieťaťa." },
                    { emoji: "🔴", color: "#F5A0A0", bg: "#FDF0F0", label: "Jednotlivci", text: "Cesta k hlbšiemu sebapoznaniu, vnútornému pokoju a zmene postoja, ktorá prináša úľavu. Pracujeme na zvýšení sebavedomia a autonómie vo vlastnom živote, zveľadujeme vašu psychickú aj fyzickú kondíciu." },
                    { emoji: "🟢", color: "#6DBF67", bg: "#EDF7ED", label: "Páry", text: "Objavíme vzájomný jazyk lásky, nastavíme efektívnu komunikáciu a naučíme sa bezpečne a zdravo hádať. Budeme sa venovať otázkam, ako spolu tráviť zmysluplný čas, ako budovať pocit bezpečia a spolupatričnosti a ako byť jeden pre druhého stále atraktívnym a inšpiratívnym partnerom." },
                ],
                approachTitle: "Témy, ktorým sa venujem",
                approachCards: [
                    { icon: "", title: "Podpora v osobnom raste, sebarozvoj, sebapoznanie, sebavedomie", text: "Sprevádzam vás na ceste k hlbšiemu pochopeniu seba samých, aby ste mohli žiť vedomejšie a v súlade so svojimi hodnotami.", accentBg: "#EDF7ED" },
                    { icon: "", title: "Krízová intervencia a závislosti", text: "Pomáham nájsť stabilitu a bezpečie v náročných obdobiach, keď sa zdá, že situácia je nad vaše sily.", accentBg: "#FDF0F0" },
                    { icon: "", title: "Tréning efektívnej komunikácie, práca s emóciami", text: "Učím, ako pomenovať svoje potreby, zvládať emócie a komunikovať tak, aby vzťahy mohli rásť namiesto toho, aby vyhoreli.", accentBg: "#EAF6FB" },
                    { icon: "", title: "Pravidlá zdravej a bezpečnej hádky", text: "Ukazujem, ako zvládať konflikty bez zraňovania, s rešpektom a dôrazom na porozumenie.", accentBg: "#fdf5d6ff" },
                    { icon: "", title: "Vzťahy", text: "Partnerské, pracovné a toxické vzťahy. Osudové spojenia a spriaznené duše, narcizmus, ničivá empatia, obeť a tyran, šikana.", accentBg: "#EDF7ED" },
                    { icon: "", title: "Pracovné zameranie, uplatnenie talentov, poslanie", text: "Spoločne objavíme vaše silné stránky a nájdeme cestu, po ktorej môže váš talent vykročiť. Postupne nahradíme pocity vyhorenia za spokojnosť a pracovné naplnenie.", accentBg: "#fdf5d6ff" },
                    { icon: "", title: "Rozvoj mysle, vedomia a intuície", text: "Pracujeme na citlivejšom vnímaní vlastnej intuície, aj pomocou identifikácie zautomatizovaných reakcií a vzorcov myslenia, rôznych blokov a strachov.", accentBg: "#EAF6FB" },
                    { icon: "", title: "Autogénny tréning, relaxácia a meditácia", text: "Učíme sa techniky, ktoré umožňujú rýchlejší návrat k vnútornému pokoju, premene neprospešných návykov na prospešné.", accentBg: "#EDF7ED" },
                    { icon: "", title: "Energetické zákony a manifestácia", text: "Odhalíme príčiny a následky aktuálnej podoby vašich vzťahov, práce, psychosomatických príčin narušeného zdravotného stavu a celkovej životnej situácie.", accentBg: "#FDF0F0" },
                ],
                ctaTitleStart: "Vykročte na cestu ku",
                ctaTitleHighlight: "krajším dňom",
                ctaSubtitle: "",
            }
        },
        {
            slug: "sluzby",
            title: "Služby – Spektrum Pocitov | Terapia, Kurzy, Konzultácie",
            description: "Konzultácie, tréningy a kurzy rozvoja vedomia pre deti aj dospelých v Bratislave. Extraokulárne videnie, Vision Extra Ocular, Theta Healing, Etikoterapia.",
            keywords: "terapia pre deti, rodinná terapia, krízová intervencia, Theta Healing, Etikoterapia, extraokulárne videnie, Vision Extra Ocular, neurolingvistické programovanie, toxické vzťahy, narcizmus, emočná sebaregulácia",
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
                detiHowItWorks: [
                    { label: "10 lekcií", text: "Kurz 1 aj Kurz 2 obsahuje 10 lekcií, opakujúcich sa ideálne každý týždeň alebo každé 2 týždne — podľa vašich možností.", color: "#5BC8C8", bg: "#EAF6FB" },
                    { label: "Jedna lekcia trvá 2 hodiny", text: "Prvú hodinu trávim s dieťaťom — učíme sa pracovať s maskou, ktorá zakrýva oči, čo umožňuje dieťaťu sústrediť sa.", color: "#6DBF67", bg: "#EDF7ED" },
                    { label: "Práca s rodičmi", text: "Druhú hodinu konzultujeme s rodičmi dporúčania na udržanie pokroku, ktorý dieťa na lekcii dosiahlo.", color: "#F5C842", bg: "#fdf5d6ff" },
                ],
                detiKurzBtn: "Mám záujem o kurz",
                dospeliTitle: "Kurz rozvoja vedomia pre dospelých",
                dospeliSubtitle: "Extraokulárne videnie",
                dospeliDesc: "Na obsahu sa pracuje",
            }
        },
        {
            slug: "o-mne",
            title: "O mne – Mgr. Linda Stanislavová | Psychologička Bratislava",
            description: "Psychologička, koučka a lektorka rozvoja mysle, vedomia a intuitívnej vnímavosti. Pracujem s detěťmi, pármi, rodinami a jednotlivcami. Vision Extra Ocular, Theta Healing, Etikoterapia.",
            keywords: "psychologička Bratislava, krízová intervencia, Theta Healing, Etikoterapia, Vision Extra Ocular, neurolingvistické programovanie, rozvoj vedomia, sebapoznanie",
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
            title: "Kontakt – Spektrum Pocitov | Bratislava",
            description: "Kontaktujte Mgr. Lindu Stanislavovú – psychologičku a terapeutku v Bratislave. Napíšte alebo zavolajte pre objednanie konzultácie.",
            keywords: "psychologička Bratislava, kontakt psychológ, objednanie terapia, konzultácia Bratislava",
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
        const data = {
            content: page.content,
            ...("title" in page && page.title ? { title: page.title } : {}),
            ...("description" in page && page.description ? { description: page.description } : {}),
            ...("keywords" in page && page.keywords ? { keywords: page.keywords } : {}),
        };
        await prisma.pageContent.upsert({
            where: { slug: page.slug },
            update: data,
            create: { slug: page.slug, ...data },
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
