import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Coffee,
  CupSoda,
  Flame,
  Heart,
  Home,
  IceCream,
  MapPin,
  Menu as MenuIcon,
  ShoppingBag,
  Sparkles,
  Star,
} from "lucide-react";
import snack1 from "./assets/snack1.jpg";
import snack2 from "./assets/snack2.jpg";
import snack3 from "./assets/snack3.jpg";
import snack4 from "./assets/snack4.jpg";
import snack5 from "./assets/snack5.jpg";
import snack6 from "./assets/snack6.jpg";

const FEATURED_ITEMS = [
  {
    title: "Esquites preparados",
    kicker: "Corn, crema, chile",
    image: snack2,
    color: "bg-[#FFD600]",
  },
  {
    title: "Pepinos locos",
    kicker: "Chamoy, tajin, crunch",
    image: snack6,
    color: "bg-[#00A878]",
  },
  {
    title: "Vasos de fruta",
    kicker: "Fresh fruit, spicy candy",
    image: snack1,
    color: "bg-[#FF7A1A]",
  },
  {
    title: "Dorilocos",
    kicker: "Loaded street snacks",
    image: snack4,
    color: "bg-[#FF0A78]",
  },
  {
    title: "Chamoy cups",
    kicker: "Sweet heat favorites",
    image: snack3,
    color: "bg-[#8ED7FF]",
  },
  {
    title: "Elote bowls",
    kicker: "Bold, messy, perfect",
    image: snack5,
    color: "bg-[#FFD600]",
  },
];

const MENU_DATA = [
  {
    id: "aguas",
    title: "Aguas Frescas",
    eyebrow: "Fresh sips",
    icon: CupSoda,
    images: [snack1, snack2, snack6],
    accent: "bg-[#00A878]",
    items: [
      {
        name: "Small (15oz)",
        price: "$5.00",
        desc: "Refreshing traditional fruit waters.",
      },
      {
        name: "Medium (20oz)",
        price: "$6.00",
        desc: "Refreshing traditional fruit waters.",
      },
      {
        name: "Large (32oz)",
        price: "$10.00",
        desc: "Refreshing traditional fruit waters.",
      },
      {
        name: "MicheAgua",
        price: "$15.00",
        desc: "Spiced up agua fresca with chamoy and tajin.",
      },
    ],
  },
  {
    id: "icecream",
    title: "Icecream & Helados",
    eyebrow: "Cold treats",
    icon: IceCream,
    images: [snack2, snack5, snack3],
    accent: "bg-[#FFD600]",
    items: [
      {
        name: "Small Scoop",
        price: "$3.75",
        desc: "A creamy single scoop in your favorite helado flavor.",
      },
      {
        name: "Medium Scoop",
        price: "$5.75",
        desc: "Extra creamy helado with more room for sweet toppings.",
      },
      {
        name: "Large Scoop",
        price: "$6.50",
        desc: "A generous scoop made for serious ice cream cravings.",
      },
      {
        name: "Paletas",
        price: "$3.75",
        desc: "Traditional Mexican popsicles.",
      },
      {
        name: "Paleta Loka",
        price: "$5.75",
        desc: "Covered in toppings and chamoy.",
      },
      {
        name: "Choco Banana",
        price: "$3.99",
        desc: "Frozen banana dipped in chocolate for a classic sweet bite.",
      },
      {
        name: "Banana Split",
        price: "$13.75",
        desc: "Ice cream, fruit, sauces, and toppings piled high.",
      },
      {
        name: "Pepino Split",
        price: "$13.75",
        desc: "Cucumber split with spicy candies.",
      },
      {
        name: "Concha Rellena",
        price: "$9.50",
        desc: "Sweet bread stuffed with ice cream.",
      },
    ],
  },
  {
    id: "chamoyadas",
    title: "Chamoyadas & Mangonadas",
    eyebrow: "Sweet heat",
    icon: Flame,
    images: [snack6, snack3, snack2],
    accent: "bg-[#FF7A1A]",
    items: [
      {
        name: "Chamoyada - Small",
        price: "$8.00",
        desc: "Frozen fruit blend layered with chamoy and tajin.",
      },
      {
        name: "Chamoyada - Large",
        price: "$12.00",
        desc: "A bigger sweet-and-spicy slush packed with bold chamoy flavor.",
      },
      {
        name: "Mangonada - 12oz",
        price: "$9.00",
        desc: "Mango sorbet, chamoy, tajin, tamarind stick.",
      },
      {
        name: "Mangonada - 16oz",
        price: "$11.00",
        desc: "A larger mango favorite with extra chamoy and tamarind.",
      },
    ],
  },
  {
    id: "shakes",
    title: "Milkshakes",
    eyebrow: "Creamy builds",
    icon: CupSoda,
    images: [snack2, snack5, snack1],
    accent: "bg-[#8ED7FF]",
    items: [
      {
        name: "Classic Shake - Small",
        price: "$7.50",
        desc: "Strawberry, Oreo, Chocolate, Vanilla, Fruity Pebbles",
      },
      {
        name: "Classic Shake - Large",
        price: "$9.00",
        desc: "Extra creamy shake in your favorite classic flavor.",
      },
      {
        name: "Gansito Shake - Small",
        price: "$10.00",
        desc: "Premium shake with Mexican snack cake.",
      },
      {
        name: "Gansito Shake - Large",
        price: "$18.00",
        desc: "A larger indulgent shake blended with rich Gansito flavor.",
      },
    ],
  },
  {
    id: "fresas",
    title: "Fresas",
    eyebrow: "Fruit favorites",
    icon: Heart,
    images: [snack1, snack3, snack6],
    accent: "bg-[#FF5C93]",
    items: [
      {
        name: "Fresas Con Crema - Small",
        price: "$8.00",
        desc: "Strawberries in sweet cream.",
      },
      {
        name: "Fresas Con Crema - Large",
        price: "$12.00",
        desc: "More strawberries and sweet cream in every spoonful.",
      },
      {
        name: "Dubai Strawberries - Small",
        price: "$9.50",
        desc: "Premium chocolate covered.",
      },
      {
        name: "Dubai Strawberries - Large",
        price: "$13.75",
        desc: "A bigger serving of chocolate-dipped strawberries with luxe toppings.",
      },
    ],
  },
  {
    id: "drinks",
    title: "Hot & Cold Drinks",
    eyebrow: "Cafe counter",
    icon: Coffee,
    images: [snack5, snack2, snack1],
    accent: "bg-[#211620]",
    items: [
      {
        name: "Hot Coffee",
        price: "$1.50 / $2.50",
        desc: "Simple, bold coffee served hot and fresh.",
      },
      {
        name: "Hot Chocolate",
        price: "$1.50 / $2.50",
        desc: "Warm chocolate drink with a smooth, comforting finish.",
      },
      {
        name: "Champurrado",
        price: "$2.50 / $3.75",
        desc: "Traditional thick Mexican chocolate drink with cinnamon notes.",
      },
      {
        name: "Iced Coffee Regular",
        price: "$3.75",
        desc: "Chilled coffee poured over ice for an easy pick-me-up.",
      },
      {
        name: "Flavored Ice Coffee",
        price: "$4.25",
        desc: "Caramel, Vanilla, Hazelnut, Cookie Butter, White Choco",
      },
      {
        name: "Caramel Frappe",
        price: "$5.75",
        desc: "Blended iced caramel coffee with a smooth, sweet finish.",
      },
      {
        name: "Matcha Strawberry Latte",
        price: "$6.75",
        desc: "Earthy matcha layered with sweet strawberry milk.",
      },
    ],
  },
];

const LOCATIONS = [
  {
    area: "Jackson Heights",
    name: "Snackeria Antojitos",
    address: "95-11 35th Ave",
    city: "Jackson Heights, NY",
  },
  {
    area: "Bushwick",
    name: "Snackeria Antojitos",
    address: "1601 Gates Ave",
    city: "Brooklyn, NY",
  },
  {
    area: "Sunset Park",
    name: "Snackeria Antojitos",
    address: "5311 5th Ave",
    city: "Brooklyn, NY",
  },
];

const imageForMenuItem = (category, index) =>
  category.images[index % category.images.length];

const CarouselRibbon = () => {
  const carouselItems = [...FEATURED_ITEMS, ...FEATURED_ITEMS];

  return (
    <section
      className="relative overflow-hidden border-y-2 border-[#211620] bg-[#211620]"
      aria-label="Featured snacks"
    >
      <div className="carousel-mask">
        <div className="carousel-track py-4">
          {carouselItems.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="mx-3 flex w-[250px] shrink-0 items-center gap-3 rounded-lg border-2 border-white/20 bg-white p-2 shadow-[4px_4px_0_rgba(255,255,255,0.2)] sm:w-[300px]"
              aria-hidden={index >= FEATURED_ITEMS.length}
            >
              <div
                className={`h-20 w-20 shrink-0 overflow-hidden rounded-md border-2 border-[#211620] ${item.color}`}
              >
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover mix-blend-multiply"
                />
              </div>
              <div className="min-w-0">
                <h2 className="font-paytone text-base leading-tight text-[#FF0A78] sm:text-lg">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm font-black text-[#211620]">
                  {item.kicker}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ item, index }) => (
  <article className="gum-card group overflow-hidden bg-white">
    <div className="relative h-60 overflow-hidden border-b-2 border-[#211620] bg-[#FFD600]">
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute left-4 top-4 rounded-md border-2 border-[#211620] bg-white px-3 py-1 font-paytone text-sm text-[#FF0A78]">
        0{index + 1}
      </div>
    </div>
    <div className="p-5">
      <h3 className="font-paytone text-2xl leading-tight text-[#211620]">
        {item.title}
      </h3>
      <p className="mt-2 font-bold text-gray-600">{item.kicker}</p>
    </div>
  </article>
);

const HomeView = ({ onNavigate }) => (
  <div className="animate-fade-in bg-[#fff7fb] pb-28 md:pb-16">
    <CarouselRibbon />

    <section
      className="relative min-h-[560px] overflow-hidden border-b-2 border-[#211620] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(255,10,120,0.96) 0%, rgba(255,10,120,0.88) 42%, rgba(255,10,120,0.42) 100%), url(${snack2})`,
      }}
    >
      <div className="hero-pattern absolute inset-0 opacity-50" />
      <div className="relative mx-auto flex min-h-[560px] w-full max-w-7xl items-center px-4 py-14 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-white">
          <div className="mb-5 inline-flex items-center gap-2 rounded-md border-2 border-[#211620] bg-[#FFD600] px-4 py-2 font-paytone text-sm text-[#211620] shadow-[4px_4px_0_rgba(31,23,32,1)]">
            <Sparkles size={18} strokeWidth={3} />
            NYC Paleteria
          </div>
          <h1 className="font-paytone text-5xl leading-none text-white drop-shadow-[4px_4px_0_rgba(31,23,32,0.7)] sm:text-6xl lg:text-8xl">
            SNACKERIA ANTOJITOS
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-black leading-relaxed text-white sm:text-2xl">
            Mexican snacks, paletas, aguas frescas, and loaded antojitos with
            the bright pink energy you already love.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => onNavigate("menu")}
              className="gum-button bg-[#FFD600] text-[#211620]"
            >
              Order now <ChevronRight size={22} strokeWidth={4} />
            </button>
            <button
              onClick={() => onNavigate("locations")}
              className="gum-button bg-white text-[#FF0A78]"
            >
              Find a shop <MapPin size={20} strokeWidth={3} />
            </button>
          </div>
        </div>
      </div>
    </section>

    <section className="border-b-2 border-[#211620] bg-[#FFD600] py-10 md:py-14">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          ["3", "NYC locations"],
          ["6", "Menu categories"],
          ["Fresh", "Made-to-order snacks"],
        ].map(([value, label]) => (
          <div key={label} className="flex items-center gap-4">
            <span className="font-paytone text-5xl text-[#FF0A78]">
              {value}
            </span>
            <span className="max-w-[150px] text-lg font-black leading-tight text-[#211620]">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>

    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-paytone text-[#FF0A78]">Trending now</p>
          <h2 className="mt-2 font-paytone text-4xl leading-tight text-[#211620] md:text-5xl">
            Loaded, bright, and ready for the first bite
          </h2>
        </div>
        <button
          onClick={() => onNavigate("menu")}
          className="gum-button w-full bg-[#FF0A78] text-white sm:w-auto"
        >
          Full menu <ArrowUpRight size={20} strokeWidth={3} />
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {FEATURED_ITEMS.slice(0, 3).map((item, index) => (
          <FeatureCard key={item.title} item={item} index={index} />
        ))}
      </div>
    </section>

    <section className="border-y-2 border-[#211620] bg-[#FF0A78] py-14 text-white md:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:items-center lg:px-8">
        <div>
          <p className="font-paytone text-[#FFD600]">Discover antojitos</p>
          <h2 className="mt-3 font-paytone text-4xl leading-tight md:text-6xl">
            Mexican tradition with a playful street-snack punch
          </h2>
          <p className="mt-5 max-w-2xl text-lg font-bold leading-relaxed text-pink-50">
            Our menu celebrates bold chamoy, sweet fruit, creamy helados, and
            classic favorites with generous toppings and a little extra sparkle.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["Quality ingredients", "Unique flavors", "Family owned"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border-2 border-white/25 bg-white/10 p-3 font-black"
                >
                  <CheckCircle2
                    className="shrink-0 text-[#FFD600]"
                    size={22}
                    strokeWidth={3}
                  />
                  <span>{item}</span>
                </div>
              ),
            )}
          </div>
        </div>

        <div className="gum-card overflow-hidden bg-[#FFD600]">
          <img
            src={snack6}
            alt="Prepared cucumber snack with chamoy and toppings"
            className="h-[360px] w-full object-cover md:h-[460px]"
          />
        </div>
      </div>
    </section>
  </div>
);

const MenuView = () => {
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].id);

  return (
    <div className="min-h-screen bg-[#fff7fb] pb-28 md:pb-16">
      <section className="border-b-2 border-[#211620] bg-[#FF0A78] text-white">
        <div className="hero-pattern mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <p className="font-paytone text-[#FFD600]">Made fresh</p>
          <h1 className="mt-2 font-paytone text-5xl leading-none md:text-7xl">
            Our Menu
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-bold leading-relaxed text-pink-50">
            Browse by category and pick your next paleteria craving.
          </p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-12 lg:px-8">
        <div className="sticky top-0 z-30 -mx-4 mb-8 border-y-2 border-[#211620] bg-[#fff7fb]/95 px-4 py-4 backdrop-blur md:top-[88px] md:mx-0 md:rounded-lg md:border-2">
          <div className="flex gap-3 overflow-x-auto pb-1 no-scrollbar md:flex-wrap">
            {MENU_DATA.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-lg border-2 border-[#211620] px-4 py-3 font-paytone text-sm transition-all ${
                    isActive
                      ? "bg-[#FFD600] text-[#211620] shadow-[4px_4px_0_rgba(31,23,32,1)]"
                      : "bg-white text-[#FF0A78] hover:-translate-y-0.5 hover:shadow-[3px_3px_0_rgba(31,23,32,1)]"
                  }`}
                >
                  <Icon size={18} strokeWidth={3} />
                  {cat.title}
                </button>
              );
            })}
          </div>
        </div>

        {MENU_DATA.map((category) => {
          const Icon = category.icon;

          return (
            <section
              key={category.id}
              className={`${activeCategory === category.id ? "block" : "hidden"} animate-slide-up`}
            >
              <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div
                      className={`grid h-12 w-12 place-items-center rounded-lg border-2 border-[#211620] ${category.accent} text-white shadow-[4px_4px_0_rgba(31,23,32,1)]`}
                    >
                      <Icon size={24} strokeWidth={3} />
                    </div>
                    <div>
                      <p className="font-paytone text-[#FF0A78]">
                        {category.eyebrow}
                      </p>
                      <h2 className="font-paytone text-3xl leading-tight text-[#211620] md:text-5xl">
                        {category.title}
                      </h2>
                    </div>
                  </div>
                </div>
                <span className="w-fit rounded-lg border-2 border-[#211620] bg-white px-4 py-2 font-black text-[#211620]">
                  {category.items.length} choices
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((item, index) => (
                  <article
                    key={`${category.id}-${item.name}`}
                    className="gum-card group flex min-h-full flex-col overflow-hidden bg-white"
                  >
                    <div className="relative h-56 overflow-hidden border-b-2 border-[#211620] bg-pink-50">
                      <img
                        src={imageForMenuItem(category, index)}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#211620]/55 to-transparent" />
                      <div className="absolute left-4 top-4 rounded-md border-2 border-[#211620] bg-white px-3 py-1 font-paytone text-sm text-[#211620] shadow-[3px_3px_0_rgba(31,23,32,1)]">
                        {category.eyebrow}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col gap-5 p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2">
                          <h3 className="font-paytone text-2xl leading-tight text-[#FF0A78]">
                            {item.name}
                          </h3>
                          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#211620]/70">
                            Made to order
                          </p>
                        </div>
                        <div className="flex shrink-0 flex-col items-end gap-3">
                          <span className="rounded-md border-2 border-[#211620] bg-[#FFD600] px-4 py-2 font-paytone text-sm text-[#211620] shadow-[3px_3px_0_rgba(31,23,32,1)]">
                            {item.price}
                          </span>
                          <div
                            className={`grid h-10 w-10 place-items-center rounded-md border-2 border-[#211620] ${category.accent} text-white`}
                          >
                            <Icon size={20} strokeWidth={3} />
                          </div>
                        </div>
                      </div>

                      <p className="min-h-[72px] font-bold leading-relaxed text-gray-600">
                        {item.desc}
                      </p>

                      <div className="mt-auto flex items-center justify-between border-t-2 border-dashed border-pink-200 pt-4">
                        <span className="font-paytone text-sm text-[#211620]">
                          Fresh made daily
                        </span>
                        <div className="flex items-center gap-2 text-[#FF0A78]">
                          <ShoppingBag size={22} strokeWidth={3} />
                          <span className="font-paytone text-sm">Pick your favorite</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

const LocationsView = () => (
  <div className="min-h-screen bg-[#fff7fb] pb-28 md:pb-16">
    <section className="border-b-2 border-[#211620] bg-[#FFD600]">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[0.9fr_1.1fr] md:items-end md:py-16 lg:px-8">
        <div>
          <p className="font-paytone text-[#FF0A78]">Find us</p>
          <h1 className="mt-2 font-paytone text-5xl leading-none text-[#211620] md:text-7xl">
            Our Locations
          </h1>
        </div>
        <p className="max-w-2xl text-lg font-black leading-relaxed text-[#211620]">
          Explore Snackeria Antojitos' New York locations. We are expanding and
          look forward to bringing more neighborhoods incredible Mexican snacks.
        </p>
      </div>
    </section>

    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {LOCATIONS.map((loc) => (
          <article key={loc.area} className="gum-card bg-white p-6 md:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <span className="rounded-lg border-2 border-[#211620] bg-[#FF0A78] px-3 py-2 font-paytone text-sm text-white">
                {loc.area}
              </span>
              <MapPin className="text-[#FF0A78]" size={28} strokeWidth={3} />
            </div>
            <h2 className="font-paytone text-3xl leading-tight text-[#211620]">
              {loc.name}
            </h2>
            <p className="mt-5 text-xl font-black text-gray-800">
              {loc.address}
            </p>
            <p className="text-xl font-black text-gray-800">{loc.city}</p>

            <button className="gum-button mt-8 w-full bg-[#FFD600] text-[#211620]">
              Directions <ArrowUpRight size={20} strokeWidth={3} />
            </button>
          </article>
        ))}
      </div>
    </section>
  </div>
);

const DesktopNavButton = ({ currentTab, tab, children, onClick }) => {
  const isActive = currentTab === tab;

  return (
    <button
      onClick={() => onClick(tab)}
      className={`rounded-md px-3 py-2 font-paytone transition-colors ${
        isActive
          ? "bg-[#FFD600] text-[#211620]"
          : "text-[#211620] hover:bg-pink-50 hover:text-[#FF0A78]"
      }`}
    >
      {children}
    </button>
  );
};

export default function App() {
  const [currentTab, setCurrentTab] = useState("home");

  return (
    <div className="min-h-screen bg-[#fff7fb] font-nunito text-[#211620]">
      <nav className="sticky top-0 z-50 hidden border-b-2 border-[#211620] bg-white md:block">
        <div className="mx-auto flex h-[88px] w-full max-w-7xl items-center justify-between px-6 lg:px-8">
          <button
            className="flex items-center gap-3"
            onClick={() => setCurrentTab("home")}
          >
            <div className="grid h-12 w-12 place-items-center rounded-lg border-2 border-[#211620] bg-[#FF0A78] text-[#FFD600] shadow-[4px_4px_0_rgba(31,23,32,1)]">
              <Sparkles size={25} strokeWidth={3} />
            </div>
            <span className="font-paytone text-3xl text-[#FF0A78]">
              SNACKERIA<span className="text-[#FFD600]">.</span>
            </span>
          </button>

          <div className="flex items-center gap-2 text-base">
            <DesktopNavButton
              currentTab={currentTab}
              tab="home"
              onClick={setCurrentTab}
            >
              Home
            </DesktopNavButton>
            <DesktopNavButton
              currentTab={currentTab}
              tab="menu"
              onClick={setCurrentTab}
            >
              Menu
            </DesktopNavButton>
            <DesktopNavButton
              currentTab={currentTab}
              tab="locations"
              onClick={setCurrentTab}
            >
              Locations
            </DesktopNavButton>
          </div>

          <button
            onClick={() => setCurrentTab("menu")}
            className="gum-button bg-[#FF0A78] text-white"
          >
            Order online <ShoppingBag size={19} strokeWidth={3} />
          </button>
        </div>
      </nav>

      <main className="relative w-full overflow-x-hidden">
        {currentTab === "home" && <HomeView onNavigate={setCurrentTab} />}
        {currentTab === "menu" && <MenuView />}
        {currentTab === "locations" && <LocationsView />}
      </main>

      <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
        <div className="mx-auto flex h-16 max-w-md items-center justify-around rounded-lg border-2 border-[#211620] bg-[#211620] px-2 shadow-[0_10px_30px_rgba(31,23,32,0.35)]">
          {[
            { id: "home", label: "Home", icon: Home },
            { id: "menu", label: "Menu", icon: MenuIcon },
            { id: "locations", label: "Places", icon: MapPin },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setCurrentTab(item.id)}
                className={`flex h-12 w-20 flex-col items-center justify-center rounded-md text-xs font-black transition-all ${
                  isActive
                    ? "bg-[#FFD600] text-[#211620]"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Icon size={21} strokeWidth={3} />
                <span className="mt-0.5">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
