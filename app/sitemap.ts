import type { MetadataRoute } from "next";

const SITE_URL = "https://kuttabu.com";

const pages = [
  "",
  "/blog",
  "/duyurular",
  "/gizlilik-politikasi",
  "/gokturkler",
  "/guncellemeler",
  "/hakkimizda",
  "/hatali-kart-bildir",
  "/kart-kategorileri",
  "/kullanim-kosullari",
  "/kvkk",
  "/nasil-oynanir",
  "/osmanli-imparatorlugu",
  "/oyun-kurallari",
  "/selcuklu-devleti",
  "/surum-notlari",
  "/turk-devletleri",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ["tr", "en"].flatMap((locale) =>
    pages.map((page) => ({
      url: `${SITE_URL}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? "daily" : "weekly",
      priority: page === "" ? 1.0 : 0.8,
    }))
  );
}