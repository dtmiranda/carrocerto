import { Footer, NavBar } from '@/components'
import './globals.css'


export const metadata = {
  title: 'CarroCerto',
  description: 'Descover the best car in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className="relative">
        <NavBar />
         
        {children}

        <Footer />
        
      </body>
    </html>
  )
}
