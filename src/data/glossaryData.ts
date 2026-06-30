export interface GlossaryTerm {
  term: string
  definition: string
  category: string
}

export const glossaryTerms: GlossaryTerm[] = [
  // — IPM & Strategy —
  { term: 'Integrated Pest Management', definition: 'A science-based approach to pest control that combines biological, cultural, physical, and chemical tools to minimize economic, health, and environmental risks.', category: 'Strategy' },
  { term: 'IPM', definition: 'Abbreviation for Integrated Pest Management — a holistic pest control strategy that uses the least toxic, most targeted methods available before escalating to chemical treatments.', category: 'Strategy' },
  { term: 'Threshold', definition: 'The pest population level at which control action must be taken to prevent unacceptable damage or health risk. Also called "action threshold."', category: 'Strategy' },
  { term: 'Exclusion', definition: 'The practice of physically sealing entry points — gaps, cracks, vents, pipes — to prevent pests from entering a structure.', category: 'Strategy' },
  { term: 'Sanitation', definition: 'Eliminating food, water, and harborage sources that attract and sustain pest populations. One of the most effective long-term pest prevention methods.', category: 'Strategy' },
  { term: 'Monitoring', definition: 'Regular inspection and use of traps or devices to detect pest activity, identify species, and measure population levels before and after treatment.', category: 'Strategy' },
  { term: 'Harborage', definition: 'Any area that provides shelter or hiding places for pests, such as clutter, wall voids, cardboard boxes, or dense vegetation near a structure.', category: 'Strategy' },
  { term: 'Conducive conditions', definition: 'Environmental factors — moisture, debris, wood-to-soil contact, poor sanitation — that make a property attractive to pests and facilitate infestations.', category: 'Strategy' },
  { term: 'Service interval', definition: 'The scheduled frequency of pest control visits, such as monthly, bi-monthly, or quarterly, based on pest pressure and property type.', category: 'Strategy' },
  { term: 'Perimeter treatment', definition: 'Pesticide application around the exterior foundation and entry points of a structure to create a barrier that stops pests before they enter.', category: 'Treatment' },

  // — Treatment Methods —
  { term: 'Fumigation', definition: 'A pest control method that releases a gaseous pesticide (fumigant) inside a sealed structure to eliminate pests that live within wood or inaccessible voids.', category: 'Treatment' },
  { term: 'Residual treatment', definition: 'A pesticide application that remains active on treated surfaces for an extended period after application, killing pests that contact the treated area.', category: 'Treatment' },
  { term: 'Spot treatment', definition: 'Application of pesticide to a specific, limited area where pest activity has been identified, minimizing overall chemical use.', category: 'Treatment' },
  { term: 'Broadcast spray', definition: 'Large-scale application of pesticide over a wide area, such as an entire lawn or room, rather than targeted spots.', category: 'Treatment' },
  { term: 'Crack and crevice treatment', definition: 'Precise pesticide application directed into voids, gaps, and crevices where pests harborage — common for cockroach and ant control.', category: 'Treatment' },
  { term: 'Interior treatment', definition: 'Pesticide application performed inside a structure, targeting areas such as kitchens, bathrooms, and utility rooms where pests are active.', category: 'Treatment' },
  { term: 'Bait station', definition: 'A tamper-resistant container holding pesticide bait. Pests enter, consume or carry the bait back to the colony, causing colony-wide elimination.', category: 'Treatment' },
  { term: 'Granular bait', definition: 'A pesticide formulation in granule form that pests consume directly or carry to nesting sites; commonly used for ant and cockroach control.', category: 'Treatment' },
  { term: 'Dust formulation', definition: 'A dry pesticide powder applied into wall voids, electrical outlets, and other enclosed spaces where liquid sprays cannot reach effectively.', category: 'Treatment' },
  { term: 'Aerosol', definition: 'A pressurized pesticide product that releases a fine mist or foam. Aerosols are used for quick knockdown of flying insects or to treat voids.', category: 'Treatment' },
  { term: 'Microencapsulation', definition: 'A formulation technology in which pesticide active ingredient is enclosed in tiny capsules that release slowly over time, extending residual activity.', category: 'Treatment' },

  // — Pesticide Science —
  { term: 'Pesticide', definition: 'Any chemical or biological agent used to kill, repel, or control a pest. Includes insecticides, rodenticides, herbicides, fungicides, and more.', category: 'Pesticide Science' },
  { term: 'Insecticide', definition: 'A pesticide specifically formulated to kill insects. May work on contact, through ingestion, or as a systemic treatment absorbed by the target pest.', category: 'Pesticide Science' },
  { term: 'Rodenticide', definition: 'A pesticide formulated to kill rodents such as mice and rats. Available as baits, tracking powders, and fumigants.', category: 'Pesticide Science' },
  { term: 'Termiticide', definition: 'A pesticide specifically designed to eliminate or repel termites. Applied as a soil treatment barrier or injected directly into infested wood.', category: 'Pesticide Science' },
  { term: 'Active ingredient', definition: 'The chemical component in a pesticide product that actually kills or repels pests. Pesticide labels list active ingredients with their percentages.', category: 'Pesticide Science' },
  { term: 'Inert ingredient', definition: 'Non-active components in a pesticide product such as solvents, carriers, and stabilizers that help deliver the active ingredient but do not directly kill pests.', category: 'Pesticide Science' },
  { term: 'Mode of action', definition: 'The specific biological mechanism by which a pesticide kills or incapacitates a pest, such as disrupting the nervous system, blocking molting hormones, or inhibiting cell respiration.', category: 'Pesticide Science' },
  { term: 'Knockdown effect', definition: 'The rapid paralysis or incapacitation of insects upon contact with a pesticide, even before the insect dies.', category: 'Pesticide Science' },
  { term: 'Repellency', definition: 'The property of a pesticide or substance that causes pests to avoid treated areas without necessarily killing them.', category: 'Pesticide Science' },
  { term: 'Synergist', definition: 'A compound added to a pesticide to enhance the effectiveness of the active ingredient, often by blocking the pest\'s ability to break down the chemical.', category: 'Pesticide Science' },
  { term: 'Resistance management', definition: 'Practices designed to prevent pest populations from developing genetic immunity to pesticides, such as rotating between different modes of action.', category: 'Pesticide Science' },
  { term: 'Emulsifiable concentrate', definition: 'A liquid pesticide formulation that mixes with water to form an emulsion for spraying. Common for outdoor applications due to its broad coverage.', category: 'Pesticide Science' },
  { term: 'Wettable powder', definition: 'A dry pesticide formulation that is mixed with water to form a sprayable suspension. Often used where residual deposits are desirable.', category: 'Pesticide Science' },

  // — Regulatory —
  { term: 'EPA registration', definition: 'The federal approval process by the US Environmental Protection Agency that a pesticide product must receive before it can be legally sold and used in the United States.', category: 'Regulatory' },
  { term: 'Label', definition: 'The legal document attached to a pesticide product. It specifies approved uses, application rates, safety requirements, and first aid. Following the label is required by law.', category: 'Regulatory' },
  { term: 'Signal word', definition: 'A word on a pesticide label — CAUTION, WARNING, or DANGER — that indicates the relative acute toxicity of the product to humans.', category: 'Regulatory' },
  { term: 'Restricted use pesticide', definition: 'A pesticide that can only be purchased and applied by certified pesticide applicators due to its potential to harm humans, wildlife, or the environment.', category: 'Regulatory' },
  { term: 'General use pesticide', definition: 'A pesticide approved for use by the general public without special certification, though it must still be used according to the label.', category: 'Regulatory' },
  { term: 'Re-entry interval', definition: 'The minimum time that must pass after a pesticide application before people or animals can safely re-enter the treated area.', category: 'Regulatory' },
  { term: 'SDS', definition: 'Safety Data Sheet — a standardized document that provides detailed information about a pesticide\'s hazards, safe handling, first aid, and emergency response procedures.', category: 'Regulatory' },
  { term: 'PPE', definition: 'Personal Protective Equipment — gloves, respirators, eye protection, coveralls, and other gear worn by pest control technicians to prevent pesticide exposure.', category: 'Regulatory' },

  // — Biology & Life Cycle —
  { term: 'Infestation', definition: 'The presence of pests in numbers large enough to cause harm, economic damage, or significant nuisance to humans, animals, or property.', category: 'Biology' },
  { term: 'Larva', definition: 'The immature, worm-like stage of insects that undergo complete metamorphosis (egg, larva, pupa, adult). Examples include caterpillars and maggots.', category: 'Biology' },
  { term: 'Pupa', definition: 'The transitional stage between larva and adult in insects with complete metamorphosis. The pupa is typically enclosed in a protective case and does not feed.', category: 'Biology' },
  { term: 'Nymph', definition: 'The immature stage of insects that undergo incomplete metamorphosis (egg, nymph, adult). Nymphs resemble smaller versions of the adult.', category: 'Biology' },
  { term: 'Metamorphosis', definition: 'The biological process by which an insect transforms through life stages. Complete metamorphosis has four stages (egg, larva, pupa, adult); incomplete has three (egg, nymph, adult).', category: 'Biology' },
  { term: 'Molting', definition: 'The process by which an insect sheds its rigid outer skeleton (exoskeleton) to grow. Each stage between molts is called an instar.', category: 'Biology' },
  { term: 'Colony', definition: 'A group of social insects — such as ants, termites, or bees — living together in an organized community with defined castes including workers, soldiers, and reproductives.', category: 'Biology' },
  { term: 'Swarmers', definition: 'Winged reproductive termites or ants that leave the colony to mate and establish new colonies. Swarmer activity indoors is often the first sign of a termite infestation.', category: 'Biology' },
  { term: 'Queen', definition: 'The reproductive female of a social insect colony responsible for laying eggs. A termite queen can live for decades and lay thousands of eggs per day.', category: 'Biology' },
  { term: 'Forager', definition: 'A worker insect — ant, termite, or bee — that leaves the nest to collect food and bring it back to the colony.', category: 'Biology' },
  { term: 'Diapause', definition: 'A state of suspended development in insects triggered by environmental cues such as cold temperatures or drought, allowing them to survive unfavorable conditions.', category: 'Biology' },
  { term: 'Overwintering', definition: 'The process by which insects survive the winter season, either through diapause, migration, or seeking shelter inside warm structures.', category: 'Biology' },
  { term: 'Frass', definition: 'Insect excrement, particularly from wood-boring insects like termites and carpenter ants. Frass often resembles sawdust or coffee grounds near infested wood.', category: 'Biology' },
  { term: 'Biological control', definition: 'The use of natural predators, parasites, or pathogens to reduce pest populations. Examples include releasing beneficial nematodes or using Bacillus thuringiensis (Bt) for larvae.', category: 'Biology' },
  { term: 'IGR', definition: 'Insect Growth Regulator — a pesticide that disrupts the development of insects by mimicking or blocking juvenile hormones, preventing larvae from maturing into reproducing adults.', category: 'Biology' },
  { term: 'Chitin inhibitor', definition: 'A type of insecticide that interferes with the production of chitin, the primary component of an insect\'s exoskeleton, preventing successful molting and killing the pest.', category: 'Biology' },
  { term: 'Vector', definition: 'An organism — often an insect — that transmits a disease-causing pathogen from one host to another. Mosquitoes are vectors for West Nile virus; ticks vector Lyme disease.', category: 'Biology' },
  { term: 'Pheromone trap', definition: 'A monitoring device that uses synthetic insect sex or aggregation pheromones to attract and capture specific pest species for population assessment.', category: 'Biology' },

  // — Common Pests —
  { term: 'Subterranean termite', definition: 'The most destructive termite species in the US. They live underground and access structures through mud tubes, requiring soil moisture to survive.', category: 'Pests' },
  { term: 'Drywood termite', definition: 'Termites that live entirely within the wood they infest, requiring no soil contact. They produce characteristic hexagonal fecal pellets called frass.', category: 'Pests' },
  { term: 'Mud tube', definition: 'A pencil-wide tunnel made of soil, wood particles, and termite saliva. Subterranean termites construct mud tubes to travel between soil and above-ground wood while staying protected and moist.', category: 'Pests' },
  { term: 'Bed bug', definition: 'A small, flat, reddish-brown parasitic insect (Cimex lectularius) that feeds on human blood at night. Bed bugs hide in mattresses, furniture, and wall crevices.', category: 'Pests' },
  { term: 'German cockroach', definition: 'The most common indoor cockroach species (Blattella germanica). Small, tan-colored with two dark stripes behind the head. Rapid reproducer and highly resistant to pesticides.', category: 'Pests' },
  { term: 'American cockroach', definition: 'The largest common cockroach species in the US. Reddish-brown, up to 1.5 inches long. Often found in sewers, basements, and commercial kitchens.', category: 'Pests' },
  { term: 'Brown recluse', definition: 'A venomous spider (Loxosceles reclusa) identified by a violin-shaped marking on its back. Common in Oklahoma. Its bite can cause necrotic tissue damage.', category: 'Pests' },
  { term: 'Black widow', definition: 'A venomous spider (Latrodectus spp.) identified by the red hourglass marking on the female\'s abdomen. Its bite delivers a neurotoxic venom causing severe pain and muscle cramps.', category: 'Pests' },
  { term: 'Fire ant', definition: 'An aggressive, stinging ant (Solenopsis invicta) that builds mound nests in open sunny areas. Their stings deliver venom that can cause severe reactions in allergic individuals.', category: 'Pests' },
  { term: 'Carpenter ant', definition: 'Large black ants (Camponotus spp.) that excavate galleries in moist or damaged wood to build nests. They do not eat wood but their tunneling weakens wooden structures over time.', category: 'Pests' },
  { term: 'Odorous house ant', definition: 'A small dark ant (Tapinoma sessile) that releases a rotten coconut smell when crushed. Forms massive colonies and is one of the most common kitchen pests in the US.', category: 'Pests' },
  { term: 'Argentine ant', definition: 'An invasive ant species (Linepithema humile) that forms massive supercolonies with multiple queens. Extremely difficult to eliminate because unrelated colonies will merge rather than fight.', category: 'Pests' },
  { term: 'Norway rat', definition: 'Also called the brown rat (Rattus norvegicus). The most common rat species in the US. Burrows underground near buildings, garbage, and waterways.', category: 'Pests' },
  { term: 'Roof rat', definition: 'Also called the black rat (Rattus rattus). An agile climber that nests in attics, trees, and upper floors of buildings. Common in southern and coastal US regions.', category: 'Pests' },
  { term: 'House mouse', definition: 'The most common rodent pest (Mus musculus). Small, gray-brown, with large ears. Can squeeze through gaps as small as a dime and produces 5-10 litters per year.', category: 'Pests' },
  { term: 'Deer mouse', definition: 'A native North American mouse (Peromyscus maniculatus) that can carry Hantavirus. Identified by its bicolored tail and white belly. Found in rural and suburban areas.', category: 'Pests' },
  { term: 'Gopher', definition: 'A burrowing rodent (family Geomyidae) that creates extensive underground tunnel systems and damages lawns, gardens, and underground irrigation lines.', category: 'Pests' },
  { term: 'Mole', definition: 'A small insectivorous mammal (family Talpidae) that tunnels through soil searching for earthworms and grubs, creating raised ridges and mounds that damage lawns.', category: 'Pests' },
  { term: 'Vole', definition: 'A small rodent (genus Microtus) that creates surface runways through grass and feeds on plant roots, bulbs, and bark. Often confused with moles.', category: 'Pests' },
  { term: 'Yellowjacket', definition: 'An aggressive wasp (Vespula spp.) with bold yellow and black markings. Nests in the ground or wall voids. Particularly aggressive when nests are disturbed in late summer.', category: 'Pests' },
  { term: 'Paper wasp', definition: 'A wasp (Polistes spp.) that builds open, umbrella-shaped paper nests under eaves, deck railings, and overhangs. Less aggressive than yellowjackets but will sting if threatened.', category: 'Pests' },
  { term: 'Bald-faced hornet', definition: 'A large black and white stinging insect (Dolichovespula maculata) that builds large papery football-shaped nests in trees and shrubs. Extremely aggressive when nest is disturbed.', category: 'Pests' },
  { term: 'Mud dauber', definition: 'A solitary wasp that constructs small, tubular nests made of mud. Generally non-aggressive and rarely stings. Beneficial because it hunts spiders to provision its nest.', category: 'Pests' },
  { term: 'Silverfish', definition: 'A carrot-shaped, wingless insect (Lepisma saccharina) covered in silver scales. Feeds on starchy materials like paper, glue, and fabric. Thrives in humid, dark areas.', category: 'Pests' },
  { term: 'Earwig', definition: 'An insect (order Dermaptera) with distinctive rear pincers (cerci). Primarily an outdoor pest but will enter homes seeking moisture. The pincers look threatening but rarely break skin.', category: 'Pests' },
  { term: 'Stink bug', definition: 'A shield-shaped insect (Halyomorpha halys) that emits a pungent odor when disturbed. Invades homes in fall seeking warmth. Not dangerous but a significant nuisance pest.', category: 'Pests' },
  { term: 'Tick', definition: 'A blood-sucking arachnid (order Ixodida) that attaches to mammals, birds, and reptiles. Oklahoma ticks can transmit diseases including Rocky Mountain Spotted Fever and ehrlichiosis.', category: 'Pests' },
  { term: 'Flea', definition: 'A tiny, jumping, blood-feeding insect (order Siphonaptera). Fleas primarily parasitize pets but will bite humans. A single female can produce hundreds of offspring per month.', category: 'Pests' },
  { term: 'Mosquito', definition: 'A flying insect (family Culicidae) where females feed on blood to develop eggs. In Oklahoma, mosquitoes can transmit West Nile Virus. Breeds in any standing water.', category: 'Pests' },
  { term: 'Stored product pest', definition: 'Insects — such as grain beetles, weevils, and moths — that infest stored food products including flour, cereals, dried fruit, and pet food.', category: 'Pests' },

  // — Inspection & Assessment —
  { term: 'Extermination', definition: 'The complete elimination of a pest population from a specific area. Pest control professionals often prefer "pest management" as it reflects longer-term strategies beyond one-time elimination.', category: 'Inspection' },
  { term: 'Entry point', definition: 'A gap, crack, opening, or structural defect through which pests gain access to a building. Common entry points include gaps around pipes, vents, doors, and foundation cracks.', category: 'Inspection' },
  { term: 'Monitoring station', definition: 'A device — such as a glue board, bait station, or pheromone trap — placed at strategic locations to detect and track pest activity over time.', category: 'Inspection' },
  { term: 'Sanitation inspection', definition: 'An evaluation of a property\'s cleanliness and food storage practices to identify conditions attracting pests and recommend corrective actions before chemical treatment.', category: 'Inspection' },
  { term: 'Oothecae', definition: 'The protective egg case produced by cockroaches. A single German cockroach ootheca contains 30–50 eggs, and females may produce several per month.', category: 'Biology' },
  { term: 'Exoskeleton', definition: 'The hard outer shell of insects and arachnids that provides structure and protection. Insects shed their exoskeleton through molting to grow.', category: 'Biology' },
]

export function getTermByName(name: string): GlossaryTerm | undefined {
  return glossaryTerms.find(t => t.term.toLowerCase() === name.toLowerCase())
}

export const glossaryCategories = [...new Set(glossaryTerms.map(t => t.category))]
