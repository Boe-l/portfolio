import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "400", "700", "900"] })
export const metadata: Metadata = {
  title: "Portfólio de Boe",
  description: "Meu portfólio de programação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;

}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>

        <main>{children}</main>
      </body>
    </html>
  );
}
