import Container from "../components/Container";
import "../globals.css";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-gray-900">
                <Container>
                    {children}
                </Container>
            </body>
        </html>
    );
}
