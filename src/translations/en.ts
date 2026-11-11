import { BenefitItem, StepItem, AudienceItem, FAQItem } from '../types';

export const en = {
  nav: {
    brand: 'Devlonix',
    product: '3D Plot Explorer',
    overview: 'Overview',
    features: 'Features',
    howItWorks: 'How It Works',
    benefits: 'Benefits',
    faq: 'FAQ',
    exploreLiveDemo: 'Explore Live Demo',
    getFreeDemo: 'Get a Free Project Demo',
    callUs: 'Call Sales',
  },
  hero: {
    headline: 'Your Plot Project Deserves More Than a Static Layout.',
    subheadline:
      'Turn your entire plotted development into an interactive 3D experience. Let buyers explore every plot, understand the layout, and connect with your sales team — right from their phones.',
    primaryCta: 'Explore Live Demo',
    secondaryCta: 'Watch How It Works',
    discussCta: 'Discuss Your Project',
    trustIndicators: [
      'Interactive 3D Experience',
      'Mobile & Desktop Ready',
      'Designed for Real Estate Developers'
    ],
    liveDemoBadge: 'LIVE DEMO AVAILABLE',
    interactiveNotice: 'Click to launch the live interactive 3D web experience in real time'
  },
  problem: {
    badge: 'THE CURRENT CHALLENGE',
    headline: 'Buying a Plot Is a Big Decision. Understanding Its Layout Shouldn\'t Be Difficult.',
    subheadline:
      'Real estate developers spend lakhs marketing plotted townships, yet rely on 2D PDFs and paper site maps that buyers struggle to interpret.',
    traditionalTitle: 'Traditional 2D Layouts & Paper Blueprints',
    interactiveTitle: 'Interactive 3D Plot Explorer',
    painPoints: [
      {
        title: 'Static PDF layouts are difficult to explore',
        desc: 'Buyers pinch and zoom on flat PDF drawings, losing context of road widths, green belts, and project scale.'
      },
      {
        title: 'Buyers struggle to understand plot locations',
        desc: 'Finding where Plot #42 sits relative to the entrance, park, or corner facing is nearly impossible on flat paper.'
      },
      {
        title: 'Sales teams repeatedly explain plot details',
        desc: 'Sales executives waste hours on phone calls repeatedly explaining plot dimensions, frontages, and orientations.'
      },
      {
        title: 'Multiple calls required to clarify availability',
        desc: 'Buyers cannot see which plots are open, reserved, or suited to their vastu/facing preference without manual back-and-forth.'
      },
      {
        title: 'Traditional presentations fail to inspire buyer confidence',
        desc: 'Static images look ordinary and fail to convey the prestige, planning, and lifestyle of a master-planned township.'
      }
    ],
    closingStatement:
      'Instead of asking buyers to understand a complicated layout, give them an experience they can explore themselves.'
  },
  productReveal: {
    badge: 'PRODUCT REVEAL',
    headline: 'Introducing a New Way to Explore Real Estate Projects.',
    description:
      '3D Plot Explorer transforms your traditional plotting layout into an interactive digital experience where every plot becomes easier to explore, understand, and inquire about.',
    cta: 'Explore the Live Experience',
    featuresPill: [
      '3D Orbit & Pan Navigation',
      'Real-time Plot Highlight',
      'Orientation & Vastu Clarity',
      'One-tap Sales Inquiries'
    ]
  },
  videoDemo: {
    badge: 'PRODUCT WALKTHROUGH',
    headline: 'See the Experience. Not Just the Features.',
    subheadline:
      'See how a buyer can explore an entire project, select a plot and discover its details in just a few interactions.',
    tryLiveCta: 'Try the Live 3D Demo',
    watchCta: 'Play Interactive Walkthrough',
    simulatedVideoTitle: '3D Plot Explorer Interactive Walkthrough',
    timestamp: '01:45 Full Walkthrough',
    controlsNotice: 'Interactive preview based on the live Netlify deployment'
  },
  interactiveFeatures: {
    badge: 'CORE CAPABILITIES',
    headline: 'Explore Every Plot. Understand Every Detail.',
    subheadline:
      'Engineered specifically for land developers, colonizers, and plotted townships to accelerate customer understanding.',
    groups: {
      a: {
        title: 'Interactive 3D Masterplan',
        items: [
          'Explore the entire development in three dimensions',
          'Smooth pan, rotate, and zoom across all sectors',
          'Clear road networks, parks, and amenity boundaries',
          'Birds-eye orientation and entry gate perspective'
        ]
      },
      b: {
        title: 'Individual Plot Selection',
        items: [
          'Click or tap any parcel to highlight instantly',
          'Clean illuminated plot boundary identification',
          'Distinct plot numbers visible from high or low elevation',
          'Instant synchronization with project master inventory'
        ]
      },
      c: {
        title: 'Configured Plot Information',
        items: [
          'Plot number and sector / block classification',
          'Exact frontage and depth dimensions (e.g. 30 × 50 ft)',
          'Area displayed in Sq. Ft. or Gaj / Sq. Yards',
          'Direction facing (North, East, Park-Facing, Corner)',
          'Availability status and pricing where configured'
        ]
      },
      d: {
        title: 'Easy Direct Enquiry',
        items: [
          'Instant WhatsApp enquiry pre-filled with selected plot details',
          'Schedule on-site inspection or guided video visit',
          'Direct call button connecting with project sales manager',
          'Lead capture stored directly without app downloads'
        ]
      }
    }
  },
  mobileExperience: {
    badge: 'MOBILE-FIRST ARCHITECTURE',
    headline: 'Your Entire Project. In Your Customer\'s Pocket.',
    subheadline:
      'Over 85% of real estate inquiries in India happen on mobile phones. Devlonix 3D Plot Explorer is optimized for instant web browsing on any smartphone.',
    quote: 'Buyers don\'t need to download an app. They can open your project link directly in their mobile browser and explore the layout.',
    highlights: [
      {
        title: 'Zero App Installation',
        desc: 'Instant loading via web link on Chrome, Safari, WhatsApp in-app browser.'
      },
      {
        title: 'Intuitive Touch Gestures',
        desc: 'One-finger drag to rotate, two-finger pinch to zoom smoothly into any sector.'
      },
      {
        title: 'Slide-up Plot Card',
        desc: 'Tapping a plot opens a clean bottom drawer with dimensions, area, and instant contact.'
      },
      {
        title: 'Optimized on 4G / 5G',
        desc: 'Ultra-lightweight 3D rendering tested for seamless operation across standard Android & iOS devices.'
      }
    ],
    desktopMobileCompare: {
      title: 'Seamless Experience Across Every Device',
      desktopText: 'Immersive high-definition presentation for sales galleries and large screens.',
      mobileText: 'Pocket-sized interactive layout for WhatsApp sharing and on-the-go site visits.'
    }
  },
  benefits: {
    badge: 'BUSINESS VALUE',
    headline: 'More Than a Digital Layout. A Smarter Project Presentation.',
    subheadline:
      'Purpose-built technology that strengthens developer credibility and empowers sales teams.',
    items: [
      {
        id: 'benefit-1',
        title: 'Present Your Project Better',
        description: 'Give customers a more immersive and professional way to explore your development that stands out from competitor flyers.',
        highlight: 'Immersive Presentation'
      },
      {
        id: 'benefit-2',
        title: 'Make Plot Information Easier to Understand',
        description: 'Help buyers find plot dimensions, road widths, and orientations instantly without confusion or repeated questions.',
        highlight: 'Zero Confusion'
      },
      {
        id: 'benefit-3',
        title: 'Create a Better Buyer Experience',
        description: 'Allow prospective buyers to explore the township comfortably at home with family before visiting the site.',
        highlight: 'Family Decision Making'
      },
      {
        id: 'benefit-4',
        title: 'Support Your Sales Team',
        description: 'Equip channel partners and field executives with a visual tool on their phones during site visits and client pitches.',
        highlight: 'Sales Enablement'
      },
      {
        id: 'benefit-5',
        title: 'Share Your Project Anywhere',
        description: 'Send a single clean link via WhatsApp, digital ads, and social media campaigns instead of heavy unreadable PDF attachments.',
        highlight: 'Frictionless Sharing'
      },
      {
        id: 'benefit-6',
        title: 'Build a Strong Digital Identity',
        description: 'Differentiate your plotted brand as a forward-thinking, transparent developer committed to customer clarity.',
        highlight: 'Brand Authority'
      }
    ] as BenefitItem[]
  },
  howItWorks: {
    badge: '4-STEP IMPLEMENTATION',
    headline: 'From Your Existing Layout to a 3D Digital Experience.',
    subheadline:
      'We handle the technical 3D modeling and development. You supply your approved site plan.',
    steps: [
      {
        step: '01',
        title: 'Share Your Project Layout',
        description: 'Provide your approved site plan (CAD, PDF, or image), plot inventory dimensions, and project branding assets.',
        detail: 'Accepts standard 2D town planning drawings'
      },
      {
        step: '02',
        title: 'We Build Your Experience',
        description: 'Our team crafts the interactive 3D digital masterplan with roads, landscaping, plot geometries, and coordinates.',
        detail: 'Precision 3D modeling & web optimization'
      },
      {
        step: '03',
        title: 'Review Your Project',
        description: 'Review the staging link with your sales team. Verify plot numbering, dimensions, boundaries, and contact actions.',
        detail: 'Collaborative verification & refinement'
      },
      {
        step: '04',
        title: 'Launch and Share',
        description: 'Publish your branded link on your custom domain, share via WhatsApp, and integrate into marketing campaigns.',
        detail: 'Live web deployment ready for buyers'
      }
    ] as StepItem[]
  },
  whoIsItFor: {
    badge: 'TARGET DEVELOPERS',
    headline: 'Built for Businesses That Sell Plots.',
    subheadline:
      'Whether you develop a 20-plot boutique enclave or a 500-acre integrated township, 3D Plot Explorer scales to your project.',
    cards: [
      {
        id: 'residential',
        title: 'Residential Plot Developers',
        subtitle: 'Plotted Housing & Gated Colonies',
        description: 'Help families choose their dream residential land parcel by understanding park locations, internal street access, and sunlight.',
        idealFor: 'Plotted societies, private layouts, Nagar Nigam approved colonies'
      },
      {
        id: 'township',
        title: 'Township Developers',
        subtitle: 'Large-Scale Integrated Developments',
        description: 'Present massive phased acreage with sector divisions, central boulevards, commercial plazas, and community amenities.',
        idealFor: 'Multi-phase townships, RERA registered mega-projects'
      },
      {
        id: 'commercial',
        title: 'Commercial Land Developers',
        subtitle: 'Retail Plazas & Business Parks',
        description: 'Showcase high-visibility frontage plots, customer parking access, and highway arterial connectivity to commercial investors.',
        idealFor: 'SCO plots, commercial corridors, market complexes'
      },
      {
        id: 'industrial',
        title: 'Industrial Plot Developers',
        subtitle: 'Logistics Parks & Warehousing Hubs',
        description: 'Provide clear heavy vehicle turning radius, truck bays, power substation proximity, and industrial utility corridors.',
        idealFor: 'Logistics hubs, light manufacturing zones, industrial parks'
      },
      {
        id: 'farmhouse',
        title: 'Farmhouse Developers',
        subtitle: 'Agri-tourism & Country Estates',
        description: 'Highlight expansive acreage, organic orchards, peripheral fencing, lakefront views, and tranquil natural surroundings.',
        idealFor: 'Weekend retreats, eco-living estates, farmland parcels'
      },
      {
        id: 'villa',
        title: 'Villa & Gated Community Developers',
        subtitle: 'Luxury Plotted & Custom Villa Enclaves',
        description: 'Combine plot boundary clarity with visual architectural clubhouses, swimming pools, and landscaped walking avenues.',
        idealFor: 'Boutique villa lands, luxury golf communities'
      }
    ] as AudienceItem[]
  },
  comparison: {
    badge: 'THE COMPARISON',
    headline: 'See the Difference for Yourself.',
    subheadline:
      'Compare how your plotted development is experienced through traditional methods versus Devlonix 3D Plot Explorer.',
    traditionalHeading: 'Traditional Presentation',
    interactiveHeading: '3D Plot Explorer by Devlonix',
    rows: [
      {
        aspect: 'Navigation & Perspective',
        traditional: 'Flat 2D static layout; impossible to rotate or visualize height and road scale',
        interactive: 'Full 3D orbit, smooth pan, zoom from regional masterplan down to plot turf'
      },
      {
        aspect: 'Plot Discovery',
        traditional: 'Searching through tiny blurry text numbers on a PDF; easy to miss lots',
        interactive: 'Instant click-to-highlight plot selection with illuminated boundary lines'
      },
      {
        aspect: 'Information Access',
        traditional: 'Buyer must cross-reference separate Excel sheets or call sales for dimensions',
        interactive: 'Direct plot drawer showing dimensions, facing, total area, and configured status'
      },
      {
        aspect: 'Mobile Usability',
        traditional: 'Painful pinch-and-drag on PDFs; text gets illegible and clumsy on phones',
        interactive: 'Touch-optimized web app that opens instantly in browser without downloads'
      },
      {
        aspect: 'Lead Capture & Sales',
        traditional: 'Disconnected contact form; buyer forgets which plot they were viewing',
        interactive: 'Integrated WhatsApp and enquiry form pre-populated with exact plot details'
      }
    ]
  },
  customization: {
    badge: 'BRAND RECOGNITION',
    headline: 'Your Project. Your Brand. Your Digital Experience.',
    subheadline:
      'We tailor the 3D Plot Explorer interface to match your corporate identity and project specifications.',
    items: [
      { title: 'Company Logo & Theme', desc: 'Display your official developer brand identity and project colors.' },
      { title: 'Project-Specific Masterplan', desc: 'Accurately modeled to match your sanctioned civil site engineering plan.' },
      { title: 'Plot Numbering & Boundaries', desc: 'Exact sector naming, plot alphanumeric numbering, and dimensions.' },
      { title: 'Configured Plot Information', desc: 'Show area in Sq. Ft. or Gaj, vastu orientation, and configured details.' },
      { title: 'Project Photography & Aerials', desc: 'Include actual project site progress photos or drone references.' },
      { title: 'Direct Sales Contact Details', desc: 'Your sales hotline, office address, and WhatsApp business number.' },
      { title: 'Custom Domain Hosting', desc: 'Deploy on your domain (e.g. plots.yourtownship.com) for high brand trust.' },
      { title: 'CRM & Lead Integrations', desc: 'Deliver inbound lead notifications directly to your sales team.' }
    ],
    note: 'Customizations are tailored to your approved project plan and configured parameters.'
  },
  credibility: {
    badge: 'PRODUCT INTEGRITY',
    headline: 'Built to Make Your Project Easier to Explore.',
    subheadline:
      'Devlonix builds real estate technology focused on genuine utility, intuitive design, and transparent buyer communication.',
    pillars: [
      {
        title: 'Verified Live Demo',
        desc: 'Experience the real, working 3D web application deployed live right now — no smoke and mirrors.'
      },
      {
        title: 'Real Estate Developer Focus',
        desc: 'Built specifically for developers in Varanasi and across India who sell land parcels and gated layouts.'
      },
      {
        title: 'Zero Tech Overhead for You',
        desc: 'Our engineering team converts your drawing files into a finished web experience. No developer coding required.'
      }
    ],
    experienceTitle: 'Experience the Product Yourself',
    experienceDesc: 'Test the live demo in your browser. Rotate the layout, select a plot, and see how your customers will explore your property.',
    liveDemoBtn: 'Launch Live 3D Demo',
    demoUrl: 'https://plot-explorer-demo.netlify.app/'
  },
  faq: {
    badge: 'FREQUENTLY ASKED QUESTIONS',
    headline: 'Everything You Need to Know.',
    subheadline:
      'Clear, honest answers to help developers evaluate 3D Plot Explorer for their projects.',
    items: [
      {
        question: 'What is a 3D Plot Explorer?',
        answer: '3D Plot Explorer by Devlonix is an interactive web-based 3D visualization platform that transforms traditional static 2D site plans into an interactive masterplan. Prospective buyers can rotate, zoom, select individual plots, view dimensions and orientations, and contact your sales team directly from their web browser.'
      },
      {
        question: 'How does it work?',
        answer: 'You share your approved layout blueprint (CAD, PDF, or image) along with plot specifications and branding. Our team models the development in 3D, creates the interactive web application, and provides you with a shareable web link and embed code.'
      },
      {
        question: 'Does it work on mobile phones?',
        answer: 'Yes, seamlessly. The application is built mobile-first using modern WebGL technology. It works smoothly on Android and iPhone devices across Chrome, Safari, and social media in-app browsers with fluid touch controls.'
      },
      {
        question: 'Do buyers need to install an application?',
        answer: 'No. Buyers do not need to download anything from the Play Store or App Store. It loads instantly in their mobile or desktop browser via a simple web link.'
      },
      {
        question: 'Can I use my existing PDF layout?',
        answer: 'Yes. We accept standard civil site plans, town planning blueprints, CAD drawings (DWG/DXF), or clear high-resolution PDF and image files as the baseline reference.'
      },
      {
        question: 'Can plot prices and availability be updated?',
        answer: 'Yes. The system can be configured to display plot availability (Available, Reserved, Sold) and pricing if you choose to enable it. These parameters can be updated as inventory sells.'
      },
      {
        question: 'Can the website use my company\'s branding?',
        answer: 'Yes. The interface is customized with your developer logo, project color accents, sales contact details, and project name to reinforce your brand identity.'
      },
      {
        question: 'Can I integrate WhatsApp enquiries?',
        answer: 'Yes. Direct WhatsApp inquiry buttons can be integrated, automatically pre-filling the message with the specific plot number and dimensions the buyer is viewing.'
      },
      {
        question: 'How long does development take?',
        answer: 'Typical turnaround time is 5 to 10 working days depending on the project acreage, total number of plots, and complexity of surrounding amenities.'
      },
      {
        question: 'What information do you need to get started?',
        answer: 'We only require: 1) Your approved site layout plan with plot dimensions, 2) Developer logo and project name, and 3) Sales contact information (phone number, WhatsApp, and office address).'
      },
      {
        question: 'Can I use my own domain?',
        answer: 'Yes. We can deploy the 3D Plot Explorer on your custom subdomain (e.g., plots.yourcompany.com or explore.yourproject.in) or provide an iframe embed for your existing website.'
      },
      {
        question: 'Is the platform suitable for large plotted developments?',
        answer: 'Yes. Our 3D rendering pipeline is optimized to handle developments ranging from 20 boutique villa plots to mega-townships with hundreds of plots and extensive road networks without lag.'
      }
    ] as FAQItem[]
  },
  finalCta: {
    headline: 'Ready to Show Your Project in a Better Way?',
    subheadline:
      'Let\'s transform your plotted development into an interactive digital experience that buyers can explore from anywhere.',
    primaryCta: 'Get a Free Project Demo',
    secondaryCta: 'Discuss Your Project on WhatsApp',
    contactDirect: 'Speak directly with our technical team: +91 98390 00000 · devlonixstudio623@gmail.com'
  },
  enquiryForm: {
    badge: 'GET STARTED',
    title: 'Request a Free Project Demo',
    subtitle: 'Share your project details. We\'ll prepare a personalized 3D visualization preview for your development.',
    fullNameLabel: 'Full Name *',
    fullNamePlaceholder: 'e.g. Rajesh Kumar',
    companyLabel: 'Company / Developer Name *',
    companyPlaceholder: 'e.g. Kashi Greens Infrastructure',
    phoneLabel: 'Phone / WhatsApp Number *',
    phonePlaceholder: '+91 98765 43210',
    emailLabel: 'Email Address (Optional)',
    emailPlaceholder: 'name@developer.com',
    locationLabel: 'Project Location *',
    locationPlaceholder: 'e.g. Varanasi, UP (or your city)',
    plotCountLabel: 'Approximate Number of Plots *',
    plotCountOptions: [
      { value: 'under-50', label: 'Under 50 plots' },
      { value: '50-150', label: '50 to 150 plots' },
      { value: '150-300', label: '150 to 300 plots' },
      { value: '300-plus', label: '300+ plots (Township)' }
    ],
    projectTypeLabel: 'Project Category *',
    projectTypeOptions: [
      { value: 'residential', label: 'Residential Plotted Colony' },
      { value: 'township', label: 'Integrated Mega Township' },
      { value: 'farmhouse', label: 'Farmhouse / Country Plots' },
      { value: 'commercial', label: 'Commercial / SCO Plots' },
      { value: 'industrial', label: 'Industrial / Logistics Park' }
    ],
    layoutAvailableLabel: 'Do you have an approved site plan / PDF ready? *',
    yesOption: 'Yes, site plan is ready',
    noOption: 'Currently in planning',
    requirementsLabel: 'Additional Requirements or Questions',
    requirementsPlaceholder: 'Tell us about your project timeline or any specific visualization features you need...',
    submitBtn: 'Request My Project Demo',
    submittingBtn: 'Submitting Details...',
    successTitle: 'Project Demo Request Received!',
    successMessage: 'Thank you for reaching out. Our real estate visualization team will review your project details and contact you via WhatsApp / Phone within 24 hours with a personalized preview.',
    submitAnother: 'Submit Another Enquiry',
    privacyNote: 'Your information is confidential and used solely to prepare your project preview.'
  },
  footer: {
    brandName: 'Devlonix',
    tagline: 'Making Real Estate Projects Easier to Explore.',
    productName: '3D Plot Explorer',
    aboutText: 'Devlonix empowers real estate developers, township builders, and land colonizers with interactive 3D web experiences that simplify buyer discovery and accelerate plot sales.',
    quickLinks: 'Navigation',
    contactTitle: 'Direct Inquiries',
    location: 'Varanasi, Uttar Pradesh, India',
    expansionText: 'Serving developers Pan-India',
    copyright: '© 2026 Devlonix. All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    whatsappCta: 'Chat on WhatsApp',
    demoNotice: 'Live product showcase available at plot-explorer-demo.netlify.app'
  }
};
