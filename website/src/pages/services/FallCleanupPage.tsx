import ServicePageTemplate from './ServicePageTemplate';

export default function FallCleanupPage() {
  return (
    <ServicePageTemplate
      serviceName="Professional Fall Cleanup Services in Louisville, KY"
      pageTitle="Fall Cleanup Service Louisville KY | Aaron's Lawn Care"
      metaDescription="Professional fall cleanup service in Louisville, Kentucky. Comprehensive yard prep for winter. Leaf removal, trimming, and more. Free quote!"
      description="Prepare your property for winter with our comprehensive fall cleanup services. We handle all the heavy lifting so your lawn emerges healthy and beautiful in spring."
      serviceUrl="/services/fall-cleanup"
      seasonalNote="Optimal Timing: October through November"
      benefits={[
        {
          title: "Complete Yard Preparation",
          description: "We perform a thorough fall cleanup including leaf removal, plant trimming, bed clearing, and gutter cleaning. Your property will be fully prepared for winter weather and ready to thrive come spring."
        },
        {
          title: "Prevents Winter Damage",
          description: "Removing leaves and debris prevents mold, disease, and pest infestations during winter months. Proper trimming protects plants from snow and ice damage. These preventive measures save you money on spring repairs."
        },
        {
          title: "Protects Your Investment",
          description: "Fall cleanup protects your landscaping investments by ensuring plants enter dormancy healthy. Clearing drainage systems prevents ice dams and water damage to your home's foundation."
        },
        {
          title: "Saves Spring Time",
          description: "A thorough fall cleanup means less work in spring. You'll be able to enjoy your outdoor space immediately instead of spending weeks cleaning up winter's aftermath."
        }
      ]}
      processSteps={[
        "We remove all leaves from lawns, beds, and hard surfaces using commercial blowers and vacuums.",
        "We trim back perennials, cut down dead annuals, and prune shrubs to prevent winter damage.",
        "We clear gutters and downspouts to prevent ice dams and ensure proper drainage.",
        "We edge beds, remove dead plant material, and apply fall mulch to protect plant roots.",
        "We perform final mowing and fertilization to help grass store nutrients for winter survival.",
        "We inspect drainage systems and clear any debris that could cause winter flooding."
      ]}
      faqs={[
        {
          question: "When should I schedule fall cleanup?",
          answer: "In Louisville, the ideal time is late October through mid-November, after most leaves have fallen but before the first hard freeze. We can schedule multiple visits if you have many trees or prefer gradual cleanup."
        },
        {
          question: "What's included in fall cleanup?",
          answer: "Our comprehensive fall cleanup includes leaf removal, bed clearing, plant trimming, gutter cleaning, final mowing, edge definition, and removal of all debris. We can customize services based on your property's specific needs."
        },
        {
          question: "Should I fertilize in fall?",
          answer: "Yes! Fall fertilization is crucial for Louisville lawns. It helps grass store nutrients for winter and promotes strong root development. We offer fall fertilization as an add-on to cleanup services."
        },
        {
          question: "Do you do multiple fall cleanup visits?",
          answer: "Absolutely. Many customers schedule 2-3 visits: mid-season cleanup, late-season cleanup, and a final pass before winter. This approach prevents leaf buildup and keeps your property looking great throughout fall."
        },
        {
          question: "What happens to the debris?",
          answer: "We haul away all leaves, trimmings, and debris for proper disposal. Some organic material can be composted or mulched into beds if you prefer—this reduces waste and enriches your soil naturally."
        }
      ]}
    />
  );
}
