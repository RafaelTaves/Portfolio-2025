import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Ajuste os pesos conforme necessário
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Ajuste os pesos conforme necessário
});

export const metadata: Metadata = {
  title: "Rafael Taves Portfolio",
  description: "",
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale} className="bg-dark-blue">
      <body className={`${poppins.className} ${inter.className}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}