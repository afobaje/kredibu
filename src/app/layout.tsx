
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ProjectRoot from "./ProjectRoot";



const poppins=Poppins({
  variable:"--font-poppins",
  subsets:["latin",],
  weight:['100','200','300','400']
});
// const DMSans = DM_Sans({
//   variable: "--font-DM-Sans",
//   subsets: ["latin"]
// });

// const RobotoCondensed=Roboto_Condensed({
//   variable:'--roboto-condensed',
//   display:'swap',
//   subsets:['latin','latin-ext','cyrillic','cyrillic-ext','vietnamese']
// })
// const Poppins = Poppins({
//   variable: '--poppins',
//   subsets: ['latin', 'latin-ext'],
  
// });


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
        className={`${poppins.className} antialiased`}
      >
        <ProjectRoot>{children}</ProjectRoot>
      </body>
    </html>
  );
}
