import { images } from './images';
import type { Service } from '../types/content';

export const services: Service[] = [
{
  slug: 'house-cleaning',
  name: 'House Cleaning',
  category: 'residential',
  short: 'Regular professional cleaning for busy Hobart homes.',
  overview:
  'Weekly, fortnightly or monthly cleaning that keeps your home consistently fresh. We follow a room-by-room checklist and adapt it to the things that matter most to you.',
  image: images.house,
  whoFor: 'Busy households, families, professionals and anyone who would rather spend weekends on something other than scrubbing.',
  idealFor: ['Families', 'Working professionals', 'Seniors', 'Pet owners', 'Shared houses'],
  included: [
  'Kitchen benches, sink, stovetop and appliance exteriors',
  'Bathrooms, showers, toilets, basins and mirrors',
  'Vacuuming carpets and rugs',
  'Mopping all hard floors',
  'Dusting surfaces, skirting boards and window sills',
  'Beds made and linen changed on request',
  'Bins emptied and relined'],

  benefits: [
  { title: 'Time back', text: 'Hand over the weekly clean and reclaim your evenings.' },
  { title: 'Consistent results', text: 'The same checklist and, where possible, the same cleaner.' },
  { title: 'Flexible visits', text: 'Change frequency or skip a week with notice.' }],

  info: {
    duration: '2–4 hours for a standard 3-bedroom home',
    frequency: 'Weekly, fortnightly, monthly or one-off',
    preparation: 'Clear benches and floors of personal items where possible',
    access: 'Key, lockbox or someone home — your choice'
  }
},
{
  slug: 'end-of-lease-cleaning',
  name: 'End of Lease Cleaning',
  category: 'residential',
  short: 'Detailed bond cleans built around agent checklists.',
  overview:
  'A top-to-bottom clean for tenants and landlords at the end of a lease. We work to real estate agent inspection checklists so you can hand the keys back with confidence.',
  image: images.airbnb,
  whoFor: 'Tenants moving out, landlords preparing for new tenants and property managers turning over rentals.',
  idealFor: ['Tenants', 'Landlords', 'Property managers', 'Sellers preparing for sale'],
  included: [
  'Inside oven, rangehood and cooktop degreased',
  'Inside cupboards, drawers and wardrobes',
  'Walls spot-cleaned and marks removed',
  'Windows, tracks and sills inside',
  'Bathrooms descaled and grout detailed',
  'Light switches, doors and frames wiped',
  'All floors vacuumed and mopped'],

  benefits: [
  { title: 'Agent-ready', text: 'Scoped to common Hobart agent inspection checklists.' },
  { title: 'Re-clean promise', text: 'If an item is flagged at inspection, we come back.' },
  { title: 'One less job', text: 'Focus on the move while we handle the clean.' }],

  info: {
    duration: '4–8 hours depending on property size',
    frequency: 'One-off',
    preparation: 'Property empty of furniture and belongings',
    access: 'Keys or lockbox on the day; power and water connected'
  }
},
{
  slug: 'office-cleaning',
  name: 'Office Cleaning',
  category: 'commercial',
  short: 'After-hours cleaning that keeps workplaces healthy.',
  overview:
  'Scheduled office cleaning designed around your working hours. We keep desks, kitchens, bathrooms and meeting rooms clean, stocked and ready for the next morning.',
  image: images.office,
  whoFor: 'Offices of every size, from small professional practices to multi-floor corporate sites.',
  idealFor: ['Professional services', 'Corporate offices', 'Co-working spaces', 'Government offices'],
  included: [
  'Desks, phones and high-touch surfaces sanitised',
  'Kitchens and breakout areas cleaned',
  'Bathrooms cleaned and consumables restocked',
  'Vacuuming and mopping of all floor areas',
  'Bins and recycling emptied',
  'Meeting rooms reset',
  'Glass partitions and entry doors spot-cleaned'],

  benefits: [
  { title: 'Healthier teams', text: 'Fewer germs on shared surfaces means fewer sick days.' },
  { title: 'Zero disruption', text: 'We clean before or after hours so work carries on.' },
  { title: 'First impressions', text: 'Clients walk into a space that looks looked-after.' }],

  info: {
    duration: 'Scoped to floor area and traffic',
    frequency: 'Daily, several times a week or weekly',
    preparation: 'Clear desks where possible for full surface cleaning',
    access: 'After-hours access card, key or alarm code'
  }
},
{
  slug: 'commercial-building-cleaning',
  name: 'Commercial Building Cleaning',
  category: 'commercial',
  short: 'Common areas, lobbies and shared spaces kept spotless.',
  overview:
  'Cleaning programs for multi-tenant buildings, lobbies, lifts, stairwells and shared amenities — managed to a clear schedule and reported back to building managers.',
  image: images.commercial,
  whoFor: 'Building managers, owners corporations and commercial landlords.',
  idealFor: ['Multi-tenant buildings', 'Lobbies & foyers', 'Strata common areas', 'Car parks'],
  included: [
  'Lobbies, foyers and reception areas',
  'Lifts, stairwells and handrails',
  'Shared bathrooms and amenities',
  'Hard floor mopping and machine scrubbing',
  'Entry glass and doors',
  'Waste areas and bin rooms'],

  benefits: [
  { title: 'Tenant satisfaction', text: 'Clean shared spaces reflect well on the whole building.' },
  { title: 'Clear reporting', text: 'Checklists and site notes after every visit.' },
  { title: 'Scalable scope', text: 'Add periodic tasks like carpets or windows as needed.' }],

  info: {
    duration: 'Scoped per site',
    frequency: 'Daily, weekly or custom schedules',
    preparation: 'Site induction and access briefing',
    access: 'Building access card and cleaner storage area'
  }
},
{
  slug: 'gym-cleaning',
  name: 'Gym Cleaning',
  category: 'commercial',
  short: 'Hygienic floors, equipment and change rooms.',
  overview:
  'High-traffic fitness spaces need more than a mop. We disinfect equipment, sanitise change rooms and keep floors safe and clean for members.',
  image: images.commercial,
  whoFor: 'Gyms, fitness studios, yoga and pilates studios and sports facilities.',
  idealFor: ['24/7 gyms', 'Boutique studios', 'Sports clubs', 'Pools & change rooms'],
  included: [
  'Equipment, mats and benches disinfected',
  'Change rooms, showers and toilets sanitised',
  'Rubber and timber floors cleaned',
  'Mirrors and glass polished',
  'Reception and lounge areas',
  'Waste and towel bins emptied'],

  benefits: [
  { title: 'Member retention', text: 'Cleanliness is one of the top reasons members stay.' },
  { title: 'Hygiene focused', text: 'Hospital-grade disinfectants on high-touch equipment.' },
  { title: 'Around your hours', text: 'Overnight and off-peak cleaning for 24/7 sites.' }],

  info: {
    duration: 'Scoped to facility size',
    frequency: 'Daily or multiple times per week',
    preparation: 'Equipment racked where possible',
    access: 'Off-peak or overnight access'
  }
},
{
  slug: 'medical-centre-cleaning',
  name: 'Medical Centre Cleaning',
  category: 'commercial',
  short: 'Infection-control focused cleaning for clinics.',
  overview:
  'Clinical environments need rigorous, documented cleaning. Our team follows infection-control procedures for consult rooms, waiting areas and treatment spaces.',
  image: images.medical,
  whoFor: 'GP clinics, dental practices, allied health and specialist medical suites.',
  idealFor: ['GP clinics', 'Dental practices', 'Physiotherapy', 'Specialist suites'],
  included: [
  'Consult and treatment rooms disinfected',
  'Waiting rooms and reception sanitised',
  'Colour-coded equipment to prevent cross-contamination',
  'Bathrooms cleaned and restocked',
  'Hard floors mopped with clinical-grade products',
  'Clinical waste areas maintained (non-hazardous)'],

  benefits: [
  { title: 'Compliance ready', text: 'Cleaning aligned with accreditation expectations.' },
  { title: 'Patient confidence', text: 'A visibly clean clinic builds trust from the waiting room.' },
  { title: 'Documented', text: 'Cleaning logs available for your records.' }],

  info: {
    duration: 'Scoped per practice',
    frequency: 'Daily after close',
    preparation: 'Clinical waste handled by your contractor',
    access: 'After-hours key or access code'
  }
},
{
  slug: 'school-cleaning',
  name: 'School Cleaning',
  category: 'commercial',
  short: 'Safe, thorough cleaning for classrooms and campuses.',
  overview:
  'Cleaning for schools, early learning centres and training facilities, using child-safe products and working outside teaching hours.',
  image: images.office,
  whoFor: 'Schools, childcare centres, colleges and training providers.',
  idealFor: ['Primary schools', 'Early learning', 'Colleges', 'Training centres'],
  included: [
  'Classrooms, desks and chairs wiped',
  'Bathrooms cleaned and sanitised',
  'Floors vacuumed and mopped',
  'Staff rooms and kitchens',
  'High-touch points like doors and rails',
  'Holiday deep cleans on request'],

  benefits: [
  { title: 'Child-safe products', text: 'Low-residue, appropriate products throughout.' },
  { title: 'Vetted staff', text: 'Working With Vulnerable People registration.' },
  { title: 'Term planning', text: 'Deep cleans scheduled around school holidays.' }],

  info: {
    duration: 'Scoped per campus',
    frequency: 'Daily during term; periodic in holidays',
    preparation: 'Classrooms tidied by students where possible',
    access: 'After-school access'
  }
},
{
  slug: 'restaurant-cleaning',
  name: 'Restaurant Cleaning',
  category: 'commercial',
  short: 'Kitchens and dining areas ready for every service.',
  overview:
  'Front and back-of-house cleaning for cafés, restaurants and bars — degreasing kitchens and resetting dining rooms after close.',
  image: images.commercial,
  whoFor: 'Cafés, restaurants, bars, pubs and commercial kitchens.',
  idealFor: ['Cafés', 'Restaurants', 'Bars & pubs', 'Commercial kitchens'],
  included: [
  'Kitchen floors and surfaces degreased',
  'Exterior of equipment and appliances',
  'Dining tables, chairs and booths',
  'Bathrooms cleaned and restocked',
  'Bar areas and glass surfaces',
  'Entry and waste areas'],

  benefits: [
  { title: 'Health inspection ready', text: 'Consistent standards between inspections.' },
  { title: 'Overnight service', text: 'Your team arrives to a clean kitchen.' },
  { title: 'Grease management', text: 'Regular degreasing prevents build-up.' }],

  info: {
    duration: 'Scoped per venue',
    frequency: 'Nightly or several times a week',
    preparation: 'Food stored and surfaces cleared after service',
    access: 'After close'
  }
},
{
  slug: 'industrial-cleaning',
  name: 'Industrial Cleaning',
  category: 'commercial',
  short: 'Warehouses, workshops and production spaces.',
  overview:
  'Heavy-duty cleaning for warehouses, factories and workshops, including machine scrubbing, high-level dusting and amenities.',
  image: images.pressure,
  whoFor: 'Warehouses, manufacturing sites, workshops and depots.',
  idealFor: ['Warehouses', 'Manufacturing', 'Workshops', 'Depots'],
  included: [
  'Machine scrubbing of large floor areas',
  'Amenities, lunchrooms and offices',
  'High-level dusting where safe',
  'Loading docks and entries',
  'Degreasing of floors and work zones',
  'Waste consolidation'],

  benefits: [
  { title: 'Safer sites', text: 'Clean floors reduce slip and trip hazards.' },
  { title: 'Industrial equipment', text: 'Ride-on and walk-behind scrubbers.' },
  { title: 'Safety first', text: 'Site inductions and SWMS for every job.' }],

  info: {
    duration: 'Scoped per site',
    frequency: 'Weekly, monthly or shutdown periods',
    preparation: 'Site induction required',
    access: 'Out of production hours preferred'
  }
},
{
  slug: 'aged-care-cleaning',
  name: 'Aged Care Cleaning',
  category: 'commercial',
  short: 'Respectful, hygienic cleaning for residents and staff.',
  overview:
  'Cleaning for aged care facilities and retirement living that balances strict hygiene with calm, respectful service around residents.',
  image: images.medical,
  whoFor: 'Aged care homes, retirement villages and disability support accommodation.',
  idealFor: ['Aged care homes', 'Retirement villages', 'Respite centres', 'Supported living'],
  included: [
  'Resident rooms and ensuites',
  'Communal lounges and dining rooms',
  'High-touch points disinfected',
  'Infection-control procedures',
  'Floors cleaned with low-slip methods',
  'Outbreak response cleaning'],

  benefits: [
  { title: 'Resident-first', text: 'Quiet, courteous staff who work around routines.' },
  { title: 'Infection control', text: 'Procedures aligned with aged care standards.' },
  { title: 'Rapid response', text: 'Extra cleaning available during outbreaks.' }],

  info: {
    duration: 'Scoped per facility',
    frequency: 'Daily',
    preparation: 'Facility induction and procedures review',
    access: 'Coordinated with care staff'
  }
},
{
  slug: 'airbnb-cleaning',
  name: 'Airbnb Cleaning',
  category: 'specialised',
  short: 'Fast turnovers that keep your reviews five-star.',
  overview:
  'Turnover cleaning for short-stay hosts across Hobart — cleaning, linen changes and restocking between guests, often on the same day.',
  image: images.airbnb,
  whoFor: 'Airbnb and short-stay hosts, holiday home owners and property managers.',
  idealFor: ['Airbnb hosts', 'Holiday homes', 'Serviced apartments', 'Property managers'],
  included: [
  'Full clean between guests',
  'Linen and towel change',
  'Beds made hotel-style',
  'Guest amenities restocked',
  'Kitchen reset and dishes',
  'Damage or issue reporting with photos'],

  benefits: [
  { title: 'Better reviews', text: 'Cleanliness is the most-rated category by guests.' },
  { title: 'Same-day turnovers', text: 'Between 10am checkout and 3pm check-in.' },
  { title: 'Photo reports', text: 'See the property is ready without being there.' }],

  info: {
    duration: '1.5–3 hours per turnover',
    frequency: 'Per booking',
    preparation: 'Linen and amenities stored on site',
    access: 'Lockbox or smart lock'
  }
},
{
  slug: 'builders-cleaning',
  name: 'Builders Cleaning',
  category: 'specialised',
  short: 'Post-construction cleans ready for handover.',
  overview:
  'Rough and final builders cleans for new homes, renovations and fit-outs — removing dust, residue and debris so the space is ready for handover.',
  image: images.commercial,
  whoFor: 'Builders, renovators, project managers and new homeowners.',
  idealFor: ['New homes', 'Renovations', 'Commercial fit-outs', 'Display homes'],
  included: [
  'Construction dust removed from all surfaces',
  'Windows, frames and tracks cleaned',
  'Paint and adhesive residue removed',
  'Fixtures and fittings polished',
  'Cupboards inside and out',
  'Floors vacuumed and mopped'],

  benefits: [
  { title: 'Handover ready', text: 'A finish that matches the quality of the build.' },
  { title: 'Deadline driven', text: 'We schedule around practical completion dates.' },
  { title: 'Staged cleans', text: 'Rough, final and touch-up stages available.' }],

  info: {
    duration: 'Scoped per project',
    frequency: 'One-off or staged',
    preparation: 'Trades complete and large debris removed',
    access: 'Site access and induction'
  }
},
{
  slug: 'steam-carpet-cleaning',
  name: 'Steam Carpet Cleaning',
  category: 'specialised',
  short: 'Deep hot-water extraction for carpets and rugs.',
  overview:
  'Hot-water extraction that lifts embedded dirt, allergens and stains from carpets and rugs, leaving them fresh and fast-drying.',
  image: images.carpet,
  whoFor: 'Homes, rentals, offices and anyone with high-traffic or stained carpets.',
  idealFor: ['End of lease', 'Pet owners', 'Allergy sufferers', 'Offices'],
  included: [
  'Pre-inspection and stain assessment',
  'Pre-spray treatment of traffic areas',
  'Hot-water extraction',
  'Spot stain treatment',
  'Deodorising on request',
  'Grooming for even drying'],

  benefits: [
  { title: 'Healthier air', text: 'Removes dust mites and allergens trapped in fibres.' },
  { title: 'Longer carpet life', text: 'Regular cleaning prevents fibre wear.' },
  { title: 'Fast drying', text: 'Most carpets dry within 4–6 hours.' }],

  info: {
    duration: '1–3 hours depending on rooms',
    frequency: 'Every 6–12 months or end of lease',
    preparation: 'Small items and fragile objects moved',
    access: 'Parking close to the entry for equipment'
  }
},
{
  slug: 'window-cleaning',
  name: 'Window Cleaning',
  category: 'specialised',
  short: 'Streak-free glass inside and out.',
  overview:
  'Residential and commercial window cleaning using water-fed poles and traditional methods — including frames, tracks and screens.',
  image: images.window,
  whoFor: 'Homes, shopfronts, offices and multi-storey buildings.',
  idealFor: ['Homes', 'Shopfronts', 'Offices', 'Multi-storey'],
  included: [
  'Glass cleaned inside and out',
  'Frames and sills wiped',
  'Tracks vacuumed and cleaned',
  'Fly screens brushed',
  'Water-fed pole for upper levels',
  'Hard water marks treated'],

  benefits: [
  { title: 'More light', text: 'Clean glass makes rooms noticeably brighter.' },
  { title: 'Safe at height', text: 'Ground-based systems for most two-storey homes.' },
  { title: 'Kerb appeal', text: 'Shopfronts that look open for business.' }],

  info: {
    duration: '1–4 hours depending on windows',
    frequency: 'Quarterly, biannual or one-off',
    preparation: 'Clear window sills and access paths',
    access: 'Outside access and an outdoor tap'
  }
},
{
  slug: 'pressure-cleaning',
  name: 'Pressure Cleaning',
  category: 'specialised',
  short: 'Driveways, decks, paths and exteriors restored.',
  overview:
  'High-pressure and soft-wash cleaning for driveways, decks, paths, walls and exteriors — removing mould, moss and grime safely.',
  image: images.pressure,
  whoFor: 'Homeowners, strata, commercial properties and anyone preparing a property for sale.',
  idealFor: ['Driveways', 'Decks & patios', 'Paths', 'House exteriors'],
  included: [
  'Surface assessment for pressure or soft-wash',
  'Driveways and concrete',
  'Decks and paving',
  'Walls and house exteriors',
  'Mould and moss treatment',
  'Rinse-down of surrounding areas'],

  benefits: [
  { title: 'Safer surfaces', text: 'Removes slippery moss and algae.' },
  { title: 'Protects value', text: 'Prevents long-term staining and damage.' },
  { title: 'Sale-ready', text: 'A quick lift before listing photos.' }],

  info: {
    duration: '2–5 hours depending on area',
    frequency: 'Annually or before sale',
    preparation: 'Move vehicles, pots and outdoor furniture',
    access: 'Outdoor tap and power outlet'
  }
}];