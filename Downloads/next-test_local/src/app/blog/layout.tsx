import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const blog = "blog"; // Define group1 here

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add any head content here, like meta tags */}
      </head>
      <body className={inter.className}>
        <h1>{blog}</h1>
        {children}
      </body>
    </html>
  );
}
