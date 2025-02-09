"use client";
import { ThemeProvider } from "next-themes";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../globals.css";
import Providers from "../providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <div className="container min-h-screen">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
