import { useState } from "react";
import {
    CheckCircle2,
    ChevronDown,
    Scissors,
    Leaf,
    Droplets,
    TreeDeciduous,
    Shovel,
    Sprout,
    Wind,
    Snowflake,
    Grid2x2,
    Trash2,
    Home,
    Sparkles,
    Axe,
} from "lucide-react";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const allServices = [
    {
        icon: Grid2x2,
        title: "Lawn Mowing",
        description: "Professional mowing services with precision edging and trimming for a perfectly manicured lawn every time.",
        slug: "/services/lawn-mowing"
    },
    {
        icon: Scissors,
        title: "Edging & Trimming",
        description: "Clean, crisp edges along walkways, driveways, and garden beds for a polished, professional look.",
        slug: "/services/edging"
    },
    {
        icon: Leaf,
        title: "Leaf Removal",
        description: "Thorough leaf cleanup to keep your lawn healthy and your property looking its best throughout fall.",
        slug: "/services/leaf-removal"
    },
    {
        icon: Shovel,
        title: "Mulching",
        description: "Premium mulch installation to protect your plants, retain moisture, and enhance your landscape's appearance.",
        slug: "/services/mulching"
    },
    {
        icon: Sprout,
        title: "Spring Cleanup",
        description: "Comprehensive spring cleanup to prepare your lawn and landscape for the growing season ahead.",
        slug: "/services/spring-cleanup"
    },
    {
        icon: Wind,
        title: "Fall Cleanup",
        description: "Complete fall cleanup services to prepare your property for winter and ensure a healthy spring lawn.",
        slug: "/services/fall-cleanup"
    },
    {
        icon: Scissors,
        title: "Hedge Trimming",
        description: "Professional hedge and shrub trimming to maintain shape, promote healthy growth, and enhance curb appeal.",
        slug: "/services/hedge-trimming"
    },
    {
        icon: TreeDeciduous,
        title: "Landscape Design",
        description: "Custom landscape design services to transform your outdoor space into a beautiful, functional oasis.",
        slug: "/services/landscape-design"
    },
    {
        icon: Droplets,
        title: "Landscape Maintenance",
        description: "Ongoing landscape maintenance to keep your gardens, beds, and outdoor spaces looking their absolute best.",
        slug: "/services/landscape-maintenance"
    },
    {
        icon: Snowflake,
        title: "Snow Removal",
        description: "Reliable snow removal services to keep your property safe and accessible throughout the winter months.",
        slug: "/services/snow-removal"
    },
    {
        icon: Wind,
        title: "Lawn Aeration",
        description: "Professional core aeration to relieve soil compaction, improve nutrient absorption, and strengthen your lawn.",
        slug: "/services/aeration"
    },
    {
        icon: Sprout,
        title: "Lawn Treatment & Fertilization",
        description: "Customized fertilization and weed control programs to keep your lawn healthy, green, and weed-free.",
        slug: "/services/lawn-treatment"
    },
    {
        icon: Trash2,
        title: "Debris & Yard Waste Removal",
        description: "Fast, reliable removal of storm debris, branches, and yard waste to keep your property clean and safe.",
        slug: "/services/debris-removal"
    },
    {
        icon: Home,
        title: "Gutter Cleaning",
        description: "Thorough gutter cleaning to prevent water damage, protect your foundation, and maintain proper drainage.",
        slug: "/services/gutter-cleaning"
    },
    {
        icon: Sparkles,
        title: "Pressure Washing",
        description: "Professional pressure washing for driveways, patios, decks, and siding to restore your property's beauty.",
        slug: "/services/pressure-washing"
    },
    {
        icon: Axe,
        title: "Tree Removal",
        description: "Safe, professional removal of dead, diseased, or hazardous trees with optional stump grinding.",
        slug: "/services/tree-removal"
    },
];

const INITIAL_SERVICES_COUNT = 4;

export const ServicesPreview = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Show only first 4 services when collapsed, all when expanded
    const displayedServices = isExpanded ? allServices : allServices.slice(0, INITIAL_SERVICES_COUNT);
    const hasMoreServices = allServices.length > INITIAL_SERVICES_COUNT;

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-950 mb-6">
                        Expert Care for Every Season
                    </h2>
                    <p className="text-lg text-gray-600">
                        From weekly maintenance to complete landscape makeovers, we have the skills and equipment to handle it all.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <AnimatePresence mode="popLayout">
                        {displayedServices.map((service, index) => (
                            <Link to={service.slug} key={service.slug}>
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                    className="group p-8 rounded-2xl bg-secondary-50 hover:bg-white border border-transparent hover:border-primary-100 card-lift cursor-pointer h-full"
                                >
                                    <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:scale-110 transition-all duration-300">
                                        <service.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    <span className="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
                                        Learn More
                                        <CheckCircle2 className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                    </span>
                                </motion.div>
                            </Link>
                        ))}
                    </AnimatePresence>
                </div>

                <div className="text-center space-y-4">
                    {hasMoreServices && (
                        <motion.button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary-50 text-primary-700 font-semibold rounded-xl border-2 border-primary-200 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-300 shadow-sm hover:shadow-md"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            aria-expanded={isExpanded}
                            aria-label={isExpanded ? "Show fewer services" : "Show all services"}
                        >
                            <span className="text-lg">
                                {isExpanded ? "Show Less" : `View All ${allServices.length} Services`}
                            </span>
                            <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                className="flex items-center justify-center"
                            >
                                <ChevronDown className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                            </motion.div>
                        </motion.button>
                    )}

                    <div>
                        <Button variant="outline" size="lg" asChild>
                            <Link to="/services">View Services Page</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
