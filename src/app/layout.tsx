import "./globals.css";
import NavBar from "@/components/NavBar"; // Adjust the path based on your project structure
import { Lato, Inter } from 'next/font/google';

// Initialize the font
const font = Lato({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
