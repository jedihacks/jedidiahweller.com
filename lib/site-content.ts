/**
 * Evidence-bounded copy for the Jedidiah Weller site.
 *
 * Keep claims in this module reviewable. `owner-review` means the wording is
 * grounded in public source material but needs current owner confirmation;
 * `historical` means it must be presented as prior experience, not current
 * positioning. Consumers should not render a claim as proof without checking
 * its review status.
 */

export type CanonicalRoute =
  "/" | "/speaking/" | "/about/" | "/ventures/" | "/ventures/summon-worlds/" | "/contact/" | "/privacy/";

export type ClaimStatus = "source-backed" | "owner-review" | "historical";

export interface SeoData {
  title: string;
  description: string;
  canonicalPath: CanonicalRoute;
  ogTitle: string;
  ogDescription: string;
}

export interface LinkItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface Claim {
  text: string;
  status: ClaimStatus;
  source: string;
  reviewNote?: string;
}

export interface ContentSection {
  id: string;
  eyebrow?: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type SchemaType =
  | "Person"
  | "WebSite"
  | "ProfilePage"
  | "Organization"
  | "VideoObject"
  | "BreadcrumbList"
  | "FAQPage"
  | "ContactPage"
  | "WebPage";

export interface SchemaRecommendation {
  type: SchemaType;
  reason: string;
  requirements: string[];
}

export interface PageContent {
  route: CanonicalRoute;
  seo: SeoData;
  h1: string;
  intro: string;
  sections: ContentSection[];
  internalLinks: LinkItem[];
  faqs: FaqItem[];
  schema: SchemaRecommendation[];
  reviewFlags: Claim[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  status: ClaimStatus;
  source: string;
}

export interface VentureCard {
  name: string;
  description: string;
  href: string;
  detailHref?: CanonicalRoute;
  relationship: Claim;
}

export const socialLinks: LinkItem[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jedidiahweller/",
    external: true,
  },
  { label: "X", href: "https://x.com/jedihacks", external: true },
];

export const ventures: VentureCard[] = [
  {
    name: "OpenForge",
    description:
      "A mobile app strategy, design, and development company. Visit OpenForge for current services, work, and team information.",
    href: "https://openforge.io/",
    relationship: {
      text: "Jedidiah is identified in the personal-site source copy with OpenForge.",
      status: "owner-review",
      source: "Current live page and MIGRATION_README.md",
      reviewNote:
        "Confirm whether “Founder & CEO” is still the preferred present-tense title.",
    },
  },
  {
    name: "Startup Wars",
    description:
      "An entrepreneurship-first business simulation platform for high school, CTE, college, and university educators.",
    href: "https://www.startupwars.com/",
    relationship: {
      text: "Jedidiah is identified in the personal-site source copy with Startup Wars.",
      status: "owner-review",
      source: "Current live page and MIGRATION_README.md",
      reviewNote:
        "Confirm current role, capitalization, and preferred relationship wording.",
    },
  },
  {
    name: "Summon Worlds",
    description:
      "A collaborative, AI-assisted worldbuilding platform for writers, game masters, roleplayers, and creative storytellers.",
    href: "https://www.summonworlds.com/",
    detailHref: "/ventures/summon-worlds/",
    relationship: {
      text: "Summon Worlds is included as a venture associated with Jedidiah Weller.",
      status: "owner-review",
      source: "Owner request and current Summon Worlds public website",
      reviewNote:
        "Confirm Jedidiah’s preferred current title and relationship wording before adding it to public schema.",
    },
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Jedi is absolutely awesome to work with. He can also communicate extremely well with engineers that have no personality, which is truly a talent.",
    name: "Dr. Colleen Robb",
    role: "Professor of Entrepreneurship",
    status: "owner-review",
    source: "Current live page",
  },
  {
    quote:
      "I love Jedi and the team and Open Forge. Smart, capable and by the book. Their process, ethical standards and collaborative spirit, set the gold standard for the industry and for what you want in a strategic partner. Lucky to have them in our network!",
    name: "Brendan Walsh",
    role: "Principal, HubSpot Consulting",
    status: "owner-review",
    source: "Current live page",
  },
];

export const speakingTopics: string[] = [
  "Mobile product strategy in the AI era",
  "Building products people have a reason to use",
  "Entrepreneurship through simulation and experiential learning",
  "Founder lessons from turning uncertain ideas into operating companies",
  "Product, design, and engineering collaboration",
];

export const personalityNumbers = [
  { value: "23", label: "broken bones" },
  { value: "133", label: "cities" },
  { value: "1,001", label: "stories" },
  { value: "500", label: "bruises" },
] as const;

const sharedReviewFlags: Claim[] = [
  {
    text: "Current relationship and title wording for OpenForge, Startup Wars, and Summon Worlds",
    status: "owner-review",
    source: "Current live page and MIGRATION_README.md",
    reviewNote: "Confirm present-tense title and preferred capitalization.",
  },
  {
    text: "Industry leader since 2011",
    status: "owner-review",
    source: "Current live page",
    reviewNote:
      "Retain only if Jedidiah approves the wording and can support it.",
  },
];

export const homeContent: PageContent = {
  route: "/",
  seo: {
    title: "Jedidiah Weller — Founder, Speaker, Maker",
    description:
      "Meet Jedidiah Weller, a founder, technology speaker, and mobile product strategist working across product, design, and entrepreneurship.",
    canonicalPath: "/",
    ogTitle: "Jedidiah Weller — Founder, Speaker, Maker",
    ogDescription:
      "Founder, technology speaker, and mobile product strategist working across product, design, and entrepreneurship.",
  },
  h1: "Jedidiah Weller: Founder, Speaker, Maker",
  intro:
    "Jedidiah Weller is a founder, technology speaker, and maker working across mobile products, product design, rapid prototyping, and entrepreneurship.",
  sections: [
    {
      id: "bio-preview",
      eyebrow: "The work",
      heading: "Make the next product decision clearer",
      paragraphs: [
        "Jedi brings product, design, engineering, and entrepreneurial thinking into the same conversation—especially when an idea is still uncertain and the next useful test matters.",
      ],
    },
    {
      id: "speaking-preview",
      eyebrow: "Speaking",
      heading: "Talks for people building products and companies",
      paragraphs: [
        "From mobile product strategy in the AI era to entrepreneurship through simulation, the topics are practical, energetic, and shaped around the audience’s real question.",
      ],
      bullets: speakingTopics,
    },
    {
      id: "ventures-preview",
      eyebrow: "Ventures",
      heading: "Operating at the intersection of products and learning",
      paragraphs: [
        "Explore the ventures associated with Jedidiah, then follow the links to each company for current details.",
      ],
    },
  ],
  internalLinks: [
    { label: "Explore speaking topics", href: "/speaking/" },
    { label: "Read the biography", href: "/about/" },
    { label: "Explore ventures", href: "/ventures/" },
    { label: "Book an engagement", href: "/contact/" },
  ],
  faqs: [
    {
      question: "Who is Jedidiah Weller?",
      answer:
        "Jedidiah Weller is a founder, technology speaker, and maker whose work spans mobile products, product design, rapid prototyping, and entrepreneurship.",
    },
    {
      question: "What does Jedidiah Weller speak about?",
      answer:
        "His current topic directions include mobile product strategy in the AI era, useful product building, entrepreneurship through simulation, founder lessons, and product, design, and engineering collaboration.",
    },
    {
      question: "How can I invite Jedidiah to speak?",
      answer:
        "Use the engagement inquiry at /contact/ with the event context, audience, timing, and the question you want the session to help answer.",
    },
  ],
  schema: [
    {
      type: "Person",
      reason: "Identify the individual behind the personal brand.",
      requirements: [
        "name: Jedidiah Weller",
        "alternateName: Jedi Weller",
        "sameAs: approved social profiles only",
      ],
    },
    {
      type: "WebSite",
      reason: "Identify the canonical personal site.",
      requirements: [
        "url: https://jedidiahweller.com",
        "name: Jedidiah Weller",
      ],
    },
    {
      type: "VideoObject",
      reason:
        "Describe the visible YouTube video when its metadata is confirmed.",
      requirements: [
        "Use visible title, thumbnail, upload date, and embed URL only after review.",
      ],
    },
    {
      type: "BreadcrumbList",
      reason:
        "Optional for the home route; required if breadcrumbs are rendered.",
      requirements: ["Reflect visible breadcrumb UI."],
    },
  ],
  reviewFlags: sharedReviewFlags,
};

export const speakingContent: PageContent = {
  route: "/speaking/",
  seo: {
    title: "Speaking — Jedidiah Weller",
    description:
      "Book Jedidiah Weller for practical talks on mobile product strategy, entrepreneurship, AI-era product work, and product-design collaboration.",
    canonicalPath: "/speaking/",
    ogTitle: "Speaking — Jedidiah Weller",
    ogDescription:
      "Practical talks on mobile product strategy, entrepreneurship, AI-era product work, and collaboration.",
  },
  h1: "Technology and entrepreneurship talks for teams that build",
  intro:
    "Jedidiah shapes talks around the decisions teams face when they are building a product, company, or learning experience.",
  sections: [
    {
      id: "topics",
      eyebrow: "Topics",
      heading: "Ideas audiences can use",
      paragraphs: [
        "Each session can be shaped to the audience, context, and time available. The topics below are directions, not a fixed event catalog.",
      ],
      bullets: speakingTopics,
    },
    {
      id: "takeaways",
      eyebrow: "Takeaways",
      heading: "Leave with a clearer next move",
      paragraphs: [
        "The intended outcomes are clearer product decisions, testable assumptions, better collaboration language, and a practical next experiment—not a promise of a particular business result.",
      ],
    },
    {
      id: "proof",
      eyebrow: "Selected proof",
      heading: "A human voice with operating context",
      paragraphs: [
        "The current public page includes a video, two attributed testimonials, and references to technology events and mentorship. Confirm permissions and exact details before publishing them as proof.",
      ],
    },
  ],
  internalLinks: [
    { label: "Book an engagement", href: "/contact/" },
    { label: "Read the biography", href: "/about/" },
    { label: "Explore ventures", href: "/ventures/" },
  ],
  faqs: [
    {
      question: "What topics does Jedidiah Weller speak about?",
      answer:
        "He can shape sessions around mobile product strategy, AI-era product decisions, entrepreneurship, founder lessons, and product, design, and engineering collaboration.",
    },
    {
      question: "Who is a good audience for these talks?",
      answer:
        "Event organizers, product and technology teams, founders, educators, and entrepreneurship communities are plausible audiences; confirm fit and format in the inquiry.",
    },
    {
      question: "Can a talk be tailored to our team?",
      answer:
        "Yes. Share the audience, context, desired outcome, and constraints so the session can be shaped around the real question.",
    },
    {
      question: "What formats are available?",
      answer:
        "Keynote, workshop, fireside, or another format can be discussed in the inquiry; confirm current availability before promising a format.",
    },
    {
      question: "How do we request a speaking proposal?",
      answer:
        "Submit the /contact/ form with event details and a short description of the problem the session should address.",
    },
  ],
  schema: [
    {
      type: "Person",
      reason: "Connect the speaking page to the person entity.",
      requirements: ["Use approved identity and sameAs values."],
    },
    {
      type: "ProfilePage",
      reason: "Describe the visible speaker profile.",
      requirements: ["Page must visibly be about Jedidiah Weller."],
    },
    {
      type: "FAQPage",
      reason: "Only if all answers remain visible on the page.",
      requirements: ["Do not include hidden or materially different answers."],
    },
    {
      type: "VideoObject",
      reason: "Describe the visible video after metadata review.",
      requirements: [
        "Use approved title, thumbnail, upload date, and embed URL.",
      ],
    },
    {
      type: "BreadcrumbList",
      reason: "Describe visible route hierarchy.",
      requirements: ["Reflect visible breadcrumb UI."],
    },
  ],
  reviewFlags: [
    ...sharedReviewFlags,
    {
      text: "DeveloperWeek, SXSW, The Web Summit/#hack4good, Duke University/#hackduke, University of Pennsylvania",
      status: "owner-review",
      source: "Current live page and MIGRATION_README.md",
      reviewNote:
        "Verify event names, dates, participation type, links, and permission to publish.",
    },
    {
      text: "Testimonials attributed to Dr. Colleen Robb and Brendan Walsh",
      status: "owner-review",
      source: "Current live page",
      reviewNote:
        "Confirm quote wording, titles, permission, and current affiliation.",
    },
  ],
};

export const aboutContent: PageContent = {
  route: "/about/",
  seo: {
    title: "About Jedidiah Weller",
    description:
      "Read Jedidiah Weller’s current biography, operating philosophy, and work across mobile products, design, entrepreneurship, and community.",
    canonicalPath: "/about/",
    ogTitle: "About Jedidiah Weller",
    ogDescription:
      "A current biography and operating philosophy spanning mobile products, design, entrepreneurship, and community.",
  },
  h1: "About Jedidiah Weller",
  intro:
    "Jedi (Jedidiah) Weller is a founder, technology speaker, and maker working at the intersection of mobile products, design, rapid prototyping, and entrepreneurship.",
  sections: [
    {
      id: "approach",
      eyebrow: "How I work",
      heading: "Start with the decision, then make it testable",
      paragraphs: [
        "The work begins with the customer problem, the riskiest assumption, and the smallest useful experiment. Product, design, and engineering belong in the same conversation from the start.",
      ],
    },
    {
      id: "venture-context",
      eyebrow: "Current context",
      heading: "Building products and learning experiences",
      paragraphs: [
        "The personal site is connected to OpenForge, Startup Wars, and Summon Worlds. Visit the ventures page for concise descriptions and links to each company; current role wording is marked for owner review.",
      ],
    },
    {
      id: "personality",
      eyebrow: "A little more human",
      heading: "The numbers behind the stories",
      paragraphs: [
        "The live page uses personality numbers—23 broken bones, 133 cities, 1,001 stories, and 500 bruises—as color. They are not business metrics or proof of experience.",
      ],
    },
  ],
  internalLinks: [
    { label: "Explore speaking topics", href: "/speaking/" },
    { label: "Explore ventures", href: "/ventures/" },
    { label: "Book an engagement", href: "/contact/" },
  ],
  faqs: [
    {
      question: "What does Jedidiah Weller do?",
      answer:
        "He works across mobile product strategy, product design, rapid prototyping, entrepreneurship, and technology speaking.",
    },
    {
      question: "What is Jedidiah Weller’s approach to building products?",
      answer:
        "Start with the customer problem and the riskiest assumption, make the decision testable, and bring product, design, and engineering into the same conversation.",
    },
    {
      question: "Where can I learn about Jedidiah’s ventures?",
      answer:
        "Visit /ventures/ for the concise overview, then explore OpenForge, Startup Wars, and Summon Worlds.",
    },
    {
      question: "Is Jedi the same person as Jedidiah Weller?",
      answer:
        "Yes. “Jedi” is the familiar name used in the public brand; “Jedidiah Weller” is the canonical name for search and identity.",
    },
  ],
  schema: [
    {
      type: "Person",
      reason: "Identify the subject of the biography.",
      requirements: [
        "Use approved name, alternateName, image, and sameAs values.",
      ],
    },
    {
      type: "ProfilePage",
      reason: "Describe the visible personal profile.",
      requirements: ["Main entity must be Jedidiah Weller."],
    },
    {
      type: "FAQPage",
      reason: "Only for visible, reviewed FAQ content.",
      requirements: ["Keep JSON-LD answers synchronized with visible answers."],
    },
    {
      type: "BreadcrumbList",
      reason: "Describe visible route hierarchy.",
      requirements: ["Reflect visible breadcrumb UI."],
    },
  ],
  reviewFlags: [
    ...sharedReviewFlags,
    {
      text: "Historical employment and community references from the Stencil biography",
      status: "historical",
      source: "Legacy src/components/app-bio/app-bio.tsx",
      reviewNote:
        "Use only with owner confirmation, dates, and prior-experience framing.",
    },
  ],
};

export const venturesContent: PageContent = {
  route: "/ventures/",
  seo: {
    title: "Ventures — OpenForge, Startup Wars, and Summon Worlds",
    description:
      "Explore ventures associated with Jedidiah Weller: OpenForge, Startup Wars, and the collaborative worldbuilding platform Summon Worlds.",
    canonicalPath: "/ventures/",
    ogTitle: "Ventures — OpenForge, Startup Wars, and Summon Worlds",
    ogDescription:
      "Explore the ventures associated with Jedidiah Weller and visit each company for current information.",
  },
  h1: "Building companies around products and learning",
  intro:
    "Jedidiah’s public work connects mobile products, experiential entrepreneurship education, and creative worldbuilding.",
  sections: [
    {
      id: "openforge",
      eyebrow: "Mobile products",
      heading: "OpenForge",
      paragraphs: [
        "OpenForge presents itself as a mobile app strategy, design, and development company. Visit the company site for current services, work, team, and contact information.",
      ],
    },
    {
      id: "startup-wars",
      eyebrow: "Entrepreneurship education",
      heading: "Startup Wars",
      paragraphs: [
        "Startup Wars presents itself as an entrepreneurship-first business simulation platform for high school, CTE, college, and university educators.",
      ],
    },
    {
      id: "summon-worlds",
      eyebrow: "Creative worldbuilding",
      heading: "Summon Worlds",
      paragraphs: [
        "Summon Worlds helps writers, game masters, roleplayers, and other storytellers create connected characters, locations, lore, art, and evolving worlds with AI-assisted tools.",
      ],
    },
    {
      id: "throughline",
      eyebrow: "The throughline",
      heading: "Turn uncertainty into useful practice",
      paragraphs: [
        "The shared idea is simple: make decisions visible, test assumptions early, and learn by doing. This is editorial framing for the personal site, not a claim made by either company.",
      ],
    },
  ],
  internalLinks: [
    { label: "Read the biography", href: "/about/" },
    { label: "Explore speaking topics", href: "/speaking/" },
    { label: "Start a conversation", href: "/contact/" },
    { label: "Visit OpenForge", href: "https://openforge.io/", external: true },
    {
      label: "Visit Startup Wars",
      href: "https://www.startupwars.com/",
      external: true,
    },
    {
      label: "Explore Summon Worlds",
      href: "/ventures/summon-worlds/",
    },
  ],
  faqs: [
    {
      question: "What is OpenForge?",
      answer:
        "OpenForge presents itself as a mobile app strategy, design, and development company. Visit OpenForge for current services and team information.",
    },
    {
      question: "What is Startup Wars?",
      answer:
        "Startup Wars presents itself as an entrepreneurship-first business simulation platform for high school, CTE, college, and university educators.",
    },
    {
      question: "What is Summon Worlds?",
      answer:
        "Summon Worlds is a collaborative, AI-assisted worldbuilding platform for writers, game masters, roleplayers, and creative storytellers.",
    },
    {
      question: "How are Jedidiah Weller and OpenForge connected?",
      answer:
        "The personal-site source copy identifies a founder/CEO relationship; confirm the current title and exact wording with Jedidiah before publishing it as a present-tense fact.",
    },
    {
      question: "How are Jedidiah Weller and Startup Wars connected?",
      answer:
        "The personal-site source copy identifies Jedidiah with Startup Wars; confirm the current role, capitalization, and preferred relationship description before launch.",
    },
  ],
  schema: [
    {
      type: "Person",
      reason: "Connect venture context to the person entity.",
      requirements: [
        "Add current worksFor/founder relationships only after owner review.",
      ],
    },
    {
      type: "Organization",
      reason: "Represent each linked venture separately.",
      requirements: [
        "Use name and URL; add sameAs only for approved official profiles.",
      ],
    },
    {
      type: "FAQPage",
      reason: "Only for visible, reviewed FAQs.",
      requirements: [
        "Do not copy ratings, user counts, client names, or awards without direct approved sources.",
      ],
    },
    {
      type: "BreadcrumbList",
      reason: "Describe visible route hierarchy.",
      requirements: ["Reflect visible breadcrumb UI."],
    },
  ],
  reviewFlags: sharedReviewFlags,
};

export const summonWorldsContent: PageContent = {
  route: "/ventures/summon-worlds/",
  seo: {
    title: "Summon Worlds — A Jedidiah Weller Venture",
    description:
      "Learn about Summon Worlds, a collaborative AI-assisted worldbuilding platform for writers, game masters, roleplayers, and creative storytellers.",
    canonicalPath: "/ventures/summon-worlds/",
    ogTitle: "Summon Worlds — Collaborative Worldbuilding",
    ogDescription:
      "Create connected characters, locations, lore, art, and evolving worlds with AI-assisted worldbuilding tools.",
  },
  h1: "Summon Worlds: collaborative worldbuilding for creative storytellers",
  intro:
    "Summon Worlds brings characters, locations, lore, art, relationships, and adventures into one connected creative workspace.",
  sections: [
    {
      id: "what-it-is",
      eyebrow: "The product",
      heading: "Build a world that can keep evolving",
      paragraphs: [
        "Summon Worlds is designed for writers, game masters, roleplayers, and collaborative creators who want their ideas to stay connected instead of disappearing into scattered documents and image folders.",
        "Its AI-assisted tools help creators move from a first spark to characters, places, visuals, lore, and playable or story-ready relationships without surrendering creative direction.",
      ],
    },
    {
      id: "creative-workflow",
      eyebrow: "Creative workflow",
      heading: "From inspiration to a living setting",
      paragraphs: [
        "Creators can develop original characters, locations, creatures, equipment, spells, histories, and images, then connect those pieces inside a shared world.",
        "In-character roleplay and adventure tools create another way to explore motivations, relationships, consequences, and new story directions.",
      ],
    },
    {
      id: "audience",
      eyebrow: "Who it serves",
      heading: "Made for people who create worlds",
      paragraphs: [
        "The product supports fantasy writers developing a setting, tabletop game masters preparing a campaign, solo roleplayers exploring an adventure, and groups building a shared universe together.",
      ],
    },
  ],
  internalLinks: [
    { label: "All ventures", href: "/ventures/" },
    { label: "Read the biography", href: "/about/" },
    { label: "Explore speaking topics", href: "/speaking/" },
    { label: "Visit Summon Worlds", href: "https://www.summonworlds.com/", external: true },
  ],
  faqs: [
    {
      question: "Who is Summon Worlds for?",
      answer:
        "Summon Worlds is for writers, tabletop game masters, roleplayers, and collaborative creators building original settings, characters, and stories.",
    },
    {
      question: "What can creators make with Summon Worlds?",
      answer:
        "Creators can develop connected characters, locations, creatures, equipment, spells, lore, relationships, images, and adventures inside an evolving world.",
    },
    {
      question: "Where can I try Summon Worlds?",
      answer:
        "Visit summonworlds.com for the current product, learning resources, mobile app links, and availability information.",
    },
  ],
  schema: [
    {
      type: "WebPage",
      reason: "Describe the venture profile page.",
      requirements: ["Use the canonical detail URL and visible page copy."],
    },
    {
      type: "Organization",
      reason: "Identify Summon Worlds as the venture described on the page.",
      requirements: ["Use the official name and public website URL."],
    },
    {
      type: "BreadcrumbList",
      reason: "Represent the visible Home, Ventures, and Summon Worlds hierarchy.",
      requirements: ["Match the visible breadcrumb links."],
    },
    {
      type: "FAQPage",
      reason: "Describe the visible venture FAQs.",
      requirements: ["Keep answers consistent with the rendered page."],
    },
  ],
  reviewFlags: [ventures[2].relationship],
};

export const contactContent: PageContent = {
  route: "/contact/",
  seo: {
    title: "Contact Jedidiah Weller — Book an Engagement",
    description:
      "Share your event, team, or collaboration brief with Jedidiah Weller and start a conversation about the right format and next step.",
    canonicalPath: "/contact/",
    ogTitle: "Contact Jedidiah Weller — Book an Engagement",
    ogDescription:
      "Share your event, team, or collaboration brief and start a useful conversation.",
  },
  h1: "Let’s make the next conversation useful",
  intro:
    "Tell Jedidiah about the event, team, or collaboration, and include enough context to make the first reply useful.",
  sections: [
    {
      id: "inquiry",
      eyebrow: "Inquiry",
      heading: "A little context goes a long way",
      paragraphs: [
        "Include the audience, timing, location or time zone, desired format, topic, and the decision or outcome the session should support.",
      ],
      bullets: [
        "Name and email",
        "Organization or event",
        "Engagement type and planning window",
        "Audience and message",
      ],
    },
    {
      id: "next-step",
      eyebrow: "What happens next",
      heading: "A transparent handoff",
      paragraphs: [
        "The site should show a confirmed success state only after the server accepts the inquiry. If the form transport is unavailable, show a clearly labeled owner-approved email alternative instead of silently dropping the message.",
      ],
    },
  ],
  internalLinks: [
    { label: "Explore speaking topics", href: "/speaking/" },
    { label: "Read the biography", href: "/about/" },
    { label: "Read the privacy notice", href: "/privacy/" },
  ],
  faqs: [
    {
      question: "What should I include in a speaking inquiry?",
      answer:
        "Include the event or team, audience, date or planning window, location or time zone, desired format, topic, and the decision or outcome the session should support.",
    },
    {
      question: "Can I ask about a collaboration instead of a talk?",
      answer:
        "Yes. Describe the collaboration and context so the inquiry can be routed appropriately.",
    },
    {
      question: "How quickly will I hear back?",
      answer:
        "The response window should be published only after Jedidiah confirms one; otherwise the site should say that the inquiry will be reviewed and answered through the submitted contact channel.",
    },
    {
      question: "What happens to the information I submit?",
      answer:
        "It is used to evaluate and respond to the inquiry, retained only as long as needed for that purpose, and covered by the full disclosure at /privacy/.",
    },
  ],
  schema: [
    {
      type: "ContactPage",
      reason: "Identify the page whose primary purpose is contact.",
      requirements: ["Form and contact route must be visibly present."],
    },
    {
      type: "FAQPage",
      reason: "Only for visible, reviewed FAQs.",
      requirements: ["Keep answers synchronized with the rendered page."],
    },
    {
      type: "BreadcrumbList",
      reason: "Describe visible route hierarchy.",
      requirements: ["Reflect visible breadcrumb UI."],
    },
  ],
  reviewFlags: [
    {
      text: "Public inquiry email alternative",
      status: "owner-review",
      source: "MIGRATION_README.md",
      reviewNote:
        "Use only an owner-verified address; do not reuse the Unbounce /fsg endpoint.",
    },
    {
      text: "Form provider, response window, retention, and spam controls",
      status: "owner-review",
      source: "MIGRATION_README.md",
      reviewNote:
        "Confirm deployment transport and policy before publishing promises.",
    },
  ],
};

export const privacyContent: PageContent = {
  route: "/privacy/",
  seo: {
    title: "Privacy — Jedidiah Weller",
    description:
      "Learn what information the Jedidiah Weller site collects through inquiries, how it is used, and the choices available to you.",
    canonicalPath: "/privacy/",
    ogTitle: "Privacy — Jedidiah Weller",
    ogDescription:
      "A plain-language explanation of inquiry handling, technical data, embeds, and privacy choices.",
  },
  h1: "Privacy",
  intro:
    "This plain-language notice should describe the actual deployed site, inquiry transport, embeds, analytics, and retention—not a generic template.",
  sections: [
    {
      id: "scope",
      heading: "What this notice covers",
      paragraphs: [
        "Explain the personal site, its inquiry form, any email or CRM provider, and any third-party media or analytics that the deployed implementation uses.",
      ],
    },
    {
      id: "inquiry-data",
      heading: "Information you choose to provide",
      paragraphs: [
        "List only the fields actually implemented, why they are needed to respond, who receives them, how long they are retained, and how to request a correction or deletion where applicable.",
      ],
    },
    {
      id: "technical-data",
      heading: "Technical data and third parties",
      paragraphs: [
        "As of the audit, no Google Analytics, Google Tag Manager, Meta Pixel, or equivalent marketing identifier was found in the live HTML. Re-check production before making a final statement. Document the YouTube embed and any consent gate.",
      ],
    },
  ],
  internalLinks: [
    { label: "Contact Jedidiah", href: "/contact/" },
    { label: "Return home", href: "/" },
  ],
  faqs: [
    {
      question: "What information does the inquiry form collect?",
      answer:
        "List the fields actually implemented and submitted; at minimum, name, email, organization, engagement details, and message if those fields are present.",
    },
    {
      question: "Does the site use analytics?",
      answer:
        "No marketing identifier was found in the live HTML during the August 31, 2026 audit. Re-check production before publishing this statement, especially after adding consent-gated analytics.",
    },
    {
      question: "How can I ask a privacy question?",
      answer:
        "Provide the owner-approved privacy contact route in the final policy; do not publish an unverified address.",
    },
  ],
  schema: [
    {
      type: "WebPage",
      reason: "Identify the privacy disclosure as a normal web page.",
      requirements: ["Add dateModified only when the policy is maintained."],
    },
    {
      type: "BreadcrumbList",
      reason: "Describe visible route hierarchy.",
      requirements: ["Reflect visible breadcrumb UI."],
    },
  ],
  reviewFlags: [
    {
      text: "Final privacy policy, effective date, jurisdiction, rights, processors, retention, and contact",
      status: "owner-review",
      source: "MIGRATION_README.md",
      reviewNote:
        "Legal/owner review is required against the actual production implementation.",
    },
  ],
};

export const routeContent: Record<CanonicalRoute, PageContent> = {
  "/": homeContent,
  "/speaking/": speakingContent,
  "/about/": aboutContent,
  "/ventures/": venturesContent,
  "/ventures/summon-worlds/": summonWorldsContent,
  "/contact/": contactContent,
  "/privacy/": privacyContent,
};

/** Stable aggregate export for route implementations. */
export const siteContent = {
  home: homeContent,
  speaking: speakingContent,
  about: aboutContent,
  ventures: venturesContent,
  summonWorlds: summonWorldsContent,
  contact: contactContent,
  privacy: privacyContent,
  routes: routeContent,
  socialLinks,
  venturesList: ventures,
  testimonials,
  speakingTopics,
  personalityNumbers,
} as const;

export default siteContent;
