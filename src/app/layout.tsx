
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import ProjectRoot from "./ProjectRoot";

const DMSans = DM_Sans({
  variable: "--font-DM-Sans",
  subsets: ["latin"]
});




export const metadata: Metadata = {
  title: "Kredibu - Your one-trust platform",
  description: "Get credible information about your next client",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${DMSans.variable} ${DMSans.variable} antialiased`}
      >
        <ProjectRoot>{children}</ProjectRoot>
      </body>
    </html>
  );
}
