import ServicePageTemplate from './ServicePageTemplate';

export default function LawnTreatmentPage() {
  return (
    <ServicePageTemplate
      serviceName="Professional Lawn Treatment Services in Louisville, KY"
      pageTitle="Lawn Treatment & Fertilization Louisville KY | Aaron's Lawn Care"
      metaDescription="Professional lawn treatment and fertilization services in Louisville, Kentucky. Weed control, fertilization, disease prevention. Get a lush, healthy lawn. Free quotes!"
      description="Transform your lawn with our comprehensive treatment program. We provide customized fertilization, weed control, and disease prevention to keep your lawn thick, green, and healthy all season long."
      serviceUrl="/services/lawn-treatment"
      benefits={[
        {
          title: "Customized Treatment Plans",
          description: "Every lawn is different. We analyze your soil, grass type, and specific challenges to create a treatment plan tailored to your lawn's unique needs, not a one-size-fits-all approach."
        },
        {
          title: "Year-Round Weed Control",
          description: "Our pre-emergent and post-emergent treatments target weeds before they sprout and eliminate existing weeds. Say goodbye to dandelions, crabgrass, clover, and other invasive plants that steal nutrients from your grass."
        },
        {
          title: "Balanced Fertilization Program",
          description: "We apply the right nutrients at the right time. Our fertilization schedule follows Louisville's growing seasons, providing your lawn with nitrogen, phosphorus, and potassium when it needs them most."
        },
        {
          title: "Disease & Pest Prevention",
          description: "We monitor for common Louisville lawn diseases like brown patch and dollar spot, plus pests like grubs. Early detection and treatment prevent minor issues from becoming major problems."
        }
      ]}
      processSteps={[
        "We perform a detailed lawn analysis, testing soil pH and identifying grass type, weeds, and any disease or pest issues.",
        "We create a customized 5-7 application treatment plan based on your lawn's specific needs and Louisville's climate.",
        "We apply professional-grade fertilizers and treatments using calibrated equipment for even, accurate coverage.",
        "We monitor your lawn throughout the season, adjusting treatments as needed for optimal results.",
        "We provide you with detailed reports after each visit, explaining what was applied and what to expect.",
        "We offer recommendations for watering, mowing height, and additional care between treatments."
      ]}
      faqs={[
        {
          question: "How many lawn treatments do I need per year?",
          answer: "Most Louisville lawns benefit from 5-7 treatments per year: early spring pre-emergent, spring fertilization, late spring weed control, summer fertilization, fall fertilization, fall weed control, and winterization. We'll recommend a schedule based on your lawn's condition."
        },
        {
          question: "Are your lawn treatments safe for pets and children?",
          answer: "Yes! We use EPA-approved products and follow all safety guidelines. We recommend keeping pets and children off treated areas until the product has dried (typically 2-4 hours). We'll provide specific instructions after each application."
        },
        {
          question: "How long before I see results?",
          answer: "You'll typically see greening from fertilization within 1-2 weeks. Weed control takes 2-3 weeks as products work systemically. For severely neglected lawns, it may take a full season to achieve optimal results, but you'll see steady improvement with each treatment."
        },
        {
          question: "Do you offer organic lawn treatment options?",
          answer: "Yes! We offer organic-based treatment programs using natural fertilizers and organic weed control methods. While they typically take longer to show results than synthetic treatments, they're an excellent choice for eco-conscious homeowners."
        },
        {
          question: "What if I have bare spots or thin areas?",
          answer: "We can incorporate overseeding into your treatment plan. Fall is the ideal time for overseeding in Louisville. We'll recommend the right grass seed variety for your lawn and combine it with our fertilization program for best results."
        }
      ]}
    />
  );
}
