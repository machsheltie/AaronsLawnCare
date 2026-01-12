import ServicePageTemplate from './ServicePageTemplate';

export default function AerationPage() {
  return (
    <ServicePageTemplate
      serviceName="Professional Lawn Aeration Services in Louisville, KY"
      pageTitle="Lawn Aeration Service Louisville KY | Aaron's Lawn Care"
      metaDescription="Professional lawn aeration service in Louisville, Kentucky. Core aeration to improve soil health, reduce compaction, and strengthen your lawn. Free quotes!"
      description="Breathe new life into your lawn with professional core aeration. We relieve soil compaction, improve water and nutrient absorption, and promote healthy root growth for a thicker, greener lawn."
      serviceUrl="/services/aeration"
      seasonalNote="Best performed in Spring (March-May) or Fall (September-November)"
      benefits={[
        {
          title: "Relieves Soil Compaction",
          description: "Heavy foot traffic and Louisville's clay soil can compact your lawn over time. Aeration creates channels for air, water, and nutrients to reach grass roots, reversing years of compaction."
        },
        {
          title: "Improves Water Absorption",
          description: "Aeration reduces water runoff and pooling by allowing water to penetrate deeply into the soil. Your lawn will require less frequent watering and stay healthier during dry spells."
        },
        {
          title: "Strengthens Root Development",
          description: "By opening up the soil, aeration encourages roots to grow deeper and spread wider. Deeper roots mean a more drought-resistant, resilient lawn that can handle stress better."
        },
        {
          title: "Enhances Fertilizer Effectiveness",
          description: "Aeration allows fertilizers and nutrients to reach the root zone more effectively. You'll see better results from your lawn care treatments and get more value from your investment."
        }
      ]}
      processSteps={[
        "We assess your lawn to identify high-traffic areas and spots with heavy compaction.",
        "We use professional core aerators that remove 2-3 inch soil plugs, creating thousands of channels throughout your lawn.",
        "We make multiple passes over compacted areas to ensure thorough aeration coverage.",
        "Soil cores are left on the lawn surface to decompose naturally, returning nutrients to the soil.",
        "We provide aftercare instructions, including watering recommendations and optional overseeding for optimal results.",
        "For best results, we can coordinate aeration with fertilization or overseeding services."
      ]}
      faqs={[
        {
          question: "When is the best time to aerate my lawn?",
          answer: "In Louisville, the best times are early spring (March-May) or fall (September-November). Fall aeration is ideal because grass recovers quickly in cooler weather, and it prepares your lawn for winter dormancy and spring growth."
        },
        {
          question: "How often should I have my lawn aerated?",
          answer: "Most Louisville lawns benefit from aeration once per year. Lawns with heavy clay soil, high foot traffic, or those that feel spongy may need aeration twice per year (spring and fall)."
        },
        {
          question: "Will aeration damage my lawn?",
          answer: "No! Core aeration is a proven, safe practice that temporarily creates small holes but quickly results in a healthier, thicker lawn. Within 2-3 weeks, you'll see noticeable improvement in grass color and growth."
        },
        {
          question: "What are those soil plugs left on my lawn after aeration?",
          answer: "Those are the cores of soil removed during aeration. They'll break down naturally within 2-3 weeks from rain, watering, and mowing. They actually return beneficial microorganisms and nutrients to your lawn, so don't rake them up!"
        },
        {
          question: "Should I overseed after aeration?",
          answer: "Absolutely! Aeration creates perfect pockets for grass seed to make contact with soil. Fall aeration followed by overseeding is one of the best ways to thicken your lawn and fill in bare spots. We offer combined aeration and overseeding packages."
        }
      ]}
    />
  );
}
