import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "CarroCerto",
  description: "Descubra ao carro certo para você.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='pt'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
