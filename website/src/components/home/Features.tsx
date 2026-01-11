import { ShieldCheck, Clock, Award, Users } from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Licensed & Insured",
        description: "Full coverage for your peace of mind and protection."
    },
    {
        icon: Clock,
        title: "Reliable Schedule",
        description: "We show up when we say we will. Consistency you can count on."
    },
    {
        icon: Award,
        title: "Quality Guaranteed",
        description: "We don't leave until you're completely satisfied with our work."
    },
    {
        icon: Users,
        title: "Experienced Team",
        description: "Over 20 years of local experience in Louisville lawn care."
    }
];

export const Features = () => {
    return (
        <section className="py-24 bg-secondary-900 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-accent-500 font-semibold tracking-wider text-sm uppercase mb-3 block">Why Choose Us</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 text-white">
                            The Aaron's Lawn Care Difference
                        </h2>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            We believe that a beautiful lawn shouldn't come with a headache. Our clear communication, reliable service, and attention to detail set us apart from the competition.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center border border-primary-700">
                                        <feature.icon className="w-5 h-5 text-accent-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-2 text-white">{feature.title}</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-primary-500 blur-3xl opacity-20" />
                        <img
                            src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=2000" // Trusted Unsplash placeholder 
                            alt="Beautiful Lawn"
                            className="relative rounded-2xl shadow-2xl border-4 border-white/10"
                        />
                        <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl hidden md:block">
                            <div className="flex items-center gap-4">
                                <div className="text-4xl font-bold text-primary-600">20+</div>
                                <div className="text-sm font-medium text-gray-600">
                                    Years of <br /> Excellence
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
