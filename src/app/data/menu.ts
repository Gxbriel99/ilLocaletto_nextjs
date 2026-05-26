export type TOptions = {
    quantity: string;
    price: number;
}

export interface MenuItem {
    name: string;
    description?: string;
    options?: TOptions[];
    price?: number;
    image?: string;
    featured?: boolean;
}

function withImage(items: MenuItem[]): MenuItem[] {
    return items.map((item) => ({ ...item, image: "#" }));
}

export const Antipasti: MenuItem[] = [
    {
        name: "Tris di bruschette",
        description: "Pane tostato con condimenti della casa (selezione del giorno).",
        price: 4.0,
        image: "#",
    },
    /*
    {
      name: "Tris di crostini",
      description: "Mozzarella e alici / funghi porcini / prosciutto crudo",
      price: 6.0,
      image: "/menu/crostini.jpg",
    },
    {
      name: "Fritti misti*",
      description: "2 supplì, 2 crocchette, 2 olive ascolane",
      price: 5.0,
      image: "/menu/frittimisti.jpg",
    },
    */
    {
        name: "Fiore di zucca fritto *",
        description: "Croccante e leggero, fritto al momento.",
        price: 1.8,
        image: "#",
    },
    {
        name: "Filetto di baccalà fritto *",
        description: "Filetto dorato e fragrante, servito caldo.",
        price: 2.3,
        image: "#",
    },
    {
        name: "Mozzarelline fritte*",
        description: "4 a porzione",
        price: 4.0,
        image: "#",
    },
    {
        name: "Tagliere di salumi locali",
        description: "Selezione di salumi del territorio.",
        price: 12.0,
        image: "#",
    },
    {
        name: "Tagliere di formaggi locali",
        description: "Assortimento di formaggi locali selezionati.",
        price: 16.0,
        image: "#",
    },
    /*
    {
      name: "Zuppa di lenticchie",
      description: "(autunno/inverno)",
      price: 6.0,
      image: "/menu/zuppa-lenticchie.jpg",
    },
    {
      name: "Zuppa di ceci e porcini",
      description: "(autunno/inverno)",
      price: 9.0,
      image: "/menu/zuppa-ceci.jpg",
    },
    */
    {
        name: "1 Supplì",
        description: "Classico supplì, croccante fuori e filante dentro.",
        price: 1.5,
        image: "#",
    },
    {
        name: "1 Crocchetta",
        description: "Crocchetta di patate, fritta al momento.",
        price: 0.7,
        image: "#",
    },
    {
        name: "1 Oliva ascolana",
        description: "Oliva ripiena impanata e fritta.",
        price: 0.7,
        image: "#",
    },
    /*
    {
      name: "Antipasto del Localetto",
      description: "1 tagliere misto salumi e formaggi, 1 mix di fritti*, 1 tris di bruschette",
      price: 20.0,
      image: "/menu/antipasto-localetto.jpg",
    },
    {
      name: "Antipasto “Small\"",
      description: "Selezione di salumi, formaggi e mix di fritti*",
      price: 12.0,
      image: "/menu/antipasto-small.jpg",
    },
    */
    {
        name: "Coccetto di Focaccia “extra”",
        description: "Focaccia calda, perfetta da condividere.",
        price: 2.0,
        image: "#",
    },
    {
        name: "Patatine fritte*",
        description: "Porzione di patatine, croccanti e dorate.",
        price: 5.0,
        image: "#",
    },
];

/* export const SecondiPiatti: MenuItem[] = [
    { name: "Tagliata di Manzo", price: 16.00 },
    { name: "Tagliata con rucola e scaglie di parmigiano", price: 18.00 },
    { name: "Tagliata con radicchio e glassa di aceto balsamico", price: 18.00 },
    { name: "Arrosticini di pecora", price: 10.00 },
    { name: "Salsicce", price: 8.00 },
    {
      name: "Hamburger di Pollo e contorno",
      description: "Pane, hamburger di Pollo, lattuga, pomodori pachino, ketchup, maionese + patatine fritte",
      price: 12.00
    },
    {
      name: "Hamburger di Manzo e contorno",
      description: "Pane, hamburger di Manzo, lattuga, pomodori pachino, formaggio cheddar, ketchup, maionese + patatine fritte",
      price: 14.00
    },
    {
      name: "Tagliere del Localetto per due",
      description: "Grigliata mista di tagliata, arrosticini e salsicce + patatine fritte",
      price: 34.00
    }
]; */

export const gustiSemplici: MenuItem[] = withImage([
    { name: "Margherita", description: "mozzarella, pomodoro", price: 6.00 },
    { name: "Funghi bianca", description: "mozzarella, funghi champignon", price: 6.00 },
    { name: "Marinara", description: "pomodoro, aglio, origano, peperoncino", price: 6.00 },
    { name: "Funghi", description: "pomodoro, mozzarella, funghi champignon", price: 6.00 },
    { name: "Patate", description: "mozzarella, patate", price: 6.00 },
    { name: "Crostino", description: "mozzarella, prosciutto cotto", price: 6.00 },
]);

export const gustiRicchi: MenuItem[] = withImage([
    { name: "Napoli", description: "mozzarella, pomodoro, alici", price: 7.50 },
    { name: "Boscaiola", description: "mozzarella, funghi, salsiccia", price: 7.50 },
    { name: "Cicoria", description: "mozzarella, cicoria, salsiccia", price: 7.50 },
    { name: "Patate e salsiccia", description: "mozzarella, patate, salsiccia", price: 7.50 },
    { name: "Quattro formaggi", description: "mozzarella, gorgonzola, scamorza, emmenthal, caciotta dolce", price: 7.50 },
    { name: "Gricia", description: "mozzarella, pecorino, pancetta, pepe", price: 7.50 },
    { name: "Diavola", description: "mozzarella, pomodoro, salame piccante", price: 7.50 },
    { name: "Capricciosa", description: "mozzarella, pomodoro, funghi, carciofini, olive nere, prosciutto crudo", price: 7.50 },
    { name: "Zucchine", description: "mozzarella, zucchine", price: 7.50 },
    { name: "Radicchio e Scamorza", description: "mozzarella, scamorza, radicchio", price: 7.50 },
    { name: "Tonno e Cipolla", description: "mozzarella, pomodoro, tonno, cipolla", price: 7.50 },
    { name: "Wurstel", description: "mozzarella, pomodoro, wurstel", price: 7.50 },
    { name: "Pesto", description: "mozzarella, pesto alla genovese, scamorza, pachino", price: 7.50 },
    { name: "Prosciutto crudo", description: "mozzarella, pomodoro, prosciutto crudo", price: 7.50 },
    { name: "Rucola", description: "mozzarella, pomodoro, pachino, rucola, scaglie di parmigiano", price: 7.50 },
    { name: "Ortolana", description: "mozzarella, pomodoro, melanzane, peperoni, radicchio, zucchine", price: 7.50 },
    { name: "Broccoletti e salsiccia (solo di stagione)", description: "mozzarella, broccoletti ripassati, salsiccia", price: 7.50 },
    { name: "Cipolla e pecorino", description: "pomodoro, cipolla, pecorino", price: 7.50 },
    { name: "Scamorza e speck", description: "mozzarella, scamorza, speck", price: 7.50 },
    { name: "Fiori di zucca e alici (solo di stagione)", description: "mozzarella, fiori di zucca, alici", price: 7.50 },
    { name: "Parmigiana", description: "mozzarella, pomodoro, melanzane, parmigiano, basilico", price: 7.50 },
    { name: "Peperoni e salsiccia", description: "mozzarella, pomodoro, peperoni, salsiccia", price: 7.50 },
]);

export const gustiSpeciali: MenuItem[] = withImage([
    { name: "Bresaola", description: "mozzarella, rucola, bresaola, scaglie di parmigiano", price: 9.00 },
    { name: "Radicchio e Speck", description: "mozzarella, scamorza, radicchio e speck", price: 9.00 },
    { name: "Porcini e Crudo", description: "mozzarella, porcini, prosciutto crudo", price: 9.00 },
    { name: "Radicchio, gorgonzola e noci", description: "mozzarella, gorgonzola, noci, radicchio", price: 9.00 },
    { name: "Tartufo e speck", description: "mozzarella, crema di tartufo, speck", price: 9.00 },
    { name: "Rucola e porcini", description: "mozzarella, pomodoro, porcini, rucola", price: 9.00 },
    { name: "Patate e porcini", description: "mozzarella, patate, porcini", price: 9.00 },
    {
        name: "Localetto",
        description:
            "pomodoro, mozzarella, salsiccia, salame piccante, scaglie di parmigiano, glassa di aceto balsamico",
        price: 9.0,
        featured: true,
    },
]);

export const gustiAutunnoInverno: MenuItem[] = withImage([
    { name: "Zucca", description: "mozzarella, crema di zucca, guanciale, scaglie di parmigiano", price: 9.00 },
    { name: "Amatriciana", description: "mozzarella, pomodoro, guanciale, pecorino, pepe", price: 7.50 },
    { name: "Patate e Lardo", description: "mozzarella, patate, lardo alle spezie, rosmarino", price: 7.50 },
    { name: "Marinara e Speck", description: "pomodoro, aglio, peperoncino, speck, rucola", price: 7.50 },
    { name: "Cicoria e Lardo", description: "mozzarella, cicoria ripassata, lardo alle spezie, pachino", price: 9.00 },
    { name: "Broccoletti e Guanciale", description: "mozzarella, broccoletti ripassati, guanciale, scamorza", price: 9.00 },
    { name: "Tartufo", description: "mozzarella, crema di tartufo, funghi champignon, salsiccia", price: 9.00 },
    { name: "Localetto Special", description: "mozzarella, quattro formaggi, salsiccia, salame piccante", price: 9.00 },
]);

export const gustiInvernaliRicchi = gustiAutunnoInverno.filter(item =>
    ["Amatriciana", "Patate e Lardo", "Marinara e Speck"].includes(item.name)
);

export const gustiInvernaliSpeciali = gustiAutunnoInverno.filter(item =>
    !["Amatriciana", "Patate e Lardo", "Marinara e Speck"].includes(item.name)
);

export const gustiEstivi: MenuItem[] = withImage([
    { name: "Zucchine special", description: "mozzarella, zucchine, fiori di zucca, scamorza", price: 9.00 },
    { name: "Salsa Rosa", description: "pomodoro, maionese, salmone, rucola, gamberetti", price: 9.00 },
    { name: "Salmone", description: "mozzarella, rucola e salmone", price: 9.00 },
    { name: "Fiori e Salmone", description: "mozzarella, fiori di zucca, salmone", price: 9.00 },
    { name: "Fiori e Salsiccia", description: "mozzarella, fiori di zucca, salsiccia", price: 7.50 },
    { name: "Fiori e Pancetta", description: "mozzarella, fiori di zucca, pachino, pancetta", price: 9.00 },
    { name: "Foggiana", description: "pomodoro, alici, olive nere, capperi, pachino, origano", price: 7.50 },
    { name: "Pachino", description: "mozzarella, pachino, scamorza, basilico", price: 7.50 },
    { name: "Gamberetti", description: "pomodoro, maionese, lattuga, gamberetti", price: 9.00 },
]);

export const contorni: MenuItem[] = withImage([
    { name: "Cicoria ripassata o all’agro", description: "Contorno tradizionale, a scelta ripassata o all’agro.", price: 5.00 },
    { name: "Verdura di stagione", description: "Selezione di verdure di stagione.", price: 5.00 },
    { name: "Insalata mista o verde", description: "Insalata fresca, a scelta mista o verde.", price: 5.00 },
    { name: "Patatine fritte*", description: "Porzione di patatine, croccanti e dorate.", price: 5.00 },
]);

export const viniRossi: MenuItem[] = withImage([
    { name: "Vino della casa", description: "Vino rosso della casa.", price: 11.00, options: [
        { quantity: "1 lt", price: 11.00 },
        { quantity: "½ lt", price: 6.00 },
        { quantity: "Calice", price: 3.50 }
    ] },
    { name: "Defuk - Rosso Merlot (Antica cantina Leonardi di Montefiascone)", description: "Bottiglia 0,75 lt.", price: 17.00 },
    { name: "Veste Porpora (Tenuta Ronci di Nepi)", description: "Bottiglia 0,75 lt.", price: 17.00 },
    { name: "Terra (“Le Querce Antiche” di Vasanello)", description: "Bottiglia 0,75 lt.", price: 17.00 },
]);

export const viniBianchi: MenuItem[] = withImage([
    {
        name: "Vino alla spina frizzante Montelvini",
        description: "Vino bianco frizzante alla spina.",
        price: 11.00,
        options: [
          { quantity: "1 lt", price: 11.00 },
          { quantity: "½ lt", price: 6.00 },
          { quantity: "Calice", price: 3.50 }
        ]
      },
      { name: "Semia (“Le Querce Antiche” di Vasanello)", description: "Bottiglia 0,75 lt.", price: 17.00 },
      { name: "Oro di Né (Tenuta Ronco di Nepi)", description: "Bottiglia 0,75 lt.", price: 17.00 },
      { name: "Vermentino (Antica Cantina Leonardi di Montefiascone)", description: "Bottiglia 0,75 lt.", price: 17.00 },
]);

export const bevandeAnalcoliche: MenuItem[] = withImage([
    {
        name: "Acqua minerale (naturale o effervescente) 0,75 lt",
        description: "Bottiglia 0,75 lt (naturale o frizzante).",
        price: 2.00,
      },
      {
        name: "Coca Cola / Fanta / Coca Cola zero cl33 in vetro",
        description: "Bottiglia in vetro 33 cl.",
        price: 3.00,
      },
      {
        name: "Coca–Cola 1lt",
        description: "Bottiglia 1 litro.",
        price: 4.50,
      },
      {
        name: "Caffè",
        description: "Espresso.",
        price: 2.00,
      },
]);

export const bevandeAlcoliche: MenuItem[] = withImage([
    {
        name: "Birra alla spina",
        description: "Birra alla spina, a scelta formato.",
        options: [
          { quantity: "piccola", price: 3.50 },
          { quantity: "media", price: 6.00 },
          { quantity: "1lt", price: 12.00 },
        ]
      },
      { name: "Liquori e amari", description: "Selezione di liquori e amari.", price: 3.00 },
]);

export const dolci: MenuItem[] = withImage([
    { name: "Ciambelline al vino", description: "Biscotti tradizionali, perfetti a fine pasto.", price: 4.00 },
    { name: "Tozzetti con Vin Santo", description: "Cantucci con Vin Santo.", price: 4.00 },
    { name: "Tartufo bianco/nero *", description: "Gelato tartufo, a scelta bianco o nero.", price: 5.00 },
    { name: "Sorbetto al cocco o al limone *", description: "Sorbetto rinfrescante, cocco o limone.", price: 5.00 },
    { name: "Semifreddo al torroncino *", description: "Semifreddo cremoso al torroncino.", price: 5.00 },
    { name: "Semifreddo agli agrumi *", description: "Semifreddo fresco agli agrumi.", price: 5.00 },
    { name: "Cheesecake *", description: "Cheesecake cremosa.", price: 5.00 },
    { name: "Tiramisù *", description: "Tiramisù della tradizione.", price: 5.00 },
]);

export type MenuSectionGroup = {
    title: string;
    items: MenuItem[];
};

export type MenuSection = {
    id: string;
    label: string;
    shortLabel?: string;
    description: string;
    fallbackImage: string;
    items?: MenuItem[];
    groups?: MenuSectionGroup[];
    pricing?: string[];
    notice?: { title: string; body: string[] };
    kind: "items" | "groups" | "info";
};

const PIZZA_DESCRIPTION =
    "Le nostre pizze alla pala: impasto a lunga lievitazione, croccante fuori e morbido dentro. Scegli il tuo gusto e lasciati conquistare dal profumo appena sfornato.";

export const menuSections: MenuSection[] = [
    {
        id: "antipasti",
        label: "Antipasti",
        shortLabel: "Antipasti",
        description:
            "Per iniziare con gusto: bruschette, fritti e taglieri di salumi e formaggi locali.",
        fallbackImage: "/menu_bg.webp",
        items: Antipasti,
        kind: "items",
    },
    {
        id: "semplici",
        label: "Gusti semplici",
        shortLabel: "Semplici",
        description: PIZZA_DESCRIPTION,
        fallbackImage: "/menu_bg.webp",
        items: gustiSemplici,
        pricing: [
            "1 metro € 24,00",
            "½ metro € 12,00",
            "Small € 6,00",
            "Mozz. senza lattosio € 1,00",
        ],
        notice: {
            title: "Pizza alla pala al metro",
            body: [
                "Il prezzo totale varia a seconda dei gusti: sommate il prezzo dei singoli gusti scelti.",
                "1 metro – 4 gusti – consigliato per 4 persone",
                "¾ di metro – 3 gusti – consigliato per 3 persone",
                "½ metro – 2 gusti – consigliato per 2 persone",
                "Small – 1 gusto – consigliata per 1 persona",
            ],
        },
        kind: "items",
    },
    {
        id: "ricchi",
        label: "Gusti ricchi",
        shortLabel: "Ricchi",
        description: PIZZA_DESCRIPTION,
        fallbackImage: "/menu_bg.webp",
        items: gustiRicchi,
        pricing: [
            "1 metro € 30,00",
            "½ metro € 15,00",
            "Small € 7,50",
            "Mozz. senza lattosio € 1,00",
        ],
        kind: "items",
    },
    {
        id: "speciali",
        label: "Gusti speciali",
        shortLabel: "Speciali",
        description: PIZZA_DESCRIPTION,
        fallbackImage: "/menu_bg.webp",
        items: gustiSpeciali,
        pricing: [
            "1 metro € 36,00",
            "½ metro € 18,00",
            "Small € 9,00",
            "Mozz. senza lattosio € 1,00",
        ],
        kind: "items",
    },
    {
        id: "estivi",
        label: "Gusti estivi",
        shortLabel: "Estivi",
        description: PIZZA_DESCRIPTION,
        fallbackImage: "/menu_bg.webp",
        items: gustiEstivi,
        pricing: [
            "1 metro € 30,00",
            "½ metro € 15,00",
            "Small € 7,50",
            "Mozz. senza lattosio € 1,00",
        ],
        kind: "items",
    },
    {
        id: "vini",
        label: "Vini",
        shortLabel: "Vini",
        description:
            "Rossi e bianchi selezionati, dalla bottiglia al calice per accompagnare ogni piatto.",
        fallbackImage: "/menu_bg.webp",
        groups: [
            { title: "Vini rossi", items: viniRossi },
            { title: "Vini bianchi", items: viniBianchi },
        ],
        kind: "groups",
    },
    {
        id: "bevande",
        label: "Bevande",
        shortLabel: "Bevande",
        description:
            "Tra un morso e un sorso: analcoliche fresche e birra alla spina.",
        fallbackImage: "/menu_bg.webp",
        groups: [
            { title: "Bevande analcoliche", items: bevandeAnalcoliche },
            { title: "Bevande alcoliche", items: bevandeAlcoliche },
        ],
        kind: "groups",
    },
    {
        id: "dolci",
        label: "Dolci",
        shortLabel: "Dolci",
        description:
            "Per finire in dolcezza: semifreddi, tiramisù e specialità della casa.",
        fallbackImage: "/menu_bg.webp",
        items: dolci,
        kind: "items",
    },
    {
        id: "info",
        label: "Info",
        shortLabel: "Info",
        description:
            "Servizi, note sui prodotti surgelati e informazioni sui prezzi indicativi.",
        fallbackImage: "/menu_bg.webp",
        kind: "info",
    },
];