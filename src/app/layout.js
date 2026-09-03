import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  metadataBase: new URL("https://griffinbrothersproperties.com"),
  title: {
    default: "Griffin Brothers Properties — Commercial real estate in the Shoals",
    template: "%s · Griffin Brothers Properties",
  },
  description:
    "Family-owned commercial real estate ownership and development in the Shoals: retail, flex, land leases, build-to-suit and residential.",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4eee1" },
    { media: "(prefers-color-scheme: dark)", color: "#14110c" },
  ],
};

// Runs before first paint: apply the stored theme with no flash, and flag that
// JS is on so scroll-reveal styles only hide content when they can un-hide it.
const themeScript = `(function(){var d=document.documentElement;d.classList.add('js');try{var m=localStorage.getItem('gb-theme');if(m==='dark'||m==='light'){d.setAttribute('data-theme',m);}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
