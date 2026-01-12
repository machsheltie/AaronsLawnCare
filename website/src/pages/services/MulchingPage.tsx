import ServicePageTemplate from './ServicePageTemplate';

export default function MulchingPage() {
  return (
    <ServicePageTemplate
      serviceName="Professional Mulching Services in Louisville, KY"
      pageTitle="Mulching Service Louisville KY | Aaron's Lawn Care"
      metaDescription="Professional mulching and garden bed services in Louisville, Kentucky. Fresh mulch installation, weed suppression, moisture retention. Free quote!"
      description="Transform your landscape beds with professional mulch installation. Fresh mulch enhances curb appeal while protecting your plants and suppressing weeds."
      serviceUrl="/services/mulching"
      seasonalNote="Best Time: Spring (April-May) or Fall (September-October)"
      benefits={[
        {
          title: "Weed Suppression",
          description: "A 2-3 inch layer of mulch blocks sunlight from reaching weed seeds, dramatically reducing weed growth and making maintenance easier. Less weeding means more time enjoying your yard."
        },
        {
          title: "Moisture Retention",
          description: "Mulch acts as insulation, keeping soil moist longer and reducing water evaporation by up to 70%. Your plants stay hydrated with less frequent watering, saving you time and money."
        },
        {
          title: "Temperature Regulation",
          description: "Mulch insulates plant roots from extreme heat and cold, protecting them from Louisville's temperature swings. This extends the growing season and keeps plants healthier year-round."
        },
        {
          title: "Enhanced Curb Appeal",
          description: "Fresh, vibrant mulch creates a polished, finished look that frames your plants beautifully. It's one of the most cost-effective ways to boost your property's appearance instantly."
        }
      ]}
      processSteps={[
        "We assess your beds and recommend mulch type (hardwood, cedar, pine bark) and color based on your landscape design.",
        "We edge beds to create clean, defined borders and remove old, degraded mulch if needed.",
        "We apply landscape fabric or weed barrier in problem areas to provide extra weed protection.",
        "We install 2-3 inches of fresh mulch, keeping it away from plant stems and tree trunks to prevent rot.",
        "We hand-spread and rake mulch to ensure even coverage and a professional, uniform appearance."
      ]}
      faqs={[
        {
          question: "What type of mulch do you recommend?",
          answer: "For most Louisville landscapes, we recommend shredded hardwood bark. It's affordable, long-lasting (1-2 years), and adds organic matter to soil as it decomposes. Cedar mulch resists insects and lasts longer. Pine bark nuggets work well for slopes. We'll recommend the best option for your specific needs."
        },
        {
          question: "How often should mulch be replenished?",
          answer: "Most mulch should be refreshed annually. Spring (April-May) is ideal for preparing beds for summer, while fall (September-October) protects plants for winter. We can top off mulch mid-season if it thins out or fades."
        },
        {
          question: "How much mulch will I need?",
          answer: "As a general rule, 1 cubic yard covers about 100 square feet at 3 inches deep. We measure your beds during our free quote visit and calculate exactly how much mulch you'll need, so there's no waste or shortage."
        },
        {
          question: "Do you remove old mulch before adding new?",
          answer: "It depends on condition. If old mulch is thin or well-decomposed, we top-dress with new mulch. If it's thick, matted, or moldy, we remove the old layer first. We'll assess and recommend the best approach during our visit."
        },
        {
          question: "Can mulch damage my plants?",
          answer: "Only if applied incorrectly. We're careful to keep mulch 2-3 inches away from plant stems and tree trunks. Mulch 'volcanoes' trap moisture against bark, causing rot and disease. Our team knows proper application techniques to protect your plants."
        }
      ]}
    />
  );
}
