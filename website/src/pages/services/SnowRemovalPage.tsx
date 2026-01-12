import ServicePageTemplate from './ServicePageTemplate';

export default function SnowRemovalPage() {
  return (
    <ServicePageTemplate
      serviceName="Professional Snow Removal Services in Louisville, KY"
      pageTitle="Snow Removal Service Louisville KY | Aaron's Lawn Care"
      metaDescription="Professional snow removal service in Louisville, Kentucky. Fast, reliable clearing for driveways, walkways, and parking areas. Keep your property safe!"
      description="Don't let snow and ice make your property unsafe or inaccessible. Our reliable snow removal services keep driveways, walkways, and parking areas clear and safe all winter long."
      serviceUrl="/services/snow-removal"
      seasonalNote="Available November through March (as needed)"
      benefits={[
        {
          title: "Rapid Response to Snow Events",
          description: "We monitor weather forecasts and mobilize crews proactively during snow events. Our goal is to have your property cleared before you need to leave for work or business opens."
        },
        {
          title: "Safe, Accessible Property",
          description: "Snow and ice create serious slip-and-fall hazards and liability risks. We clear walkways, driveways, and parking areas thoroughly, reducing injury risk and protecting you from potential lawsuits."
        },
        {
          title: "Protects Your Surfaces",
          description: "We use appropriate equipment and techniques to remove snow without damaging pavement, landscaping, or structures. Proper snow removal prevents freeze-thaw damage and extends surface lifespan."
        },
        {
          title: "Flexible Service Options",
          description: "Choose per-event service (pay only when we plow) or seasonal contracts with guaranteed priority response. We accommodate residential and commercial properties of all sizes."
        }
      ]}
      processSteps={[
        "We monitor National Weather Service forecasts for snow and ice events in the Louisville area.",
        "When accumulation reaches your trigger depth (typically 2 inches), we mobilize our crews.",
        "We clear driveways, parking areas, and vehicular access routes first for immediate usability.",
        "We clear walkways, entryways, and high-traffic pedestrian areas to prevent slip-and-fall hazards.",
        "We apply salt or ice melt to problem areas prone to refreezing or where melting snow creates ice.",
        "We return for additional passes during heavy, ongoing snow events to maintain accessibility."
      ]}
      faqs={[
        {
          question: "How much snow triggers service?",
          answer: "Most residential customers choose a 2-inch trigger—we plow once accumulation reaches 2 inches. Commercial clients often prefer 1-inch triggers or multiple visits during storms. We'll recommend the best approach based on your property use and liability concerns."
        },
        {
          question: "When do you plow?",
          answer: "Timing depends on your needs. Residential driveways are typically cleared early morning (5-8 AM) before work commutes. Commercial properties receive priority overnight or pre-opening service. We can customize timing to your schedule."
        },
        {
          question: "Do you provide ice melt or salting?",
          answer: "Yes! We apply salt or calcium chloride ice melt to prevent refreezing and improve traction. This is especially important for walkways, steps, and slopes where ice presents serious hazards."
        },
        {
          question: "What if it snows while I'm away?",
          answer: "Seasonal contract customers receive service whether home or not—we'll clear your property on schedule. Per-event customers should contact us to request service. We can arrange key access if needed for gated properties."
        },
        {
          question: "Where do you push the snow?",
          answer: "We push snow to property edges, landscape beds (avoiding plants), or designated stockpile areas. For properties with limited space, we may need to haul snow off-site (additional fee). We'll discuss snow placement during our initial consultation."
        }
      ]}
    />
  );
}
