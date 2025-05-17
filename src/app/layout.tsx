import "./globals.css";
import NavBar from "@/components/NavBar"; // Adjust the path based on your project structure

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-moderustic">
      <head>
        <script src="AnimCube3.js"></script>
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
