import { Button } from "../ui/Button";
import { MoveRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#Fdfdfc]">
            {/* Abstract Background Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-primary-100/50 rounded-full blur-3xl" />
                <div className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-accent-100/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-primary-100/30 rounded-full blur-3xl transform -translate-x-1/2" />

                {/* Texture overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2315803d\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
            </div>

            <div className="container mx-auto px-4 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-800 border border-primary-200 text-sm font-semibold tracking-wide mb-6">
                        Louisville's Premier Lawn Care
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-950 mb-6 leading-tight">
                        Transform Your Lawn <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                            Into a Masterpiece
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Professional, reliable, and detail-oriented lawn care services. We bring out the natural beauty of your outdoor space with expert care.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button variant="default" size="lg" className="w-full sm:w-auto gap-2 group shadow-lg shadow-primary-900/20 hover:shadow-xl hover:shadow-primary-900/30 transition-all">
                            Get a Free Quote
                            <MoveRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2 border-primary-200 text-primary-900 hover:bg-primary-50 bg-white/50">
                            <Phone className="w-4 h-4" />
                            (502) 926-8524
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-primary-200 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};
