import "./globals.css";
import Scrollprogress from "../src/components/Scrollprogress";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

// Replace with your actual production domain
const SITE_URL = "https://clouvenzatech.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Clouvenza Tech | Transforming Ideas into Impactful Solutions",
    template: "%s | Clouvenza Tech", // Automatically formats titles on subpages
  },
  description:
    "Clouvenza Tech specializes in transforming innovative ideas into impactful digital solutions, web development, cloud architecture, and custom software.",
  keywords: [
    "Clouvenza Tech",
    "Software Development",
    "Web Development",
    "Cloud Solutions",
    "IT Consulting",
    "Digital Transformation",
  ],
  authors: [{ name: "Clouvenza Tech", url: SITE_URL }],
  creator: "Clouvenza Tech",
  publisher: "Clouvenza Tech",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Open Graph (Facebook, LinkedIn, WhatsApp, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Clouvenza Tech",
    title: "Clouvenza Tech | Transforming Ideas into Impactful Solutions",
    description:
      "Transforming ideas into impactful solutions. Explore our custom software, web, and cloud services.",
    images: [
      {
        url: "/og-image.png", // Make sure to place a 1200x630 image in your /public folder
        width: 1200,
        height: 630,
        alt: "Clouvenza Tech - Transforming ideas into impactful solutions",
      },
    ],
  },
  // Twitter / X Card
  twitter: {
    card: "summary_large_image",
    title: "Clouvenza Tech | Transforming Ideas into Impactful Solutions",
    description:
      "Transforming ideas into impactful solutions. Explore our custom software, web, and cloud services.",
    images: ["/og-image.png"], // Same 1200x630 image
    creator: "@clouvenzatech", // Replace with your Twitter/X handle
  },
  icons: {
    icon: "/icon.png?v=2",
    shortcut: "/favicon.png?v=2",
    apple: "/favicon.png?v=2",
  },
};

export default function RootLayout({ children }) {
  // JSON-LD Structured Data (Organization & WebSite Schema)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Clouvenza Tech",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/icon.png?v=2`,
        },
        description: "Transforming ideas into impactful solutions.",
        sameAs: [
          "https://www.linkedin.com/company/clouvenzatech", // Update with actual links
          "https://twitter.com/clouvenzatech",
          "https://github.com/clouvenzatech",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "contact@clouvenzatech.com", // Update with actual email
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Clouvenza Tech",
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Inject JSON-LD Schema for Search Engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Scrollprogress />

        <Navbar />

        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}