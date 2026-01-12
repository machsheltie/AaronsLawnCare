import ServicePageTemplate from './ServicePageTemplate';

export default function DebrisRemovalPage() {
  return (
    <ServicePageTemplate
      serviceName="Professional Debris Removal Services in Louisville, KY"
      pageTitle="Yard Debris Removal Louisville KY | Aaron's Lawn Care"
      metaDescription="Professional yard debris removal service in Louisville, Kentucky. Storm cleanup, fallen branches, yard waste removal. Quick response. Free quotes!"
      description="Keep your property clean and safe with our comprehensive debris removal service. From storm cleanup to general yard waste, we'll haul away branches, leaves, and debris quickly and efficiently."
      serviceUrl="/services/debris-removal"
      benefits={[
        {
          title: "Complete Storm Cleanup",
          description: "After severe weather, fallen branches and debris can make your property unsafe and unsightly. We provide fast response for storm damage cleanup, removing everything from small branches to large limbs."
        },
        {
          title: "Safe and Efficient Removal",
          description: "We have the proper equipment and expertise to safely remove debris without damaging your lawn, landscaping, or property. Our team knows how to handle heavy branches and navigate tight spaces."
        },
        {
          title: "Proper Disposal",
          description: "All debris is disposed of responsibly at approved facilities. We recycle when possible and ensure your yard waste doesn't end up in landfills unnecessarily."
        },
        {
          title: "Flexible Scheduling",
          description: "We offer one-time cleanup, seasonal debris removal, or regular maintenance to keep your property consistently clean. Same-day service available for emergencies."
        }
      ]}
      processSteps={[
        "We assess your property to identify all debris and determine the best removal approach.",
        "We gather branches, leaves, and yard waste into organized piles for efficient loading.",
        "Using professional equipment, we load debris onto our trucks, being careful not to damage your lawn or landscaping.",
        "We do a final walk-through to ensure we've collected all debris, including smaller twigs and scattered leaves.",
        "We haul everything away and dispose of it properly at recycling or waste facilities.",
        "We can also inspect for any potential hazards like hanging branches or damaged trees that may need attention."
      ]}
      faqs={[
        {
          question: "What types of debris do you remove?",
          answer: "We remove fallen branches, tree limbs, leaves, grass clippings, brush piles, storm debris, and general yard waste. We can handle small twigs to large tree limbs. For extremely large trees or hazardous situations, we may coordinate with specialized tree removal services."
        },
        {
          question: "How quickly can you respond after a storm?",
          answer: "We prioritize storm cleanup requests and typically respond within 24-48 hours, depending on the severity of the weather event and demand. For urgent safety hazards like branches on structures or blocking driveways, we offer same-day emergency service when available."
        },
        {
          question: "Do you handle debris from tree removal?",
          answer: "Yes! If you're having trees removed by us or another company, we can coordinate debris cleanup and haul away. We'll work with your schedule to ensure your property is left clean and debris-free."
        },
        {
          question: "Is there a minimum amount of debris for service?",
          answer: "No minimum! Whether you have a few branches from trimming or a full yard of storm debris, we'll provide service. Pricing is based on the volume of debris and complexity of removal."
        },
        {
          question: "Can you remove construction debris or non-organic waste?",
          answer: "Our debris removal service focuses on organic yard waste (branches, leaves, grass, etc.). For construction debris, concrete, or other non-organic materials, please contact us to discuss options—we may be able to accommodate or refer you to appropriate disposal services."
        }
      ]}
    />
  );
}
