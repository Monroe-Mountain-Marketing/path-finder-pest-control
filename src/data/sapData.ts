export interface SAPData {
  slug: string
  city: string
  zip: string
  title: string
  metaDesc: string
  heroImage: string
  intro: string
  services: string[]
  faqs: Array<{ question: string; answer: string }>
}

export const sapData: SAPData[] = [
  {
    slug: 'tulsa',
    city: 'Tulsa',
    zip: '74105',
    title: 'Pest Control Tulsa OK | Pathfinder Pest Control',
    metaDesc: 'Trusted pest control in Tulsa, OK. Pathfinder Pest Control protects Tulsa homes and businesses from termites, rodents, ants, and more.',
    heroImage: '/images/2025-10-960px-Glenpool_Conference_Center_pond_view-768x575.jpg',
    intro: 'Pathfinder Pest Control provides local, reliable pest control services across Tulsa, Oklahoma. From Midtown neighborhoods near 74105 to properties across the metro, our team delivers targeted treatment plans for homes and businesses dealing with ants, termites, spiders, roaches, mosquitoes, and rodents.',
    services: ['Termite Treatment', 'Ant Control', 'Rodent Control', 'Mosquito Control', 'Cockroach Extermination', 'Spider Control', 'Bed Bug Removal', 'Commercial Pest Control'],
    faqs: [
      { question: 'Do you provide pest control across all of Tulsa?', answer: 'Yes. We serve neighborhoods throughout Tulsa and nearby communities with residential and commercial pest control programs.' },
      { question: 'What pests are most common in Tulsa?', answer: 'Tulsa properties commonly see termites, ants, spiders, cockroaches, mosquitoes, and rodents throughout the year.' },
      { question: 'How quickly can I schedule service in Tulsa?', answer: 'In many cases, we can provide same-day or next-day appointments in Tulsa. Call +1 918-504-5245 to check availability.' },
    ],
  },
  {
    slug: 'broken-arrow',
    city: 'Broken Arrow',
    zip: '74012',
    title: 'Pest Control Broken Arrow OK | Pathfinder Pest Control',
    metaDesc: 'Professional pest control services in Broken Arrow, OK. Pathfinder Pest Control eliminates ants, roaches, termites, rodents, and more.',
    heroImage: '/images/2025-10-960px-Building_in_Broken_Arrow_Oklahoma-768x511.jpg',
    intro: 'Pathfinder Pest Control provides reliable pest control services throughout Broken Arrow, Oklahoma. Our licensed technicians serve homes and businesses in all Broken Arrow zip codes including 74011, 74012, and 74014. As one of Tulsa\'s fastest-growing cities, Broken Arrow faces unique pest challenges including termites, ants, mosquitoes, and rodents. Our team understands the local pest environment and uses targeted treatments to protect your property year-round.',
    services: ['Termite Treatment', 'Ant Control', 'Mosquito Control', 'Rodent Control', 'Bed Bug Removal', 'Cockroach Extermination', 'Spider Control', 'Commercial Pest Control'],
    faqs: [
      { question: 'Do you provide pest control in all of Broken Arrow?', answer: 'Yes, we serve all neighborhoods and zip codes in Broken Arrow including 74011, 74012, and 74014.' },
      { question: 'What pests are most common in Broken Arrow?', answer: 'Common pests in Broken Arrow include subterranean termites, various ant species, mosquitoes, rodents, cockroaches, and spiders. Termites are particularly problematic due to Oklahoma\'s soil conditions.' },
      { question: 'How quickly can you respond to a pest emergency in Broken Arrow?', answer: 'We typically offer same-day or next-day service for pest emergencies in Broken Arrow. Call us at +1 918-504-5245 for immediate assistance.' },
    ],
  },
  {
    slug: 'bixby',
    city: 'Bixby',
    zip: '74008',
    title: 'Pest Control Bixby OK | Pathfinder Pest Control',
    metaDesc: 'Expert pest control services in Bixby, OK. Pathfinder Pest Control protects Bixby homes and businesses from all common pests.',
    heroImage: '/images/2025-10-Old_bridge_across_Arkansas_River.jpg',
    intro: 'Pathfinder Pest Control serves the Bixby, Oklahoma community with professional pest control solutions for homes and businesses. Bixby\'s rapid growth and mix of rural and suburban environments create conditions that attract a wide variety of pests including termites, mosquitoes, rodents, and ants. Our experienced technicians are familiar with Bixby\'s pest landscape and provide customized treatments to protect your property.',
    services: ['Termite Treatment', 'Mosquito Control', 'Rodent Control', 'Ant Control', 'Bed Bug Removal', 'Flea Control', 'Spider Control', 'Wildlife Removal'],
    faqs: [
      { question: 'Do you service Bixby homes for termites?', answer: 'Yes, we provide comprehensive termite inspection and treatment services throughout Bixby. Oklahoma is a high-risk state for subterranean termites, and we recommend annual inspections for all Bixby homeowners.' },
      { question: 'Is mosquito control effective in Bixby?', answer: 'Yes, our mosquito control treatments are very effective in Bixby. The Arkansas River and surrounding wetlands create ideal mosquito breeding conditions. Our recurring treatment program significantly reduces mosquito populations on your property.' },
      { question: 'How can I schedule pest control in Bixby?', answer: 'Call us at +1 918-504-5245 or use our online contact form to schedule service in Bixby. We offer flexible scheduling to accommodate your needs.' },
    ],
  },
  {
    slug: 'sand-springs',
    city: 'Sand Springs',
    zip: '74063',
    title: 'Pest Control Sand Springs OK | Pathfinder Pest Control',
    metaDesc: 'Professional pest control in Sand Springs, OK. Pathfinder Pest Control protects Sand Springs homes and businesses year-round.',
    heroImage: '/images/2025-10-960px-I-44_at_OK66_With_Bypassed_Turnpike_Section_-_Catoosa_50619249636-768x512.jpg',
    intro: 'Pathfinder Pest Control proudly serves Sand Springs, Oklahoma with dependable pest management for homes and businesses. Properties in Sand Springs face seasonal pest pressure from ants, spiders, mosquitoes, and rodents. Our licensed technicians build treatment plans tailored to local pest conditions and your property needs.',
    services: ['Termite Treatment', 'Ant Control', 'Mosquito Control', 'Rodent Control', 'Spider Control', 'Cockroach Extermination', 'Bed Bug Removal', 'Commercial Pest Control'],
    faqs: [
      { question: 'Is Sand Springs part of your regular service area?', answer: 'Yes. Sand Springs is part of our primary Tulsa metro service area.' },
      { question: 'Do you offer recurring pest prevention in Sand Springs?', answer: 'Yes, we offer ongoing treatment plans designed to prevent infestations through every season.' },
      { question: 'Can you treat both homes and businesses in Sand Springs?', answer: 'Absolutely. We provide residential and commercial pest control throughout Sand Springs.' },
    ],
  },
  {
    slug: 'catoosa',
    city: 'Catoosa',
    zip: '74015',
    title: 'Pest Control Catoosa OK | Pathfinder Pest Control',
    metaDesc: 'Professional pest control in Catoosa, OK. Pathfinder Pest Control serves Catoosa homes and businesses with effective pest solutions.',
    heroImage: '/images/2025-10-960px-I-44_at_OK66_With_Bypassed_Turnpike_Section_-_Catoosa_50619249636-768x512.jpg',
    intro: 'Pathfinder Pest Control provides professional pest control services to residents and businesses in Catoosa, Oklahoma. Located along I-44 east of Tulsa, Catoosa\'s mix of commercial and residential properties requires comprehensive pest management strategies. Our technicians are experienced with the pest challenges specific to the Catoosa area and deliver effective, long-lasting pest control solutions.',
    services: ['Termite Treatment', 'Mosquito Control', 'Rodent Control', 'Cockroach Extermination', 'Ant Control', 'Commercial Pest Control', 'Spider Control', 'Wasp & Hornet Removal'],
    faqs: [
      { question: 'Do you provide commercial pest control in Catoosa?', answer: 'Yes, we serve commercial businesses throughout Catoosa including restaurants, warehouses, retail establishments, and more.' },
      { question: 'What are the most common pest problems in Catoosa?', answer: 'Catoosa businesses and homes commonly deal with termites, ants, cockroaches, rodents, and mosquitoes. The proximity to the Verdigris River contributes to mosquito pressure in the area.' },
      { question: 'How far in advance should I schedule pest control service?', answer: 'For routine service, we recommend scheduling 1–2 days in advance. For urgent situations, we often can provide same-day service. Call us at +1 918-504-5245.' },
    ],
  },
  {
    slug: 'coweta',
    city: 'Coweta',
    zip: '74429',
    title: 'Pest Control Coweta OK | Pathfinder Pest Control',
    metaDesc: 'Reliable pest control in Coweta, OK. Pathfinder Pest Control protects Coweta homes and businesses from pests year-round.',
    heroImage: '/images/2025-10-960px-Glenpool_Conference_Center_pond_view-768x575.jpg',
    intro: 'Pathfinder Pest Control extends its professional pest control services to Coweta, Oklahoma and the surrounding Wagoner County area. Coweta\'s growing community of homes and businesses faces pest challenges common to eastern Oklahoma including termites, ants, spiders, and seasonal mosquito pressure. Our team provides reliable pest management tailored to the specific needs of Coweta properties.',
    services: ['Termite Treatment', 'Ant Control', 'Mosquito Control', 'Spider Control', 'Rodent Control', 'Bed Bug Removal', 'Flea Control', 'Wildlife Removal'],
    faqs: [
      { question: 'How far is Coweta from your service area?', answer: 'Coweta is within our primary service area. We provide the same high-quality service to Coweta residents as we do throughout the Tulsa metro area.' },
      { question: 'Do you treat for termites in Coweta?', answer: 'Yes, termite treatment is one of our most requested services in Coweta. We offer liquid treatments, bait systems, and annual monitoring programs.' },
      { question: 'Can you help with wildlife removal in Coweta?', answer: 'Yes, we provide humane wildlife removal for raccoons, squirrels, opossums, and other nuisance wildlife in Coweta and surrounding areas.' },
    ],
  },
  {
    slug: 'glenpool',
    city: 'Glenpool',
    zip: '74033',
    title: 'Pest Control Glenpool OK | Pathfinder Pest Control',
    metaDesc: 'Professional pest control in Glenpool, OK. Pathfinder Pest Control eliminates pests and protects Glenpool properties year-round.',
    heroImage: '/images/2025-10-Old_bridge_across_Arkansas_River.jpg',
    intro: 'Pathfinder Pest Control provides expert pest management services to homes and businesses in Glenpool, Oklahoma. Located south of Tulsa along the Arkansas River, Glenpool experiences a range of pest pressures throughout the year. From termites and ants in warmer months to rodents seeking warmth in winter, our technicians are equipped to handle all pest challenges that Glenpool residents face.',
    services: ['Termite Treatment', 'Ant Control', 'Rodent Control', 'Mosquito Control', 'Flea Control', 'Cockroach Extermination', 'Spider Control', 'Bed Bug Removal'],
    faqs: [
      { question: 'Is Glenpool in your service area?', answer: 'Yes, Glenpool is within our primary service area. We serve all of Glenpool including zip code 74033.' },
      { question: 'Do you offer same-day pest control service in Glenpool?', answer: 'We strive to offer same-day or next-day service when possible. For urgent situations, call us directly at +1 918-504-5245.' },
      { question: 'What types of ants are common in Glenpool?', answer: 'Common ant species in Glenpool include odorous house ants, fire ants, pavement ants, and carpenter ants. We identify the species and use targeted treatments for effective control.' },
    ],
  },
  {
    slug: 'jenks',
    city: 'Jenks',
    zip: '74037',
    title: 'Pest Control Jenks OK | Pathfinder Pest Control',
    metaDesc: 'Expert pest control in Jenks, OK. Pathfinder Pest Control serves the Jenks community with effective, professional pest management.',
    heroImage: '/images/2025-10-Jenks_riverwalk.jpg',
    intro: 'Pathfinder Pest Control proudly serves the Jenks, Oklahoma community with professional pest control solutions. Known as the "Riverwalk Capital of Oklahoma," Jenks\'s position along the Arkansas River creates unique pest challenges including significant mosquito pressure and a variety of moisture-loving insects. Our experienced team provides tailored pest control programs to protect Jenks homes and businesses throughout the year.',
    services: ['Mosquito Control', 'Termite Treatment', 'Ant Control', 'Rodent Control', 'Bed Bug Removal', 'Spider Control', 'Flea Control', 'Commercial Pest Control'],
    faqs: [
      { question: 'Is mosquito control especially important in Jenks?', answer: 'Yes. Jenks\'s proximity to the Arkansas River creates ideal mosquito breeding habitat. Our mosquito control programs are particularly effective in reducing mosquito pressure in Jenks yards and outdoor spaces.' },
      { question: 'Do you serve the Jenks Riverwalk area businesses?', answer: 'Yes, we provide commercial pest control services to businesses throughout the Jenks area including near the Riverwalk.' },
      { question: 'How do I get a free pest control quote in Jenks?', answer: 'Call us at +1 918-504-5245 or submit a request through our contact page. We offer free inspections and estimates for Jenks properties.' },
    ],
  },
  {
    slug: 'owasso',
    city: 'Owasso',
    zip: '74055',
    title: 'Pest Control Owasso OK | Pathfinder Pest Control',
    metaDesc: 'Expert pest control services in Owasso, OK. Pathfinder Pest Control helps Owasso homes and businesses stay pest free.',
    heroImage: '/images/2025-10-Jenks_riverwalk.jpg',
    intro: 'Pathfinder Pest Control provides effective pest control services in Owasso, Oklahoma for both residential and commercial properties. Owasso growth and changing seasonal conditions can lead to increased activity from termites, ants, rodents, and mosquitoes. Our team delivers practical treatment programs to eliminate current infestations and prevent new ones.',
    services: ['Termite Treatment', 'Ant Control', 'Rodent Control', 'Mosquito Control', 'Spider Control', 'Bed Bug Removal', 'Wasp & Hornet Removal', 'Commercial Pest Control'],
    faqs: [
      { question: 'Do you serve all neighborhoods in Owasso?', answer: 'Yes. We provide pest control services throughout Owasso and nearby areas.' },
      { question: 'What is a common pest issue in Owasso?', answer: 'Termites, ants, and rodents are common concerns in Owasso, especially during seasonal transitions.' },
      { question: 'How do I book service in Owasso?', answer: 'Call +1 918-504-5245 or submit a request through our contact page for scheduling.' },
    ],
  },
  {
    slug: 'sapulpa',
    city: 'Sapulpa',
    zip: '74066',
    title: 'Pest Control Sapulpa OK | Pathfinder Pest Control',
    metaDesc: 'Reliable pest control in Sapulpa, OK. Pathfinder Pest Control protects Sapulpa homes and businesses from common Oklahoma pests.',
    heroImage: '/images/2025-10-960px-Building_in_Broken_Arrow_Oklahoma-768x511.jpg',
    intro: 'Pathfinder Pest Control offers trusted pest management services in Sapulpa, Oklahoma. From historic neighborhoods to newer developments, Sapulpa properties can face year-round pressure from termites, ants, spiders, and rodents. We use targeted, property-specific treatments to keep homes and businesses protected.',
    services: ['Termite Treatment', 'Ant Control', 'Rodent Control', 'Spider Control', 'Mosquito Control', 'Cockroach Extermination', 'Bed Bug Removal', 'Commercial Pest Control'],
    faqs: [
      { question: 'Do you provide termite treatments in Sapulpa?', answer: 'Yes. We provide inspections, treatment, and monitoring programs for termite control in Sapulpa.' },
      { question: 'Can I set up recurring service in Sapulpa?', answer: 'Yes, we offer ongoing pest prevention plans for Sapulpa homeowners and businesses.' },
      { question: 'How soon can you come to a Sapulpa property?', answer: 'Availability varies, but we often have next-day appointments and sometimes same-day options.' },
    ],
  },
  {
    slug: 'berryhill',
    city: 'Berryhill',
    zip: '74107',
    title: 'Pest Control Berryhill OK | Pathfinder Pest Control',
    metaDesc: 'Professional pest control in Berryhill, OK. Pathfinder Pest Control provides dependable treatments for local homes and businesses.',
    heroImage: '/images/2025-10-Jenks_riverwalk.jpg',
    intro: 'Pathfinder Pest Control serves Berryhill, Oklahoma with practical pest control solutions for families and businesses. Berryhill properties can experience regular pest activity from ants, spiders, rodents, and warm-weather insects. Our technicians provide detailed inspections and treatment plans designed for long-term results.',
    services: ['Termite Treatment', 'Ant Control', 'Rodent Control', 'Spider Control', 'Mosquito Control', 'Bed Bug Removal', 'Flea Control', 'Commercial Pest Control'],
    faqs: [
      { question: 'Is Berryhill inside your Tulsa-area service region?', answer: 'Yes. Berryhill is part of the Tulsa-area communities we regularly service.' },
      { question: 'Do you offer one-time and recurring treatments in Berryhill?', answer: 'Yes, we offer both one-time service and recurring pest protection plans.' },
      { question: 'How can I get a quote for Berryhill pest control?', answer: 'Call +1 918-504-5245 or use our contact page to request a free quote.' },
    ],
  },
]

export function getSAPBySlug(slug: string): SAPData | undefined {
  return sapData.find((s) => s.slug === slug)
}
