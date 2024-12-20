import type { Metadata } from "next";
import "./globals.scss";
import type { Viewport } from 'next'

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatButtonCustom from "../components/ui/FloatButtonCustom";
import { UserProvider } from '@auth0/nextjs-auth0/client';
// import Test from "../components/ui/Test";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';

import localFont from 'next/font/local'
const jura = localFont({
  src: './fonts/Jura-Light.woff2',
  // variable: "--font-play",
  // weight: '600',
  display: 'swap',
})

import { siteConfig } from "@/z-config/metaInfo"

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}


export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url.base),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url.author,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "ru-RU",
    url: siteConfig.url.base,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
	<UserProvider>
       <body className={jura.className}> 
          <AntdRegistry>
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: '#63b03e',
                    borderRadius: 2,
                    colorTextBase: '#242424',
                    fontFamily: 'inherit',
                    fontWeightStrong: 600,
                    fontSize: 16,
                    // lineWidth: 600,
                    colorBorder: '#8b8b8b',
                    colorTextPlaceholder: '#afafaf',
                    colorLink: '#63b03e',
                    colorFillTertiary: '#a3a2a2', // Цвет слайдера
                  },
                  components: {
                    Divider: {
                      orientationMargin: 0,
                      textPaddingInline: 1,
                    },
                    Slider: {
                      railBg: '#8b8b8b',
                      trackHoverBg: '#63b03e',
                      trackBg: '#63b03e',
                    },
                  },
                }}
              >
              <Header />
                <main>
                  {children}
                </main>
              <Footer />
              <FloatButtonCustom />
            </ConfigProvider>
          </AntdRegistry>
        </body>
		</UserProvider>
    </html>
  );
}
