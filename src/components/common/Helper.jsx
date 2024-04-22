import {
  AboutUs,
  AutomatedArrow,
  BangladeshFlag,
  BigSquareCube,
  BusinessGrowth,
  Career,
  CaseStudy,
  Computer,
  Courier,
  CourierBusIcon,
  Delivery,
  DeliveryTruck,
  Design,
  Documentation,
  Ecommerce,
  Enterprise,
  Facebook,
  FasterOrder,
  FinanceDollor,
  IndianFlag,
  IndustrialSupplies,
  Industry,
  Instagram,
  Integrated,
  IntegratedPlatform,
  Inventory,
  LastDelivery,
  Linkedin,
  Location,
  LocationGoogle,
  LocationIcon,
  MapLocation,
  MarketingGraph,
  Omnichannel,
  Order,
  OrderIcon,
  Plus,
  RoleUsers,
  SalesGraph,
  ScanIcon,
  Setting,
  ShoppingBag,
  ShoppingCart,
  SquareCube,
  Twitter,
  UseCase,
  Video,
} from "./Icons";
import Company from "./Navbar/Company";
import Integrations from "./Navbar/Integrations";
import Platform from "./Navbar/Platform";
import Pricing from "./Navbar/Pricing";
import Solution from "./Navbar/Solution";

// NAVBAR LINKS
export const navDropdownLink = [
  {
    title: "Platform",
    sublinks: <Platform />,
    dropdownWidth: "w-[418px]",
  },
  {
    title: "Solutions",
    sublinks: <Solution />,
    dropdownWidth: "w-[500px]",
  },
  {
    title: "Integrations",
    sublinks: <Integrations />,
    dropdownWidth: "w-[500px]",
  },
  {
    title: "Pricing",
    sublinks: <Pricing />,
    dropdownWidth: "w-[500px]",
  },
  {
    title: "Company",
    sublinks: <Company />,
    dropdownWidth: "w-[782px]",
  },
];
// COUNTRY DROPDOWN NAVBAR
export const CountiesName = [
  { name: "BD", flag: <BangladeshFlag /> },
  { name: "IN", flag: <IndianFlag /> },
  { name: "US", flag: <BangladeshFlag /> },
  { name: "UK", flag: <IndianFlag /> },
  { name: "CH", flag: <BangladeshFlag /> },
  { name: "NZ", flag: <IndianFlag /> },
];
// BRAND WE SERVE
export const brandsList = [
  {
    title: "100K+",
    description: "Locations Delivered",
  },
  {
    title: "5K+",
    description: "Orders Per Day",
    className: "before:hidden md:before:block",
  },
  {
    title: "150K+",
    description: "End Users Served",
    className: "mt-[34px] md:mt-0",
  },
  {
    title: "500K+",
    description: "Total Active Businesses",
    className: "before:hidden mt-[34px] md:mt-0",
  },
];
export const byNumberList = [
  {
    title: "500+",
    description: "Active Businesses",
  },
  {
    title: "2021",
    description: "Year founded",
  },
  {
    title: "100K+",
    description: "Delivered Locations",
  },
  {
    title: "200K+",
    description: "Monthly Orders Processed",
  },
];

export const supplyChainList = [
  {
    title: "Web & Mobile Order Management",
    description:
      "Simplify order management with Web & Mobile Order Monitoring. Track sales orders and KPIs effortlessly for improved performance.",
    icon: <OrderIcon />,
    className: "pt-0",
  },
  {
    title: "Scan & Trace Technology",
    description:
      "Elevate your warehouse experience with Scan & Trace Technology. Enjoy superior inventory control and tracking for streamlined operations and efficiency.",
    icon: <ScanIcon />,
  },
  {
    title: "Delivery & Dispatch Management",
    description:
      "Elevate your delivery operations with Dispatch & Delivery Management. Efficiently track orders, optimize routes, and save valuable time for a seamless delivery experience.",
    icon: <CourierBusIcon />,
    className: "border-b-0",
  },
];
// E-COMMERCE SUIT
export const ecommercesList = [
  {
    title: "Multichannel Order Management",
    description:
      "Effortlessly manage all the orders from various sources. Cut down half of the manual labor dependencies, and secure business growth",
    icon: <OrderIcon />,
    className: "md:pt-8",
  },
  {
    title: "Smart Inventory Management",
    description:
      "Eliminates issues like Overstocking/Understocking through advanced inventory tracking. From sourcing to delivery – map all your products and stay updated, always.",
    icon: <LocationIcon />,
  },
  {
    title: "Seamless Courier Platform Integration",
    description:
      "Say goodbye to manual order data entries on your delivery partner's portal. Integrate your preferred system through APIs, and generate pick-up requests within a few clicks.",
    icon: <CourierBusIcon />,
    className: "border-b-0",
  },
];

export const testimonialsVideoList = [
  {
    title: "Having An E-Commerce Website",
    spantitle: " Is Not Enough",
    video: "/assets/video/video.mp4",
    image:
      "/assets/images/homepage/testimonials-video/test-video-image-one.webp",
  },
  {
    title: "Nuport Ecommerce Suite for",
    spantitle: " Ecommerce Businesses (Bangla)",
    video: "/assets/video/video.mp4",
    image:
      "/assets/images/homepage/testimonials-video/test-video-image-two.webp",
  },
  {
    title: "Nuport E-Commerce Suite for ",
    spantitle: "Online Businesses",
    video: "/assets/video/video.mp4",
    image:
      "/assets/images/homepage/testimonials-video/test-video-image-three.webp",
  },
];
export const mobileNavbar = [
  {
    title: "Platform",
    sublinks: <Platform />,
  },
  {
    title: "Solutions",
    sublinks: <Solution />,
  },
  {
    title: "Integrations",
    sublinks: <Integrations />,
  },
  {
    title: "Pricing",
    sublinks: <Pricing />,
  },
  {
    title: "Company",
    sublinks: <Company />,
  },
];
export const trustedPartners = [
  {
    image: "/assets/images/homepage/trusted-by/autorific.png",
    title: "autorific",
    width: 177,
    customWidth: "xl:w-[177px]",
  },
  {
    image: "/assets/images/homepage/trusted-by/british-american.png",
    title: "british-american",
    customWidth: "xl:w-[91px]",
    width: 91,
  },
  {
    image: "/assets/images/homepage/trusted-by/atal-food.png",
    title: "atal-food",
    width: 59,
    customWidth: "xl:w-[59px]",
  },
  {
    image: "/assets/images/homepage/trusted-by/lg.png",
    title: "lg",
    customWidth: "xl:w-[129px]",
    width: 129,
  },
  {
    image: "/assets/images/homepage/trusted-by/orgagenic.png",
    title: "orgagenic",
    customWidth: "xl:w-[111px]",
    width: 111,
  },
  {
    image: "/assets/images/homepage/trusted-by/confidence.png",
    title: "confidence",
    customWidth: "xl:w-[182px]",
    width: 182,
  },
  {
    image: "/assets/images/homepage/trusted-by/maarij.png",
    title: "maarij",
    customWidth: "xl:w-[140px]",
    width: 140,
  },
];
export const trustedBrand = [
  {
    image: "/assets/images/homepage/trusted-by/british-american.png",
    title: "british-american",
    width: "146",
    maxWidth: "max-w-[146px]",
  },
  {
    image: "/assets/images/homepage/trusted-by/lg.png",
    title: "lg",
    width: "129",
    maxWidth: "max-w-[129px]",
  },
  {
    image: "/assets/images/homepage/trusted-by/autorific.png",
    title: "autorific",
    width: "177",
    maxWidth: "max-w-[177px]",
  },
  {
    image: "/assets/images/homepage/trusted-by/orgagenic.png",
    title: "orgagenic",
    maxWidth: "max-w-[111px]",
    width: "111",
  },
  {
    image: "/assets/images/homepage/trusted-by/atal-food.png",
    title: "atal-food",
    maxWidth: "max-w-[59px]",
    width: "59",
  },
  {
    image: "/assets/images/homepage/trusted-by/maarij.png",
    title: "maarij",
    maxWidth: "max-w-[140px]",
    width: "140",
  },
];
export const faqList = [
  {
    title: "Does Nuport offer any free trials or demos?",
    description:
      "Yes, we offer a free trial and live demos of our services to help you experience their value firsthand",
  },
  {
    title:
      "What is Nuport's primary focus as a supply chain automation company?",
    description:
      "Yes, we offer a free trial and live demos of our services to help you experience their value firsthand",
  },
  {
    title: "How can I get in touch with Nuport's customer support team?",
    description:
      "Yes, we offer a free trial and live demos of our services to help you experience their value firsthand",
  },
  {
    title: "What is the pricing structure for Nuport E-Commerce Suite?",
    description:
      "Yes, we offer a free trial and live demos of our services to help you experience their value firsthand",
  },
  {
    title:
      "Is Nuport's software compatible with existing systems and software?",
    description:
      "Yes, we offer a free trial and live demos of our services to help you experience their value firsthand",
  },
];

// NETWORK PART CARD LIST
export const networkPartCards = [
  {
    image: "/assets/images/homepage/network-part/rashedul-islam.png",
    companyImageStyle: "w-[50px] sm:w-[63px] h-[50px] sm:h-[56px]",
    companyImage:
      "/assets/images/homepage/network-part/hf-food-service-logo.png",
    name: "Md Rashedul Islam",
    role: "Founder, CEO at Halal Food Service",
    description:
      '"Order tracking is super easy with Nuport and we save a lot of time via courier integrations."',
  },
  {
    image: "/assets/images/homepage/network-part/jamil-akbar.png",
    companyImageStyle: "w-[75px] sm:w-[83px] h-[30px] sm:h-[36px]",
    companyImage: "/assets/images/homepage/network-part/i-farmer-logo.png",
    name: "Jamil Akbar",
    role: "COO at iFARMER",
    description:
      "“Nuport is indeed an incredible platform for turning the whole process of supply chain businesses into automation. This platform has made a significant change in our supply chain by automating agricultural distribution planning.”",
  },
  {
    image: "/assets/images/homepage/network-part/moshaddik.png",
    companyImageStyle: "w-[57px] h-[50px] sm:w-[63px] sm:h-[56px]",
    companyImage: "/assets/images/homepage/network-part/steeltech.png",
    name: "Md. Mosaddik Hossain",
    role: "Head of IT, Steeltech Industries",
    description: `"Almost 90% of our planning time has been reduced through Nuport's automation which we did manually before."`,
  },
  {
    image: "/assets/images/homepage/network-part/anit.png",
    companyImageStyle: "w-[85px] h-[40px] sm:w-[95px] sm:h-[46px]",
    companyImage: "/assets/images/homepage/network-part/munchies.png",
    name: "Anit Kumar",
    role: "COO, Munchies",
    description: `"Nuport’s core competency lies in it’s strong technology team and domain expertise"`,
  },
];
export const fastDecisionFaq = [
  {
    icon: <SquareCube />,
    title: "Complete supply chain visibility",
    description:
      "With a vertically integrated suite of supply chain apps, you can get company-wide visibility from one dashboard.",
    image: "/assets/images/homepage/faster-decision/modular-dashboard.webp",
  },
  {
    icon: <MapLocation />,
    title: "Effortless geocoded integration",
    description:
      "Maintain location consistency and reduce errors due to manual input with fully automated address picking directly from 3rd party order forms. ",
    image: "/assets/images/homepage/faster-decision/geocoded.webp",
  },
  {
    icon: <LocationGoogle />,
    title: "Keep track of inventory",
    description:
      " Keep your inventory on autopilot with operator-friendly scanning and tracing applications along with predictive fulfillment analytics.",
    image: "/assets/images/homepage/faster-decision/track-inventory.webp",
  },
  {
    icon: <DeliveryTruck />,
    title: "Instant delivery planning",
    description:
      "Save 85% percent of planning time by integrating geocoded order management, vehicle management and a powerful routing engine.",
    image: "/assets/images/homepage/faster-decision/instant-delivery.webp",
  },
];

export const increaseEfficiency = [
  {
    title: "Integrate",
    description:
      "Start by integrating your supply chain components for unified data flow.",
  },
  {
    title: "Automate",
    description:
      "Automate mundane tasks, saving time and labor for more strategic initiatives.",
  },
  {
    title: "Increase throughput",
    description:
      "Boost efficiency and achieve remarkable growth with increased throughput.",
  },
];

export const footerCompanyList = [
  {
    title: "About us",
    link: "/about",
  },
  {
    title: "Career",
    link: "#career",
  },
  {
    title: "Blog",
    link: "/blogs",
  },
  {
    title: "Videos",
    link: "#videos",
  },
  {
    title: "Return and Refund Policy",
    link: "#policy",
  },
];
export const footerSolutionList = [
  {
    title: "Roles",
    link: "/",
  },
  {
    title: "Industries",
    link: "/",
  },
  {
    title: "Use Cases",
    link: "/",
  },
];
export const socialIconList = [
  {
    socialmedia: "Facebook",
    icon: <Facebook />,
    link: "https://facebook.com",
  },
  {
    socialmedia: "Twitter",
    icon: <Twitter />,
    link: "https://twitter.com/",
  },
  {
    socialmedia: "Linkedin",
    icon: <Linkedin />,
    link: "https://www.linkedin.com/",
  },
  {
    socialmedia: "Instagram",
    icon: <Instagram />,
    link: "https://www.instagram.com/",
  },
];
export const platformNav = [
  {
    link: "E-Commerce",
    url: "/e-commerce",
    imagePosition: "right-4",
    img: "/assets/images/common/navbar/ecommerce.png",
  },
  {
    link: "Enterprise",
    url: "/enterprise",
    imagePosition: "right-0",
    img: "/assets/images/common/navbar/enterprise.png",
  },
];
export const solutionNav = [
  {
    title: "By Industry",
    paragraph: "Distribution and supply chain management",
    url: "/industry",
    icon: <Industry />,
  },
  {
    title: "By Use Case",
    paragraph: "Manufacturing, distribution or warehousing business",
    url: "/use-case",
    icon: <UseCase />,
  },
  {
    title: "By Role",
    paragraph: "Your supply chain solution by roles",
    url: "/role",
    icon: <RoleUsers />,
  },
];
export const integrateNav = [
  {
    title: "Order Management",
    paragraph: "For multi-channel order processing",
    url: "/",
    icon: <SquareCube />,
  },
  {
    title: "Courier Network",
    paragraph: "For an integrated shipping environment",
    url: "/",
    icon: <Courier />,
  },
];
export const pricingNav = [
  {
    title: "E-commerce",
    paragraph: "Distribution and supply chain management",
    url: "/",
    icon: <ShoppingCart />,
  },
  {
    title: "Enterprise",
    paragraph: "Manufacturing, distribution or warehousing business",
    url: "/",
    icon: <Enterprise />,
  },
];
export const CompanyNav = [
  {
    heading: "About company",
    linkTabs: [
      {
        title: "About us",
        paragraph: "What we are, team, culture",
        url: "/about",
        icon: <AboutUs />,
      },
      {
        title: "Careers",
        paragraph: "Build with us",
        url: "/careers",
        icon: <Career />,
      },
    ],
  },
  {
    heading: "resources",
    linkTabs: [
      {
        title: "Video",
        paragraph: "Testimonials, Product Videos, Promos",
        url: "/",
        icon: <Video />,
      },
      {
        title: "Case Study",
        paragraph: "Client use cases per industry",
        url: "/",
        icon: <CaseStudy />,
      },
      {
        title: "Documentation",
        paragraph: "Product integration docs and info ",
        url: "/blogs",
        icon: <Documentation />,
      },
    ],
  },
];

export const AchieveBusinessGoalsCards = [
  {
    icon: <Order />,
    range: "50%",
    title: "faster order processing",
    description:
      "Cut down your manual order processing time by half through Integrated Order Management module.",
  },
  {
    icon: <Delivery />,
    range: "85%",
    title: "quicker delivery planning",
    description:
      "Accelerate delivery planning time up to 85% with Automated Route Optimization and Dispatch Management",
  },
  {
    icon: <FasterOrder />,
    range: "30% ",
    title: "faster order fulfillment",
    description:
      "Speed up your overall order fulfillment time up to 30% through Auto-Packing and Picking instructions",
  },
  {
    icon: <BusinessGrowth />,
    range: "10X ",
    title: "business growth",
    description:
      "Make faster decisions with business intelligence and secure up to 10X business growth",
  },
];

// PRODUCT PAGE
// Discover your solutions
export const empowerings = [
  {
    icon: <Omnichannel />,
    title: "Omnichannel Order Management",
    widthTitle: "max-w-[300px]",
    description:
      "Simplify order management and scale up your business with an integrated omnichannel order management system.",
  },
  {
    icon: <Inventory />,
    title: "Inventory Management",
    widthTitle: "max-w-[170px]",
    description:
      "Effortlessly track every SKU and reduce inventory conflict with an all-encompassing inventory management system.",
  },
  {
    icon: <Integrated />,
    widthTitle: "max-w-[170px]",
    title: "Integrated Shipping",
    description:
      "Ship your orders at lightning-fast speed with an integrated environment with the top couriers in your area.",
  },
];
// Enterprise work process
export const workProcess = [
  {
    icon: <ShoppingBag />,
    title: "Supply Chain Consulting",
    description:
      "Dedicated experts with decades of experience in supply chain that deploy, and scale tailored solutions.",
  },
  {
    icon: <LocationIcon />,
    title: "Supply chain platform",
    description:
      "Complete and fully integrated port - to - porch logistics for B2B and B2C - from freight to warehousing to fulfillment.",
  },
  {
    icon: <SquareCube />,
    title: "Networked logistics experience",
    description:
      "A single platform that connects your entire supply, so you can orchestrate and optimize with ease.",
  },
];
// Discover solution enterprise
export const enterpriseSolutions = [
  {
    icon: <BigSquareCube />,
    title: "Expertise & Supply Chain Consulting",
    widthTitle: "max-w-[300px]",
    description:
      "With the team’s combined experience of over 20 years in operational logistics, we will give you the best customer-centric supply chain.",
  },
  {
    icon: <IntegratedPlatform />,
    title: "Integrated Platform",
    widthTitle: "max-w-[170px]",
    description:
      "Nuport’s Cloud Supply Chain Platform delivers an integrated ecosystem to excel at everything you need within your company’s supply chain.",
  },
  {
    icon: <Setting />,
    widthTitle: "max-w-[170px]",
    title: "Automation & Insights",
    description:
      "We pride ourselves of building an ecosystem with strong emphasis on API integrations and automations to do more with less.",
  },
];
export const discoverYourFasqs = [
  {
    title: "Why do online businesses need Nuport?",
    description:
      "Customers today expect faster service, but as days pass, it’s getting increasingly hard to meet their expectations. No matter what kind of business you run, day by day your business will grow; forcing you to take on new challenges.",
    descriptionTwo:
      "What separates Nuport E-commerce Suite from other automation tools is with Nuport, you’ll get everything you need to run your e-commerce business smoothly in one single space. As a result, it’ll be easier to provide the best quality customer experience, and solve any inventory/order management issue.",
    descriptionThree:
      "Nuport E-commerce Suite is designed in a way that you won’t have to worry about subscribing to multiple platforms to overcome the additional challenges that comes with scaling your business. Nuport will make your business operations seamless as you’re getting all necessary information in a single, centralized, and user-friendly dashboard. With Nuport, you will be able to effortlessly tackle all the challenges from inventory monitoring, and order fulfillment.",
  },

  {
    title:
      "What type of e-commerce company benefits from using Nuport E-commerce Suite?",
    description:
      "Customers today expect faster service, but as days pass, it’s getting increasingly hard to meet their expectations. No matter what kind of business you run, day by day your business will grow; forcing you to take on new challenges.",
    descriptionTwo:
      "Customers today expect faster service, but as days pass, it’s getting increasingly hard to meet their expectations. No matter what kind of business you run, day by day your business will grow; forcing you to take on new challenges.",
    descriptionThree:
      "Customers today expect faster service, but as days pass, it’s getting increasingly hard to meet their expectations. No matter what kind of business you run, day by day your business will grow; forcing you to take on new challenges.",
  },

  {
    title: "Can Nuport replace my website or shopping cart?",
    description:
      "Customers today expect faster service, but as days pass, it’s getting increasingly hard to meet their expectations. No matter what kind of business you run, day by day your business will grow; forcing you to take on new challenges.",
    descriptionTwo:
      "Customers today expect faster service, but as days pass, it’s getting increasingly hard to meet their expectations. No matter what kind of business you run, day by day your business will grow; forcing you to take on new challenges.",
    descriptionThree:
      "Customers today expect faster service, but as days pass, it’s getting increasingly hard to meet their expectations. No matter what kind of business you run, day by day your business will grow; forcing you to take on new challenges.",
  },
  {
    title: "Does Nuport have integrations with delivery or courier partners?",
    description:
      "Customers today expect faster service, but as days pass, it’s getting increasingly hard to meet their expectations. No matter what kind of business you run, day by day your business will grow; forcing you to take on new challenges.",
    descriptionTwo:
      "Customers today expect faster service, but as days pass, it’s getting increasingly hard to meet their expectations. No matter what kind of business you run, day by day your business will grow; forcing you to take on new challenges.",
    descriptionThree:
      "Customers today expect faster service, but as days pass, it’s getting increasingly hard to meet their expectations. No matter what kind of business you run, day by day your business will grow; forcing you to take on new challenges.",
  },
  {
    title: "Is Nuport an ERP system?",
    description:
      "Customers today expect faster service, but as days pass, it’s getting increasingly hard to meet their expectations. No matter what kind of business you run, day by day your business will grow; forcing you to take on new challenges.",
    descriptionTwo:
      "Customers today expect faster service, but as days pass, it’s getting increasingly hard to meet their expectations. No matter what kind of business you run, day by day your business will grow; forcing you to take on new challenges.",
    descriptionThree:
      "Customers today expect faster service, but as days pass, it’s getting increasingly hard to meet their expectations. No matter what kind of business you run, day by day your business will grow; forcing you to take on new challenges.",
  },
  {
    title: "Who within my organization should be using Nuport?",
    description:
      "Customers today expect faster service, but as days pass, it’s getting increasingly hard to meet their expectations. No matter what kind of business you run, day by day your business will grow; forcing you to take on new challenges.",
    descriptionTwo:
      "Customers today expect faster service, but as days pass, it’s getting increasingly hard to meet their expectations. No matter what kind of business you run, day by day your business will grow; forcing you to take on new challenges.",
    descriptionThree:
      "Customers today expect faster service, but as days pass, it’s getting increasingly hard to meet their expectations. No matter what kind of business you run, day by day your business will grow; forcing you to take on new challenges.",
  },
  {
    title:
      "Can I grant different access rights to different employees and teams?",
    description:
      "Customers today expect faster service, but as days pass, it’s getting increasingly hard to meet their expectations. No matter what kind of business you run, day by day your business will grow; forcing you to take on new challenges.",
    descriptionTwo:
      "Customers today expect faster service, but as days pass, it’s getting increasingly hard to meet their expectations. No matter what kind of business you run, day by day your business will grow; forcing you to take on new challenges.",
    descriptionThree:
      "Customers today expect faster service, but as days pass, it’s getting increasingly hard to meet their expectations. No matter what kind of business you run, day by day your business will grow; forcing you to take on new challenges.",
  },
  {
    title: "What is Nuport’s Pricing Model?",
    description:
      "Customers today expect faster service, but as days pass, it’s getting increasingly hard to meet their expectations. No matter what kind of business you run, day by day your business will grow; forcing you to take on new challenges.",
    descriptionTwo:
      "Customers today expect faster service, but as days pass, it’s getting increasingly hard to meet their expectations. No matter what kind of business you run, day by day your business will grow; forcing you to take on new challenges.",
    descriptionThree:
      "Customers today expect faster service, but as days pass, it’s getting increasingly hard to meet their expectations. No matter what kind of business you run, day by day your business will grow; forcing you to take on new challenges.",
  },
];
export const maximizingYourEfficiency = [
  {
    title: "Maximizing Your Efficiency",
    description: "Automated ",
    descriptionCo: "Inventory and Warehouse Management",
    subDescription: [
      "See all your orders in a simple, user-friendly dashboard",
      "Generate picking list in an instant",
      "Upload batch/serial number effortlessly",
      "Track and plan your inventory the way you like",
    ],
    section: "section_2",
    src: "/assets/images/productpage/automated-inventory/automated.webp",
  },
  {
    icon: <AutomatedArrow />,
    title: "Managing Suppliers Effectively",
    description: "Supplier ",
    descriptionCo: "Management",
    subDescription: [
      "See all your orders in a simple, user-friendly dashboard",
      "Generate picking list in an instant",
      "Upload batch/serial number effortlessly",
      "Track and plan your inventory the way you like",
    ],
    src: "/assets/images/productpage/automated-inventory/supplier.png",
    section: "section_3",
  },
  {
    icon: <AutomatedArrow />,
    title: "Manage your order",
    description: "Integrated Order  ",
    descriptionCo: "Management",
    subDescription: [
      "See all your orders in a simple, user-friendly dashboard",
      "Generate picking list in an instant",
      "Upload batch/serial number effortlessly",
      "Track and plan your inventory the way you like",
    ],
    src: "/assets/images/productpage/automated-inventory/order.png",
    section: "section_3",
  },
  {
    icon: <AutomatedArrow />,
    title: "customer management",
    description: "Customer ",
    descriptionCo: "Portal",
    subDescription: [
      "See all your orders in a simple, user-friendly dashboard",
      "Generate picking list in an instant",
      "Upload batch/serial number effortlessly",
      "Track and plan your inventory the way you like",
    ],
    src: "/assets/images/productpage/automated-inventory/portal.png",
    section: "section_4",
  },
  {
    icon: <AutomatedArrow />,
    title: "customer management",
    description: "Courier Partner ",
    descriptionCo: "Integration",
    subDescription: [
      "See all your orders in a simple, user-friendly dashboard",
      "Generate picking list in an instant",
      "Upload batch/serial number effortlessly",
      "Track and plan your inventory the way you like",
    ],
    section: "section_5",
    src: "/assets/images/productpage/automated-inventory/partner.png",
  },
  {
    icon: <AutomatedArrow />,
    title: "customer management",
    description: "Data",
    descriptionCo: "Analytics",
    subDescription: [
      "See all your orders in a simple, user-friendly dashboard",
      "Generate picking list in an instant",
      "Upload batch/serial number effortlessly",
      "Track and plan your inventory the way you like",
    ],
    src: "/assets/images/productpage/automated-inventory/data.png",
    section: "section_6 ",
  },
];
export const trustedKnownPartners = [
  {
    image: "/assets/images/productpage/trusted-by-known/yummy.png",
    title: "autorific",
    width: "177",
  },
  {
    image: "/assets/images/productpage/trusted-by-known/raaw-food.png",
    title: "british-american",
    width: "91",
  },
  {
    image: "/assets/images/productpage/trusted-by-known/atal-food.png",
    title: "atal-food",
    width: "59",
  },
  {
    image: "/assets/images/productpage/trusted-by-known/muslin.png",
    title: "lg",
    width: "129",
  },
  {
    image: "/assets/images/productpage/trusted-by-known/orgagenic.png",
    title: "orgagenic",
    width: "111",
  },
  {
    image: "/assets/images/productpage/trusted-by-known/confidence.png",
    title: "confidence",
    width: "182",
  },
  {
    image: "/assets/images/productpage/trusted-by-known/ma-arij.png",
    title: "maarij",
    width: "140",
  },
];
export const enterprisePartners = [
  {
    image: "/assets/images/homepage/trusted-by/confidence.png",
    title: "confidence",
    width: "200",
  },
  {
    image: "/assets/images/enterprise/steeltech.png",
    title: "steeltech",
    width: "117",
  },
  {
    image: "/assets/images/enterprise/fashol.png",
    title: "fashol",
    width: "118",
  },
  {
    image: "/assets/images/homepage/trusted-by/british-american.png",
    title: "british-american",
    width: "83",
  },
  {
    image: "/assets/images/homepage/trusted-by/lg.png",
    title: "lg",
    width: "123",
  },
  {
    image: "/assets/images/productpage/trusted-by-known/confidence.png",
    title: "confidence",
    width: "182",
  },
  {
    image: "/assets/images/enterprise/steeltech-style.png",
    title: "steeltech",
    width: "148",
  },
];
export const automateImage = [
  {
    class: "img1",
    src: "/assets/images/productpage/automated-inventory/automated.webp",
  },
  {
    class: "img2",
    src: "/assets/images/productpage/automated-inventory/supplier.png",
  },
  {
    class: "img3",
    src: "/assets/images/productpage/automated-inventory/order.png",
  },
  {
    class: "img4",
    src: "/assets/images/productpage/automated-inventory/portal.png",
  },
  {
    class: "img5",
    src: "/assets/images/productpage/automated-inventory/partner.png",
  },
  {
    class: "img6",
    src: "/assets/images/productpage/automated-inventory/data.png",
  },
];
export const blogTabHeading = [
  "All",
  "Nuport",
  "Distribution management",
  "Supply chain management",
  "Business intelligence",
  "Eid",
  "VRP",
  "E-commerce",
  "Enterprise",
];
export const tabCard = [
  {
    date: " Sep 22, 2023",
    description:
      "Revolutionizing Bangladeshi E-Commerce Landscape: Nuport E-Commerce Suite",
    btn: "Nuport",
    img: "/assets/images/blogpage/revulition-man.png",
  },
  {
    date: " Sep 22, 2023",
    description: "Unlock Customer Tagging for Targeted Marketing",
    btn: "Distribution management",
    img: "/assets/images/blogpage/man2.png",
  },
  {
    date: " Sep 22, 2023",
    description:
      "Seamless Product Sync With Shopify & WooCommerce: Elevate Your Online Business With Integration",
    btn: "Supply chain management",
    img: "/assets/images/blogpage/seam3.png",
  },
  {
    date: " Sep 22, 2023",
    description:
      "Manage Expenses with Precision: Introducing Customizable Expense Types for Detailed Financial Insights",
    btn: "Business intelligence",
    img: "/assets/images/blogpage/finance4.png",
  },
  {
    date: " Sep 22, 2023",
    description:
      "Empowering Bangladeshi Online Businesses: How Nuport Adds Value",
    btn: "VRP",
    img: "/assets/images/blogpage/power5.png",
  },
  {
    date: " Sep 22, 2023",
    description:
      "Scaling Up Success: Empowering Businesses with Nuport's Cutting-Edge Solutions",
    btn: "Eid",
    img: "/assets/images/blogpage/same6.png",
  },
  {
    date: " Sep 22, 2023",
    description:
      "Streamline Production with Nuport’s Advanced Bill of Material (BOM)",
    btn: "Business intelligence",
    img: "/assets/images/blogpage/sameline7.png",
  },
  {
    date: " Sep 22, 2023",
    description:
      "Seamless Collaboration: Empower Business with Two-Way Communication with 3PL Partners",
    btn: "Supply chain management",
    img: "/assets/images/blogpage/hand8.png",
  },
  {
    date: " Sep 22, 2023",
    description:
      "Unlocking Business Growth: Leverage the Power of Nuport's Advanced Sales Forecasting",
    btn: "Eid",
    img: "/assets/images/blogpage/man9.png",
  },
  {
    date: " Sep 22, 2023",
    description:
      "Introducing Product Variant Management: Gateway To Effortless Inventory System",
    btn: "Distribution management",
    img: "/assets/images/blogpage/man10.png",
  },
  {
    date: " Sep 22, 2023",
    description:
      "Streamline Your Online Business with Courier Management Software",
    btn: "Business intelligence",
    img: "/assets/images/blogpage/man11.png",
  },
  {
    date: " Sep 22, 2023",
    description:
      "Level up your Customer Experience with Real-Time SMS on Order Status Updates",
    btn: "VRP",
    img: "/assets/images/blogpage/mobile12.png",
  },
];

// Industry
export const solution = [
  {
    icons: <Location />,
    title: "FMCG",
  },
  {
    icons: <IndustrialSupplies />,
    title: "Industrial Supplies",
  },
  {
    icons: <Ecommerce />,
    title: "E-Commerce",
  },
  {
    icons: <LastDelivery />,
    title: "Last Mile Delivery",
  },
];
// dynamic
export const dynamicOrder = [
  {
    title: "Maximizing Your Efficiency",
    description: "Dynamic order ",
    descriptionCo: "management",
    subDescription: [
      {
        title: "Dynamic Control",
        subTitle:
          "More dynamic control over the field sales force with the mobile order management system.",
      },
      {
        title: "Simple Interface",
        subTitle:
          "Simple and intuitive interface of order entry templatized for every industry for faster onboarding.",
      },
      {
        title: "Live Updates",
        subTitle:
          "Live update any change in the delivery locations simply using the GPS from the mobile device.",
      },
    ],
    src: "/assets/images/e-commerce/img1.png",
  },
  {
    title: "Maximizing Your Efficiency",
    description: "Automated",
    descriptionCo: " distribution planning",
    subDescription: [
      {
        title: "Automated Plans",
        subTitle:
          "Get automated route plans created instantly from approved orders.",
      },
      {
        title: "Efficient Planning",
        subTitle:
          "Automatically determine the number of vehicles necessary for distribution per plan.",
      },
      {
        title: "More Control",
        subTitle:
          "Dispatch automatically to delivery partners and have more control of the goods on the road.",
      },
    ],
    src: "/assets/images/e-commerce/img2.png",
  },
  {
    title: "Maximizing Your Efficiency",
    description: "Smart",
    descriptionCo: " warehousing",
    subDescription: [
      {
        title: "Easy Scan",
        subTitle: "Easy scan-in & scan out for all your SKU movements.",
      },
      {
        title: "Superior Traceability",
        subTitle: "Superior traceability of SKU across all geographies.",
      },
      {
        title: "Smarter Mapping",
        subTitle: "Smarter mapping of your warehouse for total visibility.",
      },
    ],
    src: "/assets/images/e-commerce/img3.png",
  },
  {
    title: "Maximizing Your Efficiency",
    description: "Transport ",
    descriptionCo: " management system",
    subDescription: [
      {
        title: "Fleet Management",
        subTitle:
          "Segregated Regular & Unfit Fleet, Expense Calculation, Document Management, Live Tracking.",
      },
      {
        title: "Analytics & Reporting",
        subTitle:
          "Arrival & Departure time tracking, Weight/Volume utilization, Trip summary, Cost Analysis.",
      },
      {
        title: "Transport Vendors",
        subTitle:
          "Onboard Transport Vendor, Integrate with 3PL Vendor, Transport Deed and Quotation Management, Vendor's Trip history.",
      },
    ],
    src: "/assets/images/e-commerce/img4.png",
  },
  {
    title: "Maximizing Your Efficiency",
    description: "Supply chain  ",
    descriptionCo: " intelligence",
    subDescription: [
      {
        title: "End-To-End Data Insights",
        subTitle:
          "Our integrated cloud-based supply-chain platform enables data connectivity across multiple verticals & leverage data insights.",
      },
      {
        title: "Analytics & ReportiQuick Product Tracing",
        subTitle:
          "Experience significant time reduction needed to trace items from store to farm from days to seconds.",
      },
      {
        title: "Reduce Administrative Costs",
        subTitle:
          "Reduce the administrative costs of handling dispute resolutions due to superior visibility.",
      },
    ],
    src: "/assets/images/e-commerce/img4.png",
  },
];
export const dynamicImage = [
  {
    class: "img1",
    src: "/assets/images/e-commerce/img1.png",
  },
  {
    class: "img2",
    src: "/assets/images/e-commerce/img2.png",
  },
  {
    class: "img3",
    src: "/assets/images/e-commerce/img3.png",
  },
  {
    class: "img4",
    src: "/assets/images/e-commerce/img4.png",
  },
  {
    class: "img6",
    src: "/assets/images/e-commerce/img5.png",
  },
];

export const OurTeamCareer = [
  {
    icon: <Setting width="md:w-[32px] w-[24px]" />,
    heading: "Engineering",
  },
  {
    icon: <SquareCube />,
    heading: "Product",
  },
  {
    icon: <Design />,
    heading: "Design",
  },
  {
    icon: <Plus />,
    heading: "Implementation",
  },
  {
    icon: <SalesGraph />,
    heading: "Sales",
  },
  {
    icon: <MarketingGraph />,
    heading: "Marketing",
  },
  {
    icon: <FinanceDollor />,
    heading: "Finance",
  },
  {
    icon: <Computer />,
    heading: "Account Management",
  },
];
export const videoContent = [
  {
    video: "/assets/video/video.mp4",
    thumbnail: "/assets/images/videopage/img1.png",
    title:
      "Introducing Nuport for E-Commerce Automation | ই -কমার্স উদ্যোক্তাদের জন্য নিউপোর্ট অটোমেশন",
    time: "0:15m",
  },
  {
    video: "/assets/video/video.mp4",
    thumbnail: "/assets/images/videopage/img1.png",
    title:
      "Success story fueled by Automation | ই-কমার্স অটোমেশনের প্রয়োজনীয়তাঃ শেষের পাতা'র সফলতার গল্প",
    time: "2:26m",
  },
  {
    video: "/assets/video/video.mp4",
    thumbnail: "/assets/images/videopage/img1.png",
    title: "Automating Vendor Management With Nuport",
    time: "0:39m",
  },
  {
    video: "/assets/video/video.mp4",
    thumbnail: "/assets/images/videopage/img1.png",
    title: "What is Automated Inventory Fulfillment?",
    time: "0:42m",
  },
  {
    video: "/assets/video/video.mp4",
    thumbnail: "/assets/images/videopage/img1.png",
    title: "Nuport Ecommerce Suite for Ecommerce Businesses",
    time: "1:30m",
  },
  {
    video: "/assets/video/video.mp4",
    thumbnail: "/assets/images/videopage/img1.png",
    title: "Nuport Ecommerce Suite for Ecommerce Businesses (Bangla)",
    time: "1:39m",
  },
  {
    video: "/assets/video/video.mp4",
    thumbnail: "/assets/images/videopage/img1.png",
    title: "Nuport E-Commerce Suite for Online Businesses",
    time: "0:49m",
  },
  {
    video: "/assets/video/video.mp4",
    thumbnail: "/assets/images/videopage/img1.png",
    title:
      "Manage Online Business from Single Platform | অনলাইন বিজনেসের সবকিছু, এক জায়গায়",
    time: "0:20m",
  },
  {
    video: "/assets/video/video.mp4",
    thumbnail: "/assets/images/videopage/img1.png",
    title:
      "Client Testimonial: Natural Nutrifood । Nuport কিভাবে ই-কমার্স বিজনেসের গ্রোথ নিশ্চিত করে?",
    time: "2:20m",
  },
];
