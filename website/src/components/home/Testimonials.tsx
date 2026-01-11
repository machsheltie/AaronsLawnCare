import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Homeowner",
        content: "Aaron's Lawn Care has completely transformed our yard. They are professional, punctual, and paying attention to the small details that other companies miss. Highly recommended!",
        stars: 5,
    },
    {
        name: "Michael Thompson",
        role: "Property Manager",
        content: "I manage several properties and have used many services over the years. Aaron's is by far the most reliable. Their communication is excellent and the work is top-notch.",
        stars: 5,
    },
    {
        name: "David Chen",
        role: "Homeowner",
        content: "Great value for the price. My lawn has never looked greener. The team is friendly and they always clean up thoroughly after they finish.",
        stars: 5,
    }
];

export const Testimonials = () => {
    return (
        <section className="py-24 bg-primary-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-accent-600 font-semibold tracking-wider text-sm uppercase mb-3 block">Testimonials</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary-950 mb-6">
                        What Our Clients Say
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-primary-100 flex flex-col">
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.stars)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 flex-grow italic leading-relaxed">"{testimonial.content}"</p>
                            <div>
                                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                                <span className="text-sm text-gray-500">{testimonial.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
