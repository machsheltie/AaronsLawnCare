import ServicePageTemplate from './ServicePageTemplate';

export default function LawnMowingPage() {
  return (
    <ServicePageTemplate
      serviceName="Professional Lawn Mowing Services in Louisville, KY"
      pageTitle="Lawn Mowing Service Louisville KY | Aaron's Lawn Care"
      metaDescription="Professional lawn mowing service in Louisville, Kentucky. Weekly, bi-weekly, or one-time mowing. 20 years experience. Request your free quote today!"
      description="Keep your lawn looking pristine with our regular mowing services. We provide consistent, professional cuts that keep your grass healthy and beautiful year-round."
      serviceUrl="/services/lawn-mowing"
      seasonalNote="Available Spring through Fall (March - November)"
      benefits={[
        {
          title: "Consistent, Professional Results",
          description: "Our experienced team delivers uniform, magazine-worthy cuts every single time. No missed spots, no uneven patches—just a perfectly manicured lawn you can be proud of."
        },
        {
          title: "Optimal Grass Health",
          description: "We follow the one-third rule, never removing more than a third of the grass blade at once. This promotes healthy root development and keeps your lawn thick and resilient."
        },
        {
          title: "Sharp, Well-Maintained Equipment",
          description: "Our mowers are professionally sharpened regularly to ensure clean cuts that don't tear or damage your grass. Dull blades can stress grass and invite disease."
        },
        {
          title: "Flexible Scheduling Options",
          description: "Choose from weekly, bi-weekly, or monthly mowing schedules that fit your lawn's needs and your budget. We'll work with you to find the perfect rhythm."
        }
      ]}
      processSteps={[
        "We arrive on time with professional, well-maintained equipment ready to work.",
        "We assess your lawn's current condition and adjust cutting height for optimal health (typically 2.5-3.5 inches).",
        "We mow in alternating patterns each visit to prevent soil compaction and encourage upright grass growth.",
        "We edge along all walkways, driveways, and landscaping beds for crisp, defined lines.",
        "We blow off hard surfaces to remove clippings, leaving your property looking neat and tidy.",
        "We inspect our work to ensure it meets our high standards before moving on."
      ]}
      faqs={[
        {
          question: "How often should I have my lawn mowed?",
          answer: "Most Louisville lawns benefit from weekly mowing during peak growing season (spring and early summer) and bi-weekly mowing in late summer and fall. We'll recommend a schedule based on your grass type and growth rate."
        },
        {
          question: "Do you bag the clippings or leave them on the lawn?",
          answer: "By default, we mulch the clippings back into your lawn, which returns valuable nutrients to the soil and reduces the need for fertilizer. If you prefer bagging, we can accommodate that for an additional fee."
        },
        {
          question: "What if it rains on my scheduled mowing day?",
          answer: "We monitor weather closely and will reschedule if conditions are unsafe or would damage your lawn. We'll contact you to arrange the next available time slot, typically within 1-2 days."
        },
        {
          question: "Can you mow if my lawn is wet from morning dew?",
          answer: "Light dew is usually fine. However, saturated grass from heavy rain can clump, clog equipment, and leave ruts in your yard. We'll assess conditions and make the best decision for your lawn's health."
        },
        {
          question: "Do you offer one-time mowing for overgrown lawns?",
          answer: "Yes! We offer one-time service for overgrown lawns, properties between tenants, or seasonal cleanups. Severely overgrown lawns may require multiple passes and will be priced accordingly."
        }
      ]}
    />
  );
}
