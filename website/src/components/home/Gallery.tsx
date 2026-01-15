import { motion } from "framer-motion";

export const Gallery = () => {
    return (
        <section className="py-12 md:py-20 lg:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-green-600 font-semibold tracking-wider text-xs md:text-sm uppercase mb-2 md:mb-3 block">Our Work</span>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold text-green-950 mb-4 md:mb-6">
                        See The Difference
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                        Take a look at some of the landscapes we've transformed.
                    </p>
                </div>

                {/* Bento Grid Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[200px]">
                    {/* Large Featured Image - Precision Mowing */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl"
                    >
                        <img
                            src="/precisionmowing.jpg"
                            alt="Precision lawn mowing with professional striping pattern in Louisville Kentucky by Aaron's Lawn Care"
                            loading="lazy"
                            width="1200"
                            height="800"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                            <p className="text-white font-bold text-xl">Precision Mowing</p>
                        </div>
                    </motion.div>

                    {/* Tall Side Image - Landscaping */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:row-span-2 relative group overflow-hidden rounded-2xl"
                    >
                        <img
                            src="/landscaping.jpg"
                            alt="Professional landscaping and garden bed design in Louisville KY by Aaron's Lawn Care"
                            loading="lazy"
                            width="800"
                            height="1000"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                            <p className="text-white font-bold text-xl">Landscaping</p>
                        </div>
                    </motion.div>

                    {/* Small Bottom Image 1 - Mulching */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative group overflow-hidden rounded-2xl"
                    >
                        <img
                            src="/mulching.jpg"
                            alt="Fresh mulch application and garden bed maintenance in Louisville Kentucky by Aaron's Lawn Care"
                            loading="lazy"
                            width="800"
                            height="600"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-white font-bold text-lg">Mulching</p>
                        </div>
                    </motion.div>

                    {/* Small Bottom Image 2 - Snow Removal */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-2 relative group overflow-hidden rounded-2xl"
                    >
                        <img
                            src="/snowremoval.jpg"
                            alt="Professional snow removal service for residential driveways in Louisville KY by Aaron's Lawn Care"
                            loading="lazy"
                            width="1000"
                            height="600"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-white font-bold text-lg">Snow Removal</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
