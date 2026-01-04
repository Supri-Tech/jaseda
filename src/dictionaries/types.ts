export interface Dictionary {
    hero: {
        title: string
        titleAccent: string
        description: string
        primaryCta: string
        secondaryCta: string
    }
    services: {
        title: string
        description: string
        items: {
            web: { title: string; description: string }
            mobile: { title: string; description: string }
            integration: { title: string; description: string }
            tools: { title: string; description: string }
        }
    }
    healthcare: {
        badge: string
        title: string
        description: string
        items: {
            hospital: { title: string; description: string }
            rme: { title: string; description: string }
            security: { title: string; description: string }
        }
    }
    howItWorks: {
        badge: string
        title: string
        description: string
        steps: {
            discovery: { title: string; description: string }
            design: { title: string; description: string }
            dev: { title: string; description: string }
            deploy: { title: string; description: string }
        }
    }
    whyUs: {
        title: string
        description: string
        items: {
            team: { title: string; description: string }
            comm: { title: string; description: string }
            delivery: { title: string; description: string }
            maint: { title: string; description: string }
        }
    }
    testimonials: {
        title: string
        quote: string
        role: string
        hospital: string
    }
    cta: {
        title: string
        description: string
        button: string
    }
    footer: {
        tagline: string
        services: {
            title: string
            items: {
                web: string
                mobile: string
                integration: string
            }
        }
        company: {
            title: string
            items: {
                about: string
                careers: string
                contact: string
            }
        }
        connect: {
            title: string
        }
    }
}
