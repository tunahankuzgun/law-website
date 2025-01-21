import Container from "../components/Container";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-orange-50">
        <Container>
          <Navbar />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
