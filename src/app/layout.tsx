import "./globals.css";
import NavBar from "@/components/NavBar"; // Adjust the path based on your project structure

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en" className="font-moderustic">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
