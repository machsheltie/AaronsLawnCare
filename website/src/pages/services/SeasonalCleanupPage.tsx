import ServicePageTemplate from './ServicePageTemplate';

export default function SeasonalCleanupPage() {
  return (
    <ServicePageTemplate
      serviceName="Professional Seasonal Cleanup Services in Louisville, KY"
      pageTitle="Seasonal Yard Cleanup Louisville KY | Aaron's Lawn Care"
      metaDescription="Professional seasonal yard cleanup in Louisville, Kentucky. Spring and fall property cleanup, debris removal, bed prep. Get your yard ready for the season. Free quotes!"
      description="Prepare your property for changing seasons with our comprehensive cleanup services. We handle spring awakening and fall winterization, removing debris, refreshing beds, and getting your yard ready for what's ahead."
      serviceUrl="/services/seasonal-cleanup"
      seasonalNote="Spring Cleanup: March-April | Fall Cleanup: October-November"
      benefits={[
        {
          title: "Seasonal Transition Made Easy",
          description: "Seasonal transitions require specific tasks to keep your property healthy and beautiful. We handle all the heavy lifting—from raking leaves in fall to clearing winter debris in spring—so you can enjoy your yard without the work."
        },
        {
          title: "Prevents Lawn & Plant Damage",
          description: "Leaving fall leaves or winter debris on your lawn smothers grass, promotes disease, and kills plants. Our thorough cleanup removes these hazards before they cause damage, ensuring your lawn bounces back quickly."
        },
        {
          title: "Comprehensive Property Refresh",
          description: "We don't just rake leaves. We edge beds, cut back perennials, remove debris from gutters and downspouts, clean off patios and decks, and refresh mulch. Your entire property gets a complete seasonal reset."
        },
        {
          title: "Perfect Timing for Other Services",
          description: "Seasonal cleanup is the ideal time to schedule aeration, overseeding, fertilization, or mulch installation. We can coordinate multiple services in one visit, saving you time and money."
        }
      ]}
      processSteps={[
        "We walk your property to assess all areas needing attention and identify any issues requiring special care.",
        "We remove all leaves, sticks, and debris from lawn areas, garden beds, and hardscapes using rakes, blowers, and hand tools.",
        "We edge and refresh landscape beds, removing old mulch and weeds to prepare for new growth or winter protection.",
        "We cut back dead perennials, trim ornamental grasses, and remove annual flowers (fall cleanup).",
        "We clear gutters and downspouts of leaves and debris to ensure proper water flow.",
        "We blow off patios, decks, and walkways, leaving hard surfaces clean and debris-free.",
        "We haul away all debris and waste, leaving your property clean and ready for the season ahead.",
        "Optional add-ons: mulch installation, aeration, overseeding, or gutter cleaning can be scheduled simultaneously."
      ]}
      faqs={[
        {
          question: "What's included in spring cleanup?",
          answer: "Spring cleanup includes removing winter debris, leaves, and sticks; edging and refreshing garden beds; cutting back dead perennials from winter; removing old mulch; clearing gutters; and general property cleanup. We prepare your yard for the growing season ahead."
        },
        {
          question: "What's included in fall cleanup?",
          answer: "Fall cleanup focuses on leaf removal (including multiple visits if needed), cutting back perennials, removing dead annuals, clearing gutters, edging beds, and preparing your property for winter. We can also apply winterizing mulch to protect plants."
        },
        {
          question: "Do you offer multiple fall cleanup visits for leaves?",
          answer: "Absolutely! Louisville trees drop leaves over several weeks. We offer weekly or bi-weekly visits throughout October and November to keep your property clean as leaves continue falling. Many customers find 2-3 visits ideal."
        },
        {
          question: "Can you coordinate cleanup with aeration or overseeding?",
          answer: "Yes! Spring is perfect for aeration and overseeding, while fall cleanup pairs excellently with fall aeration and overseeding. We can schedule these services together, often at a bundled rate. It's the most efficient way to prepare your lawn for optimal growth."
        },
        {
          question: "What do you do with all the leaves and debris?",
          answer: "We haul everything away in our trucks and dispose of it properly at approved facilities. We don't blow debris into wooded areas or leave it on your property. Many materials are recycled or composted when possible."
        }
      ]}
    />
  );
}
