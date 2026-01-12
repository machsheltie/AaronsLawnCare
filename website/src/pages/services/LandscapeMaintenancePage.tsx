import ServicePageTemplate from './ServicePageTemplate';

export default function LandscapeMaintenancePage() {
  return (
    <ServicePageTemplate
      serviceName="Professional Landscape Maintenance Services in Louisville, KY"
      pageTitle="Landscape Maintenance Service Louisville KY | Aaron's Lawn Care"
      metaDescription="Professional landscape maintenance in Louisville, Kentucky. Ongoing care for beautiful, healthy landscapes. Mowing, trimming, mulching, and more. Free quote!"
      description="Protect your landscape investment with ongoing professional maintenance. We provide comprehensive care that keeps your property healthy, beautiful, and thriving year-round."
      serviceUrl="/services/landscape-maintenance"
      benefits={[
        {
          title: "Comprehensive, Consistent Care",
          description: "We handle all aspects of landscape maintenance—mowing, edging, trimming, mulching, fertilizing, and seasonal cleanups. One reliable partner for complete property care, eliminating the need to coordinate multiple contractors."
        },
        {
          title: "Protects Your Investment",
          description: "Professional landscapes represent significant investment. Regular maintenance prevents neglect damage, controls pests and diseases early, and ensures plants receive proper care throughout their lifecycle—protecting your property value."
        },
        {
          title: "Scheduled, Reliable Service",
          description: "We arrive on schedule, rain or shine, ensuring your property always looks its best. No more worrying about when to mow, mulch, or trim—we handle it all on a proactive maintenance schedule."
        },
        {
          title: "Customized Maintenance Plans",
          description: "Every property is unique. We create custom maintenance plans based on your landscape's specific needs, your budget, and your aesthetic preferences. Pay only for services your property actually needs."
        }
      ]}
      processSteps={[
        "We conduct a comprehensive property assessment to understand your landscape's needs and goals.",
        "We create a custom maintenance plan covering mowing, edging, trimming, mulching, and seasonal care.",
        "We establish a regular service schedule (weekly, bi-weekly, or monthly) that fits your needs.",
        "We perform scheduled maintenance visits, documenting work and identifying any issues or opportunities.",
        "We communicate proactively about seasonal needs, recommended improvements, and plant health.",
        "We adjust care throughout the year to match seasonal requirements and plant growth patterns."
      ]}
      faqs={[
        {
          question: "What's included in landscape maintenance?",
          answer: "Our comprehensive plans typically include regular mowing and edging, string trimming, shrub pruning, mulch replenishment, leaf removal, seasonal cleanups, and weed control. We customize packages based on your property's needs and your budget."
        },
        {
          question: "How much does landscape maintenance cost?",
          answer: "Costs vary based on property size, landscape complexity, and service frequency. Most residential properties range from $200-600/month for comprehensive weekly/bi-weekly service. We provide free quotes with no obligation after assessing your property."
        },
        {
          question: "Can I pause service during winter?",
          answer: "Yes! Many customers pause regular maintenance November-March and resume in spring. However, we recommend winter services like snow removal, debris cleanup, and dormant pruning to protect your landscape year-round."
        },
        {
          question: "What if I'm not satisfied with the service?",
          answer: "We guarantee satisfaction. If you're unhappy with any aspect of our work, let us know within 48 hours and we'll return to address the issue at no charge. Our goal is consistently excellent service you can depend on."
        },
        {
          question: "Do you provide one-time service or only contracts?",
          answer: "We offer both! While regular maintenance contracts provide best value and ensure optimal plant health, we also handle one-time cleanups, installations, or seasonal services. However, consistent care yields best long-term results."
        }
      ]}
    />
  );
}
