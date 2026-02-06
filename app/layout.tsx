import "./globals.css";
import Providers from "./providers";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "Maricopa Lions Club",
  description: "Maricopa Lions Club website concepts"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <SiteHeader />
          <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-10 md:px-12">
            {children}
          </main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
