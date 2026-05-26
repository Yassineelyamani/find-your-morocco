/* One-off generator for SEO landing pages — run: node scripts/generate-seo-pages.js */
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");

const WA = "212673628871";
const SITE = "https://www.findyourmorocco.com";

const allTours = [
  { slug: "private-morocco-tours", label: "Private Morocco Tours", tag: "Private" },
  { slug: "luxury-morocco-tours", label: "Luxury Morocco Tours", tag: "Luxury" },
  { slug: "marrakech-luxury-tours", label: "Marrakech Luxury Tours", tag: "Marrakech" },
  { slug: "sahara-desert-luxury-experience", label: "Sahara Desert Luxury", tag: "Sahara" },
  { slug: "morocco-honeymoon-tours", label: "Morocco Honeymoon Tours", tag: "Honeymoon" },
  { slug: "morocco-family-tours", label: "Morocco Family Tours", tag: "Family" },
  { slug: "10-day-morocco-itinerary", label: "10-Day Morocco Itinerary", tag: "Itinerary" }
];

const pages = [
  {
    slug: "private-morocco-tours",
    title: "Private Morocco Tours | Bespoke Private Travel | Find Your Morocco",
    description:
      "Book private Morocco tours with a licensed operator — private driver, expert guides, luxury riads & fully custom itineraries for international travelers.",
    h1: "Private Morocco Tours",
    h1em: "Your Journey, Only Yours",
    image: "assets/riad.jpg",
    imgAlt: "Luxury Moroccan riad courtyard — private Morocco tours with Find Your Morocco",
    wa: "Private%20Morocco%20Tours",
    lead:
      "Travel Morocco on your terms with a dedicated private vehicle, handpicked accommodations and a concierge team that designs every detail around you — from first airport greeting to farewell in the medina.",
    blocks: [
      {
        h2: "Why Choose Private Morocco Tours",
        p: "Unlike group departures, <strong>private Morocco tours</strong> give international guests complete control over pace, stops and style. Couples, families and friends enjoy unhurried medina walks, scenic Atlas detours and Sahara arrivals timed for sunset — without sharing the experience with strangers.",
        list: [
          "Exclusive private 4×4 or premium minivan with professional driver",
          "Licensed local guides in Marrakech, Fes, Casablanca and the desert",
          "Luxury riads, boutique hotels and premium Morocco desert camps",
          "Flexible daily schedule — linger at souks or add a spa afternoon"
        ]
      },
      {
        h2: "What Your Private Itinerary Can Include",
        p: "Most guests combine imperial cities with a <a href=\"sahara-desert-luxury-experience.html\">Sahara desert luxury experience</a> or focus on a <a href=\"marrakech-luxury-tours.html\">Marrakech luxury tour</a>. We handle logistics, reservations and 24/7 WhatsApp support in English, French and Arabic.",
        list: [
          "Airport meet-and-greet in Casablanca, Marrakech or Fes",
          "Private medina tours, palaces, museums and gastronomy",
          "Atlas day trips, coastal escapes and blue-city Chefchaouen",
          "Camel trekking and luxury desert camps at Merzouga"
        ]
      },
      {
        h2: "Plan Your Private Morocco Travel",
        p: "Tell us your dates, group size and interests — we reply within 24 hours with a tailored quote. Explore our <a href=\"luxury-morocco-tours.html\">luxury Morocco tours</a>, <a href=\"10-day-morocco-itinerary.html\">10-day Morocco itinerary</a> or return to <a href=\"index.html#packages\">tour packages</a> on the homepage."
      }
    ],
    reviewSnippet: {
      quote: "Communication on WhatsApp was effortless. Our guide shared fascinating history in the Atlas and the agency adapted our route when we wanted an extra night in Chefchaouen.",
      author: "James K., Toronto — Private Morocco Tour"
    },
    highlights: [
      { h3: "100% Private", p: "Your vehicle, your guide and your timetable — never a shared bus." },
      { h3: "Licensed Operator", p: "Fully insured transport and vetted partners across Morocco." },
      { h3: "Luxury Stays", p: "Hand-selected riads and premium desert camps." },
      { h3: "Global Guests", p: "Tailored for travelers from the US, UK, EU & beyond." }
    ]
  },
  {
    slug: "luxury-morocco-tours",
    title: "Luxury Morocco Tours | Premium Private Journeys | Find Your Morocco",
    description:
      "Luxury Morocco tours for discerning travelers — private drivers, five-star riads, gourmet dining and bespoke Sahara & imperial city itineraries.",
    h1: "Luxury Morocco Tours",
    h1em: "Refined & Authentic",
    image: "assets/hero-desert.jpg",
    imgAlt: "Merzouga Sahara dunes at sunset — luxury Morocco tours",
    wa: "Luxury%20Morocco%20Tours",
    lead:
      "Experience Morocco with white-glove service: curated luxury riads, premium desert camps, private guides and seamless logistics designed for guests who expect comfort without sacrificing authenticity.",
    blocks: [
      {
        h2: "The Find Your Morocco Luxury Standard",
        p: "Our <strong>luxury Morocco tours</strong> blend iconic destinations with insider access — private museum visits, reserved riad terraces and sunset camel arrivals at Erg Chebbi. Every journey is fully bespoke for international travelers.",
        list: [
          "Five-star and boutique riad accommodations",
          "Premium en-suite Morocco desert camp tents",
          "Private dining, wine pairings and Moroccan gastronomy",
          "Concierge support from planning through departure"
        ]
      },
      {
        h2: "Signature Luxury Experiences",
        p: "Combine a <a href=\"marrakech-luxury-tours.html\">Marrakech luxury tour</a> with a <a href=\"sahara-desert-luxury-experience.html\">Sahara desert luxury experience</a>, or request a <a href=\"morocco-honeymoon-tours.html\">Morocco honeymoon tour</a> with romantic upgrades.",
        list: [
          "Hot-air balloon over Marrakech at dawn",
          "Hammam, spa and private cooking classes",
          "Scenic flights and helicopter Atlas transfers (on request)",
          "Multi-city routes: coast, mountains, medinas & dunes"
        ]
      },
      {
        h2: "Start Your Luxury Morocco Vacation",
        p: "Message us on WhatsApp for a complimentary itinerary proposal. Compare <a href=\"private-morocco-tours.html\">private Morocco tours</a> and our <a href=\"index.html#destinations\">Morocco destinations</a> to shape your perfect trip."
      }
    ],
    reviewSnippet: {
      quote: "Private medina tours, stunning riads and seamless logistics across Marrakech and Fes. Our driver was professional and every reservation handled perfectly.",
      author: "Marco R., Milan — Luxury Morocco Tour"
    },
    highlights: [
      { h3: "Bespoke Design", p: "No templates — every luxury tour is built from scratch." },
      { h3: "Premium Camps", p: "Glamping-style Sahara tents with ensuite bathrooms." },
      { h3: "Expert Guides", p: "Storytellers who unlock culture, history and hidden gems." },
      { h3: "Transparent Quotes", p: "Clear pricing via WhatsApp — no hidden fees." }
    ]
  },
  {
    slug: "marrakech-luxury-tours",
    title: "Marrakech Luxury Tours | Private Medina & Riad Experiences | Find Your Morocco",
    description:
      "Marrakech luxury tours with private guides, palace visits, Jemaa el-Fnaa evenings, luxury riads and day trips to the Atlas — fully private for international guests.",
    h1: "Marrakech Luxury Tours",
    h1em: "Medina, Palaces & Riads",
    image: "assets/marrakech.jpg",
    imgAlt: "Jemaa el-Fnaa at night with Koutoubia minaret — Marrakech luxury tours",
    wa: "Marrakech%20Luxury%20Tours",
    lead:
      "Discover the Red City in style — private medina tours, Majorelle and Bahia Palace, reserved riad dining and evenings in Jemaa el-Fnaa, with optional Atlas escapes and desert extensions.",
    blocks: [
      {
        h2: "What Makes Our Marrakech Luxury Tours Different",
        p: "We avoid rushed group walks. Your <strong>Marrakech luxury tour</strong> is paced for comfort — morning souks before crowds, air-conditioned transport and a guide who opens doors to ateliers, gardens and rooftop terraces.",
        list: [
          "Private guided medina & souk orientation",
          "Bahia Palace, Saadian Tombs and hidden riads",
          "Majorelle Garden & Yves Saint Laurent Museum",
          "Sunset at Jemaa el-Fnaa with reserved dining"
        ]
      },
      {
        h2: "Marrakech Extensions & Day Trips",
        p: "Many guests add Ourika Valley, Agafay desert dinners or continue to Fes on a <a href=\"luxury-morocco-tours.html\">luxury Morocco tour</a>. Link your city stay with a <a href=\"sahara-desert-luxury-experience.html\">Sahara luxury experience</a> via private 4×4.",
        list: [
          "Atlas Mountains & Berber village lunches",
          "Agafay stone desert glamping dinners",
          "Hot-air balloon at sunrise (seasonal)",
          "Imperial cities route: Marrakech → Fes → Casablanca"
        ]
      },
      {
        h2: "Book Your Marrakech Luxury Tour",
        p: "Flying into RAK? We arrange VIP airport transfers and riad check-in. See also <a href=\"index.html#marrakech-luxury-tour\">homepage packages</a> and <a href=\"private-morocco-tours.html\">private Morocco tours</a>."
      }
    ],
    reviewSnippet: {
      quote: "Private guided walks through the medina, reserved riad dining and evenings in Jemaa el-Fnaa — paced for comfort with an expert who opened doors we would never find alone.",
      author: "Marco R., Milan — Marrakech Luxury Tour"
    },
    highlights: [
      { h3: "Luxury Riads", p: "Courtyard pools, hammam suites and rooftop breakfasts." },
      { h3: "Night Medinas", p: "Safe, guided evenings through vibrant squares." },
      { h3: "Food & Wine", p: "Fine Moroccan dining and international wine lists." },
      { h3: "4–7 Day Stays", p: "Ideal length for city + Atlas combinations." }
    ]
  },
  {
    slug: "sahara-desert-luxury-experience",
    title: "Sahara Desert Luxury Experience | Merzouga Private Tours | Find Your Morocco",
    description:
      "Sahara desert luxury experience at Merzouga — private 4×4, sunset camel trekking, premium desert camp, stargazing and gourmet dining under the dunes.",
    h1: "Sahara Desert Luxury Experience",
    h1em: "Merzouga & Erg Chebbi",
    image: "assets/merzouga.jpg",
    imgAlt: "Golden Merzouga dunes — Sahara desert luxury experience Morocco",
    wa: "Sahara%20Desert%20Luxury%20Experience",
    lead:
      "Sleep under a canopy of stars in a premium Morocco desert camp — private transfer across the Atlas, sunset camel ride on Erg Chebbi and white-glove hospitality in the heart of the Sahara.",
    blocks: [
      {
        h2: "Your Luxury Sahara Desert Journey",
        p: "Our <strong>Sahara desert luxury experience</strong> typically spans 3–5 days from Marrakech or Fes, crossing the High Atlas, Dades Gorges and palm oases before golden dunes appear on the horizon.",
        list: [
          "Private 4×4 with experienced desert driver",
          "Sunset & sunrise camel trekking on Erg Chebbi",
          "En-suite luxury desert camp with gourmet meals",
          "Live Berber music, stargazing and campfire tea"
        ]
      },
      {
        h2: "Premium Desert Camp Comfort",
        p: "Expect proper beds, private bathrooms, hot showers and fine dining — far from basic camping. Pair with <a href=\"luxury-morocco-tours.html\">luxury Morocco tours</a> or a full <a href=\"10-day-morocco-itinerary.html\">10-day Morocco itinerary</a>.",
        list: [
          "Spacious tents with quality linens & lighting",
          "Multi-course Moroccan dinners & breakfast",
          "Photography stops at kasbahs & gorges en route",
          "Optional luxury tent upgrades for honeymoons"
        ]
      },
      {
        h2: "Reserve Your Sahara Experience",
        p: "Popular year-round — book early for peak season. View the <a href=\"index.html#sahara-desert-tour\">Sahara package on our homepage</a> or combine with <a href=\"marrakech-luxury-tours.html\">Marrakech luxury tours</a>."
      }
    ],
    reviewSnippet: {
      quote: "Youssef was an incredible guide! He was knowledgeable, friendly, and made our desert trip unforgettable. The camp was luxurious and the camel ride at sunset was magical. Highly recommend Find Your Morocco.",
      author: "Sam S., California — Sahara Desert Tour"
    },
    highlights: [
      { h3: "Erg Chebbi Dunes", p: "Morocco's highest dunes — iconic golden horizons." },
      { h3: "Private Transfers", p: "Scenic Atlas routes with photo stops." },
      { h3: "Luxury Camps", p: "Premium tents — comfort in the wilderness." },
      { h3: "3–5 Days", p: "Perfect add-on to imperial city tours." }
    ]
  },
  {
    slug: "morocco-honeymoon-tours",
    title: "Morocco Honeymoon Tours | Romantic Private Journeys | Find Your Morocco",
    description:
      "Morocco honeymoon tours — private riads, candlelit dinners, Sahara glamping, hammam rituals and bespoke romantic itineraries for couples worldwide.",
    h1: "Morocco Honeymoon Tours",
    h1em: "Romance & Wonder",
    image: "assets/chefchaouen.jpg",
    imgAlt: "Chefchaouen blue streets — romantic Morocco honeymoon tours",
    wa: "Morocco%20Honeymoon%20Tours",
    lead:
      "Celebrate your love story with a tailor-made Morocco honeymoon — intimate riads, desert sunsets, coastal hideaways and surprise touches arranged discreetly by our concierge team.",
    blocks: [
      {
        h2: "Romantic Morocco Honeymoon Ideas",
        p: "<strong>Morocco honeymoon tours</strong> often blend Marrakech riads, a <a href=\"sahara-desert-luxury-experience.html\">Sahara desert luxury experience</a> and the blue streets of Chefchaouen — with private transfers and no shared excursions.",
        list: [
          "Riad suites with plunge pools & rooftop dinners",
          "Private camel ride at sunset on the dunes",
          "Couples hammam & spa rituals",
          "Candlelit desert camp dinners under the stars"
        ]
      },
      {
        h2: "Honeymoon Routes We Love",
        p: "From 7 to 14 days, we balance adventure and relaxation. Many couples start with <a href=\"marrakech-luxury-tours.html\">Marrakech luxury tours</a> then unwind on the coast or in the mountains.",
        list: [
          "Marrakech → Atlas → Merzouga → Fes",
          "Casablanca coast & Essaouira seafood dinners",
          "Chefchaouen photo sessions at golden hour",
          "Optional Agafay desert dinner near Marrakech"
        ]
      },
      {
        h2: "Plan Your Morocco Honeymoon",
        p: "Share your dates and dreams — we handle surprises, upgrades and pacing. Explore <a href=\"luxury-morocco-tours.html\">luxury Morocco tours</a> and <a href=\"private-morocco-tours.html\">private Morocco tours</a> for more inspiration."
      }
    ],
    reviewSnippet: {
      quote: "From candlelit desert dinners to a riad with a private pool in Marrakech — every moment felt special. Find Your Morocco understood exactly what we wanted for our honeymoon.",
      author: "Emma T., Sydney — Honeymoon Tour"
    },
    highlights: [
      { h3: "Intimate Riads", p: "Privacy, charm and exceptional service." },
      { h3: "Desert Magic", p: "Luxury camps designed for two." },
      { h3: "Surprise Touches", p: "Flowers, cakes and private dining on request." },
      { h3: "Stress-Free", p: "We manage every transfer and reservation." }
    ]
  },
  {
    slug: "morocco-family-tours",
    title: "Morocco Family Tours | Private Family Travel | Find Your Morocco",
    description:
      "Morocco family tours with private drivers, child-friendly pacing, engaging guides, comfortable vehicles and safe luxury riads — tailored for families abroad.",
    h1: "Morocco Family Tours",
    h1em: "Adventure for All Ages",
    image: "assets/fes.jpg",
    imgAlt: "Fes medina artisan quarter — Morocco family tours with private guide",
    wa: "Morocco%20Family%20Tours",
    lead:
      "Introduce your children to Morocco's colors, flavors and hospitality — with private transport, flexible schedules, family-sized rooms and guides who make history and culture come alive for young travelers.",
    blocks: [
      {
        h2: "Family-Friendly Private Morocco Travel",
        p: "Our <strong>Morocco family tours</strong> use spacious vehicles, frequent breaks and activities kids love — bread baking, pottery workshops, gentle camel rides and pool afternoons at riads.",
        list: [
          "Private minivan or 4×4 with child seats on request",
          "Shorter medina walks tailored to attention spans",
          "Family rooms & connecting suites in luxury riads",
          "Engaging guides trained to work with children"
        ]
      },
      {
        h2: "Best Destinations for Families",
        p: "Marrakech, the Atlas and a soft <a href=\"sahara-desert-luxury-experience.html\">Sahara experience</a> are favorites. See our <a href=\"10-day-morocco-itinerary.html\">10-day Morocco itinerary</a> for a balanced route.",
        list: [
          "Marrakech gardens, palaces & evening food stalls",
          "Atlas day trip with animal encounters & lunch",
          "Overnight desert camp with comfort facilities",
          "Coastal Essaouira for beaches and fresh seafood"
        ]
      },
      {
        h2: "Request a Family Itinerary",
        p: "Tell us children's ages and interests — we adjust pacing and hotels. Compare <a href=\"private-morocco-tours.html\">private Morocco tours</a> and <a href=\"index.html#contact\">contact us</a> on the homepage."
      }
    ],
    reviewSnippet: {
      quote: "We traveled with three children and Find Your Morocco tailored every detail — flexible pacing, luxury riads and a Sahara camp the kids still talk about. Youssef was kind and punctual throughout.",
      author: "Sarah M., London — Family Tour"
    },
    highlights: [
      { h3: "Safe & Private", p: "No crowded group buses — your family only." },
      { h3: "Flexible Pace", p: "Pool mornings or early nights — you decide." },
      { h3: "Cultural Fun", p: "Hands-on workshops kids remember forever." },
      { h3: "All Ages", p: "From toddlers to grandparents — we adapt." }
    ]
  },
  {
    slug: "10-day-morocco-itinerary",
    title: "10-Day Morocco Itinerary | Luxury Private Tour Route | Find Your Morocco",
    description:
      "Sample 10-day Morocco itinerary — Marrakech, Atlas, Sahara desert, Fes, Chefchaouen & Casablanca on a private luxury tour. Fully customizable for your dates.",
    h1: "10-Day Morocco Itinerary",
    h1em: "The Grand Circuit",
    image: "assets/hero-desert.jpg",
    imgAlt: "Sahara dunes and imperial cities — 10-day Morocco itinerary",
    wa: "10-Day%20Morocco%20Itinerary",
    lead:
      "This sample 10-day Morocco itinerary covers imperial cities, the High Atlas, Erg Chebbi dunes and the Blue Pearl — all by private vehicle with luxury riads and a premium desert camp. Adjust any day to match your flight times and interests.",
    itinerary: true,
    blocks: [
      {
        h2: "Why Ten Days in Morocco",
        p: "A <strong>10-day Morocco itinerary</strong> is the sweet spot for international travelers: enough time for culture, desert and scenery without rushing. Every day below can be extended, shortened or reordered.",
        list: [
          "Covers Morocco's most requested highlights",
          "Private driver & guide throughout",
          "Luxury riads + premium Sahara camp",
          "Ideal for couples, families and friends"
        ]
      },
      {
        h2: "Customize Your Route",
        p: "Prefer more coast or fewer cities? We adapt. Link this plan with <a href=\"luxury-morocco-tours.html\">luxury Morocco tours</a>, <a href=\"morocco-honeymoon-tours.html\">honeymoon tours</a> or <a href=\"morocco-family-tours.html\">family tours</a>."
      }
    ],
    reviewSnippet: {
      quote: "Seamless logistics across Marrakech, the Atlas, Merzouga, Fes and Chefchaouen in ten days — private transport, expert guides and riads that matched our luxury expectations.",
      author: "Sarah M., London — 10-Day Morocco Itinerary"
    },
    highlights: [
      { h3: "Fully Private", p: "Your schedule — not a fixed group departure." },
      { h3: "Door-to-Door", p: "Airport pickup and drop-off included." },
      { h3: "Expert Guides", p: "City specialists in Marrakech and Fes." },
      { h3: "24/7 Support", p: "WhatsApp concierge while you travel." }
    ],
    days: [
      { title: "Arrive Marrakech", p: "VIP airport transfer, check-in at luxury riad, evening orientation walk in the medina." },
      { title: "Marrakech Highlights", p: "Private tour: Bahia Palace, souks, Majorelle Garden and Jemaa el-Fnaa at dusk." },
      { title: "Atlas & Valleys", p: "Scenic drive through the High Atlas, Berber village lunch, overnight in Dades or Skoura." },
      { title: "Road to Merzouga", p: "Kasbahs, palm groves and Todra Gorge — arrive for sunset camel trek on Erg Chebbi." },
      { title: "Sahara Luxury Camp", p: "Sunrise on the dunes, premium desert camp, stargazing and gourmet dinner." },
      { title: "Merzouga → Fes", p: "Cross the Ziz Valley and Middle Atlas cedar forests to imperial Fes." },
      { title: "Fes Medina", p: "Private guided walk: tanneries, madrasas, artisans and hidden fondouk courtyards." },
      { title: "Fes → Chefchaouen", p: "Morning departure to the Blue Pearl — photo stops and riad check-in." },
      { title: "Chefchaouen & Coast", p: "Explore blue lanes, then descend toward Casablanca or Rabat." },
      { title: "Casablanca & Departure", p: "Hassan II Mosque visit, Atlantic lunch and transfer to CMN airport." }
    ]
  }
];

function relatedLinks(currentSlug) {
  return allTours
    .filter((t) => t.slug !== currentSlug)
    .slice(0, 6)
    .map(
      (t) =>
        `          <a href="${t.slug}.html" class="seo-related__link"><span>${t.tag}</span>${t.label}</a>`
    )
    .join("\n");
}

function footerTours() {
  return allTours
    .map((t) => `          <li><a href="${t.slug}.html">${t.label}</a></li>`)
    .join("\n");
}

function ogImageDims(image) {
  if (image.includes("marrakech")) return { w: 1200, h: 900 };
  if (image.includes("casablanca")) return { w: 1200, h: 800 };
  return { w: 1920, h: 1080 };
}

function renderPage(p) {
  const canonical = `${SITE}/${p.slug}.html`;
  const imgUrl = `${SITE}/${p.image}`;
  const dims = ogImageDims(p.image);
  const descEsc = p.description.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const blocksHtml = p.blocks
    .map((b) => {
      let html = `          <h2>${b.h2}</h2>\n          <p>${b.p}</p>`;
      if (b.list) {
        html += `\n          <ul>${b.list.map((li) => `<li>${li}</li>`).join("")}</ul>`;
      }
      return html;
    })
    .join("\n");

  const highlightsHtml = p.highlights
    .map((h) => `            <article class="seo-highlight"><h3>${h.h3}</h3><p>${h.p}</p></article>`)
    .join("\n");

  const reviewSnippetHtml = p.reviewSnippet
    ? `        <aside class="ta-snippet" aria-label="Tripadvisor guest review">
          <span class="ta-snippet__label">
            <svg class="tripadvisor-logo" viewBox="0 0 80 16" width="80" height="16" aria-hidden="true"><circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="8" cy="8" r="2" fill="currentColor"/><circle cx="18" cy="8" r="6" fill="none" stroke="currentColor" stroke-width="1.2"/><circle cx="18" cy="8" r="2" fill="currentColor"/><text x="28" y="11" fill="currentColor" font-size="8" font-weight="600">Tripadvisor</text></svg>
            Guest review
          </span>
          <div class="ta-snippet__stars" aria-hidden="true">★★★★★</div>
          <blockquote class="ta-snippet__quote"><p>${p.reviewSnippet.quote}</p></blockquote>
          <p class="ta-snippet__author">— ${p.reviewSnippet.author}</p>
          <a href="https://www.tripadvisor.com/Search?q=Find+Your+Morocco+Marrakech" class="ta-snippet__link" target="_blank" rel="noopener noreferrer" data-tripadvisor>More reviews on Tripadvisor →</a>
        </aside>`
    : "";

  const itineraryHtml = p.itinerary
    ? `        <div class="seo-itinerary">\n${p.days
        .map(
          (d, i) =>
            `          <article class="seo-itinerary__day"><span class="seo-itinerary__num">${String(i + 1).padStart(2, "0")}</span><div><h3>${d.title}</h3><p>${d.p}</p></div></article>`
        )
        .join("\n")}\n        </div>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>${p.title}</title>
  <meta name="description" content="${p.description}" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="theme-color" content="#030304" />
  <meta name="author" content="Find Your Morocco" />
  <link rel="canonical" href="${canonical}" />
  <link rel="sitemap" type="application/xml" href="sitemap.xml" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:site_name" content="Find Your Morocco" />
  <meta property="og:title" content="${p.title}" />
  <meta property="og:description" content="${p.description}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:image" content="${imgUrl}" />
  <meta property="og:image:secure_url" content="${imgUrl}" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:alt" content="${p.imgAlt}" />
  <meta property="og:image:width" content="${dims.w}" />
  <meta property="og:image:height" content="${dims.h}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${p.title}" />
  <meta name="twitter:description" content="${p.description}" />
  <meta name="twitter:image" content="${imgUrl}" />
  <meta name="twitter:image:alt" content="${p.imgAlt}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="dns-prefetch" href="https://wa.me" />
  <link rel="preload" href="css/style.css" as="style" />
  <link rel="stylesheet" href="css/style.css" />
  <link rel="preload" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&amp;family=Manrope:wght@400;500;600&amp;display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'" />
  <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&amp;family=Manrope:wght@400;500;600&amp;display=swap" /></noscript>
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "${canonical}#webpage",
        "url": "${canonical}",
        "name": "${p.title}",
        "description": "${descEsc}",
        "isPartOf": { "@id": "${SITE}/#website" },
        "about": { "@id": "${SITE}/#organization" },
        "inLanguage": "en",
        "breadcrumb": { "@id": "${canonical}#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "${canonical}#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "${SITE}/" },
          { "@type": "ListItem", "position": 2, "name": "Luxury Tours", "item": "${SITE}/#luxury-tours" },
          { "@type": "ListItem", "position": 3, "name": "${p.h1}", "item": "${canonical}" }
        ]
      },
      {
        "@type": "TouristTrip",
        "name": "${p.h1}",
        "description": "${descEsc}",
        "touristType": "Luxury travelers",
        "provider": { "@id": "${SITE}/#organization" },
        "itinerary": { "@type": "Place", "name": "Morocco" },
        "url": "${canonical}"
      },
      {
        "@type": "TravelAgency",
        "@id": "${SITE}/#organization",
        "name": "Find Your Morocco",
        "url": "${SITE}/",
        "telephone": "+212-673-628-871"
      }
    ]
  }
  </script>
</head>
<body class="page-seo">
  <div class="grain" aria-hidden="true"></div>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="header header--scrolled" id="header">
    <div class="container header__inner">
      <a href="index.html" class="logo" aria-label="Find Your Morocco — Home">
        <span class="logo__mark">FY</span>
        <span class="logo__text">
          <span class="logo__name">Find Your Morocco</span>
          <span class="logo__tagline">Luxury Private Journeys</span>
        </span>
      </a>
      <nav class="nav" id="nav" aria-label="Main navigation">
        <ul class="nav__list">
          <li><a href="index.html" class="nav__link">Home</a></li>
          <li><a href="index.html#luxury-tours" class="nav__link">Tours</a></li>
          <li><a href="index.html#destinations" class="nav__link">Destinations</a></li>
          <li><a href="index.html#faq" class="nav__link">FAQ</a></li>
          <li><a href="index.html#contact" class="nav__link">Contact</a></li>
        </ul>
      </nav>
      <a href="https://wa.me/${WA}?text=Hello%2C%20${p.wa}" class="btn btn--gold btn--sm header__cta" target="_blank" rel="noopener noreferrer">Book on WhatsApp</a>
      <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <main id="main">
    <section class="seo-hero">
      <div class="seo-hero__media">
        <img src="${p.image}" alt="${p.imgAlt}" class="seo-hero__image" width="${dims.w}" height="${dims.h}" loading="lazy" decoding="async" fetchpriority="low" />
        <div class="seo-hero__overlay"></div>
      </div>
      <div class="container seo-hero__content">
        <nav class="seo-breadcrumb" aria-label="Breadcrumb">
          <a href="index.html">Home</a> · <a href="index.html#luxury-tours">Tours</a>
        </nav>
        <h1 class="seo-hero__title">${p.h1}, <em>${p.h1em}</em></h1>
        <p class="seo-hero__lead">${p.lead}</p>
        <div class="seo-hero__actions">
          <a href="https://wa.me/${WA}?text=Hello%2C%20${p.wa}" class="btn btn--gold btn--lg" target="_blank" rel="noopener noreferrer">Plan on WhatsApp</a>
          <a href="index.html#contact" class="btn btn--outline btn--lg">Contact Us</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="seo-prose">
${blocksHtml}
${itineraryHtml}
        </div>
        <div class="seo-highlights">
${highlightsHtml}
        </div>
${reviewSnippetHtml}
      </div>
    </section>

    <section class="seo-cta-strip">
      <div class="container seo-cta-strip__inner">
        <div>
          <h2>Ready to Start Planning?</h2>
          <p>Free custom quote within 24 hours — licensed operator, English · French · Arabic.</p>
        </div>
        <a href="https://wa.me/${WA}?text=Hello%2C%20${p.wa}" class="btn btn--gold btn--lg" target="_blank" rel="noopener noreferrer">Get Your Quote</a>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section__header">
          <span class="section__eyebrow section__eyebrow--ornate">Explore More</span>
          <h2 class="section__title">Related Luxury Morocco Tours</h2>
        </div>
        <div class="seo-related__grid">
${relatedLinks(p.slug)}
        </div>
        <p class="section__text seo-related__footer"><a href="index.html#faq">Luxury Morocco travel FAQ</a> · <a href="index.html#contact">Contact</a></p>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__brand">
        <a href="index.html" class="logo"><span class="logo__mark">FY</span><span class="logo__text"><span class="logo__name">Find Your Morocco</span><span class="logo__tagline">Luxury Private Journeys</span></span></a>
        <p class="footer__desc">Licensed luxury Morocco tour operator — private travel, Sahara tours &amp; bespoke vacations.</p>
      </div>
      <nav class="footer__links" aria-label="Site sections">
        <h4>Explore</h4>
        <ul>
          <li><a href="index.html#about">About</a></li>
          <li><a href="index.html#luxury-tours">Tours</a></li>
          <li><a href="index.html#destinations">Destinations</a></li>
          <li><a href="index.html#faq">FAQ</a></li>
          <li><a href="index.html#contact">Contact</a></li>
        </ul>
      </nav>
      <nav class="footer__links" aria-label="Luxury Morocco tours">
        <h4>Luxury Tours</h4>
        <ul>
${footerTours()}
        </ul>
      </nav>
      <div class="footer__contact"><h4>Book Now</h4><a href="https://wa.me/${WA}" class="footer__whatsapp" target="_blank" rel="noopener noreferrer">+212 673 628 871</a></div>
    </div>
    <div class="footer__bottom container">
      <p>&copy; <span id="year"></span> Find Your Morocco.</p>
      <p class="footer__legal"><a href="index.html">Home</a> · <a href="index.html#contact">Contact</a></p>
    </div>
  </footer>

  <a href="https://wa.me/${WA}?text=Hello%2C%20${p.wa}" class="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Book on WhatsApp">
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    <span class="whatsapp-float__pulse"></span>
  </a>

  <script src="js/site-config.js" defer></script>
  <script src="js/script.js" defer></script>
</body>
</html>`;
}

pages.forEach((p) => {
  const out = path.join(ROOT, `${p.slug}.html`);
  fs.writeFileSync(out, renderPage(p), "utf8");
  console.log("Wrote", out);
});
