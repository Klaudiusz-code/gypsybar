export const navLinks = [
  { href: "#realizacje", label: "Realizacje" },
  { href: "#menu", label: "Menu" },
  { href: "#pakiety", label: "Pakiety" },
  { href: "#kontakt", label: "Rezerwuj" },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&h=1200&fit=crop",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=600&fit=crop",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1570732729819-0fd0ef90a7e4?w=600&h=600&fit=crop",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?w=600&h=600&fit=crop",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1629249727408-20f8362b4406?w=600&h=600&fit=crop",
    span: "md:col-span-2",
  },
];

export const drinks = [
  { name: "Aperol Spritz", desc: "Aperol, Prosecco, Woda gazowana" },
  { name: "Espresso Martini", desc: "Wódka, Kawa, Likier kawowy" },
  { name: "Old Fashioned", desc: "Bourbon, Cukier, Angostura" },
  { name: "Pornstar Martini", desc: "Wódka, Passiflora, Śmietanka" },
  { name: "Classic Mojito", desc: "Rum biały, Mięta, Limonka" },
  { name: "Whisky Sour", desc: "Whisky, Sok z cytryny, Białko" },
];

export const packages = [
  {
    name: "Basic",
    price: "od X zł",
    desc: "Solidna baza",
    features: [
      "Mobilny bar",
      "1 Prywatny Barman",
      "Menu 4 klasyczne drinki",
      "Szkło i sprzęt",
      "2 godziny obsługi",
    ],
    highlight: false,
  },
  {
    name: "Standard",
    price: "od X zł",
    desc: "Najczęstszy wybór",
    features: [
      "Mobilny bar",
      "1 Prywatny Barman",
      "Rozszerzone menu (6 drinków)",
      "Eleganckie dodatki",
      "3 godziny obsługi",
      "Współpraca z cateringiem",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "od X zł",
    desc: "Full VIP Experience",
    features: [
      "Mobilny bar",
      "1 Prywatny Barman",
      "Menu nielimitowane (autorskie)",
      "Show barmańskie / Flair",
      "4+ godziny obsługi",
      "Pełna personalizacja",
    ],
    highlight: false,
  },
];

// W pliku @/lib/data.ts

export const services = [
  {
    icon: "birthday-cake", // Mapuje na FaBirthdayCake
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
    title: "Śluby i Wesela",
    desc: "Niech goście pamiętają Wasz dzień nie tylko z tańca, ale też z wybitnych koktajli. Zdejmujemy z Was całą logistykę baru – od zaplanowania menu po obsługę w trakcie przyjęcia.",
  },
  {
    icon: "building", // Mapuje na FaBuilding
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    title: "Eventy Firmowe",
    desc: "Podnieś standard swojego spotkania integracyjnego lub bankietu. Elegancka obsługa barmańska, która buduje wizerunek firmy i gwarantuje doskonałą zabawę bez stresu organizacyjnego.",
  },
  {
    icon: "cocktail", // Mapuje na FaCocktail
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=400&fit=crop",
    title: "Przyjęcia Prywatne",
    desc: "Urodziny, rocznice, kameralne domówki. Tworzymy autorskie menu dopasowane do gustu solenizanta, żebyś Ty też mógł w końcu cieszyć się własną imprezą.",
  },
  {
    icon: "glass-cheers", // Mapuje na FaGlassCheers
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop",
    title: "Festiwale i Plener",
    desc: "Szybka, bezbłędna obsługa nawet przy największym tłumie. Własne autorskie drinki, które stają się hitem każdego dużego wydarzenia pod chmurką.",
  },
];
