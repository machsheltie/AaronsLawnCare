import ServicePageTemplate from './ServicePageTemplate';

export default function GutterCleaningPage() {
  return (
    <ServicePageTemplate
      serviceName="Professional Gutter Cleaning Services in Louisville, KY"
      pageTitle="Gutter Cleaning Service Louisville KY | Aaron's Lawn Care"
      metaDescription="Professional gutter cleaning service in Louisville, Kentucky. Prevent water damage, protect your foundation. Fall and spring gutter cleaning. Free quotes!"
      description="Protect your home from water damage with professional gutter cleaning. We remove leaves, debris, and blockages to ensure proper water flow and prevent costly foundation and roof damage."
      serviceUrl="/services/gutter-cleaning"
      seasonalNote="Essential in Fall (October-November) and recommended in Spring (April-May)"
      benefits={[
        {
          title: "Prevents Water Damage",
          description: "Clogged gutters cause water to overflow, damaging your roof, siding, foundation, and landscaping. Regular cleaning protects your home's structural integrity and saves thousands in potential repairs."
        },
        {
          title: "Protects Your Foundation",
          description: "Water pooling around your foundation can cause cracks, settling, and basement flooding. Clean gutters direct water safely away from your home, preventing expensive foundation issues."
        },
        {
          title: "Extends Gutter Lifespan",
          description: "Debris adds weight and holds moisture, causing gutters to sag, rust, and deteriorate. Regular cleaning removes this burden, helping your gutters last for decades instead of years."
        },
        {
          title: "Prevents Pest Infestations",
          description: "Leaves and standing water in gutters attract mosquitoes, wasps, rodents, and other pests. Clean gutters eliminate nesting sites and breeding grounds, keeping pests away from your home."
        }
      ]}
      processSteps={[
        "We carefully set up stabilized ladders and safety equipment to access your gutters safely.",
        "We remove all leaves, twigs, and debris by hand, ensuring nothing is pushed into downspouts.",
        "We flush gutters and downspouts with water to check for proper flow and clear any remaining blockages.",
        "We inspect gutters for damage, rust spots, or sagging sections and alert you to any issues found.",
        "We collect and bag all debris from your property, leaving your yard clean.",
        "We provide a condition report and recommendations for any repairs or improvements needed."
      ]}
      faqs={[
        {
          question: "How often should I have my gutters cleaned?",
          answer: "Most Louisville homes need gutter cleaning twice per year: late fall (after leaves have fallen) and late spring (after tree pollination). Homes with many trees nearby or pine trees may benefit from quarterly cleaning."
        },
        {
          question: "Can you clean gutters on a two-story house?",
          answer: "Absolutely! We have professional-grade extension ladders and safety equipment to safely clean gutters on homes up to three stories. Height is not an issue for our experienced team."
        },
        {
          question: "What if my downspouts are clogged?",
          answer: "Downspout clogs are very common. We use specialized tools to clear blockages, including augurs and high-pressure water. In rare cases where clogs can't be cleared, we can temporarily detach downspouts to remove the obstruction."
        },
        {
          question: "Do you repair damaged gutters?",
          answer: "While we focus on cleaning, we perform basic repairs like reattaching loose sections and sealing minor leaks. For major repairs or gutter replacement, we can provide recommendations or coordinate with trusted contractors."
        },
        {
          question: "Will you damage my landscaping when cleaning?",
          answer: "No! We take care to protect your plants and landscaping. Debris is bagged and removed, not dumped onto your flower beds. We're careful to avoid stepping on or damaging any plants near your home."
        }
      ]}
    />
  );
}
