export const generalContractorSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": "Jortin Limited",
  "legalName": "Jortin Limited",
  "url": "https://www.jortinlimited.co.ke",
  "logo": "https://www.jortinlimited.co.ke/images/logo.png",
  "image": "https://www.jortinlimited.co.ke/images/hero-home-bg.jpg",
  "description": "NCA 8 registered contractor in Ongata Rongai for road works, water works, structural and civil works, building and construction consultancy in Kenya.",
  "slogan": "Construction Consultancy · Structural & Civil Works · Building · Roads · Water Works",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ongata Business Centre, 2nd Floor, Room 23, Magadi Road",
    "addressLocality": "Ongata Rongai",
    "addressRegion": "Kajiado County",
    "postalCode": "00511",
    "postOfficeBoxNumber": "654",
    "addressCountry": "KE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -1.3963,
    "longitude": 36.7606
  },
  "telephone": "+254722902688",
  "email": "jortinlimited@gmail.com",
  "areaServed": [
    { "@type": "Country", "name": "Kenya" },
    { "@type": "AdministrativeArea", "name": "Kajiado County" },
    { "@type": "AdministrativeArea", "name": "Nairobi County" }
  ],
  "foundingDate": "2025-02-05",
  "founder": [
    {
      "@type": "Person",
      "name": "Karithi John",
      "jobTitle": "Managing Director"
    },
    {
      "@type": "Person",
      "name": "Eng. Martin Mutuma",
      "jobTitle": "Technical Director"
    }
  ],
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "name": "NCA 8 Road Works",
      "credentialCategory": "Contractor Registration",
      "recognizedBy": {
        "@type": "Organization",
        "name": "National Construction Authority"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "name": "NCA 8 Water Works",
      "credentialCategory": "Contractor Registration",
      "recognizedBy": {
        "@type": "Organization",
        "name": "National Construction Authority"
      }
    }
  ],
  "knowsAbout": [
    "road works",
    "water works",
    "structural engineering",
    "civil works",
    "building construction",
    "borehole drilling",
    "project management"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Construction and Engineering Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Consultancy & Design", "url": "https://www.jortinlimited.co.ke/services#consultancy" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Structural & Civil Works", "url": "https://www.jortinlimited.co.ke/services#structural" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Building Construction", "url": "https://www.jortinlimited.co.ke/services#building" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Road Works & Civil Works", "url": "https://www.jortinlimited.co.ke/services#roads" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water & Sanitation", "url": "https://www.jortinlimited.co.ke/services#water" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electrical & Mechanical", "url": "https://www.jortinlimited.co.ke/services#electrical" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Project Management & Supervision", "url": "https://www.jortinlimited.co.ke/services#project-management" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Procurement & Maintenance", "url": "https://www.jortinlimited.co.ke/services#procurement" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Consulting & Project Management", "url": "https://www.jortinlimited.co.ke/services#consulting" } }
    ]
  }
};

export function getBreadcrumbSchema(pageName: string, pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.jortinlimited.co.ke/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pageName,
        "item": pageUrl
      }
    ]
  };
}
