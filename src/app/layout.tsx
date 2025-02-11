import AppPage from "@/components/AppPage";
import AuthProvider from "@/context/AuthProvider";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

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
        <AuthProvider>
          <AppPage title="Kredibu - Your one-trust platform">{children}</AppPage>
        </AuthProvider>
      </body>
    </html>
  );
}
