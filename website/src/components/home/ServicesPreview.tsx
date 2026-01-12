import { CheckCircle2, Scissors, Trees, Shovel, Droplets } from "lucide-react";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
    {
        icon: Scissors,
        title: "Lawn Mowing",
        description: "Precise mowing patterns, edging, and blowing for a pristine look every time."
    },
    {
        icon: Droplets,
        title: "Lawn Treatment",
        description: "Fertilization and weed control programs to keep your turf lush and green."
    },
    {
        icon: Shovel,
        title: "Landscaping",
        description: "Design and installation of garden beds, plants, and hardscapes."
    },
    {
        icon: Trees,
        title: "Tree & Hedge Care",
        description: "Professional trimming and pruning to maintain health and shape."
    },
    // Add more as needed
];

export const ServicesPreview = () => {
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
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                            className="group p-8 rounded-2xl bg-secondary-50 hover:bg-white border border-transparent hover:border-primary-100 card-lift cursor-pointer"
                        >
                            <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:scale-110 transition-all duration-300">
                                <service.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <Link to="/services" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                                Learn More
                                <CheckCircle2 className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Button variant="outline" size="lg" asChild>
                        <Link to="/services">View All Services</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};
