export interface ServiceData {
  slug: string
  title: string
  metaDesc: string
  heroTitle: string
  heroSubtitle: string
  heroImage: string
  sections: Array<{
    heading: string
    content: string
    image?: string
  }>
  faqs: Array<{ question: string; answer: string }>
}

export const servicesData: ServiceData[] = [
  {
    slug: 'bed-bug-removal',
    title: 'Bed Bug Removal Tulsa OK | Pathfinder Pest Control',
    metaDesc: 'Professional bed bug removal in Tulsa, OK. Pathfinder Pest Control eliminates bed bugs with heat treatment and targeted applications.',
    heroTitle: 'Professional Bed Bug Removal in Tulsa OK',
    heroSubtitle: 'Pathfinder Pest Control provides comprehensive bed bug inspection and extermination services in Tulsa, eliminating infestations at every life stage with proven treatment methods.',
    heroImage: '/images/2025-10-inspection-for-bed-bugs.jpg',
    sections: [
      {
        heading: 'Signs You Have a Bed Bug Infestation',
        content: 'Bed bugs are expert hiders, but they leave behind clear signs of their presence. Common indicators include small reddish-brown stains on mattresses and bedding from crushed bugs, tiny dark fecal spots on sheets and furniture, shed exoskeletons near sleeping areas, a sweet musty odor in heavily infested rooms, and of course, itchy red bites that appear in a line or cluster on exposed skin during sleep.\n\nEarly detection is critical. The sooner an infestation is identified, the easier it is to treat. Pathfinder Pest Control provides thorough bed bug inspections to locate all harborage areas before treatment begins.',
      },
      {
        heading: 'Our Bed Bug Treatment Process',
        content: 'Our licensed technicians use a multi-step approach to eliminate bed bugs completely. We begin with a thorough inspection of all sleeping areas, furniture, baseboards, and electrical outlets. We then apply targeted chemical treatments or heat treatment to penetrate all hiding spots. Follow-up treatments ensure complete elimination. We also provide preparation instructions to maximize treatment effectiveness.',
        image: '/images/2025-10-inspection-for-bed-bugs.jpg',
      },
      {
        heading: 'Why Choose Professional Bed Bug Treatment',
        content: 'DIY bed bug treatments from hardware stores rarely work because they only kill bugs that are directly sprayed, missing eggs and hidden adults. Professional treatments from Pathfinder Pest Control use products and techniques that reach all life stages and all hiding places. Our technicians are trained to identify all harborage sites and apply targeted treatments that provide lasting results.',
      },
    ],
    faqs: [
      { question: 'How do I know if I have bed bugs?', answer: 'Look for small brownish insects about the size of an apple seed, rusty stains on bed sheets, tiny dark spots (fecal matter), and a sweet musty odor. You may also notice itchy bites on your skin in a line or cluster.' },
      { question: 'How long does bed bug treatment take?', answer: 'A standard chemical treatment takes about 2–4 hours. Heat treatments can take 6–8 hours. We typically recommend 2–3 follow-up treatments spaced 2 weeks apart for complete elimination.' },
      { question: 'Do I need to leave during treatment?', answer: 'Yes, you will need to vacate the premises during treatment and for several hours afterward. We will provide specific instructions based on the treatment method used.' },
      { question: 'How can I prevent bed bugs from coming back?', answer: 'Encase mattresses in bed-bug-proof covers, inspect secondhand furniture before bringing it home, check hotel rooms when traveling, and vacuum regularly. Call us immediately if you see signs of a new infestation.' },
    ],
  },
  {
    slug: 'rodent-control',
    title: 'Rodent Control Tulsa OK | Pathfinder Pest Control',
    metaDesc: 'Expert rodent control in Tulsa, OK. We remove mice and rats, seal entry points, and prevent future infestations.',
    heroTitle: 'Professional Rodent Control in Tulsa OK',
    heroSubtitle: 'We handle rodent problems by removing mice and rats, sealing entry points, and helping prevent future infestations in homes and businesses throughout Tulsa.',
    heroImage: '/images/rodents.jpeg',
    sections: [
      {
        heading: 'Signs of a Rodent Infestation',
        content: 'Rodents are nocturnal and tend to stay hidden, but they leave behind plenty of evidence. Watch for droppings along walls and in cabinets, gnaw marks on food packaging or structural materials, nesting materials made of shredded paper or fabric, greasy rub marks along baseboards, scratching noises in walls or ceilings at night, and a strong musty or ammonia-like odor in enclosed spaces.',
      },
      {
        heading: 'Our Rodent Removal Process',
        content: 'Our technicians begin with a thorough property inspection to identify active entry points, nesting areas, and runways. We then deploy appropriate trapping methods or bait stations. Once rodents are removed, we seal entry points to prevent re-entry. We also provide recommendations to eliminate attractants like food sources and harborage areas.',
        image: '/images/rodents.jpeg',
      },
      {
        heading: 'Preventing Future Rodent Problems',
        content: 'After rodent removal, prevention is key. We recommend sealing all gaps larger than a quarter inch, installing door sweeps, keeping food in sealed containers, eliminating standing water sources, trimming vegetation away from the foundation, and scheduling regular pest inspections to catch problems early.',
      },
    ],
    faqs: [
      { question: 'How do mice get into my home?', answer: 'Mice can squeeze through gaps as small as a dime. Common entry points include gaps around pipes, vents, doors, windows, and foundation cracks. We inspect all potential entry points as part of our rodent control service.' },
      { question: 'Are rodent bait stations safe for pets and children?', answer: 'Our technicians place bait stations in locations inaccessible to pets and children. We use tamper-resistant bait stations as an additional safety measure. We will advise you on any precautions during treatment.' },
      { question: 'How long does rodent removal take?', answer: 'Initial treatment is completed in one visit. Complete elimination typically takes 2–4 weeks with monitoring visits. We follow up to ensure all rodents are gone and entry points are properly sealed.' },
      { question: 'Do I need rodent control if I only see one mouse?', answer: 'Yes. Where there is one mouse, there are usually more. Mice reproduce rapidly — one pair can produce dozens of offspring per year. Early intervention prevents a minor problem from becoming a major infestation.' },
    ],
  },
  {
    slug: 'commercial-pest-control',
    title: 'Commercial Pest Control Tulsa OK | Pathfinder Pest Control',
    metaDesc: 'Reliable commercial pest control services in Tulsa, OK. Keep your business pest-free with Pathfinder Pest Control.',
    heroTitle: 'Commercial Pest Control Services in Tulsa OK',
    heroSubtitle: 'We deliver reliable commercial pest control services that help Tulsa businesses maintain clean, compliant, and pest-free environments year-round.',
    heroImage: '/images/2025-10-commercial-pest-control.jpg',
    sections: [
      {
        heading: 'Protecting Your Tulsa Business from Pests',
        content: 'Pests in a commercial setting can damage your reputation, endanger health, and violate health codes. Pathfinder Pest Control provides customized commercial pest control programs for restaurants, offices, retail stores, warehouses, healthcare facilities, and more. We work with your schedule to minimize disruption to your operations.',
        image: '/images/2025-10-commercial-pest-control.jpg',
      },
      {
        heading: 'Industries We Serve',
        content: 'Our commercial pest control services are tailored to the unique needs of various industries including food service and restaurants, healthcare facilities, retail and office buildings, warehouses and distribution centers, hospitality and hotels, educational facilities, and multi-unit housing complexes.',
      },
      {
        heading: 'Integrated Pest Management for Business',
        content: 'We use Integrated Pest Management (IPM) principles for commercial clients, combining biological, physical, and chemical controls to provide effective pest management with minimal environmental impact. IPM also helps businesses maintain compliance with health regulations and industry standards.',
      },
    ],
    faqs: [
      { question: 'How often should businesses schedule pest control?', answer: 'Most commercial properties benefit from monthly or quarterly pest control services. Food service establishments typically need monthly service. We will assess your facility and recommend the appropriate service frequency.' },
      { question: 'Do you offer service contracts for businesses?', answer: 'Yes, we offer customized service contracts for commercial clients. These include regular inspections, treatments, and documentation for compliance purposes.' },
      { question: 'Can you service our business after hours?', answer: 'Yes, we offer flexible scheduling including early morning, evening, and weekend service to minimize disruption to your business operations.' },
      { question: 'Do you provide pest control documentation for health inspections?', answer: 'Yes, we provide detailed service reports and documentation that can be used for health inspections, audits, and regulatory compliance.' },
    ],
  },
  {
    slug: 'cockroach-extermination',
    title: 'Cockroach Extermination Tulsa OK | Pathfinder Pest Control',
    metaDesc: 'Expert cockroach extermination in Tulsa, OK. Eliminate roach infestations with professional treatments from Pathfinder Pest Control.',
    heroTitle: 'Professional Cockroach Extermination in Tulsa OK',
    heroSubtitle: 'Pathfinder Pest Control eliminates cockroach infestations using targeted treatments that reach all hiding spots and prevent re-infestation.',
    heroImage: '/images/cockroach.jpeg',
    sections: [
      {
        heading: 'Why Cockroaches Are Hard to Eliminate',
        content: 'German cockroaches and American cockroaches are among the most resilient pests in existence. They reproduce rapidly, can develop resistance to over-the-counter pesticides, hide in hard-to-reach crevices, and can survive for weeks without food. A female German cockroach can produce up to 300 offspring per year, making professional treatment essential for any roach infestation.',
      },
      {
        heading: 'Our Cockroach Treatment Methods',
        content: 'We use gel baits, residual insecticides, and insect growth regulators to target cockroaches at every life stage. Our technicians apply treatments in critical areas including under appliances, inside cabinets, around plumbing, and in wall voids. We also identify and address factors that attract cockroaches, such as food debris, moisture, and entry points.',
        image: '/images/cockroach.jpeg',
      },
      {
        heading: 'Preparation for Cockroach Treatment',
        content: 'Before treatment, you should empty and clean cabinets, store all food in sealed containers, fix any water leaks, and repair caulk around sinks and tubs. Our technicians will provide specific preparation instructions when you schedule service to ensure maximum treatment effectiveness.',
      },
    ],
    faqs: [
      { question: 'How do I know if I have a cockroach infestation?', answer: 'Signs include seeing live or dead roaches, finding dark droppings that look like ground pepper, detecting a musty oily odor, and finding egg cases (oothecae) in dark corners.' },
      { question: 'How long does it take to get rid of cockroaches?', answer: 'Most cockroach infestations require 2–3 treatments spaced 2 weeks apart. German cockroach infestations, which are the most common and hardest to eliminate, may require additional treatments.' },
      { question: 'Can cockroaches make you sick?', answer: 'Yes. Cockroaches carry bacteria like Salmonella and E. coli, and their shed skins and droppings can trigger asthma and allergies, especially in children.' },
      { question: 'Why are roaches so hard to get rid of?', answer: 'Cockroaches are highly adaptable, reproduce quickly, hide in inaccessible areas, and can develop resistance to pesticides. Professional treatment using multiple methods and follow-up visits is required for complete elimination.' },
    ],
  },
  {
    slug: 'flea-control',
    title: 'Flea Control Tulsa OK | Pathfinder Pest Control',
    metaDesc: 'Professional flea control in Tulsa, OK. Eliminate fleas from your home and yard with effective treatments from Pathfinder Pest Control.',
    heroTitle: 'Professional Flea Control in Tulsa OK',
    heroSubtitle: 'Pathfinder Pest Control removes fleas from homes and yards with effective treatments that protect pets and families from recurring infestations.',
    heroImage: '/images/flea.jpeg',
    sections: [
      {
        heading: 'Understanding Flea Infestations',
        content: 'Fleas are small jumping insects that feed on the blood of mammals and birds. In Oklahoma, flea season typically runs from late spring through fall, though indoor infestations can persist year-round. Pets are the most common source of flea infestations, but fleas can also enter homes on clothing, used furniture, or through wildlife activity near the property.',
        image: '/images/flea.jpeg',
      },
      {
        heading: 'Our Flea Treatment Approach',
        content: 'Our flea control treatment targets all life stages of fleas including eggs, larvae, pupae, and adults. We treat indoor areas including carpets, upholstery, and pet resting areas, as well as outdoor areas where pets spend time. We use insect growth regulators (IGRs) to prevent flea eggs and larvae from developing into adults, breaking the flea life cycle.',
      },
      {
        heading: 'Flea Treatment Preparation Instructions',
        content: 'For maximum effectiveness, you should vacuum all floors thoroughly before treatment, launder all pet bedding, treat your pets with veterinarian-recommended flea treatment on the same day as our service, and vacate the premises during treatment. We will provide complete preparation instructions when you schedule service.',
      },
    ],
    faqs: [
      { question: 'How do I know if my home has fleas?', answer: 'Signs include seeing small jumping insects, noticing your pets scratching excessively, finding small red bites on your ankles or legs, and seeing tiny black specks (flea dirt) on pet bedding or light-colored surfaces.' },
      { question: 'How long after flea treatment before I see results?', answer: 'You may see adult fleas for 2–3 weeks after treatment as pupae hatch. This is normal. The insect growth regulator prevents new fleas from maturing. Continue vacuuming regularly to remove newly hatched fleas and stimulate the remaining pupae to hatch into the treated environment.' },
      { question: 'Do I need to treat my pets too?', answer: 'Yes. Treating your home without treating your pets will result in re-infestation. Consult your veterinarian for appropriate flea treatment for your pets on the same day we treat your home.' },
      { question: 'How much does flea treatment cost?', answer: 'Flea treatment pricing depends on the size of the property and severity of the infestation. Contact us for a free estimate for your specific situation.' },
    ],
  },
  {
    slug: 'fumigation-services',
    title: 'Fumigation Services Tulsa OK | Pathfinder Pest Control',
    metaDesc: 'Professional fumigation services in Tulsa, OK. Complete pest elimination with expert fumigation from Pathfinder Pest Control.',
    heroTitle: 'Professional Fumigation Services in Tulsa OK',
    heroSubtitle: 'Pathfinder Pest Control provides professional fumigation services for severe infestations that require comprehensive pest elimination throughout your property.',
    heroImage: '/images/fumigation.png',
    sections: [
      {
        heading: 'When is Fumigation Necessary?',
        content: 'Fumigation is recommended for severe or widespread infestations that cannot be controlled with standard treatment methods. It is particularly effective for drywood termites, certain wood-boring beetles, and other pests that live deep within structural materials. Fumigation penetrates into wall voids, attics, and other areas that liquid treatments cannot reach effectively.',
      },
      {
        heading: 'Our Fumigation Process',
        content: 'The fumigation process involves sealing the structure and introducing a gas fumigant that penetrates all areas of the building. The gas is then aerated before re-entry is permitted. Our certified fumigation technicians handle every step of the process safely and in compliance with all applicable regulations. We will provide detailed preparation instructions and work with you to minimize inconvenience.',
        image: '/images/fumigation.png',
      },
      {
        heading: 'Safety During Fumigation',
        content: 'Safety is our top priority. All occupants including pets must vacate the structure during fumigation and for the required aeration period. All food, medicines, and other consumables must be removed or bagged in approved fumigation bags. Our technicians follow strict protocols and clearance testing before re-entry is permitted.',
      },
    ],
    faqs: [
      { question: 'How long does fumigation take?', answer: 'The fumigation process typically takes 24–72 hours from start to finish, including preparation, treatment, and aeration. We will provide a specific timeline based on your property and pest situation.' },
      { question: 'What do I need to do to prepare for fumigation?', answer: 'Remove or bag all food, medications, and consumables. Remove all people and pets. Remove or protect plants. Leave certain items behind as directed by our technicians. We provide a complete preparation checklist.' },
      { question: 'Is fumigation safe for my home?', answer: 'When performed by certified professionals following proper protocols, fumigation is safe. The fumigant dissipates completely during aeration and leaves no residue on surfaces.' },
      { question: 'How soon can I return home after fumigation?', answer: 'Our technicians will test fumigant levels before clearing the structure for re-entry. Typically you can return 24–48 hours after fumigation begins, but this varies based on structure size and conditions.' },
    ],
  },
  {
    slug: 'home-pest-inspection',
    title: 'Home Pest Inspection Tulsa OK | Pathfinder Pest Control',
    metaDesc: 'Professional home pest inspection in Tulsa, OK. Identify pest problems early with a thorough inspection from Pathfinder Pest Control.',
    heroTitle: 'Professional Home Pest Inspection in Tulsa OK',
    heroSubtitle: 'Every service begins with a detailed pest inspection to identify pests, entry points, infestation levels, and conditions that attract pests to your property.',
    heroImage: '/images/inspection.png',
    sections: [
      {
        heading: 'What is Included in a Pest Inspection?',
        content: 'Our comprehensive pest inspection covers all accessible areas of your home including the foundation, crawl space, attic, garage, kitchen, bathrooms, and all living spaces. We check for evidence of termites, rodents, cockroaches, bed bugs, ants, spiders, and other common pests. We also identify conditions conducive to pest activity such as moisture issues, wood-to-soil contact, and structural gaps.',
        image: '/images/inspection.png',
      },
      {
        heading: 'When Do You Need a Pest Inspection?',
        content: 'Pest inspections are recommended when buying or selling a home, when you suspect pest activity but cannot identify it, as part of an annual pest prevention program, after flooding or other events that may attract pests, and when you notice structural damage that may be pest-related.',
      },
      {
        heading: 'After the Inspection',
        content: 'Following the inspection, our technician will provide a detailed written report identifying any pest activity found, conducive conditions, and recommended treatments. We offer transparent pricing and will explain all treatment options before proceeding.',
      },
    ],
    faqs: [
      { question: 'How long does a pest inspection take?', answer: 'A standard home pest inspection takes 30 minutes to 1 hour depending on property size. Larger properties or those with complex layouts may take longer.' },
      { question: 'What should I do before a pest inspection?', answer: 'Make all areas accessible including attics, crawl spaces, and storage areas. Move items away from walls and exterior foundations. Note any areas where you have seen pest activity or evidence.' },
      { question: 'Do I need a pest inspection before buying a home?', answer: 'We strongly recommend a pest inspection before purchasing any property. Pest damage, especially from termites, can be extensive and costly to repair. A pre-purchase inspection protects your investment.' },
      { question: 'How often should I get a pest inspection?', answer: 'Annual pest inspections are recommended for most homes, especially in Oklahoma where termites and other pests are active. Homes with previous pest issues or certain construction types may benefit from more frequent inspections.' },
    ],
  },
  {
    slug: 'mosquito-control',
    title: 'Mosquito Control Tulsa OK | Pathfinder Pest Control',
    metaDesc: 'Professional mosquito control in Tulsa, OK. Reduce mosquito populations and protect your outdoor spaces with Pathfinder Pest Control.',
    heroTitle: 'Professional Mosquito Control in Tulsa OK',
    heroSubtitle: 'Pathfinder Pest Control reduces mosquito populations around your property with targeted treatments designed to make outdoor spaces safer and more comfortable.',
    heroImage: '/images/mosquitos.jpeg',
    sections: [
      {
        heading: 'Mosquito Season in Oklahoma',
        content: 'In Oklahoma, mosquito season typically runs from April through October, with peak activity during the warm summer months. The wet springs that Tulsa often experiences create ideal breeding conditions for mosquitoes, which can multiply rapidly in any standing water including clogged gutters, bird baths, old tires, and low spots in the yard.',
      },
      {
        heading: 'Our Mosquito Treatment Program',
        content: 'Our mosquito control program includes property inspection to identify breeding sites, treatment of vegetation where adult mosquitoes rest during the day, elimination or treatment of standing water breeding sites, and optional installation of professional mosquito traps for ongoing control. Treatments are applied on a recurring basis throughout mosquito season for continuous protection.',
        image: '/images/mosquitos.jpeg',
      },
      {
        heading: 'Protecting Your Family from Mosquitoes',
        content: 'Beyond our professional treatments, we recommend eliminating standing water around your property, keeping gutters clean, using mosquito-repelling plants like citronella and lavender, wearing insect repellent during peak mosquito hours (dusk and dawn), and ensuring window and door screens are intact.',
      },
    ],
    faqs: [
      { question: 'How long does mosquito treatment last?', answer: 'Our mosquito treatments typically provide 3–4 weeks of protection. We recommend recurring treatments throughout mosquito season for continuous coverage.' },
      { question: 'Is mosquito treatment safe for children and pets?', answer: 'Yes, once the treatment has dried (typically 30–60 minutes), the treated areas are safe for children and pets. We use products approved for residential use and apply them according to label directions.' },
      { question: 'When is the best time to treat for mosquitoes?', answer: 'Treatments are most effective in the morning or evening when mosquitoes are most active. We schedule treatments accordingly for maximum effectiveness.' },
      { question: 'Can I eliminate all mosquitoes from my yard?', answer: 'While it is not possible to eliminate every mosquito, our treatment programs can reduce mosquito populations by up to 90%, making your outdoor areas significantly more comfortable.' },
    ],
  },
  {
    slug: 'spider-exterminator',
    title: 'Spider Exterminator Tulsa OK | Pathfinder Pest Control',
    metaDesc: 'Professional spider extermination in Tulsa, OK. Remove dangerous and nuisance spiders with expert treatment from Pathfinder Pest Control.',
    heroTitle: 'Professional Spider Exterminator in Tulsa OK',
    heroSubtitle: 'Pathfinder Pest Control safely removes spiders from homes and businesses using targeted treatments that eliminate current infestations and prevent future activity.',
    heroImage: '/images/spiders.jpeg',
    sections: [
      {
        heading: 'Common Spiders in Tulsa, Oklahoma',
        content: 'Oklahoma is home to several spider species that commonly enter homes. The two most dangerous are the Black Widow, identified by the red hourglass marking on its abdomen, and the Brown Recluse, which has a violin-shaped marking on its head. Common nuisance spiders include house spiders, wolf spiders, cellar spiders, and orb weavers. All of these can become problematic when they invade homes in large numbers.',
      },
      {
        heading: 'Our Spider Control Approach',
        content: 'Our spider extermination service includes inspecting the interior and exterior of your property for webs, egg sacs, and entry points, treating all areas where spiders are active with residual insecticides, clearing webs and egg sacs, and sealing entry points where spiders are entering. We pay special attention to areas like garages, attics, basements, and storage areas where spiders commonly nest.',
        image: '/images/spiders.jpeg',
      },
      {
        heading: 'Prevention Tips',
        content: 'To reduce spider activity around your home, seal gaps around doors and windows, install tight-fitting screens, reduce clutter in garages and storage areas where spiders nest, minimize outdoor lighting that attracts insects that spiders feed on, and keep vegetation trimmed away from the exterior of your home.',
      },
    ],
    faqs: [
      { question: 'Are brown recluse spiders common in Tulsa?', answer: 'Yes, Brown Recluse spiders are common in Oklahoma including the Tulsa area. They prefer dark, undisturbed areas like closets, attics, and storage boxes. Professional treatment is recommended if you find Brown Recluse spiders in your home.' },
      { question: 'How do I identify a Black Widow spider?', answer: 'Black Widow spiders are shiny black with a distinctive red hourglass marking on the underside of their abdomen. They build irregular, tangled webs close to the ground in sheltered spots like woodpiles, under outdoor furniture, and in low shrubs.' },
      { question: 'When are spiders most active?', answer: 'Many spiders are more active in late summer and fall when they are searching for warm places to overwinter. This is when spider invasions in homes are most common in Oklahoma.' },
      { question: 'Is one spider treatment enough?', answer: 'For moderate infestations, one treatment may be sufficient. For heavy infestations or homes with ongoing spider problems, we recommend follow-up treatments and a regular preventive pest control program.' },
    ],
  },
  {
    slug: 'termite-treatment',
    title: 'Termite Treatment Tulsa OK | Pathfinder Pest Control',
    metaDesc: 'Professional termite treatment in Tulsa, OK. Protect your home from termite damage with expert solutions from Pathfinder Pest Control.',
    heroTitle: 'Professional Termite Treatment in Tulsa OK',
    heroSubtitle: 'Pathfinder Pest Control provides effective termite treatment and prevention services to protect your home from the structural damage that termites can cause.',
    heroImage: '/images/termite.jpeg',
    sections: [
      {
        heading: 'The Cost of Termite Damage',
        content: 'Termites cause more than $5 billion in property damage each year in the United States. Unlike most other pests, termite damage is rarely covered by homeowners insurance because it is considered preventable. Oklahoma, including the Tulsa area, is a high-risk state for subterranean termites, which are the most destructive type and can cause significant structural damage before they are even detected.',
      },
      {
        heading: 'Signs of Termite Activity',
        content: 'Early detection is critical for minimizing termite damage. Warning signs include mud tubes running along foundations or walls, hollow-sounding wood when tapped, buckling or blistering wood surfaces, piles of wings near windowsills or doors (from swarmers), small holes in drywall, and frass (termite droppings) that look like sawdust or coffee grounds.',
        image: '/images/termite.jpeg',
      },
      {
        heading: 'Our Termite Treatment Solutions',
        content: 'We offer multiple termite treatment options including liquid soil treatments that create a protective barrier around the foundation, termite bait systems that eliminate entire colonies, and wood treatments for localized infestations. We will inspect your property and recommend the most effective solution for your specific situation and budget.',
      },
    ],
    faqs: [
      { question: 'How much does termite treatment cost in Tulsa?', answer: 'Termite treatment costs vary based on property size, treatment type, and infestation severity. Liquid treatments for an average Tulsa home typically range from $700–$2,500. Contact us for a free inspection and estimate.' },
      { question: 'How long does termite treatment last?', answer: 'Liquid termite treatments typically remain effective for 5–10 years depending on the product used. Bait systems require ongoing monitoring and maintenance. Annual inspections are recommended to ensure continued protection.' },
      { question: 'Do I need to leave during termite treatment?', answer: 'For most liquid termite treatments applied to the exterior and foundation, you do not need to vacate. However, if interior drilling is required, temporary evacuation may be needed. We will advise you on any requirements before treatment.' },
      { question: 'Will termites come back after treatment?', answer: 'A properly applied termite treatment provides long-lasting protection. However, no treatment is permanent. We recommend annual termite inspections to detect any new activity and ensure your protection remains effective.' },
    ],
  },
  {
    slug: 'wasp-hornet-elimination',
    title: 'Wasp & Hornet Elimination Tulsa OK | Pathfinder Pest Control',
    metaDesc: 'Safe wasp and hornet removal in Tulsa, OK. Let the professionals handle dangerous stinging insect nests.',
    heroTitle: 'Wasp & Hornet Elimination in Tulsa OK',
    heroSubtitle: 'Pathfinder Pest Control safely removes wasp and hornet nests and reduces stinging insect activity around homes and businesses in Tulsa.',
    heroImage: '/images/wasps.jpeg',
    sections: [
      {
        heading: 'Common Stinging Insects in Tulsa',
        content: 'Tulsa area homeowners commonly encounter yellowjackets, paper wasps, bald-faced hornets, and mud daubers. Yellowjackets and bald-faced hornets are the most aggressive and will sting repeatedly when threatened. Paper wasps are less aggressive but will defend their nests. All of these stinging insects can pose a serious health risk to people allergic to their venom.',
        image: '/images/wasps.jpeg',
      },
      {
        heading: 'Why Professional Nest Removal is Important',
        content: 'Attempting to remove a wasp or hornet nest without professional equipment and protective gear is dangerous. Disturbing a nest can trigger a swarm and result in dozens or hundreds of painful stings. Our technicians are equipped with the proper protective gear and use the appropriate products to eliminate nests safely.',
      },
      {
        heading: 'Our Stinging Insect Control Process',
        content: 'We inspect your property to locate all active nests, treat nests with appropriate insecticides, remove accessible nests after treatment to prevent reinfestation, and advise on conditions that attract stinging insects to your property. We also seal entry points that stinging insects may use to build nests inside structural voids.',
      },
    ],
    faqs: [
      { question: 'When is wasp season in Oklahoma?', answer: 'Wasps and hornets are most active from late spring through early fall. Colonies grow throughout summer and are largest by late August and September, when foraging becomes more aggressive as the colony prepares for winter.' },
      { question: 'Is it safe to treat a wasp nest myself?', answer: 'We strongly advise against attempting to remove wasp or hornet nests yourself. Disturbing a nest can trigger an aggressive defensive response from hundreds of stinging insects. Our trained technicians can safely eliminate nests with the right equipment and products.' },
      { question: 'What time of day should I treat a wasp nest?', answer: 'Professional treatments are most effective at night or early morning when all colony members are present in the nest and wasps are less active. Our technicians are trained to perform treatments at the optimal time.' },
      { question: 'How do I prevent wasps from building nests around my home?', answer: 'Seal cracks and openings in eaves, soffits, and walls. Remove old nests in fall (after colony dies). Keep outdoor food covered and garbage sealed. Consider hanging decoy nests, as wasps avoid areas where other colonies are established.' },
    ],
  },
  {
    slug: 'wildlife-removal',
    title: 'Wildlife Removal Tulsa OK | Pathfinder Pest Control',
    metaDesc: 'Humane wildlife removal in Tulsa, OK. Remove raccoons, squirrels, opossums, and other wildlife from your property.',
    heroTitle: 'Professional Wildlife Removal in Tulsa OK',
    heroSubtitle: 'Pathfinder Pest Control provides humane wildlife removal services to safely remove raccoons, squirrels, opossums, and other nuisance wildlife from Tulsa homes and properties.',
    heroImage: '/images/wildlife.jpg',
    sections: [
      {
        heading: 'Common Wildlife Problems in Tulsa',
        content: 'Urban and suburban areas in Tulsa regularly experience nuisance wildlife issues. Raccoons frequently raid garbage cans and enter attics through damaged soffits or roof vents. Squirrels gnaw through roofing materials and establish nests in attics. Opossums take up residence under decks and porches. Skunks dig up lawns searching for grubs. All of these animals can cause property damage and pose health risks.',
        image: '/images/wildlife.jpg',
      },
      {
        heading: 'Our Humane Wildlife Removal Process',
        content: 'We use humane trapping methods to capture and relocate nuisance wildlife in accordance with Oklahoma wildlife regulations. After removal, we identify and seal all entry points to prevent re-entry, clean and sanitize affected areas, and provide recommendations to reduce wildlife attractants around your property.',
      },
      {
        heading: 'Wildlife Exclusion Services',
        content: 'Exclusion is the most effective long-term solution for wildlife problems. Our technicians seal gaps in the foundation and roofline, install chimney caps, repair damaged vents, and take other steps to make your property inaccessible to wildlife. Proper exclusion prevents future infestations without the need for repeated trapping.',
      },
    ],
    faqs: [
      { question: 'Is it legal to trap and relocate wildlife in Oklahoma?', answer: 'Regulations vary by species. Our technicians are knowledgeable about Oklahoma wildlife regulations and will handle all wildlife removal in compliance with applicable laws.' },
      { question: 'What should I do if I find a wild animal in my home?', answer: 'Do not attempt to handle or trap the animal yourself. Some wildlife can carry diseases including rabies. Contact us immediately for professional wildlife removal service.' },
      { question: 'How do I keep wildlife out of my attic?', answer: 'Inspect your roofline annually for gaps and damage. Cap chimneys and cover vents with hardware cloth. Trim tree branches that overhang the roof. These measures significantly reduce the likelihood of wildlife accessing your attic.' },
      { question: 'Do you handle snake removal?', answer: 'Yes, we provide snake removal services for both venomous and non-venomous snakes. We identify entry points and provide exclusion services to prevent future snake activity on your property.' },
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug)
}
