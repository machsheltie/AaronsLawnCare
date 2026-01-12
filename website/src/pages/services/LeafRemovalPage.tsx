import ServicePageTemplate from './ServicePageTemplate';

export default function LeafRemovalPage() {
  return (
    <ServicePageTemplate
      serviceName="Professional Leaf Removal Services in Louisville, KY"
      pageTitle="Leaf Removal Service Louisville KY | Aaron's Lawn Care"
      metaDescription="Professional leaf removal service in Louisville, Kentucky. Fast, thorough cleanup for fall and spring. Protect your lawn from leaf damage. Free quote!"
      description="Don't let fallen leaves suffocate your lawn. Our efficient leaf removal services keep your property clean, healthy, and beautiful all season long."
      serviceUrl="/services/leaf-removal"
      seasonalNote="Peak Season: October through December"
      benefits={[
        {
          title: "Protects Your Lawn's Health",
          description: "Thick leaf layers block sunlight, trap moisture, and create ideal conditions for mold, disease, and pests. Timely removal keeps your grass healthy and prevents costly damage."
        },
        {
          title: "Efficient, Thorough Cleanup",
          description: "We use powerful commercial blowers and vacuums to remove leaves from lawns, beds, and hard surfaces quickly. No leaf is left behind, and your property looks immaculate when we're done."
        },
        {
          title: "Prevents Drainage Issues",
          description: "Leaves clog gutters, storm drains, and drainage systems, leading to water pooling and potential foundation problems. We clear all problem areas to keep water flowing properly."
        },
        {
          title: "Flexible Scheduling Options",
          description: "Choose one-time cleanup, weekly visits during peak fall, or spring cleanup. We work around your schedule and Louisville's unpredictable weather patterns."
        }
      ]}
      processSteps={[
        "We assess leaf coverage and identify high-priority areas like gutters, drains, and landscape beds.",
        "We use commercial backpack blowers to gather leaves into manageable piles away from plants and structures.",
        "We vacuum or manually bag leaves for removal, or mulch them into beds if you prefer (great for gardens!).",
        "We clear gutters and downspouts to prevent water backup and ice dam formation.",
        "We perform a final inspection and cleanup, ensuring your property is spotless and drainage is clear."
      ]}
      faqs={[
        {
          question: "When is the best time for leaf removal?",
          answer: "In Louisville, peak leaf-fall occurs from late October through November. We recommend scheduling removal when about 75% of leaves have fallen. Multiple visits may be needed if you have many deciduous trees. Spring cleanup is also important for leaves that fell late or were uncovered by snow."
        },
        {
          question: "What do you do with the leaves after removal?",
          answer: "We bag and haul away all leaves for proper disposal. If you have garden beds or compost areas, we can also mulch leaves and spread them as natural fertilizer—this returns nutrients to your soil and reduces waste."
        },
        {
          question: "Do you remove leaves from gutters?",
          answer: "Yes! Clogged gutters can cause serious water damage. We clear leaves and debris from gutters and downspouts as part of our comprehensive leaf removal service. Clean gutters are essential for protecting your home."
        },
        {
          question: "How many leaf removal visits will I need?",
          answer: "It depends on your property. Most Louisville homes need 2-3 visits during fall: mid-season, late season, and a final cleanup. Properties with many oak or maple trees may benefit from weekly service during peak drop."
        },
        {
          question: "Can I combine leaf removal with other services?",
          answer: "Absolutely! Many customers pair leaf removal with fall cleanup (aeration, mulching, trimming) or spring cleanup. Bundling services saves time and money while keeping your property in top shape year-round."
        }
      ]}
    />
  );
}
