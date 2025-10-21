// JSON-LD Structured Data for SEO
export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ankhbayr',
  jobTitle: 'Web & App Developer',
  description: 'Full-stack Web & App Developer specializing in React, Next.js, Node.js, and modern web technologies.',
  url: 'https://ankhbayr.dev', // TODO: Replace with your actual domain
  sameAs: [
    'https://github.com/anhaa-arch',
    // TODO: Add other social profiles (LinkedIn, Twitter, etc.)
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'MN',
    addressLocality: 'Mongolia',
  },
  telephone: '+976-90560444',
  email: 'ankhbayr@example.com', // TODO: Replace with actual email
  knowsAbout: [
    'Web Development',
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'Full Stack Development',
    'Frontend Development',
    'Backend Development',
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ankhbayr Portfolio',
  description: 'Professional portfolio of Ankhbayr, a Full-stack Web & App Developer',
  url: 'https://ankhbayr.dev', // TODO: Replace with your actual domain
  author: {
    '@type': 'Person',
    name: 'Ankhbayr',
  },
  inLanguage: 'en-US',
}

export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Ankhbayr - Web Development Services',
  description: 'Professional web and app development services including frontend, backend, and full-stack solutions',
  provider: {
    '@type': 'Person',
    name: 'Ankhbayr',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Worldwide',
  },
  serviceType: [
    'Web Development',
    'App Development',
    'Frontend Development',
    'Backend Development',
    'Full Stack Development',
  ],
}

