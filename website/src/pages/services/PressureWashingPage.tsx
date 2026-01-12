import ServicePageTemplate from './ServicePageTemplate';

export default function PressureWashingPage() {
  return (
    <ServicePageTemplate
      serviceName="Professional Pressure Washing Services in Louisville, KY"
      pageTitle="Pressure Washing Service Louisville KY | Aaron's Lawn Care"
      metaDescription="Professional pressure washing services in Louisville, Kentucky. Clean driveways, patios, decks, siding, and more. Restore your property's curb appeal. Free quotes!"
      description="Restore your property's beauty with our professional pressure washing services. We safely and effectively clean driveways, sidewalks, patios, decks, siding, and more, removing years of dirt, grime, and algae."
      serviceUrl="/services/pressure-washing"
      seasonalNote="Best results in Spring and Summer when temperatures are consistently above 40°F"
      benefits={[
        {
          title: "Dramatically Improves Curb Appeal",
          description: "Pressure washing can make your home look years younger in just hours. Remove built-up dirt, mold, mildew, and stains that accumulate over time, revealing the true color and beauty of your surfaces."
        },
        {
          title: "Prevents Damage & Extends Surface Life",
          description: "Mold, algae, and grime don't just look bad—they deteriorate surfaces over time. Regular pressure washing removes these harmful substances, protecting your investment and extending the life of your deck, siding, and concrete."
        },
        {
          title: "Protects Health & Safety",
          description: "Algae and mold make surfaces slippery and dangerous. Pressure washing eliminates these hazards while also removing allergens that can affect your family's health, creating a safer, healthier outdoor environment."
        },
        {
          title: "Prepares Surfaces for Maintenance",
          description: "Planning to paint, seal, or stain? Pressure washing is an essential first step. It creates a clean, contaminant-free surface that allows coatings to adhere properly and last longer."
        }
      ]}
      processSteps={[
        "We assess all surfaces to determine appropriate pressure levels and cleaning solutions for each material.",
        "We pre-treat stubborn stains, mold, and algae with eco-friendly cleaning agents that break down contaminants.",
        "Using professional-grade equipment, we apply the correct water pressure—high enough to clean thoroughly but gentle enough to prevent damage.",
        "We work systematically across all surfaces, maintaining consistent pressure and distance for uniform cleaning.",
        "We rinse thoroughly to remove all cleaning solution and loosened debris.",
        "We perform a final inspection to ensure we've achieved excellent results and haven't missed any spots."
      ]}
      faqs={[
        {
          question: "What surfaces can you pressure wash?",
          answer: "We safely clean driveways, sidewalks, patios, decks (wood and composite), vinyl and aluminum siding, brick, concrete, pavers, fences, retaining walls, and outdoor furniture. Some delicate surfaces like wood siding or old brick may require gentler soft washing."
        },
        {
          question: "Won't high pressure damage my home or surfaces?",
          answer: "Not when done correctly! We adjust pressure based on surface type—using high pressure for concrete and pavers, medium pressure for decks, and low-pressure soft washing for siding and delicate surfaces. Our experience ensures thorough cleaning without damage."
        },
        {
          question: "How often should I have my property pressure washed?",
          answer: "Most Louisville properties benefit from annual pressure washing, typically in spring before outdoor season. High-traffic areas like driveways may need cleaning twice per year, while shaded areas prone to mold growth might benefit from more frequent service."
        },
        {
          question: "Do you use chemicals or just water?",
          answer: "We use eco-friendly cleaning solutions when needed for tough stains, mold, and algae. These biodegradable products enhance cleaning power without harming plants or the environment. For routine maintenance, water alone is often sufficient."
        },
        {
          question: "Will pressure washing harm my plants or landscaping?",
          answer: "We take extensive precautions to protect your landscaping. We cover or wet down plants before cleaning, avoid spraying directly at them, and rinse them thoroughly afterward. Our cleaning solutions are plant-safe when properly diluted."
        }
      ]}
    />
  );
}
