import ServicePageTemplate from './ServicePageTemplate';

export default function LandscapeDesignPage() {
  return (
    <ServicePageTemplate
      serviceName="Professional Landscape Design Services in Louisville, KY"
      pageTitle="Landscape Design Service Louisville KY | Aaron's Lawn Care"
      metaDescription="Professional landscape design in Louisville, Kentucky. Custom designs, installation, and planting. Transform your outdoor space. Free consultation!"
      description="Transform your outdoor space with custom landscape design. We create beautiful, functional landscapes tailored to your lifestyle, property, and Louisville's climate."
      serviceUrl="/services/landscape-design"
      benefits={[
        {
          title: "Custom Designs for Your Property",
          description: "We create landscape plans tailored to your property's unique characteristics—sun/shade patterns, soil type, drainage, and architectural style. Every design maximizes your space's potential and reflects your personal style."
        },
        {
          title: "Increased Property Value",
          description: "Professional landscaping can increase property value by 15-20%. Well-designed landscapes enhance curb appeal, create outdoor living spaces, and make properties more attractive to buyers if you ever sell."
        },
        {
          title: "Low-Maintenance, Sustainable Choices",
          description: "We select plants that thrive in Louisville's climate with minimal maintenance. Native and adapted species require less water, fertilizer, and pest control—beautiful results without constant upkeep."
        },
        {
          title: "Functional Outdoor Living Spaces",
          description: "We design landscapes that work for your lifestyle—entertaining areas, privacy screening, play spaces, vegetable gardens, or tranquil retreats. Your outdoor space becomes an extension of your home."
        }
      ]}
      processSteps={[
        "We meet on-site to discuss your vision, budget, and how you want to use your outdoor space.",
        "We assess site conditions: sunlight, drainage, soil, existing plants, and structural features.",
        "We create a custom landscape design plan with plant selections, hardscape elements, and phased installation options.",
        "We review the design with you, making adjustments until it perfectly matches your vision.",
        "We provide detailed plant lists, installation timeline, and maintenance recommendations.",
        "We install your landscape design with careful attention to quality and proper planting techniques."
      ]}
      faqs={[
        {
          question: "How much does landscape design cost?",
          answer: "Design fees vary based on property size and project complexity. Simple bed designs start around $500, while comprehensive property plans range from $1,500-$3,000. Design fees are often credited toward installation if you proceed with us."
        },
        {
          question: "Can you work within my budget?",
          answer: "Absolutely! We design with your budget in mind and can create phased installation plans. Start with high-impact areas (front entrance, patio) and add sections over time. We'll recommend cost-effective options that deliver maximum value."
        },
        {
          question: "What plants work best in Louisville?",
          answer: "Louisville's Zone 6b/7a climate supports many options. We favor natives like coneflowers, black-eyed Susans, and dogwoods, plus reliable performers like hostas, daylilies, and hydrangeas. We match plants to your specific site conditions."
        },
        {
          question: "Do you handle hardscaping too?",
          answer: "We design hardscaping (patios, walkways, retaining walls) as part of comprehensive plans and can recommend trusted contractors for installation. For simple projects like edging and small patios, we handle installation ourselves."
        },
        {
          question: "How long does installation take?",
          answer: "Timeline depends on project scope. Simple bed installations take 1-2 days. Comprehensive designs with hardscaping, extensive planting, and irrigation may take 1-2 weeks. We provide realistic timelines during consultation."
        }
      ]}
    />
  );
}
