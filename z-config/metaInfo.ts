import { SiteConfig, ContactConfig } from "@/w-types"

const baseUrl = "https://kopi34.ru"

export const siteConfig: SiteConfig = {
  name: "Полиграфия в Волгограде | Низкие цены, высокое качество!",
  author: "devshazam",
  description:
    "Выполняем все виды полиграфических услуг: печати, визитки, наклейки, таблички, дизайн-проекты!",
  keywords: [
    "Печати",
	"Визитки",
	"Наклейки",
	"Таблички",
  ],
  url: {
    base: baseUrl,
    author: "https://github.com/devshazam",
  },
  ogImage: `${baseUrl}/og.jpg`,
}

export const contactConfig: ContactConfig = {
  email: "devshazam@gmail.com",
}
