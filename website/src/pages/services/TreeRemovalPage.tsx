import ServicePageTemplate from './ServicePageTemplate';

export default function TreeRemovalPage() {
  return (
    <ServicePageTemplate
      serviceName="Professional Tree Removal Services in Louisville, KY"
      pageTitle="Tree Removal Service Louisville KY | Aaron's Lawn Care"
      metaDescription="Professional tree removal service in Louisville, Kentucky. Safe removal of dead, diseased, or hazardous trees. Stump grinding available. Free quotes!"
      description="Safe, professional tree removal for dead, diseased, or hazardous trees. Our experienced team uses proper equipment and techniques to remove trees of any size without damage to your property."
      serviceUrl="/services/tree-removal"
      benefits={[
        {
          title: "Safety First Approach",
          description: "Dead, diseased, or leaning trees pose serious risks to your home, vehicles, and family. We identify hazardous trees and remove them safely before they cause damage or injury during storms."
        },
        {
          title: "Property Protection",
          description: "We use advanced rigging techniques and equipment to carefully lower tree sections, preventing damage to your home, landscaping, fences, and utilities. Your property is fully protected throughout the process."
        },
        {
          title: "Complete Cleanup",
          description: "Tree removal is messy work, but we handle all of it. We remove all wood, branches, and debris from your property, haul it away, and leave your yard clean and ready to use."
        },
        {
          title: "Stump Grinding Available",
          description: "Stumps are unsightly, create tripping hazards, and attract pests. We offer professional stump grinding to completely remove the stump below ground level, allowing you to replant or reclaim the space."
        }
      ]}
      processSteps={[
        "We assess the tree, surrounding structures, and potential hazards to create a safe removal plan.",
        "We establish a safety perimeter and protect nearby structures, plants, and utilities.",
        "Using professional equipment like chainsaws, ropes, and harnesses, we carefully remove the tree section by section.",
        "We lower each section safely to the ground, avoiding contact with structures or landscaping.",
        "We cut the trunk and branches into manageable pieces and load them onto our trucks.",
        "We perform complete cleanup, removing all wood chips, sawdust, and debris from your property.",
        "Optional: We grind the stump below ground level and fill the hole with topsoil for a finished appearance."
      ]}
      faqs={[
        {
          question: "How do I know if my tree needs to be removed?",
          answer: "Signs include: dead or dying branches, large cracks in the trunk, fungus growth, severe lean, root damage, disease that can't be treated, or storm damage. We offer free assessments to evaluate tree health and recommend the best course of action—sometimes trees can be saved with proper care."
        },
        {
          question: "Can you remove trees close to my house or power lines?",
          answer: "Yes! We specialize in difficult removals. We use advanced rigging techniques to safely remove trees in tight spaces, near structures, and around utilities. For trees touching power lines, we coordinate with utility companies when necessary."
        },
        {
          question: "Will tree removal damage my yard?",
          answer: "We minimize impact by using plywood pathways to protect grass, carefully planning access routes, and avoiding heavy equipment when possible. Some temporary disturbance is inevitable with large trees, but we repair affected areas and leave your property as pristine as possible."
        },
        {
          question: "What do you do with the wood from my tree?",
          answer: "We haul away all debris and wood. If you'd like to keep firewood, we can cut logs to your preferred length and stack them on your property at no extra charge. Otherwise, we recycle the wood at approved facilities."
        },
        {
          question: "Do I need a permit to remove trees in Louisville?",
          answer: "Most residential tree removals don't require permits in Louisville, but there are exceptions for heritage trees, protected species, and certain city zones. We're familiar with local regulations and can advise you on permit requirements for your specific situation."
        }
      ]}
    />
  );
}
