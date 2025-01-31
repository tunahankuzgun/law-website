import { ThemeProvider } from "next-themes";
import "../globals.css";
import Providers from "../providers";
import AdminNavbar from "../components/AdminNavbar";

export default function AdminLayout({
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
              <div className="wrapper w-full">
                <AdminNavbar />
                {children}
              </div>
            </div>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
