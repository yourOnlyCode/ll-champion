import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "./components/AuthProvider";
import { ThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Champion - Self-Publishing Platform",
  description: "The elegant self-publishing platform for authors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
