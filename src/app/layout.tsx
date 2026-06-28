import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nithin Pillalamarri | Sports Management & Event Operations",
  description:
    "Portfolio of Nithin Pillalamarri — Sports Management, Event Operations, Analytics, and Project Management professional.",
  keywords: [
    "Sports Management",
    "Event Operations",
    "Analytics",
    "Project Management",
    "Nithin Pillalamarri",
  ],
  authors: [{ name: "Nithin Pillalamarri" }],
  openGraph: {
    title: "Nithin Pillalamarri | Sports Management & Event Operations",
    description:
      "Portfolio showcasing work in Sports Management, Event Operations, Analytics, and Project Management.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nithin Pillalamarri | Sports Management & Event Operations",
    description:
      "Portfolio showcasing work in Sports Management, Event Operations, Analytics, and Project Management.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased`}>
        {children}
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "hsl(220, 14%, 12%)",
              border: "1px solid hsl(220, 14%, 20%)",
              color: "hsl(213, 31%, 91%)",
            },
          }}
        />
      </body>
    </html>
  );
}
