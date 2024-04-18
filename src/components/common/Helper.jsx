import {
  AboutUs,
  BangladeshFlag,
  Career,
  CaseStudy,
  Courier,
  BusinessGrowth,
  CourierBusIcon,
  Delivery,
  DeliveryTruck,
  Documentation,
  Enterprise,
  Facebook,
  FasterOrder,
  IndianFlag,
  Industry,
  Instagram,
  Linkedin,
  LocationGoogle,
  LocationIcon,
  MapLocation,
  Order,
  OrderIcon,
  RoleUsers,
  ScanIcon,
  ShoppingCart,
  SquareCube,
  Twitter,
  UseCase,
  Video,
  Omnichannel,
  Inventory,
  Integrated,
  Automated,
  AutomatedArrow,
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
    link: "#aboutus",
  },
  {
    title: "Career",
    link: "#career",
  },
  {
    title: "Blog",
    link: "#blog",
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
    url: "#",
    imagePosition: "right-4",
    img: "/assets/images/common/navbar/ecommerce.png",
  },
  {
    link: "Enterprise",
    imagePosition: "right-0",
    img: "/assets/images/common/navbar/enterprise.png",
  },
];
export const solutionNav = [
  {
    title: "By Industry",
    paragraph: "Distribution and supply chain management",
    url: "/",
    icon: <Industry />,
  },
  {
    title: "By Use Case",
    paragraph: "Manufacturing, distribution or warehousing business",
    url: "/",
    icon: <UseCase />,
  },
  {
    title: "By Role",
    paragraph: "Your supply chain solution by roles",
    url: "/",
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
        url: "/",
        icon: <AboutUs />,
      },
      {
        title: "Careers",
        paragraph: "Build with us",
        url: "/",
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
        url: "/",
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
