import ServicePageTemplate from './ServicePageTemplate';

export default function SpringCleanupPage() {
  return (
    <ServicePageTemplate
      serviceName="Professional Spring Cleanup Services in Louisville, KY"
      pageTitle="Spring Cleanup Service Louisville KY | Aaron's Lawn Care"
      metaDescription="Professional spring cleanup service in Louisville, Kentucky. Prepare your lawn for growing season. Debris removal, bed prep, and more. Free quote!"
      description="Kickstart your lawn's growing season with our comprehensive spring cleanup services. We remove winter debris, refresh beds, and prepare your property for a beautiful spring and summer."
      serviceUrl="/services/spring-cleanup"
      seasonalNote="Optimal Timing: March through April"
      benefits={[
        {
          title: "Fresh Start for Growing Season",
          description: "We remove winter debris, dead vegetation, and accumulated leaves that survived fall cleanup. Your lawn and beds start the season clean, healthy, and ready for vigorous growth."
        },
        {
          title: "Early Problem Detection",
          description: "Spring cleanup reveals winter damage, disease, drainage issues, and pest problems early when they're easier and cheaper to fix. We identify concerns and recommend solutions."
        },
        {
          title: "Bed Refresh & Mulching",
          description: "We edge beds, remove winter-killed plants, and apply fresh spring mulch. This gives your property instant curb appeal and provides optimal conditions for new plantings."
        },
        {
          title: "Jumpstart Lawn Health",
          description: "We rake away dead grass (thatch), allowing sunlight and air to reach soil. Combined with spring fertilization, this promotes lush, green growth throughout the season."
        }
      ]}
      processSteps={[
        "We rake lawns to remove dead grass, leaves, and winter debris that block sunlight and air.",
        "We edge and clear all landscape beds, removing dead annuals and winter-damaged perennials.",
        "We prune shrubs and trees to remove dead/damaged branches and shape for spring growth.",
        "We apply fresh spring mulch to beds for weed suppression, moisture retention, and visual appeal.",
        "We clear gutters and check drainage systems to prepare for spring rains.",
        "We fertilize lawns with spring blend to kickstart green-up and promote healthy root development."
      ]}
      faqs={[
        {
          question: "When should I schedule spring cleanup?",
          answer: "In Louisville, early to mid-April is ideal—after the last frost but before grass starts active growth. Scheduling too early risks frost damage to new growth; too late means missing optimal planting windows and dealing with fast-growing weeds."
        },
        {
          question: "What's the difference between spring and fall cleanup?",
          answer: "Fall cleanup prepares your property for winter dormancy (leaf removal, final mowing, winterizing). Spring cleanup awakens your lawn (debris removal, pruning for growth, fertilizing, fresh mulch). Both are essential for year-round lawn health."
        },
        {
          question: "Should I aerate in spring?",
          answer: "In Louisville, fall is generally better for core aeration. However, spring aeration can benefit heavily compacted lawns or those with poor drainage. We'll assess your lawn during cleanup and recommend the best timing."
        },
        {
          question: "Can you plant new flowers during spring cleanup?",
          answer: "Yes! Spring cleanup is the perfect time for annual planting. We prepare beds, install fresh mulch, and can plant your chosen flowers. We'll recommend varieties that thrive in Louisville's climate."
        },
        {
          question: "Do you apply pre-emergent weed control?",
          answer: "We can! Spring pre-emergent prevents crabgrass and other summer weeds from germinating. Application timing is critical (soil temperature around 55°F). We monitor conditions and apply at the optimal window."
        }
      ]}
    />
  );
}
