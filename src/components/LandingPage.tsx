import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services"; // Replaced Features
import { HealthcareExperience } from "@/components/sections/HealthcareExperience";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Dictionary } from "@/dictionaries/types";

interface LandingPageProps {
    dict: Dictionary
}

export function LandingPage({ dict }: LandingPageProps) {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <Hero dict={dict.hero} />
                <Services dict={dict.services} />
                <HealthcareExperience dict={dict.healthcare} />
                <HowItWorks dict={dict.howItWorks} />
                <WhyUs dict={dict.whyUs} />
                <Testimonials dict={dict.testimonials} />
                <CTA dict={dict.cta} />
            </main>
            <Footer dict={dict.footer} />
        </div>
    );
}
