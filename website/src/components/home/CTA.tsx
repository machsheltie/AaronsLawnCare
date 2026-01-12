import { Button } from "../ui/Button";

export const CallToAction = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="bg-primary-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                            Ready to Transform Your Lawn?
                        </h2>
                        <p className="text-lg text-primary-100 mb-10">
                            Get in touch today for a free, no-obligation quote. Let use handle the hard work so you can enjoy your weekend.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="gold" size="lg" className="w-full sm:w-auto text-lg items-center h-14" asChild>
                                <a href="/contact">Get Your Free Quote</a>
                            </Button>
                            <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white h-14">
                                Call (502) 926-8524
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
