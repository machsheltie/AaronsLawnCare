import ServicePageTemplate from './ServicePageTemplate';

export default function EdgingPage() {
  return (
    <ServicePageTemplate
      serviceName="Professional Lawn Edging Services in Louisville, KY"
      pageTitle="Lawn Edging Service Louisville KY | Aaron's Lawn Care"
      metaDescription="Professional lawn edging service in Louisville, Kentucky. Crisp, clean borders for walkways, driveways, and landscape beds. Free quote!"
      description="Give your lawn the crisp, professional finish it deserves with our precision edging services. Clean borders make all the difference."
      serviceUrl="/services/edging"
      seasonalNote="Available Spring through Fall (March - November)"
      benefits={[
        {
          title: "Crisp, Defined Borders",
          description: "Our precision edging creates sharp, clean lines along sidewalks, driveways, and landscape beds. These defined borders give your property a polished, professional appearance."
        },
        {
          title: "Prevents Grass Encroachment",
          description: "Regular edging keeps grass from creeping into flower beds, sidewalks, and driveways. This protects your landscaping investments and reduces maintenance needs."
        },
        {
          title: "Enhances Curb Appeal",
          description: "Clean edges frame your lawn beautifully and create visual contrast that makes your entire property look more intentional and well-maintained."
        },
        {
          title: "Professional Equipment & Technique",
          description: "We use commercial-grade edgers and hand tools to achieve perfect lines every time. Our technique ensures consistent depth and clean cuts without damaging adjacent surfaces."
        }
      ]}
      processSteps={[
        "We inspect all edges to identify areas needing attention—walkways, driveways, curbs, and landscape beds.",
        "We use commercial walk-behind edgers for long, straight runs to create uniform depth and clean lines.",
        "We hand-trim tight corners, curves, and areas around obstacles with precision string trimmers and manual edgers.",
        "We remove all debris from edges and blow off hard surfaces to leave everything looking neat.",
        "We inspect our work to ensure all edges are crisp, uniform, and professionally finished."
      ]}
      faqs={[
        {
          question: "How often should lawn edges be maintained?",
          answer: "Most properties benefit from edging every 2-4 weeks during growing season. We typically edge with every other mowing visit, but can customize the frequency based on your lawn's growth rate and aesthetic preferences."
        },
        {
          question: "What's the difference between edging and trimming?",
          answer: "Edging creates a clean vertical cut along hard surfaces (sidewalks, driveways) to define borders. Trimming uses a string trimmer to cut grass in areas the mower can't reach (around trees, fences, posts). We provide both services."
        },
        {
          question: "Will edging damage my concrete or asphalt?",
          answer: "No. Our experienced team uses proper technique and equipment to edge safely along all surfaces. We adjust blade depth to cut grass roots without damaging pavement, and we're careful around vulnerable areas."
        },
        {
          question: "Can you edge around landscape beds and mulch?",
          answer: "Absolutely! Edging around landscape beds creates a clean border that prevents grass from invading your mulch or garden areas. This is one of the most impactful services for enhancing curb appeal."
        },
        {
          question: "Do you remove the grass clippings after edging?",
          answer: "Yes, we always clean up after edging. We blow all clippings and debris off hard surfaces and into the lawn where they'll naturally decompose and return nutrients to the soil."
        }
      ]}
    />
  );
}
