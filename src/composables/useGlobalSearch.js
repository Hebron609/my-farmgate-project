import { ref, computed } from "vue";
import { products } from "@/data/products";

// Global searchable content index
const searchIndex = [
  // Solutions
  {
    id: "s1",
    title: "Sustainable Farming Solutions",
    page: "/solutions.html",
    category: "Solutions",
    keywords: [
      "sustainable",
      "farming",
      "solutions",
      "agriculture",
      "farmers",
      "innovation",
    ],
  },
  {
    id: "s2",
    title: "Partnership with Farmer Groups",
    page: "/solutions.html",
    category: "Solutions",
    keywords: [
      "partnership",
      "farmers",
      "groups",
      "fgo",
      "community",
      "cooperative",
    ],
  },
  {
    id: "s3",
    title: "Agricultural Innovation",
    page: "/solutions.html",
    category: "Solutions",
    keywords: ["innovation", "technology", "farming", "modern", "techniques"],
  },

  // Projects
  {
    id: "p1",
    title: "Community Development Projects",
    page: "/projects.html",
    category: "Projects",
    keywords: [
      "projects",
      "community",
      "development",
      "sustainable",
      "impact",
      "growth",
    ],
  },
  {
    id: "p2",
    title: "Farm Transformation Initiatives",
    page: "/projects.html",
    category: "Projects",
    keywords: [
      "farm",
      "transformation",
      "initiative",
      "farmers",
      "improvement",
    ],
  },

  // Impact & Footprint
  {
    id: "i1",
    title: "Our Impact on Farming",
    page: "/our-impact.html",
    category: "Impact",
    keywords: [
      "impact",
      "farming",
      "sustainable",
      "difference",
      "community",
      "change",
    ],
  },
  {
    id: "i2",
    title: "Environmental Footprint",
    page: "/footprint.html",
    category: "Footprint",
    keywords: [
      "footprint",
      "environmental",
      "sustainability",
      "carbon",
      "eco-friendly",
      "green",
    ],
  },

  // About & People
  {
    id: "a1",
    title: "Our Story",
    page: "/about.html",
    category: "About",
    keywords: ["story", "about", "mission", "vision", "farmgate", "africa"],
  },
  {
    id: "a2",
    title: "Our People",
    page: "/people.html",
    category: "People",
    keywords: ["people", "team", "staff", "leadership", "experts", "community"],
  },
  {
    id: "a3",
    title: "Our Relevance",
    page: "/our-relevance.html",
    category: "About",
    keywords: [
      "relevance",
      "importance",
      "agriculture",
      "farming",
      "solution",
      "need",
    ],
  },
  {
    id: "a4",
    title: "Our Manifesto",
    page: "/manifesto.html",
    category: "About",
    keywords: ["manifesto", "values", "beliefs", "commitment", "philosophy"],
  },

  // Marketplace
  {
    id: "m1",
    title: "Marketplace",
    page: "/marketplace.html",
    category: "Marketplace",
    keywords: [
      "marketplace",
      "shop",
      "products",
      "buy",
      "agricultural products",
      "store",
    ],
  },
  {
    id: "m2",
    title: "Direct Farm to Market",
    page: "/marketplace.html",
    category: "Marketplace",
    keywords: ["farm", "direct", "market", "fresh", "farmers", "products"],
  },

  // Services
  {
    id: "sv1",
    title: "Farming Support Services",
    page: "/solutions.html",
    category: "Services",
    keywords: [
      "support",
      "services",
      "farming",
      "assistance",
      "help",
      "resources",
    ],
  },
  {
    id: "sv2",
    title: "Agricultural Training",
    page: "/solutions.html",
    category: "Services",
    keywords: [
      "training",
      "education",
      "learning",
      "workshop",
      "agriculture",
      "farmers",
    ],
  },

  // General
  {
    id: "g1",
    title: "Contact Us",
    page: "/contact.html",
    category: "Contact",
    keywords: ["contact", "reach", "get in touch", "email", "phone", "connect"],
  },
];

// Add products to search index
const productSearchIndex = products.map((product, index) => ({
  id: `prod_${index}`,
  title: product.name,
  page: `/marketplace.html`,
  category: "Products",
  keywords: [
    product.name.toLowerCase(),
    product.category.toLowerCase(),
    ...product.traceability.map((t) => t.toLowerCase()),
    "product",
    "agriculture",
    "farm",
    "fresh",
    "farming",
  ],
}));

const fullSearchIndex = [...searchIndex, ...productSearchIndex];

export function useGlobalSearch() {
  const searchQuery = ref("");
  const showResults = ref(false);

  const searchResults = computed(() => {
    if (!searchQuery.value.trim()) return [];

    const query = searchQuery.value.toLowerCase().trim();
    const results = [];

    fullSearchIndex.forEach((item) => {
      const titleMatch = item.title.toLowerCase().includes(query);
      const keywordMatch = item.keywords.some(
        (keyword) => keyword.includes(query) || query.includes(keyword),
      );

      if (titleMatch || keywordMatch) {
        results.push({
          ...item,
          relevance: titleMatch ? 2 : 1,
        });
      }
    });

    // Sort by relevance, then by category
    return results
      .sort((a, b) => {
        if (b.relevance !== a.relevance) {
          return b.relevance - a.relevance;
        }
        return a.category.localeCompare(b.category);
      })
      .slice(0, 8); // Limit to 8 results
  });

  const hasResults = computed(() => searchResults.value.length > 0);

  const selectResult = (result) => {
    window.location.href = result.page;
  };

  const clearSearch = () => {
    searchQuery.value = "";
    showResults.value = false;
  };

  return {
    searchQuery,
    searchResults,
    hasResults,
    showResults,
    selectResult,
    clearSearch,
  };
}
