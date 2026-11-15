export type ServiceImage = { src: string; alt: string };

export type Service = {
  slug: string;
  nav: string;
  title: string;
  summary: string;
  body: string;
  points: string[];
  image: ServiceImage;
  gallery?: ServiceImage[];
};

export const services: Service[] = [
  {
    slug: 'consultancy',
    nav: 'Consultancy',
    title: 'Consultancy & Design',
    summary: 'Feasibility studies, accurate BOQs, structural design (BS 8110 / Eurocode 2) and tender-ready documents before breaking ground.',
    body: 'Good projects are won or lost before ground is broken. Our consultancy team turns ideas into costed, buildable and tender-ready plans. We combine structural engineering expertise with practical site experience, so designs are efficient, compliant and realistic to construct.',
    points: [
      'Building consultancy, feasibility studies and costing (BOQ)',
      'Architectural design coordination',
      'Structural engineering and design (BS 8110 / Eurocode 2)',
      'Quantity surveying and cost estimation',
      'Tender writing and bid documentation',
    ],
    image: {
      src: '/images/consultancy-design.jpg',
      alt: 'Engineer reviewing structural drawings and a bill of quantities',
    },
  },
  {
    slug: 'structural',
    nav: 'Structural',
    title: 'Structural & Civil Works',
    summary: 'Pad and strip foundations, reinforced concrete columns, beams, slabs, structural steel and rigorous formwork inspection.',
    body: 'The structure is the part of a building you cannot afford to get wrong. We build foundations and reinforced concrete frames exactly to design, with engineer-led checks on reinforcement, formwork and concrete at every critical stage.',
    points: [
      'Foundations: pad, strip, strap and combined footings',
      'Reinforced concrete columns, beams, slabs and staircases',
      'Structural steel works and engineered formwork',
      'Site investigation and geotechnical assessment',
    ],
    image: {
      src: '/images/column-formwork.jpg',
      alt: 'Reinforced concrete columns in formwork on a building site',
    },
  },
  {
    slug: 'building',
    nav: 'Building',
    title: 'Building Construction',
    summary: 'Residential homes, commercial blocks, renovations, walling, partitioning and high-standard interior and exterior finishes.',
    body: 'From family homes to commercial blocks, we deliver buildings with quality workmanship and clean finishes. Our team manages masonry, finishing and coordination of specialist trades, so you receive a building that matches the drawings and is ready to occupy.',
    points: [
      'Residential and commercial buildings',
      'Masonry and walling (GFL and standard block)',
      'Renovations, extensions and partitioning',
      'Interior and exterior finishing',
    ],
    image: {
      src: '/images/house-structure.jpg',
      alt: 'Two-storey block building under construction, with scaffolding',
    },
    gallery: [
      { src: '/images/house-complete.jpg', alt: 'Completed two-storey residential building' },
      { src: '/images/house-progress.jpg', alt: 'Front elevation of a two-storey block building before finishes' },
    ],
  },
  {
    slug: 'roads',
    nav: 'Roads',
    title: 'Road Works & Civil Works',
    summary: 'NCA 8 registered road rehabilitation, earthworks, grading, access driveways, drainage culverts and road safety structures.',
    body: 'As an NCA 8 registered road works contractor, we build and rehabilitate roads that keep people and goods moving. We handle earthworks, grading and drainage with the same care as the running surface, because good drainage is what makes a Kenyan road last through the rains.',
    points: [
      'Road construction and rehabilitation',
      'Earthworks, excavation and grading',
      'Drainage systems, stone pitching and culverts',
      'Access roads, driveways and perimeter pavements',
    ],
    image: {
      src: '/images/road-works.jpg',
      alt: 'Road rehabilitation works with earthmoving equipment in Kenya',
    },
  },
  {
    slug: 'water',
    nav: 'Water',
    title: 'Water & Sanitation',
    summary: 'Borehole drilling, solar and pump equipping, water reticulation, storage towers and robust sanitation systems across Kenya.',
    body: 'Reliable water changes lives in schools, health centres, homes and communities. As an NCA 8 registered water works contractor, we drill and equip boreholes, install reticulation and storage, and build sanitation infrastructure designed for long service in Kenyan conditions.',
    points: [
      'Borehole drilling, solar / electric pump equipping',
      'Water reticulation networks and community water kiosks',
      'Elevated steel and masonry storage tank installation',
      'Sanitation, septic systems and drainage infrastructure',
    ],
    image: {
      src: '/images/water-tower.jpg',
      alt: 'Steel water tower and tank on a planted site',
    },
  },
  {
    slug: 'electrical',
    nav: 'Electrical',
    title: 'Electrical & Mechanical',
    summary: 'Building wiring, fittings, plumbing installations and MEP coordination integrated to eliminate rework and clashes.',
    body: 'Building services must be safe, coordinated and installed in the right sequence. We deliver and coordinate electrical and mechanical installations alongside the main works, avoiding clashes, rework and delays.',
    points: [
      'Electrical wiring, distribution boards and fittings',
      'Plumbing installations and internal routing',
      'Mechanical services coordination',
    ],
    image: {
      src: '/images/electrical-mechanical.jpg',
      alt: 'Electrician installing wiring and fittings in a new building',
    },
  },
  {
    slug: 'project-management',
    nav: 'Management',
    title: 'Project Management & Supervision',
    summary: 'Site supervision, programmes of work, quality control, HSE compliance and digital progress reporting.',
    body: 'Disciplined supervision is what keeps a project on time, on budget and safe. We manage programmes, contractors and quality on site, and report progress digitally so clients and funders have a real-time view.',
    points: [
      'Site supervision and contract administration',
      'Programme of works and CPM scheduling',
      'Subcontractor coordination and quality control',
      'HSE and PPE compliance (NEMA / OSHA standards)',
      'Digital project tracking and progress reporting',
    ],
    image: {
      src: '/images/project-management.jpg',
      alt: 'Site supervisors in PPE reviewing the programme of works',
    },
  },
  {
    slug: 'procurement',
    nav: 'Procurement',
    title: 'Procurement & Maintenance',
    summary: 'Verified materials, certified PPE, snagging after handover and planned maintenance.',
    body: 'We source construction materials and PPE reliably, and we stay with you after handover. Planned maintenance protects your investment and keeps buildings, roads and water systems performing as intended.',
    points: [
      'Verified construction materials procurement',
      'Certified PPE supply and site safety gear',
      'Post-construction snagging and defect liability care',
      'Planned preventive maintenance contracts',
    ],
    image: {
      src: '/images/procurement-maintenance.jpg',
      alt: 'Construction materials stacked and ready for delivery to site',
    },
  },
  {
    slug: 'consulting',
    nav: 'Consulting',
    title: 'Consulting & Project Management',
    summary: 'Strategic planning, tender writing, technical training and monitoring and evaluation.',
    body: 'Beyond construction, we help organisations plan, bid and deliver better. Drawing on our Managing Director\'s background in strategic planning, we support institutions, contractors and NGOs with advisory services that strengthen capacity and accountability.',
    points: [
      'Strategic planning and institutional business advisory',
      'Public procurement tender writing and bid strategy',
      'Technical training and workforce capacity building',
      'Monitoring and evaluation (M&E) framework support',
    ],
    image: {
      src: '/images/consulting.jpg',
      alt: 'Team planning session for a construction tender and M&E framework',
    },
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

