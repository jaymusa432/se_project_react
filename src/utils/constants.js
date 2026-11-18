// Stage 1: ALL data is hardcoded here on purpose.
// In stage 2+ this file's data comes from a real weather API instead.

// One object describing today — like the card data objects you made in Spots.
export const weather = {
  temperature: 78,
  city: "Dallas",
};

// An array of item objects. Each one is like a Spots card:
// same shape every time, which is why components + map() fit perfectly.
export const items = [
  { id: 1, name: "T-shirt", link: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400", weather: "hot" },
  { id: 2, name: "Sweater", link: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400", weather: "cold" },
  { id: 3, name: "Dress", link: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400", weather: "warm" },
  { id: 4, name: "Boots", link: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400", weather: "cold" },
  { id: 5, name: "Sunglasses", link: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400", weather: "hot" },
  { id: 6, name: "Hoodie", link: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400", weather: "warm" },
];
