import type { Metadata } from "next";
import { Rajdhani} from "next/font/google";
import "./globals.css";
import ResponsiveNavbar from "@/components/Home/ResponsiveNavbar";

const font = Rajdhani({
  weight: ["300", "400","500","600","700"],
  subsets:["latin"]
})

export const metadata: Metadata = {
  title: "Software landing page",
  description: "software landing page using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}>
          <ResponsiveNavbar />
        {children}
      </body>
    </html>
  );
}
