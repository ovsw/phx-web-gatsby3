export const websiteSchema = {
  "@context": "http://www.schema.org",
  "@type": "WebSite",
  name: "Phoenix Mortgage Lender",
  alternateName: "Phoenix Mortgage Lender",
  url: "https://phxhomeloan.com/",
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Phoenix Home Loans",
  image: [
    "https://phxhomeloan.netlify.app/images/1x1/goldwater-bank-vercellino-team-logo.png",
    "https://phxhomeloan.netlify.app/images/4x3/goldwater-bank-vercellino-team-logo.png",
    "https://phxhomeloan.netlify.app/images/16x9/goldwater-bank-vercellino-team-logo.png",
  ],
  "@id": "https://phxhomeloan.com",
  url: "https://phxhomeloan.com",
  telephone: "480-800-8387",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3602 E Campbell Ave",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    postalCode: "85018",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.5120064,
    longitude: -111.9961322,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  sameAs: [
    "https://www.facebook.com/TheVercellinoTeam",
    "https://twitter.com/phxhomeloan",
    "https://www.instagram.com/jimmyvercellino_/",
    "https://www.youtube.com/channel/UCmSqQXiy5BIxh-hZYp_RDWw",
    "https://www.linkedin.com/in/jimmy-vercellino-29060930/",
  ],
};

export const professionalServiceSchema = {
  "@context": "http://www.schema.org",
  "@type": "professionalService",
  name: "VA Loan Specialist in Phoenix AZ Jimmy Vercellino",
  url: "https://phxhomeloan.com/",
  logo: "https://phxhomeloan.com/images/logo/logo.png",
  // UPDATE WITH NEW IMAGE
  image:
    "https://cdn.sanity.io/images/0x25ml7u/production/9bb96cd373561044f7c3159f22ac53df465bd0c7-5760x3840.jpg?w=700&h=467&fit=crop&fm=webp",
  alternateName: "VA Loan Specialist in Phoenix AZ Jimmy Vercellino",
  priceRange: "Affordable",
  telephone: "602-908-5849 ",
  description:
    "You select a Home and discuss the purchase with the seller or selling agent. Sign a purchase contract conditioned on approval of your VA home loan. Select a lender: You select a lender and present them with your Certificate of Eligibility and complete a loan application Credit Report & Appraisal: The lender will develop all credit and income information. They will also request VA to assign a licensed appraiser to determine the reasonable value for the property. A Certificate of Reasonable Value will be issued. Note: You may be required to pay for the credit report and appraisal unless the seller agrees to pay. Approval: The lender will let you know the decision on the loan. You should be approved if the established value and your credit and income are acceptable....",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3602 E Campbell Ave",
    addressLocality: "Phoenix",
    addressRegion: "AZ",
    postalCode: "85018",
    addressCountry: "AU",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "52",
  },
  openingHoursSpecification: [
    {
      "@context": "https://schema.org",
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "Closed",
    },
    {
      "@context": "https://schema.org",
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "Closed",
    },

    {
      "@context": "https://schema.org",
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Monday",
      opens: "8AM-5PM",
    },
    {
      "@context": "https://schema.org",
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Tuesday",
      opens: "8AM-5PM",
    },
    {
      "@context": "https://schema.org",
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "8AM-5PM",
    },
    {
      "@context": "https://schema.org",
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "8AM-5PM",
    },
    {
      "@context": "https://schema.org",
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "8AM-5PM",
    },
  ],
  sameAs: [
    "https://twitter.com/phxhomeloan",
    "https://www.youtube.com/c/JimmyVercellino",
    "https://www.facebook.com/phxhomeloan/",
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: "33.4484367",
    longitude: "-112.0741417",
  },
  hasMap:
    "https://www.google.com/maps/place/VA+Loans+for+Vets+NMLS%23184169/@33.5120064,-111.9983209,17z/data=!3m1!4b1!4m5!3m4!1s0x872b74d1e0720295:0x795f0a11db9b477a!8m2!3d33.5120064!4d-111.9961322",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1 602-908-5849",
    contactType: "Customer Service",
  },
};

export const breadCrumbsList = {
  "@context": "http://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@id": "https://www.corvobianco.pizza/",
        name: "Home",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@id": "https://www.corvobianco.pizza/menu/",
        name: "menu",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@id": "https://www.corvobianco.pizza/about",
        name: "About Us",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@id": "https://www.corvobianco.pizza/events",
        name: "Events",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@id": "https://www.corvobianco.pizza/news",
        name: "News",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@id": "https://www.corvobianco.pizza/reviews",
        name: "Reviews",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@id": "https://www.corvobianco.pizza/contact",
        name: "Contact",
      },
    },
  ],
};

export const organizationSchema = {
  "@context": "http://schema.org/",
  "@type": "Organization",
  name: "VA Loan Specialist in Phoenix AZ Jimmy Vercellino",
  url: "https://phxhomeloan.com/",
  logo: "https://phxhomeloan.com/images/logo/logo.png",
  description:
    "Jimmy Vercellino served with the Marine Corps and is now a VA Loan Specialist. He can help you get the VA Home Loan you need to buy the house you want.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "52",
  },
};

export const reviewSchema = {
  "@context": "http://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@type": "Organization",
    name: "VA Loan Specialist in Phoenix AZ Jimmy Vercellino",
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
  },
  name: "Matt B",
  author: {
    "@type": "Person",
    name: "Matt B",
  },
  reviewBody:
    "My wife and I just purchased our first house. We were referred to jimmy V and crew through a family friend. Jimmy, Michael, and Ron (in no particular order) represent the epitome of professional. The home buying process is... well, just that, a process. As a Marine Corps myself, the �ice� was broken easily and we were able to get right down to business. Furthermore, the level of transparency this team operates with sets the bar high. Right up front we got to meet the team, discuss our concerns, and establish the expectations on both sides of the table. I apologize but I have forgotten the names of a couple other guys that we met that first day, and while I may not know what exactly they did, their diligence was felt as we �cruised� into home plate. I don't know if I could have picked a better crew to work with. Their patience is unparalleled, especially when I over-thought things and sent messages well after the close of business hour, and to get a response within a few minutes... I am/was impressed. For anyone reading this, if you are looking for: Honest, Transparent, Capable of translating the jargon, Willing to go above and beyond, I would highly recommend Jimmy V. and crew",
  datePublished: "2019-08-26",
  publisher: {
    "@type": "Organization",
    name: "VA Loan Specialist in Phoenix AZ Jimmy Vercellino",
  },
};

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: "https://phxhomeloan.com/",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a VA Home Loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "VA guaranteed loans are made by private lenders, such as banks, savings & loans, or mortgage companies to eligible veterans for the purchase of a home which must be for their own personal occupancy. The guaranty means the lender is protected against loss if you or a later owner fail to repay the loan. The guaranty replaces the protection the lender normally receives by requiring a down payment.",
      },
    },
    {
      "@type": "Question",
      name: "What Types of VA Loans Are Available?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Whether you are looking for a first mortgage, adding a second mortgage or trying to refinance an existing mortgage, it is helpful to understand more about the general loan classifications and types of VA loans available to you. Mortgage loans are categorized as either fixed rate mortgages (FRM), adjustable rate mortgages (ARM) or some combination (hybrid) of the two.",
      },
    },
    {
      "@type": "Question",
      name: "Can I Refinance a VA Loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Some worry that refinancing takes too much time and money, but fortunately the process is simple. Refinancing is simply the process of paying of your existing loan with a new one. Your new loan could be for a better interest rate, a shorter/longer term, or a different amount. In fact, your new loan could be an entirely different type. For example, instead of an adjustable-rate mortgage you could opt for a fixed-rate mortgage.",
      },
    },
    {
      "@type": "Question",
      name: "Was the bankruptcy discharged more than 2 years ago?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If the bankruptcy was discharged more than 2 years ago, it may be disregarded.",
      },
    },
    {
      "@type": "Question",
      name: "Was the bankruptcy discharged within the last 1 to 2 years?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "If the bankruptcy was discharged within the last 1 to 2 years, it is probably not possible to determine that you and/or your spouse are a satisfactory credit risk unless both of the following requirements are met: you and/or your spouse have reestablished satisfactory credit, and the bankruptcy was caused by circumstances beyond your and/or your spouses control (such as unemployment, medical bills, etc.)",
      },
    },
    {
      "@type": "Question",
      name: "Was the bankruptcy discharged within the past 12 months?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "If the bankruptcy was discharged within the past 12 months, it will not generally be possible to determine that you and/or your spouse are satisfactory credit risks.",
      },
    },
  ],
};
