export type ServiceStep = { title: string; text: string };
export type ServiceFaq = { q: string; a: string };

export type ServiceDetail = {
  slug: string;
  headline: string;
  metaTitle: string;
  description: string;
  lead: string;
  quoteLabel: string;
  includedIntro: string;
  included: string[];
  includedClose?: string;
  more: string[];
  processIntro: string;
  steps: ServiceStep[];
  casesIntro: string;
  cases: string[];
  casesClose?: string;
  why: string;
  compliance: string;
  faqs: ServiceFaq[];
  ctaTitle: string;
  ctaBody: string;
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: 'consultancy',
    headline: 'Consultancy and Design',
    metaTitle: 'Consultancy and Design in Nairobi and Ongata Rongai | Jortin',
    description:
      'Feasibility studies, BOQs, structural design to BS 8110 and Eurocode 2, and tender documents. Engineering-led consultancy from Ongata Rongai, serving Kenya.',
    lead: 'Good projects are won or lost before ground is broken. Jortin Limited turns a brief into a costed, buildable and tender-ready plan, with structural engineering and site experience working together so the design is efficient, compliant and realistic to construct in Kenya.',
    quoteLabel: 'Request a Consultancy Quote',
    includedIntro:
      'Consultancy is where scope, cost and risk become clear enough to decide. We support clients across Nairobi and its environs, and further afield when the brief suits, with a buildable, costed pack before construction or a bid.',
    included: [
      'Building consultancy, feasibility studies and options appraisals, so you can compare approaches before you commit.',
      'Costing and bills of quantities (BOQ), prepared so a tender or a negotiated contract can be priced on the same basis.',
      'Architectural design coordination, so architectural intent, structure and services do not clash on paper or on site.',
      'Structural engineering and design to BS 8110 and Eurocode 2, with calculations and drawings a contractor can actually build from.',
      'Quantity surveying and cost estimation, updated as the design develops.',
      'Tender writing and bid documentation for public, private and development-funded work.',
    ],
    includedClose:
      'If you already have an architect, we can join for the structural and costing package only. If you are starting from a site and a budget, we will tell you what is needed first.',
    more: [
      'A consultancy pack from Jortin is written to be used, not filed. Drawings carry the design intent, quantities carry the cost, and the two are prepared together so a tender can be priced on the same basis by every bidder. Where a design choice affects cost, we show the effect instead of hiding it in an allowance.',
      'We are honest about the limits of information. If a survey or an investigation is needed before a reliable design or cost can be produced, we say so at the start rather than presenting a confident number on thin data.',
      'When the pack is ready, we walk you through it in plain language: what is fixed, what still needs a decision, and what happens if you move straight to construction with us or with another contractor.',
    ],
    processIntro:
      'Every consultancy job has a deliverable you can point to: a note, a drawing issue, a BOQ, or tender documents. We agree that outcome first, then work forwards in open drafts rather than a single reveal at the end.',
    steps: [
      { title: 'Define the outcome', text: 'We meet you, walk the site when we can, and agree what must be in your hands at the end, whether that is a feasibility range, a design, quantities, or a full tender pack.' },
      { title: 'List what we are missing', text: 'Existing drawings, surveys, county conditions and budget limits are collected early. If ground data or a survey is needed before we can be honest about cost, we say so before design hours start.' },
      { title: 'Design and cost together', text: 'Structure, coordination and quantities move in step so price tracks a scheme that can actually be built, not a sketch on a different scale.' },
      { title: 'Review and freeze the issue', text: 'You comment on drafts, decisions are written down, and we freeze the set that will go to tender or to site.' },
      { title: 'Handover and explanation', text: 'Drawings, specifications and quantities are issued with a short walkthrough of what is fixed, what is still open, and what risks remain on the site or in procurement.' },
    ],
    casesIntro: 'These are the kinds of consultancy engagements we are set up to take on. Named jobs will be added when they can be published.',
    cases: [
      'A feasibility study and outline cost for a family house or small commercial block in Ongata Rongai or the wider Nairobi metropolitan area.',
      'Structural design and a BOQ so the works can be tendered on a like-for-like basis.',
      'Design coordination between an appointed architect and the structural package, to reduce clashes before foundation work begins.',
      'Tender documentation for a road, water or building-related bid, written so evaluators can follow the method and the price.',
    ],
    why: 'The company is young; the people leading the technical work are not. Consultancy is directed with Eng. Martin Mutuma, a civil and structural engineer trained at JKUAT, and Karithi John, who leads planning, client relationships and tender writing. You deal with the people who will also be accountable if the job later moves into construction. Designs are written for Kenyan site conditions and local procurement practice.',
    compliance:
      'Jortin Limited is NCA 8 registered for Road Works and Water Works only. We do not claim a building-works class, NCA 5, or any higher class. If a procuring entity requires a specific consulting or contractor class, we will say whether we meet it before you appoint us. Company, tax and procurement registrations are on the Compliance page and can be shared on request.',
    faqs: [
      { q: 'Do I need a full design before you can give a cost?', a: 'Not always. We can start with a feasibility range from a sketch and a site visit. A reliable BOQ needs a design that is sufficiently developed, and we will tell you which of the two you are getting.' },
      { q: 'Can you work with my architect?', a: 'Yes. Architectural design coordination is a standard part of this service. We do not need to be the lead consultant if you already have one.' },
      { q: 'Which design standards do you use?', a: 'Structural engineering and design are prepared to BS 8110 and Eurocode 2, as stated on our services overview.' },
      { q: 'What should I bring to the first meeting?', a: 'A brief, even in bullet form, the site location, any existing drawings or surveys, and a sense of budget and programme. If you do not have those yet, we will help you list what is missing.' },
    ],
    ctaTitle: 'Share the brief',
    ctaBody: 'If you have a site, a sketch or a tender deadline, share the brief. We will tell you what the consultancy package should include and the next step.',
  },
  {
    slug: 'structural',
    headline: 'Structural and Civil Works',
    metaTitle: 'Structural and Civil Works in Nairobi and Kajiado | Jortin',
    description:
      'Foundations, reinforced concrete frames and civil works with engineer-led checks. Structural construction from Ongata Rongai, serving clients across Kenya.',
    lead: 'The structure is the part of a building you cannot afford to get wrong. Jortin Limited builds foundations and reinforced concrete frames exactly to design, with engineer-led checks on reinforcement, formwork and concrete at every critical stage.',
    quoteLabel: 'Request a Structural Works Quote',
    includedIntro:
      'Foundations and the frame carry everything that follows. We build for private clients, architects and engineer-led teams across Nairobi and the wider metropolitan area, as the structural contractor on your job or as part of a wider build team.',
    included: [
      'Foundations: pad, strip, strap and combined footings, set out and built to the approved drawings.',
      'Reinforced concrete columns, beams, slabs and staircases, with attention to cover, laps, chairs and construction joints.',
      'Structural steel works and engineered formwork, where the design calls for them.',
      'Site investigation support and geotechnical assessment, arranged or coordinated when the design depends on ground data.',
      'Civil elements related to the structure, such as ground beams, retaining and other designed concrete works that sit with the frame.',
    ],
    includedClose: 'The drawings, the bar schedules and the inspection points are the job, not a vague labour package.',
    more: [
      'Concrete does not forgive carelessness. Reinforcement is checked against the bar schedule before the pour, formwork is checked for line, level and support, and concrete is tested where the specification calls for it. Every critical stage is inspected before it is covered up.',
      'Where the design depends on ground conditions, we arrange or coordinate the site investigation, so the foundation type rests on data rather than assumption. We build to the approved drawings, and when a drawing and the site disagree, we raise it in writing before we build.',
      'On mixed teams we keep the interface with masonry and services explicit, so starter bars, block bonds and sleeve locations are agreed before the next trade is on site.',
    ],
    processIntro:
      'Structural work moves through agreed hold points. We set out from the issued drawings, inspect before steel and concrete disappear behind formwork, and only release the frame when the next trade has what it needs to start cleanly.',
    steps: [
      { title: 'Issue and pre-start check', text: 'We confirm the structural drawings for construction, set grid and levels, and raise clashes or missing details in writing before excavation starts.' },
      { title: 'Foundations under inspection', text: 'Excavation, blinding and reinforcement are checked against the schedule. Anchor bolts and starter bars are signed off before any pour.' },
      { title: 'Frame in sequence', text: 'Columns, beams, slabs and stairs follow a programme agreed with the site team. Formwork, props and pour order are planned, not decided on the day.' },
      { title: 'Engineer at critical stages', text: 'A qualified civil and structural engineer reviews the stages that matter, not only the foreman. Testing is arranged and recorded where the specification requires it.' },
      { title: 'Release to the next trade', text: 'You receive a record of what was built, agreed variations, and the condition of starter bars, sleeves and surfaces for masonry or services.' },
    ],
    casesIntro: 'Named projects will be published only when we have permission and a complete description. Until then, these are the use cases.',
    cases: [
      'The reinforced concrete frame of a two-storey or low-rise house in Ongata Rongai or the Nairobi metropolitan area, including foundations, slabs and stairs.',
      'Foundation and frame works for a small commercial block, where an architect or engineer has already issued a design.',
      'Structural repairs, strengthening or an extension that must be tied carefully into an existing frame, subject to a design.',
      'Civil and structural elements for a water or road-related structure, where they fall inside a package we are competent and registered to deliver.',
    ],
    casesClose: 'Photographs of reinforcement, formwork and frames should be read as representative, except where a picture is labelled as a Jortin site.',
    why: 'Structural decisions are not left to chance on the day of the pour. Eng. Martin Mutuma, Technical Director and a civil and structural engineer trained at JKUAT, leads technical quality and site supervision, so the person accountable for the design intent is close to the inspection. Clients get one team and a standard that is written down.',
    compliance:
      'Jortin Limited is NCA 8 registered for Road Works and Water Works only. We do not claim NCA 5, and we do not claim a building or structural-works contractor class we do not hold. If a procuring entity requires a particular class, we will state our position in writing before appointment. Site work follows the approved design, OSHA practice and PPE on every Jortin site. Certificates are listed on the Compliance page.',
    faqs: [
      { q: 'Do you design the structure as well as build it?', a: 'We can. Consultancy and Design is a separate service if you need drawings and calculations first. If you already have an engineer of record, we will build to that design and raise queries formally, rather than changing the scheme on site.' },
      { q: 'Will an engineer visit the site?', a: 'Critical structural stages are checked and signed off by a qualified engineer, at a frequency we agree at the start.' },
      { q: 'What do you need before you can price foundation and frame work?', a: 'Issued-for-construction drawings, or a clearly marked tender issue, the site location, and any geotechnical information already obtained. If those are incomplete, we will help you list the missing items.' },
      { q: 'Can you take on only the structural package?', a: 'Yes. Many jobs are delivered that way, with masonry and finishes handled by others.' },
    ],
    ctaTitle: 'Send the structural drawings',
    ctaBody: 'Share the structural drawings or the brief for your foundations and frame. We will review the scope, tell you what is missing, and propose a clear way to build it.',
  },
  {
    slug: 'building',
    headline: 'Building Construction',
    metaTitle: 'Building Construction in Nairobi and Ongata Rongai | Jortin',
    description:
      'Family homes, commercial blocks, masonry, renovations and finishes, delivered to the drawings. Building construction from Ongata Rongai, Kenya.',
    lead: 'From family homes to commercial blocks, Jortin Limited delivers buildings with careful workmanship and clean finishes. We manage masonry, finishing and the coordination of specialist trades so you receive a building that matches the drawings and is ready to occupy.',
    quoteLabel: 'Request a Building Quote',
    includedIntro:
      'A building only succeeds when structure, openings, finishes and services are coordinated. We build for private clients, developers and professional teams in Nairobi, Kajiado and neighbouring counties where the scope fits our capacity.',
    included: [
      'Residential buildings, including family houses and related outbuildings.',
      'Small commercial blocks and similar occupancy buildings, where the design and our role are clearly defined.',
      'Masonry and walling in GFL and standard block, taken to line, level and the specified finish.',
      'Renovations, extensions and partitioning of existing buildings, after the existing structure has been properly understood.',
      'Interior and exterior finishing, including plaster, floors, joinery interfaces and painting.',
      'Coordination of specialist trades, including electrical and mechanical, so the building is handed over as one job.',
    ],
    more: [
      'Finishes are where a building is judged, and they are also where shortcuts show. Plaster is taken to line and level, floors are laid to the specified finish, and painting follows preparation, because paint does not hide what preparation skipped.',
      'On renovations and extensions we first understand the existing structure before touching it. Work around an occupied home is sequenced so the parts that can safely stay in use stay in use, and the site is left tidy at the end of each day.',
      'Handover is a walk-through, not a rushed key handoff. Snagging is listed, agreed repairs are scheduled, and you know who to call if something needs attention in the first months.',
    ],
    processIntro:
      'Building is coordination as much as brick and mortar. We price against a defined scope, run structure before finishes, protect completed work, and close with a snagging list you can sign off.',
    steps: [
      { title: 'Drawings, visit and scope', text: 'We start from your drawings, or point you to Consultancy and Design if the set is not ready. A site visit confirms access, levels and anything the paper cannot show.' },
      { title: 'Written offer and programme', text: 'You receive scope, exclusions and a programme tied to that scope, not a verbal estimate of storeys alone.' },
      { title: 'Structure first', text: 'Setting out, foundations and frame run with the engineer-led checks described under Structural and Civil Works.' },
      { title: 'Walling, services, finishes', text: 'Masonry and M&E trades are sequenced so first fix happens while access exists and finishes are not damaged by late changes.' },
      { title: 'Walk-through and handover', text: 'We snag with you, close agreed items, and explain who to contact in the liability period, including under Procurement and Maintenance where appointed.' },
    ],
    casesIntro: 'These are the building jobs we are set up to take on.',
    cases: [
      'A two-storey family house in Ongata Rongai or a neighbouring Nairobi metropolitan location, from foundation to finishes.',
      'An extension or renovation of an occupied home, planned so part of the building can stay in use where it is safe to do so.',
      "A small commercial or mixed-use block for a private developer, built to an architect's drawings.",
    ],
    casesClose: 'If a photograph is not from a Jortin site, it is labelled as representative only.',
    why: 'Directors are reachable, and a civil and structural engineer is involved at the critical stages. That matters on a house as much as on a larger job, because the expensive mistakes are usually in the frame, the waterproofing and the sequence of trades. We would rather give an honest programme and a clean finish than an optimistic handover date the site cannot support.',
    compliance:
      'Jortin Limited is NCA 8 registered for Road Works and Water Works only. We are not NCA-registered in a building-works category, and we do not claim NCA 5 or any building-grade class. We will be explicit about that before appointment, and we will discuss any registration a county, financier or procuring entity requires. Building work is delivered with engineer-led supervision, PPE, and regard to NEMA and OSHA expectations. Documents are on the Compliance page.',
    faqs: [
      { q: "Can you build from my architect's drawings?", a: 'Yes. That is the usual route. We will review the set, raise queries, and price what is actually drawn. If the set is incomplete, we will tell you before we start.' },
      { q: 'Do you handle approvals with the county?', a: 'We can guide you on what is typically required and coordinate with your architect or licensed professionals. Responsibility for permits should be agreed in the appointment. Jortin cannot, by itself, replace statutory approvals.' },
      { q: 'How do you price a house in Ongata Rongai or Nairobi?', a: 'From a measurable scope: drawings, a specification or a detailed brief, and a site visit, not from a verbal description of storeys alone.' },
      { q: 'Will you use your own photographs of completed work?', a: 'Yes, where we have them, as with the two-storey house on this page. Named projects will be added when the details are confirmed.' },
    ],
    ctaTitle: 'Send the drawings or a short brief',
    ctaBody: 'If you are planning a house, an extension or a small commercial building in Nairobi, Ongata Rongai or elsewhere in Kenya, send the drawings or a short brief. We will come back with a site visit, a BOQ or a proposal.',
  },
  {
    slug: 'roads',
    headline: 'Road Works and Civil Works',
    metaTitle: 'NCA 8 Road Works Contractor in Kenya | Jortin',
    description:
      'NCA 8 registered road construction and rehabilitation, earthworks, drainage, culverts and access roads. Based in Ongata Rongai, working across Kenya.',
    lead: 'Jortin Limited is an NCA 8 registered road works contractor. We build and rehabilitate roads that keep people and goods moving, and we treat earthworks, grading and drainage with the same care as the running surface, because good drainage is what makes a Kenyan road last through the rains.',
    quoteLabel: 'Request a Road Works Quote',
    includedIntro:
      'Road work in Kenya fails first at the shoulders, culverts and outfalls, not only on the carriageway. We take on access roads, estate roads, rehabilitation and drainage, within the limits of our NCA 8 road works class.',
    included: [
      'Road construction and rehabilitation, to the specified pavement layers and finish.',
      'Earthworks, excavation, filling, compaction and grading.',
      'Drainage systems, stone pitching, side drains, culverts and outfalls.',
      'Access roads, driveways and perimeter pavements for housing, institutions and private developments.',
      'Related civil works that belong with the road: setting out, drainage structures and simple road furniture specified in the works.',
    ],
    includedClose: 'We will not describe this as a national-highway practice. NCA 8 is a defined class, and we stay inside it.',
    more: [
      'A road is a drainage system with a surface on top. Shoulders, side drains, culverts and outfalls are built before the finishing layer, because water is what usually destroys a Kenyan road, not traffic alone.',
      'Rehabilitation starts with finding out why the road failed. We walk the alignment, note where water ponds and where the surface has broken, and repair the cause as well as the surface, so the same failure does not return in the next rains.',
      'Plant access and traffic for residents or pupils are part of the method, not an afterthought. We plan how material arrives, how spoil leaves, and how the road stays passable where the brief requires it.',
    ],
    processIntro:
      'Road jobs fail in the drains long before the wearing course fails. We walk the alignment, confirm scope against NCA 8, build earthworks and drainage first, and leave a running surface plus a record you can file.',
    steps: [
      { title: 'Walk the alignment', text: 'We note drainage paths, services, plant access and existing failures on the road you want built or rehabilitated.' },
      { title: 'Scope and method in writing', text: 'Earthworks, drainage and pavement layers are priced in the order they will be built. If a design or county specification applies, we build to it.' },
      { title: 'Set-out and earthworks', text: 'Width, level and camber are established before spoil is moved. Compaction and layer works follow the agreed specification.' },
      { title: 'Drainage before surfacing', text: 'Culverts, side drains and outfalls are installed so water has somewhere to go in the rains.' },
      { title: 'Surface, tidy-up, records', text: 'Wearing course and shoulders are completed, the site is left clean, and you receive notes and levels for your engineer or your file.' },
    ],
    casesIntro: 'Until a job can be named, we will not present library road photographs as Jortin contracts.',
    cases: [
      'An access road or internal road for a housing scheme or institution in Ongata Rongai, Kajiado or the Nairobi metropolitan area.',
      'Rehabilitation of a worn access road, including regrading, drainage repairs and a new running surface, for a private client or an institution.',
      'Driveways, parking courts and perimeter pavements tied into a building project.',
      'Culverts, stone pitching and drain improvements on an existing alignment that floods in the rains.',
    ],
    why: 'You get a contractor who will talk about drainage first, and a team that also delivers water and civil packages. Directors are reachable, work is documented, and we would rather narrow a scope that sits outside NCA 8 than oversell a class we do not hold.',
    compliance:
      'Jortin Limited is registered with the National Construction Authority for Road Works, class NCA 8. We are also NCA 8 registered for Water Works. We do not claim NCA 5 or a higher road class, and we will not take on work that requires a different category. Registration can be verified on the NCA contractor search portal. Company, tax and procurement documents are on the Compliance page. PPE is required on every Jortin site.',
    faqs: [
      { q: 'What does NCA 8 mean for the size of road you can build?', a: 'It is a National Construction Authority class with defined limits. We will compare your scope to that class at the outset and tell you honestly if the job sits outside it.' },
      { q: 'Do you only work in Ongata Rongai?', a: 'We are based there, in Kajiado County, and we take on road and access work in Nairobi, Kajiado and other Kenyan locations where the job fits our class and our capacity.' },
      { q: 'Can you work under a supervising engineer?', a: 'Yes. We are used to building to a specified design and to opening the work for inspection at agreed hold points.' },
      { q: 'What do you need in order to quote?', a: 'A location, an indication of length and width, photographs or a walkover, notes on drainage problems, and any existing design or specification. A site visit is the most reliable start.' },
    ],
    ctaTitle: 'Send the location and a short brief',
    ctaBody: 'If you have an access road, a rehabilitation job or a drainage problem on a road you already use, send the location and a short brief. We will tell you whether it sits inside our NCA 8 road works class and how we would approach it.',
  },
  {
    slug: 'water',
    headline: 'Water and Sanitation',
    metaTitle: 'NCA 8 Water Works and Boreholes in Kenya | Jortin',
    description:
      'NCA 8 water works: borehole drilling and equipping, reticulation, storage towers and sanitation. Contractor based in Ongata Rongai, serving Kenya.',
    lead: 'Reliable water changes daily life in schools, health centres, homes and communities. As an NCA 8 registered water works contractor, Jortin Limited drills and equips boreholes, installs reticulation and storage, and builds sanitation infrastructure intended for long service in Kenyan conditions.',
    quoteLabel: 'Request a Water Works Quote',
    includedIntro:
      'Water work only holds together if siting, drilling, pumping, storage and distribution are treated as one system. We deliver for private clients, institutions and communities across Nairobi and its environs, within our NCA 8 water works class.',
    included: [
      'Borehole drilling and development, followed by test pumping so the yield is known before equipment is chosen.',
      'Solar or electric pump equipping, matched to the tested borehole and the demand.',
      'Water reticulation networks, household or institutional connections, and community water kiosks where they are specified.',
      'Elevated steel or masonry storage tanks, including tower structures of the kind shown in our own site photography.',
      'Sanitation, septic systems and drainage infrastructure that belongs with the water system.',
    ],
    more: [
      'A borehole is only one part of a water system. The pump must match the tested yield, the rising main and storage must match the demand, and the reticulation must deliver the water to where it is actually used. We design and build these parts as one system so they do not fight each other.',
      'Where grid power is unreliable, solar pumping is often the practical choice, and the panels, controller and pump are sized against the test results rather than a catalogue claim. Handover includes an explanation of how the system works and what routine care it needs.',
      'Commissioning means a test run with you present: flow at the tap, tank levels, pump cut-in, and what to check after the first heavy rain on the drainage that serves the system.',
    ],
    processIntro:
      'Water work is scoped as one system: source, pumping, storage and distribution. Test pumping comes before pump selection, permissions are listed before the rig mobilises, and you see the system run at commissioning.',
    steps: [
      { title: 'Demand and site reality', text: 'We confirm who needs water, the likely demand, site constraints, and whether to start with drilling, storage, reticulation or sanitation.' },
      { title: 'Permissions and written scope', text: 'Siting and consents are identified early, with a clear line on what you apply for, what we coordinate, and what must be in place before drilling.' },
      { title: 'Drill, develop, test', text: 'Development and test pumping produce yield data before equipment is bought.' },
      { title: 'Equip as one system', text: 'Pump, controls, rising main, tank and reticulation are installed and pressure-tested together.' },
      { title: 'Commission with you present', text: 'We run the system with you, explain routine care, and note maintenance options after handover.' },
    ],
    casesIntro: 'Named water jobs will be published only with confirmed facts.',
    cases: [
      'A borehole for a family home or a small institution in Kajiado or the Nairobi metropolitan area, drilled, tested, equipped and connected to storage.',
      'A solar-equipped borehole where grid power is unreliable or unavailable.',
      'An elevated storage tank and reticulation upgrade for a school, clinic or community point, including a kiosk where the brief requires one.',
      'Septic and drainage works that must be designed and built with the water supply, not as an afterthought.',
    ],
    why: 'Water is one of the two NCA categories in which we are registered, so this is core work. You can reach a director, you receive a written scope, and pump selection is based on test pumping, not guesswork.',
    compliance:
      'Jortin Limited is registered with the National Construction Authority for Water Works, class NCA 8. We are also NCA 8 registered for Road Works. We do not claim NCA 5 or a higher water class, and we will check your scope against NCA 8 before we accept the job. Required borehole and water-resource consents are treated as mandatory. Company, tax and procurement details are on the Compliance page. PPE is required on site.',
    faqs: [
      { q: 'Can you guarantee that a borehole will find water?', a: 'No responsible contractor can guarantee yield before drilling and testing. We will discuss siting and risk, then let the test pumping speak.' },
      { q: 'Do you do solar and electric equipping?', a: 'Yes. The choice depends on power availability, demand and the tested yield. We will recommend on that basis, not on a single preferred product.' },
      { q: 'What permits are required?', a: 'Requirements vary by location and by the nature of the works. We will list the typical consents for your site at the proposal stage and agree who is applying for each.' },
      { q: 'Can you install only the tank or only the reticulation?', a: 'Yes, if the existing borehole and pump data are known and adequate. If they are not, we will say so, because a new tank cannot fix a weak source.' },
    ],
    ctaTitle: 'Send the site and the demand',
    ctaBody: 'If you need a borehole, a storage tower, reticulation or sanitation works in Kenya, send the site location and a short description of the demand. We will advise on scope, on our NCA 8 water class, and on the practical next step.',
  },
  {
    slug: 'electrical',
    headline: 'Electrical and Mechanical',
    metaTitle: 'Electrical and Mechanical Works in Nairobi | Jortin',
    description:
      'Electrical wiring, plumbing and mechanical coordination on building projects in Nairobi, Ongata Rongai and across Kenya, sequenced with the main works.',
    lead: 'Building services must be safe, coordinated and installed in the right sequence. Jortin Limited delivers and coordinates electrical and mechanical installations alongside the main works, so clashes, rework and delays are designed out rather than discovered at the finishing stage.',
    quoteLabel: 'Request an M&E Quote',
    includedIntro:
      'Electrical and mechanical work belongs in the building programme, not as a last-minute add-on. We usually deliver it with a building job in Nairobi and the wider metro area, and we can take a defined M&E package within a wider team.',
    included: [
      'Electrical wiring, distribution boards, fittings, and the containment needed to keep the installation tidy and inspectable.',
      'Plumbing installations and internal routing, including first and second fix, testing and making good.',
      'Mechanical services coordination, so specified equipment, ventilation or other mechanical items are placed, detailed and installed in the right order.',
      "Coordination with the builder's work: chases, sleeves, builder openings and finishes, so the services do not fight the masonry or the frame.",
    ],
    includedClose:
      'Where a portion of the work must be carried out by a licensed specialist, for example a licensed electrician for connection and certification, we will say so and coordinate that specialist rather than blur the responsibility.',
    more: [
      'Electrical and mechanical work fails when it fights the structure. We plan the first fix before slabs and walls close, keep sleeves, chases and boards in the right places, and coordinate with the building sequence so nothing has to be broken out afterwards.',
      'Statutory connections and the points that require a licensed person are identified at the proposal stage. We coordinate the specialists, keep the records, and hand over an installation that has been tested before the building is occupied.',
      'We agree where meters, boards and main isolators sit before finishes go on, because moving them later is expensive and often visible in the wrong place.',
    ],
    processIntro:
      'Electrical and mechanical work succeeds when it is drawn into the building programme. Routes and boards are agreed before slabs and walls close, licensed connections are named upfront, and systems are tested before occupation.',
    steps: [
      { title: 'Brief and drawing review', text: 'We read the services set, or help you define a simple brief, and list assumptions before pricing.' },
      { title: 'Coordination meeting', text: 'Pipe, conduit and board routes are fixed with structure and masonry while openings still exist.' },
      { title: 'First fix and inspection', text: 'Containment, runs, sleeves and pipework go in, are checked, then covered with agreement from the site team.' },
      { title: 'Second fix and test', text: 'Fittings and sanitaryware are installed, circuits and lines are tested, and finishes are made good around them.' },
      { title: 'Handover and utilities', text: 'We walk you through the installation, note any outstanding Kenya Power or water connections, and hand over the records agreed in the appointment.' },
    ],
    casesIntro: 'Named jobs will be added when they can be described accurately.',
    cases: [
      'Full electrical and plumbing installation for a new family house in Ongata Rongai or the Nairobi metropolitan area, coordinated with our building package.',
      "Services for a small commercial or institutional building, installed to the consultant's drawings.",
      'Rewiring, additional circuits or plumbing alterations as part of a renovation or partitioning job.',
      "Coordination of mechanical equipment specified by others, including placing, builder's work and interface details.",
    ],
    why: 'The value is the coordination. Failures on Kenyan sites are often sequencing failures: a slab cast without sleeves, a wall plastered before first fix, a board that fights the layout. Because we also deliver structural and building work, we can hold that sequence, and still use a licensed specialist where the law requires one.',
    compliance:
      'Jortin Limited is NCA 8 registered for Road Works and Water Works only. We do not claim an electrical or mechanical contractor class, and we do not claim NCA 5. This page describes work we deliver and coordinate. It is not a registration we do not hold. Statutory connections and licensed-person requirements will be identified in the proposal. PPE is required on site. Documents are on the Compliance page.',
    faqs: [
      { q: 'Do you connect the building to Kenya Power?', a: "We can prepare the installation and coordinate the application process, but the utility connection follows the utility's own procedure and timeline. We will be clear about what is in our price and what depends on the utility." },
      { q: "Can you work to an electrical or mechanical engineer's design?", a: 'Yes. That is the preferred route on larger or institutional jobs. We will raise queries rather than change the design quietly.' },
      { q: 'Do you only install services on buildings you are already constructing?', a: 'No. We can be appointed for a defined electrical, plumbing or coordination package, provided the interfaces with the main contractor are agreed.' },
      { q: 'What do you need to quote?', a: 'Plans, even if simple, a list of fittings or a specification if you have one, the location, and whether this is a new build or a renovation. A site visit is useful for renovations.' },
    ],
    ctaTitle: 'Send the drawings or a short brief',
    ctaBody: 'If you need electrical, plumbing or mechanical work coordinated with a building in Nairobi, Ongata Rongai or elsewhere in Kenya, send the drawings or a short brief. We will tell you how the package should be structured and who must be involved.',
  },
  {
    slug: 'project-management',
    headline: 'Project Management and Supervision',
    metaTitle: 'Construction Project Management in Kenya | Jortin',
    description:
      'Site supervision, programmes, quality control, HSE and digital progress reporting. Project management from Ongata Rongai for clients across Kenya.',
    lead: 'Disciplined supervision is what keeps a project on time, on budget and safe. Jortin Limited manages programmes, contractors and quality on site, and reports progress clearly so clients and funders can see what is happening without standing on the scaffolding.',
    quoteLabel: 'Request a Project Management Quote',
    includedIntro:
      'Someone has to be accountable on site and in the programme. We supervise works, hold the schedule, check quality and report progress in plain language, whether Jortin is also building or you need supervision of a defined package across Nairobi and its environs.',
    included: [
      'Site supervision and contract administration, including instructions, records and the management of variations.',
      'A programme of works and scheduling, including CPM where the job needs it, updated as the site actually moves.',
      'Subcontractor coordination and quality control, so trades arrive in order and work is checked before it is covered up.',
      'Health, safety and environmental discipline on site, including PPE and alignment with OSHA practice and NEMA guidance where it applies.',
      'Digital project tracking and progress reporting, with photographs and a written summary at the agreed frequency.',
    ],
    includedClose: 'We will agree, in the appointment, whether we are managing our own works, supervising others, or doing a defined mix of the two.',
    more: [
      'A programme is a promise only if it is maintained. We issue a baseline, update it as the site actually moves, and use look-ahead planning so trades and materials arrive in sequence instead of all at once.',
      'Reports are written by the person who walked the site that week. Photographs, a short note on progress and risk, and a clear list of the decisions we need from you, at the interval we agreed. Urgent matters are raised between reports, not saved for them.',
      'Variations are recorded when they happen: what changed, who approved it, and what it does to time and cost, so the file still makes sense six months later.',
    ],
    processIntro:
      'Supervision is a rhythm: baseline, weekly control, written reports. We agree authority and reporting lines at appointment, then keep programme, quality and HSE visible to you or your funder.',
    steps: [
      { title: 'Appointment and baseline', text: 'Drawings, contract, budget authority and completion criteria are confirmed. A baseline programme is issued for later measurement.' },
      { title: 'Site set-up', text: 'Access, welfare, storage, HSE rules and how instructions flow are fixed before output is expected.' },
      { title: 'Weekly site control', text: 'Look-aheads, inspections and trade coordination are run to a calendar. Decisions and delays are written down.' },
      { title: 'Reports you can file', text: 'Photographs, progress, risk and the decisions we need from you arrive on the agreed interval.' },
      { title: 'Close-out and handover', text: 'Snagging, as-built information and a handover pack suitable for a client or development partner.' },
    ],
    casesIntro: 'These are supervision engagements we can appoint against. Named roles will be published only when the facts are confirmed.',
    cases: [
      'Supervision of a residential or small commercial building in Ongata Rongai or Nairobi, with weekly reports to the owner or the architect.',
      'Programme and site management on a road or water package that Jortin is also building under our NCA 8 classes.',
      'An independent supervision role where a client or a funder wants inspection and reporting without combining it with the works contract.',
      'Coordination of several subcontractors on a renovation that cannot close the premises entirely.',
    ],
    why: 'Reporting is only useful if the person writing it is close to the work. Our Technical Director is a practising civil and structural engineer, and our Managing Director comes from a planning background. You can reach a director, not only a rotating foreman, and we would rather flag a delay early than hide it.',
    compliance:
      'Project management and supervision are professional services. They do not extend our registrations beyond NCA 8 Road Works and NCA 8 Water Works. We do not claim NCA 5 or a building-works class. If we supervise work that requires a particular contractor class, that class remains the works contractor\'s obligation. Sites we control require PPE and follow OSHA practice. Credentials are on the Compliance page.',
    faqs: [
      { q: 'Is this the same as consulting?', a: 'No. Consulting covers advisory work: strategic planning, tender writing, training and monitoring and evaluation. This page covers site supervision, programmes, quality and reporting. If you need both, we will propose them as distinct scopes.' },
      { q: 'Can you supervise a contractor you are not?', a: 'Yes, if the appointment, the authority to instruct, and the reporting line are clear. We will not take a supervision role that exists only on paper.' },
      { q: 'How often will we get reports?', a: 'We agree the frequency at the start, typically weekly on an active building site, and we keep to it. Urgent risks are raised between reports.' },
      { q: 'Do you provide HSE documentation?', a: 'We apply HSE discipline on sites we control and can provide the site records agreed in the appointment. We will not sell a paperwork pack as a substitute for actual supervision.' },
    ],
    ctaTitle: 'Send the brief and the current status',
    ctaBody: 'If you need a programme, a supervisor or a reporting rhythm on a building, road or water project in Kenya, send the brief and the current drawings or contract status. We will propose a supervision scope you can appoint against.',
  },
  {
    slug: 'procurement',
    headline: 'Procurement and Maintenance',
    metaTitle: 'Construction Procurement and Maintenance in Kenya | Jortin',
    description:
      'Materials and PPE procurement, snagging and planned maintenance for buildings, roads and water systems. Based in Ongata Rongai, serving Kenya.',
    lead: 'Jortin Limited sources construction materials and PPE on a reliable basis, and we can stay with you after handover. Planned maintenance protects the investment and keeps buildings, roads and water systems performing as they were intended to.',
    quoteLabel: 'Request a Procurement or Maintenance Quote',
    includedIntro:
      'We source construction materials and certified PPE to your specification, and we can stay on after handover to snag defects and maintain the asset. Appoint either offer on its own, or as follow-on care after work we have built, across Nairobi and its environs.',
    included: [
      'Construction materials procured against a specification or an agreed schedule, not against a vague request for standard goods.',
      'Inspection on delivery, so quantities and obvious defects are checked before materials are built in.',
      "Certified PPE and site safety gear for Jortin sites and, where agreed, for a client's own teams.",
      'Post-construction snagging and defect-liability care for work we have delivered, during the period agreed in the contract.',
      'Planned preventive maintenance visits for buildings, water systems and road or drainage assets, on a written schedule.',
      'Responsive call-outs for agreed items, with a clear note of what is included in a visit and what is a separate repair.',
    ],
    more: [
      'Materials bought cheap and fitted badly cost more than materials bought right. We source to the specification, inspect what arrives, and keep the delivery records that a maintenance team will need later.',
      'A maintenance arrangement is most useful when the contractor already knows the asset. We take maintenance contracts on systems we have been able to inspect, and we will tell you honestly when a repair is maintenance and when it is construction.',
      'Substitution requests are never silent. If a specified item is unavailable, you see the alternative, the standard it meets, and the price difference before it is bought.',
    ],
    processIntro:
      'Procurement and maintenance start from a list you can audit: BOQ, specification or condition report. We source to that list, check deliveries, and keep simple records your site team or accountant can use.',
    steps: [
      { title: 'List or condition check', text: 'Procurement begins from a BOQ or materials schedule. Maintenance begins from handover records or a condition visit.' },
      { title: 'Written offer', text: 'You see items, exclusions and realistic lead times before an order is placed.' },
      { title: 'Source and inspect', text: 'Materials and PPE meet the specification on delivery. Maintenance visits are scheduled with agreed access.' },
      { title: 'Deliver or visit', text: 'Goods arrive where the site needs them. Maintenance findings are written up, with photos where useful.' },
      { title: 'File the record', text: 'Delivery notes or service sheets are handed over for your file and for the next contractor.' },
    ],
    casesIntro: 'Named engagements will be listed when they can be published.',
    cases: [
      'Materials procurement for a house or small commercial job in Ongata Rongai or Nairobi, tied to a BOQ.',
      'PPE supply at mobilisation of a Jortin site, and replacements during the works.',
      'Defect-liability inspections and close-out of snags after handover of a building or a water system we have completed.',
      'A planned maintenance arrangement for a borehole, pump and storage tower, so the system is serviced before it fails.',
    ],
    why: 'We have a reason to care about material quality, because we also build. A maintenance relationship with the contractor who already knows the borehole, the roof or the drainage is usually more useful than a new visitor each time something fails. We will not take a maintenance contract on an asset we have not been able to inspect.',
    compliance:
      'Procurement and maintenance do not change our NCA position. Jortin Limited is NCA 8 registered for Road Works and Water Works only. We do not claim NCA 5 or a building-works class. If a maintenance inspection leads to a construction-level repair on a road or water asset, the original class still applies. Tax and company documents are available via the Compliance page.',
    faqs: [
      { q: 'Can you supply materials only, without building?', a: 'Yes. We need a specification or a detailed list, a delivery location, and an agreed standard for substitutions if a specified item is unavailable.' },
      { q: 'Do you offer a formal maintenance contract?', a: 'We can, after a visit. The contract should list the assets, the visit frequency, what is included, and how repairs are authorised.' },
      { q: 'What happens if a defect appears after handover?', a: 'If it is within the agreed defect-liability period and within our scope, we will attend and put it right. If it is outside that period or outside our scope, we will still tell you what we see and how it can be handled.' },
      { q: 'Can you maintain a borehole you did not drill?', a: 'Often yes, if we can inspect it, obtain the available yield and equipment data, and agree a fair scope. If the data is missing, the first visit becomes an investigation.' },
    ],
    ctaTitle: 'Send the list or the site details',
    ctaBody: 'If you need materials, PPE, snagging or a maintenance plan for a building, road or water system in Kenya, send the list or the site details. We will come back with a written, limited scope.',
  },
  {
    slug: 'consulting',
    headline: 'Consulting and Advisory',
    metaTitle: 'Construction Consulting and Tender Writing in Kenya | Jortin',
    description:
      'Strategic planning, public procurement tender writing, training and M&E support for institutions and NGOs. Consulting from Ongata Rongai, Kenya.',
    lead: "Beyond construction, Jortin Limited helps organisations plan, bid and deliver with more discipline. Drawing on our Managing Director's background in strategic planning, we support institutions, contractors and NGOs with advisory work that strengthens capacity and accountability.",
    quoteLabel: 'Request a Consulting Quote',
    includedIntro:
      'At Jortin, we help organisations that need a practical plan, a credible tender, workforce training or a monitoring framework, before a site opens or while a programme is already running. We work with boards, NGOs and institutions across Nairobi and nationally, where the brief fits our expertise.',
    included: [
      'Strategic planning and institutional business advisory, including facilitation of a practical plan an organisation can actually use.',
      'Public procurement tender writing and bid strategy, so a submission is complete, consistent and easy for an evaluator to follow.',
      'Technical training and workforce capacity building, scoped around a defined skill need rather than a generic workshop title.',
      'Monitoring and evaluation (M&E) framework support, including indicators, tools and reporting rhythms that a board or a funder can read.',
    ],
    includedClose: 'We will write a short terms-of-reference style scope for every engagement, so the deliverable is obvious: a plan, a bid pack, a training event, or an M&E framework.',
    more: [
      'Advice is only worth what it costs if it survives contact with procurement. We write plans, bids and frameworks with the evaluation in mind, so the method, the price logic and the reporting commitments are clear to the people who have to read them.',
      'Because we also build, our advice is anchored in what Kenyan sites can actually deliver. When we help you write a bid, we are honest about the classes it must rely on, including our own limits if Jortin is a proposed contractor.',
      'Every engagement ends with a short close-out note listing what was delivered, what assumptions we relied on, and what you might want to appoint separately next.',
    ],
    processIntro:
      'Consulting engagements end with something usable: a plan, a bid, training materials or an M&E toolkit. We scope in writing, draft in the open, and separate follow-on work instead of blurring it into the first fee.',
    steps: [
      { title: 'Name the decision', text: 'We start with what must be decided: submit a tender, adopt a plan, train a team, or run a monitoring rhythm.' },
      { title: 'Scope and inputs', text: 'Tasks, workshops, documents we need from you, and the delivery date are agreed before work begins.' },
      { title: 'Draft and revise', text: 'Material returns to you in drafts at agreed points. Comments are incorporated, not collected at the end only.' },
      { title: 'Issue the deliverable', text: 'The final product is formatted so you can submit, circulate or implement it without another rewrite pass.' },
      { title: 'Close-out note', text: 'We record what was delivered, assumptions used, and optional follow-on such as bid clarifications or a later M&E review.' },
    ],
    casesIntro: 'Organisations listed on the Clients page are not automatically consulting references.',
    cases: [
      'Tender writing for a road, water or building-related bid on the Kenyan public procurement system, including IFMIS or PPIP opportunities where the client is eligible.',
      'A strategic plan facilitation for a small institution or implementing organisation that needs a clear three-year direction and a work plan.',
      'Bid strategy support for a contractor who has the technical capacity but needs help structuring the submission.',
      'An M&E framework for a water, education or infrastructure programme that must report to a board or a development partner.',
    ],
    why: 'We keep consulting separate from site project management. Karithi John, Managing Director, holds a Master\'s degree in Strategic Planning and leads this advisory work. When an assignment later needs engineering input, Eng. Martin Mutuma is available. Advice comes from people who also deliver work on the ground, which keeps plans and bids realistic.',
    compliance:
      'Consulting does not extend our contractor registrations. Jortin Limited is NCA 8 registered for Road Works and Water Works only. We do not claim NCA 5 or a building-works class. If we help you write a bid, we will be honest about the classes it must rely on, including our own limits if Jortin is a proposed contractor. IFMIS and PPIP registration is described on the Compliance page. Confidentiality should be agreed at appointment.',
    faqs: [
      { q: 'Can you write a tender and also be the contractor?', a: 'Sometimes, but not where that would be a conflict, for example writing evaluation materials for a client who is later buying the same work. We will declare the conflict and step back from one of the roles if needed.' },
      { q: 'Do you guarantee that a bid will win?', a: 'No. We work to make the submission complete, consistent and compliant with the invitation. The award decision is not ours.' },
      { q: 'Is training delivered at your office or at our site?', a: 'Either, depending on the brief. We will agree the venue, the audience and the practical exercises in the scope.' },
      { q: 'How is this different from Project Management and Supervision?', a: 'That service is on-site control of a live construction job. This service is advisory. If you need both, we will price them separately.' },
    ],
    ctaTitle: 'Send a short brief and any deadline',
    ctaBody: 'If your organisation needs a plan, a tender, a training session or an M&E framework, send a short brief and any deadline that applies. We will tell you whether we are the right adviser and what the deliverable would be.',
  },
];

export function getServiceDetail(slug: string) {
  return serviceDetails.find((detail) => detail.slug === slug);
}
