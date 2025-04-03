import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Palette Riots | Web Development, App Development, and Design Services",
  description: "Get expert web development, app development, and design services from palette-riots. Our team of experts delivers custom solutions that meet your unique needs and goals. Contact us today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased relative`}
      >
        {children}
      </body>
    </html>
  );
}
