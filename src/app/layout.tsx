import "./globals.css";
import NavBar from "@/components/NavBar"; // Adjust the path based on your project structure
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { Moderustic } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const moderustic = Moderustic({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={moderustic.className}>
      <head>
        <Script src="cube/AnimCube3.js" strategy="beforeInteractive" />
      </head>
      <body>
        <ThemeProvider attribute="class">
          <NavBar />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
