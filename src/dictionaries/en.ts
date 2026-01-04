import { Dictionary } from "./types"

export const en: Dictionary = {
    hero: {
        title: "Web & Mobile Development for ",
        titleAccent: "Healthcare",
        description: "We build secure, scalable, and professional digital solutions. Partner with a team that understands compliance, data security, and real-world delivery.",
        primaryCta: "Start a Project",
        secondaryCta: "View Our Work",
    },
    services: {
        title: "What We Do",
        description: "Comprehensive digital solutions focused on solving real business problems.",
        items: {
            web: { title: "Web Application Development", description: "Modern, responsive, and secure web applications tailored to your business needs using the latest technologies." },
            mobile: { title: "Mobile Application Development", description: "Native and cross-platform mobile apps that provide seamless user experiences on iOS and Android." },
            integration: { title: "System Integration", description: "Connecting disparate systems to ensure smooth data flow and operational efficiency across your organization." },
            tools: { title: "Internal Tools & Dashboards", description: "Custom administrative panels and data visualization tools to empower your internal teams." },
        },
    },
    healthcare: {
        badge: "Industry Focus",
        title: "Healthcare Ready",
        description: "We understand the Critical nature of healthcare technologies. Our team is experienced in building compliant, secure, and reliable systems.",
        items: {
            hospital: { title: "Local Hospital Partners", description: "Trusted by local healthcare institutions to deliver critical infrastructure. We are currently partnered with a major local hospital for their digital transformation." },
            rme: { title: "RME Implementation", description: "Deep experience in Rekam Medis Elektronik (RME) systems. We build systems that handle sensitive patient data with the utmost care and precision." },
            security: { title: "Security & Compliance", description: "Security is not an afterthought. We implement strict data protection standards, ensuring your software meets the required security benchmarks." },
        },
    },
    howItWorks: {
        badge: "Process",
        title: "How We Work",
        description: "A structured, transparent approach to software delivery.",
        steps: {
            discovery: { title: "Requirement Discovery", description: "We start by deeply understanding your business needs, goals, and technical constraints through collaborative workshops." },
            design: { title: "System Design", description: "Our architects create a comprehensive technical plan, defining the architecture, database schema, and UI/UX flows." },
            dev: { title: "Development & Testing", description: "We build your software using modern practices, ensuring code quality and rigorous testing at every stage." },
            deploy: { title: "Deployment & Support", description: "We ensure a smooth launch and provide ongoing support to keep your systems running optimally." },
        },
    },
    whyUs: {
        title: "Why Partner With Us?",
        description: "We bring a boutique approach to enterprise-grade development.",
        items: {
            team: { title: "Small, Focused Team", description: "We are not a feature factory. Our dedicated team works closely with you to ensure every detail is perfect." },
            comm: { title: "Direct Communication", description: "No layers of middle management. You talk directly to the people building your product." },
            delivery: { title: "Real Delivery", description: "We focus on shipping working software, not just slide decks or prototypes." },
            maint: { title: "Long-term Maintenance", description: "We build for the long haul. Our code is maintainable, and we offer support packages to keep you running." },
        },
    },
    testimonials: {
        title: "Trusted by Healthcare Leaders",
        quote: "Jaseda has been an instrumental partner in modernizing our hospital's infrastructure. Their understanding of medical data compliance and system integration is unmatched.",
        role: "Director of Information Systems",
        hospital: "Local Regional Hospital Partner",
    },
    cta: {
        title: "Ready to build your next project?",
        description: "Let's discuss your requirements and how we can help you achieve your goals. No pressure, just a conversation.",
        button: "Contact Us",
    },
    footer: {
        tagline: "Professional Web & Mobile Development services specializing in healthcare and business systems.",
        services: { title: "Services", items: { web: "Web Apps", mobile: "Mobile Apps", integration: "System Integration" } },
        company: { title: "Company", items: { about: "About Us", careers: "Careers", contact: "Contact" } },
        connect: { title: "Connect" },
    },
}
