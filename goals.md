# Antigravity Instruction (Service Company Version)

**Role**

You are a senior frontend engineer and digital agency designer experienced in B2B services and healthcare software.

**Goal**

Create a static landing page for a Web & Mobile Development service company that emphasizes:

- Trust
- Professionalism
- Real-world experience
- Healthcare readiness

**Our company has:**

- Successfully partnered with 1 local hospital
- Is working on Rekam Medis Elektronik (RME) as its first major healthcare project


## Technical Constraints

- Use Next.js 16
- Use App Router
- Use static rendering only
    - No server actions
    - No API routes
    - No database
    - No authentication
- Must be deployable as a fully static site
- Use Tailwind CSS + shadcn/ui only
- No external UI libraries (no MUI, no Chakra, no Framer Motion)

## Design Constraints (Very Important)

- Do NOT use:
    - Purple gradients
    - Blue-purple gradients
    - Neon colors
    - Glassmorphism
    - Overused SaaS hero styles

- Avoid:
    - Huge gradient blobs
    - Fancy background animations

- Preferred style:
    - Clean
    - Professional
    - Modern
    - Minimal but creative

- Color palette should be:
    - Neutral base (zinc / stone / slate)
    - One subtle accent color (e.g. emerald, orange, cyan, or rose — pick ONE)

- Backgrounds should be:
    - Solid colors
    - Subtle noise
    - Very light gradients only if absolutely necessary

## UI Guidelines

- Use shadcn/ui components where possible:
    - Button
    - Card
    - Badge
    - Separator

- Use Tailwind spacing and typography utilities
- Typography hierarchy must be clear:
    - Large hero headline
    - Medium section titles
    - Comfortable body text

- Design must feel:
    - Trustworthy
    - Product-focused
    - Not “AI-generated”

## Page Structure

Create a single-page landing page with these sections:

1. Hero Section
    - Clear statement of what the company does
    - Emphasize services, not products
    - Example direction:
    - Web & Mobile Development for Healthcare and Business Systems
    - Include:
        - Primary CTA: “Talk to Us” / “Start a Project”
        - Secondary CTA: “View Our Work”

2. What We Do
    - Present services clearly:
    - Web Application Development
    - Mobile Application Development
    - System Integration
    - Internal Tools & Dashboards

3. Healthcare Experience
    - Dedicated section:
    - Mention partnership with 1 local hospital
    - Mention Rekam Medis Elektronik (RME)
    - Emphasize:
        - Data sensitivity
        - Security awareness
    Compliance mindset
    
    ⚠️ Do NOT claim certifications unless stated.

4. How We Work
    - Explain process:
    - Requirement Discovery
    - System Design
    - Development & Testing
    - Deployment & Support

5. Why Work With Us
    - Focus on:
    - Small but focused team
    - Direct communication
    - Real delivery (not slideware)
    - Long-term maintenance

6. Trust Signals
    - “Trusted by a Local Hospital” (no logo if not allowed)
    - Short testimonial placeholder
    - Clear disclaimer if needed

7. Call to Action
    - Calm and confident CTA
    - Example:
        - “Let’s discuss your system requirements.”

8. Footer
    - Company name (Jaseda)
    - Services
    - Contact info
    - Copyright

## Code Organization

- `/app/page.tsx` for main page
- Components in `/components`
- UI components from shadcn
- Clean, readable, well-commented code
- No unnecessary abstraction

## Output Expectations

Generate:
- Project structure
- Key components
- Tailwind styling
- Sample copy text (professional tone)

Prioritize:
- Readability
- Maintainability
- Fast iteration