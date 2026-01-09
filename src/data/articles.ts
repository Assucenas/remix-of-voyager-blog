// Local images from public/images directory
const authorAvatar = "/images/assus.jpg";
const aboutSofiaHero = "/images/do.png";
const editorialEleganceHero = "/images/rayssa.png";
const desertDreamsHero = "/images/medina.png";
const vintageHighwayHero = "/images/girl.png";
const lavenderFieldsHero = "/images/rose.png";
const coastalClassicHero = "/images/camisa.png";
const storiesUnboundHero = "/images/surf.png";
const circularHorizonsHero = "/images/fla.png";
const retroRevivalHero = "/images/life.png";
const goldenSpheresHero = "/images/jesus.png";

export interface ArticleData {
  slug: string;
  title: string;
  subtitle: string;
  publishDate: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  heroImage: string;
  readTime: string;
  viewCount: string;
  shareCount: number;
  content: {
    type: "paragraph" | "heading" | "image" | "blockquote-big";
    content?: string;
    src?: string;
    alt?: string;
    caption?: string;
    author?: string;
    level?: number;
  }[];
  relatedArticles: {
    title: string;
    description: string;
    image: string;
    tag: string;
    slug: string;
  }[];
}

export const articlesData: Record<string, ArticleData> = {
  "about-Assucena": {
    slug: "about-Assucena",
    title: "D.O - EXO",
    subtitle: "A Personal Introduction",
    publishDate: "March 20, 2024",
    author: {
      name: "Assucena",
      title: "Graphic Designer",
      avatar: authorAvatar,
    },
    heroImage: aboutSofiaHero,
    readTime: "8 min",
    viewCount: "4.8k",
    shareCount: 142,
    content: [
      {
        type: "paragraph",
        content: "Looking back at these posters feels like opening a time capsule.",
      },
      {
        type: "paragraph",
        content: "I created them right after graduation, during a time when I was fully immersed in the hunger to learn and push my limits.",
      },
      {
        type: "paragraph",
        content: "Seeing them now fills me with gratitude—not just for the final results, but for the growth they represent.",
      },
      {
        type: "paragraph",
        content: "These are milestones of a high-dedication phase that shaped the professional I am today.",
      },
    
    ],
    relatedArticles: [
      {
        title: "RAYSSA LEAL",
        description: "Shot for Vogue Italia during Milan Fashion Week. Capturing the intersection of haute couture and architectural minimalism.",
        image: editorialEleganceHero,
        tag: "Editorial",
        slug: "editorial-elegance",
      },
    ],
  },
  "editorial-elegance": {
    slug: "editorial-elegance",
    title: "RAYSSA LEAL",
    subtitle: "The Power of Accessories",
    publishDate: "March 15, 2024",
    author: {
      name: "Assucena",
      title: "Graphic Designer",
      avatar: authorAvatar,
    },
    heroImage: editorialEleganceHero,
    readTime: "8 min",
    viewCount: "2.4k",
    shareCount: 89,
    content: [
      {
        type: "paragraph",
        content: "RAYSSA LEAL",
      },
    
      {
        type: "paragraph",
        content: "Looking back at these posters feels like opening a time capsule.",
      },
      {
        type: "paragraph",
        content: "I created them right after graduation, during a time when I was fully immersed in the hunger to learn and push my limits.",
      },
      {
        type: "paragraph",
        content: "Seeing them now fills me with gratitude—not just for the final results, but for the growth they represent.",
      },
      {
        type: "paragraph",
        content: "These are milestones of a high-dedication phase that shaped the professional I am today.",
      },
      
    ],
    relatedArticles: [
      {
        title: "SURF BOY",
        description: "Narrative fashion photography that tells compelling visual stories.",
        image: storiesUnboundHero,
        tag: "Editorial",
        slug: "stories-unbound",
      },
    ],
  },
  "desert-dreams": {
    slug: "desert-dreams",
    title: "GABRIEL MEDINA",
    subtitle: "The Power of Color",
    publishDate: "March 15, 2024",
    author: {
      name: "Assucena",
      title: "Graphic Designer",
      avatar: authorAvatar,
    },
    heroImage: desertDreamsHero,
    readTime: "6 min",
    viewCount: "1.8k",
    shareCount: 64,
    content: [
       {
        type: "paragraph",
        content: "Looking back at these posters feels like opening a time capsule.",
      },
      {
        type: "paragraph",
        content: "I created them right after graduation, during a time when I was fully immersed in the hunger to learn and push my limits.",
      },
      {
        type: "paragraph",
        content: "Seeing them now fills me with gratitude—not just for the final results, but for the growth they represent.",
      },
      {
        type: "paragraph",
        content: "These are milestones of a high-dedication phase that shaped the professional I am today.",
      },
    ],
    relatedArticles: [
      {
        title: "RAYSSA LEAL",
        description: "Shot for Vogue Italia during Milan Fashion Week. Capturing the intersection of haute couture and architectural minimalism.",
        image: editorialEleganceHero,
        tag: "Editorial",
        slug: "editorial-elegance",
      },
    ],
  },
  "vintage-highway": {
    slug: "vintage-highway",
    title: "FUTURE GIRL",
    subtitle: "From Streets to Status",
    publishDate: "March 12, 2024",
    author: {
      name: "Assucena",
      title: "Graphic Designer",
      avatar: authorAvatar,
    },
    heroImage: vintageHighwayHero,
    readTime: "7 min",
    viewCount: "3.1k",
    shareCount: 95,
    content: [
       {
        type: "paragraph",
        content: "Looking back at these posters feels like opening a time capsule.",
      },
      {
        type: "paragraph",
        content: "I created them right after graduation, during a time when I was fully immersed in the hunger to learn and push my limits.",
      },
      {
        type: "paragraph",
        content: "Seeing them now fills me with gratitude—not just for the final results, but for the growth they represent.",
      },
      {
        type: "paragraph",
        content: "These are milestones of a high-dedication phase that shaped the professional I am today.",
      },
    ],
    relatedArticles: [
      {
        title: "GABRIEL MEDINA",
        description: "A journey through minimalist landscapes where fashion meets nature in perfect harmony.",
        image: desertDreamsHero,
        tag: "Travel",
        slug: "desert-dreams",
      },
    ],
  },
  "lavender-fields": {
    slug: "lavender-fields",
    title: "ROSE - BP",
    subtitle: "Elevated Menswear Accessories",
    publishDate: "March 8, 2024",
    author: {
      name: "Assucena",
      title: "Graphic Designer",
      avatar: authorAvatar,
    },
    heroImage: lavenderFieldsHero,
    readTime: "5 min",
    viewCount: "2.2k",
    shareCount: 71,
    content: [
       {
        type: "paragraph",
        content: "Looking back at these posters feels like opening a time capsule.",
      },
      {
        type: "paragraph",
        content: "I created them right after graduation, during a time when I was fully immersed in the hunger to learn and push my limits.",
      },
      {
        type: "paragraph",
        content: "Seeing them now fills me with gratitude—not just for the final results, but for the growth they represent.",
      },
      {
        type: "paragraph",
        content: "These are milestones of a high-dedication phase that shaped the professional I am today.",
      },
    ],
    relatedArticles: [
      {
        title: "STAMP MEDINA",
        description: "Seaside elegance meets timeless style.",
        image: coastalClassicHero,
        tag: "Editorial",
        slug: "coastal-classic",
      },
    ],
  },
  "coastal-classic": {
    slug: "coastal-classic",
    title: "STAMP MEDINA",
    subtitle: "Beauty Without Filters",
    publishDate: "March 5, 2024",
    author: {
      name: "Assucena",
      title: "Graphic Designer",
      avatar: authorAvatar,
    },
    heroImage: coastalClassicHero,
    readTime: "6 min",
    viewCount: "1.9k",
    shareCount: 58,
    content: [
       {
        type: "paragraph",
        content: "Looking back at these posters feels like opening a time capsule.",
      },
      {
        type: "paragraph",
        content: "I created them right after graduation, during a time when I was fully immersed in the hunger to learn and push my limits.",
      },
      {
        type: "paragraph",
        content: "Seeing them now fills me with gratitude—not just for the final results, but for the growth they represent.",
      },
      {
        type: "paragraph",
        content: "These are milestones of a high-dedication phase that shaped the professional I am today.",
      },
    ],
    relatedArticles: [
      {
        title: "ROSE - BP",
        description: "Romance and elegance captured in the purple hues of Provence.",
        image: lavenderFieldsHero,
        tag: "Editorial",
        slug: "lavender-fields",
      },
    ],
  },
  "stories-unbound": {
    slug: "stories-unbound",
    title: "SURF BOY",
    subtitle: "The Art of Looking Casual",
    publishDate: "March 1, 2024",
    author: {
      name: "Assucena",
      title: "Graphic Designer",
      avatar: authorAvatar,
    },
    heroImage: storiesUnboundHero,
    readTime: "9 min",
    viewCount: "3.5k",
    shareCount: 102,
    content: [
       {
        type: "paragraph",
        content: "Looking back at these posters feels like opening a time capsule.",
      },
      {
        type: "paragraph",
        content: "I created them right after graduation, during a time when I was fully immersed in the hunger to learn and push my limits.",
      },
      {
        type: "paragraph",
        content: "Seeing them now fills me with gratitude—not just for the final results, but for the growth they represent.",
      },
      {
        type: "paragraph",
        content: "These are milestones of a high-dedication phase that shaped the professional I am today.",
      },
    ],
    relatedArticles: [
      {
        title: "RAYSSA LEAL",
        description: "Shot for Vogue Italia during Milan Fashion Week. Capturing the intersection of haute couture and architectural minimalism.",
        image: editorialEleganceHero,
        tag: "Editorial",
        slug: "editorial-elegance",
      },
    ],
  },
  "circular-horizons": {
    slug: "circular-horizons",
    title: "ETERNAL GLORY",
    subtitle: "When Style Becomes Expression",
    publishDate: "February 28, 2024",
    author: {
      name: "Assucena",
      title: "Graphic Designer",
      avatar: authorAvatar,
    },
    heroImage: circularHorizonsHero,
    readTime: "7 min",
    viewCount: "2.7k",
    shareCount: 83,
    content: [
       {
        type: "paragraph",
        content: "Looking back at these posters feels like opening a time capsule.",
      },
      {
        type: "paragraph",
        content: "I created them right after graduation, during a time when I was fully immersed in the hunger to learn and push my limits.",
      },
      {
        type: "paragraph",
        content: "Seeing them now fills me with gratitude—not just for the final results, but for the growth they represent.",
      },
      {
        type: "paragraph",
        content: "These are milestones of a high-dedication phase that shaped the professional I am today.",
      },
    ],
    relatedArticles: [
      {
        title: "RAYSSA LEAL",
        description: "Shot for Vogue Italia during Milan Fashion Week. Capturing the intersection of haute couture and architectural minimalism.",
        image: editorialEleganceHero,
        tag: "Editorial",
        slug: "editorial-elegance",
      },
    ],
  },
  "retro-revival": {
    slug: "retro-revival",
    title: "LIFE PAYS",
    subtitle: "Timeless Rebellion",
    publishDate: "February 24, 2024",
    author: {
      name: "Assucena",
      title: "Graphic Designer",
      avatar: authorAvatar,
    },
    heroImage: retroRevivalHero,
    readTime: "8 min",
    viewCount: "4.1k",
    shareCount: 118,
    content: [
       {
        type: "paragraph",
        content: "Looking back at these posters feels like opening a time capsule.",
      },
      {
        type: "paragraph",
        content: "I created them right after graduation, during a time when I was fully immersed in the hunger to learn and push my limits.",
      },
      {
        type: "paragraph",
        content: "Seeing them now fills me with gratitude—not just for the final results, but for the growth they represent.",
      },
      {
        type: "paragraph",
        content: "These are milestones of a high-dedication phase that shaped the professional I am today.",
      },
    ],
    relatedArticles: [
      {
        title: "FUTURE GIRL",
        description: "A nostalgic journey through classic American style and the open road.",
        image: vintageHighwayHero,
        tag: "Travel",
        slug: "vintage-highway",
      },
    ],
  },
  "golden-spheres": {
    slug: "golden-spheres",
    title: "THIS IS",
    subtitle: "Fashion in Digital Spaces",
    publishDate: "February 20, 2024",
    author: {
      name: "Assucena",
      title: "Graphic Designer",
      avatar: authorAvatar,
    },
    heroImage: goldenSpheresHero,
    readTime: "6 min",
    viewCount: "2.9k",
    shareCount: 91,
    content: [
       {
        type: "paragraph",
        content: "Looking back at these posters feels like opening a time capsule.",
      },
      {
        type: "paragraph",
        content: "I created them right after graduation, during a time when I was fully immersed in the hunger to learn and push my limits.",
      },
      {
        type: "paragraph",
        content: "Seeing them now fills me with gratitude—not just for the final results, but for the growth they represent.",
      },
      {
        type: "paragraph",
        content: "These are milestones of a high-dedication phase that shaped the professional I am today.",
      },
    ],
    relatedArticles: [
      {
        title: "ETERNAL GLORY",
        description: "Geometric patterns and modern design.",
        image: circularHorizonsHero,
        tag: "Editorial",
        slug: "circular-horizons",
      },
    ],
  },
};

export const getArticleBySlug = (slug: string): ArticleData | undefined => {
  return articlesData[slug];
};

export const getAllArticleSlugs = (): string[] => {
  return Object.keys(articlesData);
};
