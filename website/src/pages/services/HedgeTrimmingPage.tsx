import ServicePageTemplate from './ServicePageTemplate';

export default function HedgeTrimmingPage() {
  return (
    <ServicePageTemplate
      serviceName="Professional Hedge Trimming & Shrub Pruning in Louisville, KY"
      pageTitle="Hedge Trimming Service Louisville KY | Aaron's Lawn Care"
      metaDescription="Professional hedge trimming and shrub pruning in Louisville, Kentucky. Expert shaping, health-focused pruning, seasonal maintenance. Free quote!"
      description="Keep your hedges and shrubs perfectly shaped and healthy with our expert trimming and pruning services. Professional results that enhance your property's appearance."
      serviceUrl="/services/hedge-trimming"
      seasonalNote="Best Times: Spring (April-May) and Late Summer (August-September)"
      benefits={[
        {
          title: "Professional Shaping & Aesthetics",
          description: "Our experienced team creates uniform, aesthetically pleasing shapes that complement your landscape design. Clean lines and proper proportions give your property a polished, well-maintained appearance."
        },
        {
          title: "Promotes Plant Health",
          description: "Proper pruning removes dead, diseased, or crossing branches, improving air circulation and sunlight penetration. This reduces disease risk and encourages dense, healthy growth from within."
        },
        {
          title: "Controls Size & Prevents Damage",
          description: "Regular trimming keeps shrubs at manageable sizes, preventing them from blocking windows, damaging siding, or encroaching on walkways. Prevention is easier and cheaper than aggressive cutback later."
        },
        {
          title: "Encourages Flowering & Growth",
          description: "Strategic pruning at the right times stimulates flower production and vigorous new growth. We know when to prune each species for optimal blooms and plant health."
        }
      ]}
      processSteps={[
        "We assess each hedge and shrub, identifying species, health issues, and desired shape.",
        "We remove dead, diseased, or damaged branches first to improve plant health.",
        "We shape hedges using commercial trimmers for uniform, professional results.",
        "We hand-prune shrubs to maintain natural form while controlling size and shape.",
        "We clean up all clippings and debris, leaving your property tidy and professional.",
        "We provide care recommendations for watering, fertilizing, and future pruning timing."
      ]}
      faqs={[
        {
          question: "When is the best time to trim hedges and shrubs?",
          answer: "It depends on species. Spring-flowering shrubs (forsythia, lilac) should be pruned right after blooming. Summer-flowering shrubs can be pruned in early spring. Evergreen hedges are best trimmed in late spring and late summer. We know the optimal timing for each plant."
        },
        {
          question: "How often should hedges be trimmed?",
          answer: "Fast-growing hedges (privet, ligustrum) benefit from trimming 2-3 times per season. Slow-growing varieties (boxwood, yew) need trimming once or twice annually. We'll recommend a schedule based on your specific plants and desired appearance."
        },
        {
          question: "Can you save overgrown shrubs?",
          answer: "Often, yes! Many shrubs tolerate hard pruning and will regenerate. However, severe cutback may take 1-2 seasons to recover fully. We assess viability and recommend renovation pruning or replacement as appropriate."
        },
        {
          question: "Do you trim ornamental trees too?",
          answer: "We handle light ornamental tree trimming (removing low branches, shaping young trees). For large trees or high branches requiring climbing/bucket trucks, we recommend certified arborists for safety."
        },
        {
          question: "Will trimming damage my flowering shrubs?",
          answer: "Not if done at the correct time! We know when each species sets flower buds. Spring bloomers set buds in summer (prune after flowers fade). Summer bloomers set buds in spring (prune in early spring). Timing is everything."
        }
      ]}
    />
  );
}
