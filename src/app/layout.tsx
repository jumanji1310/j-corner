import "./globals.css";
import NavBar from "@/components/NavBar"; // Adjust the path based on your project structure
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-moderustic">
      <head>
        <Script 
          src="/AnimCube3.js"
          strategy="beforeInteractive" 
        />
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
