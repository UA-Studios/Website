import logo from "./assets/images/home/logo.png";
import landingImg from "./assets/images/home/landing.png";
import photoVideoImg from "./assets/images/home/photoVideo.png";
import planeImg from "./assets/images/home/plane.png";
import camImg from "./assets/images/home/cam.png";
import camFileImg from "./assets/images/home/camFile.png";
import contactUsImg from "./assets/images/contact/CONTACT US.png";
import contactBackArt from "./assets/images/contact/backart.png";
import common1 from "./assets/images/common 1.png";
import common2 from "./assets/images/common 2.png";
import twoDanimationImg from "./assets/images/services/animation/2Danimation.jpeg";

/////////////////////common exports/////////////////////
export const common_1 = common1;
export const common_2 = common2;
export const companyLogo = logo;
/////////////////////Navbar/////////////////////
export const navbar = {
  logo: logo,
  menuNames: [
    { name: "HOME" },
    { name: "PRODUCTS" },
    { name: "PORTFOLIO" },
    { name: "SERVICES" },
    { name: "BLOG" },
    { name: "ABOUT US" },
    { name: "CONTACT US" },
  ],
};

/////////////////////homepage/////////////////////

export const homepage = {
  navbar: {
    logo: logo,
  },
  working: {
    leftCard: [
      {
        image: photoVideoImg,
        headerText: "Whiteboard Animation",
        SubText: "Explain your products and services effectively",
      },
      {
        image: photoVideoImg,
        headerText: "Whiteboard Animation",
        SubText: "Explain your products and services effectively",
      },
      {
        image: photoVideoImg,
        headerText: "Whiteboard Animation",
        SubText: "Explain your products and services effectively",
      },
    ],
    rightCard: [
      {
        image: photoVideoImg,
        headerText: "Whiteboard Animation",
        SubText: "Explain your products and services effectively",
      },
      {
        image: photoVideoImg,
        headerText: "Whiteboard Animation",
        SubText: "Explain your products and services effectively",
      },
      {
        image: photoVideoImg,
        headerText: "Whiteboard Animation",
        SubText: "Explain your products and services effectively",
      },
    ],
  },
  videoType: {
    headerText: "Video Types",
    card: [
      {
        image: photoVideoImg,
        headerText: "Explainer Videos",
        SubText:
          "Explain your product or service in the most effective way and generate more leads",
      },
      {
        image: photoVideoImg,
        headerText: "Video Series",
        SubText: "Animated video series with a uniform theme and a common goal",
      },
      {
        image: photoVideoImg,
        headerText: "Training Videos",
        SubText:
          "Show how your product or service works and make your customers’ lives easier",
      },
      {
        image: photoVideoImg,
        headerText: "Whiteboard Videos",
        SubText:
          "Sell complex ideas effectively and boost attention & retention of your audience",
      },
      {
        image: photoVideoImg,
        headerText: "Social Media Videos",
        SubText: "Boost social media presence with short and effective videos",
      },
      {
        image: photoVideoImg,
        headerText: "3D Animated Video​s",
        SubText:
          "Describe each and every component of your product with stunning 3D visuals",
      },
    ],
  },
  stats: {
    headerText: "Our Statistics",
    card: [
      {
        headerText: "7+",
        SubText: "YEARS OF EXPERIENCE",
      },
      {
        headerText: "20+",
        SubText: "TEAM OF EXPERTS",
      },
      {
        headerText: "1800+",
        SubText: "VIDEOS DELIVERED",
      },
      {
        headerText: "1500+",
        SubText: "MILLION VIEWS",
      },
    ],
  },
  clients: {
    headerText: "Our Clients",
    card: [
      {
        headerText: "7+",
        SubText: "YEARS OF EXPERIENCE",
      },
      {
        headerText: "20+",
        SubText: "TEAM OF EXPERTS",
      },
      {
        headerText: "1800+",
        SubText: "VIDEOS DELIVERED",
      },
      {
        headerText: "1500+",
        SubText: "MILLION VIEWS",
      },
    ],
  },
};

//header
export const number1 = "+91 9898659586";
export const number2 = "+91 9979531345";
export const mail = "hi@konnectme.video";
export const slogan = "Keep Konnecting  Keep Growing";

//landing card
export const LandingCardImg = landingImg;

//services card
export const service = [
  {
    image: photoVideoImg,
    headerText: "Whiteboard Animation",
    SubText: "Explain your products and services effectively",
  },
  {
    image: planeImg,
    headerText: "2D Animation",
    SubText: "Most popular forms of video to engage your audience",
  },
  {
    image: camImg,
    headerText: "3D Animation",
    SubText: "The ability to make complex ideas easier to understand",
  },
  {
    image: camFileImg,
    headerText: "Video Ads",
    SubText:
      "A short film or video that is used to promote a product, service, or brand.",
  },
];

//portfolio
export const portfolioHeader = "Portfolio";
export const portfolioFooter = "Want to see more videos?";
export const portfolioFooterBtnText = "Click here";
export const portfolio = [
  {
    id: 1,
    link: "https://www.youtube.com/embed/lH1c33Ositw",
  },
  {
    id: 1,
    link: "https://www.youtube.com/embed/lH1c33Ositw",
  },
  {
    id: 0,
    link: "https://www.youtube.com/embed/lH1c33Ositw",
  },
  {
    id: 0,
    link: "https://www.youtube.com/embed/lH1c33Ositw",
  },
  {
    id: 0,
    link: "https://www.youtube.com/embed/lH1c33Ositw",
  },
];

// working
export const workingHeader = "How It Works";

/////////////////////services/////////////////////

export const services = {
  animation: {
    whiteboardAnimation: {
      coverImg: twoDanimationImg,
      grid1Header: "What is an Explainer Video and when to use it?",
      grid1SubText:
        "An explainer video illustrates a complex idea into a simple and understandable video. When you want to explain your business, idea, product or service in the simplest possible manner, you should use explainer videos for the same.",
      grid1Link: "https://www.youtube.com/embed/ngsDkRTInn4",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/tqOwAD6L-Qg",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
      ],
      faqText: "FAQ",
      faq: [
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
      ],
    },
    twoDanimation: {
      coverImg: twoDanimationImg,
      grid1Header: "What is a 2D Animation Video and when to use it?",
      grid1SubText:
        "Explain, entertain, engage and entice your customers with our 2D animated videos. The use of characters and situational life events make them highly relatable to your audience. Such videos are budget-friendly and can increase business conversions beyond expectations. 2D animation videos can be used as product explainer videos, mobile app explainer videos, and corporate explainer videos.",
      grid1Link: "https://www.youtube.com/embed/ngsDkRTInn4",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/tqOwAD6L-Qg",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
      ],
      faqText: "FAQ",
      faq: [
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
      ],
    },
    threeDanimation: {
      coverImg: twoDanimationImg,
      grid1Header: "What is an Explainer Video and when to use it?",
      grid1SubText:
        "An explainer video illustrates a complex idea into a simple and understandable video. When you want to explain your business, idea, product or service in the simplest possible manner, you should use explainer videos for the same.",
      grid1Link: "https://www.youtube.com/embed/ngsDkRTInn4",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/tqOwAD6L-Qg",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
      ],
      faqText: "FAQ",
      faq: [
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
      ],
    },
    promoVids: {
      coverImg: twoDanimationImg,
      grid1Header: "What is an Explainer Video and when to use it?",
      grid1SubText:
        "An explainer video illustrates a complex idea into a simple and understandable video. When you want to explain your business, idea, product or service in the simplest possible manner, you should use explainer videos for the same.",
      grid1Link: "https://www.youtube.com/embed/ngsDkRTInn4",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/tqOwAD6L-Qg",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
      ],
      faqText: "FAQ",
      faq: [
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
      ],
    },
    premiumVids: {
      coverImg: twoDanimationImg,
      grid1Header: "What is an Explainer Video and when to use it?",
      grid1SubText:
        "An explainer video illustrates a complex idea into a simple and understandable video. When you want to explain your business, idea, product or service in the simplest possible manner, you should use explainer videos for the same.",
      grid1Link: "https://www.youtube.com/embed/ngsDkRTInn4",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/tqOwAD6L-Qg",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
      ],
      faqText: "FAQ",
      faq: [
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
      ],
    },
    liveActionExplainer: {
      coverImg: twoDanimationImg,
      grid1Header: "What is an Explainer Video and when to use it?",
      grid1SubText:
        "An explainer video illustrates a complex idea into a simple and understandable video. When you want to explain your business, idea, product or service in the simplest possible manner, you should use explainer videos for the same.",
      grid1Link: "https://www.youtube.com/embed/ngsDkRTInn4",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/tqOwAD6L-Qg",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
      ],
      faqText: "FAQ",
      faq: [
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
      ],
    },
    logoAnimation: {
      coverImg: twoDanimationImg,
      grid1Header: "What is an Explainer Video and when to use it?",
      grid1SubText:
        "An explainer video illustrates a complex idea into a simple and understandable video. When you want to explain your business, idea, product or service in the simplest possible manner, you should use explainer videos for the same.",
      grid1Link: "https://www.youtube.com/embed/ngsDkRTInn4",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/tqOwAD6L-Qg",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
      ],
      faqText: "FAQ",
      faq: [
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
      ],
    },
    interactiveVids: {
      coverImg: twoDanimationImg,
      grid1Header: "What is an Explainer Video and when to use it?",
      grid1SubText:
        "An explainer video illustrates a complex idea into a simple and understandable video. When you want to explain your business, idea, product or service in the simplest possible manner, you should use explainer videos for the same.",
      grid1Link: "https://www.youtube.com/embed/ngsDkRTInn4",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/tqOwAD6L-Qg",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
      ],
      faqText: "FAQ",
      faq: [
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
      ],
    },
    videoEditing: {
      coverImg: twoDanimationImg,
      grid1Header: "What is an Explainer Video and when to use it?",
      grid1SubText:
        "An explainer video illustrates a complex idea into a simple and understandable video. When you want to explain your business, idea, product or service in the simplest possible manner, you should use explainer videos for the same.",
      grid1Link: "https://www.youtube.com/embed/ngsDkRTInn4",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/tqOwAD6L-Qg",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
      ],
      faqText: "FAQ",
      faq: [
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
      ],
    },
  },
  graphicDesigning: {
    logoDesign: {
      coverImg: twoDanimationImg,
      grid1Header: "What is an Explainer Video and when to use it?",
      grid1SubText:
        "An explainer video illustrates a complex idea into a simple and understandable video. When you want to explain your business, idea, product or service in the simplest possible manner, you should use explainer videos for the same.",
      grid1Link: "https://www.youtube.com/embed/ngsDkRTInn4",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/tqOwAD6L-Qg",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
      ],
      faqText: "FAQ",
      faq: [
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
      ],
    },
    brandingMaterial: {
      coverImg: twoDanimationImg,
      grid1Header: "What is an Explainer Video and when to use it?",
      grid1SubText:
        "An explainer video illustrates a complex idea into a simple and understandable video. When you want to explain your business, idea, product or service in the simplest possible manner, you should use explainer videos for the same.",
      grid1Link: "https://www.youtube.com/embed/ngsDkRTInn4",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/tqOwAD6L-Qg",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
      ],
      faqText: "FAQ",
      faq: [
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
      ],
    },
    storyBoard: {
      coverImg: twoDanimationImg,
      grid1Header: "What is an Explainer Video and when to use it?",
      grid1SubText:
        "An explainer video illustrates a complex idea into a simple and understandable video. When you want to explain your business, idea, product or service in the simplest possible manner, you should use explainer videos for the same.",
      grid1Link: "https://www.youtube.com/embed/ngsDkRTInn4",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/tqOwAD6L-Qg",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
      ],
      faqText: "FAQ",
      faq: [
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
      ],
    },
    caricature: {
      coverImg: twoDanimationImg,
      grid1Header: "What is an Explainer Video and when to use it?",
      grid1SubText:
        "An explainer video illustrates a complex idea into a simple and understandable video. When you want to explain your business, idea, product or service in the simplest possible manner, you should use explainer videos for the same.",
      grid1Link: "https://www.youtube.com/embed/ngsDkRTInn4",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/tqOwAD6L-Qg",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
      ],
      faqText: "FAQ",
      faq: [
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
      ],
    },
    iconDesign: {
      coverImg: twoDanimationImg,
      grid1Header: "What is an Explainer Video and when to use it?",
      grid1SubText:
        "An explainer video illustrates a complex idea into a simple and understandable video. When you want to explain your business, idea, product or service in the simplest possible manner, you should use explainer videos for the same.",
      grid1Link: "https://www.youtube.com/embed/ngsDkRTInn4",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/tqOwAD6L-Qg",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
      ],
      faqText: "FAQ",
      faq: [
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
      ],
    },
    infoGraphics: {
      coverImg: twoDanimationImg,
      grid1Header: "What is an Explainer Video and when to use it?",
      grid1SubText:
        "An explainer video illustrates a complex idea into a simple and understandable video. When you want to explain your business, idea, product or service in the simplest possible manner, you should use explainer videos for the same.",
      grid1Link: "https://www.youtube.com/embed/ngsDkRTInn4",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/tqOwAD6L-Qg",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
      ],
      faqText: "FAQ",
      faq: [
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
      ],
    },
    twoThreeDesign: {
      coverImg: twoDanimationImg,
      grid1Header: "What is an Explainer Video and when to use it?",
      grid1SubText:
        "An explainer video illustrates a complex idea into a simple and understandable video. When you want to explain your business, idea, product or service in the simplest possible manner, you should use explainer videos for the same.",
      grid1Link: "https://www.youtube.com/embed/ngsDkRTInn4",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/tqOwAD6L-Qg",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
      ],
      faqText: "FAQ",
      faq: [
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
      ],
    },
    SocialMediaDesign: {
      coverImg: twoDanimationImg,
      grid1Header: "What is an Explainer Video and when to use it?",
      grid1SubText:
        "An explainer video illustrates a complex idea into a simple and understandable video. When you want to explain your business, idea, product or service in the simplest possible manner, you should use explainer videos for the same.",
      grid1Link: "https://www.youtube.com/embed/ngsDkRTInn4",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/tqOwAD6L-Qg",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
      ],
      faqText: "FAQ",
      faq: [
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
      ],
    },
    illustrations: {
      coverImg: twoDanimationImg,
      grid1Header: "What is an Explainer Video and when to use it?",
      grid1SubText:
        "An explainer video illustrates a complex idea into a simple and understandable video. When you want to explain your business, idea, product or service in the simplest possible manner, you should use explainer videos for the same.",
      grid1Link: "https://www.youtube.com/embed/ngsDkRTInn4",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/tqOwAD6L-Qg",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
      ],
      faqText: "FAQ",
      faq: [
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
      ],
    },
    nfts: {
      coverImg: twoDanimationImg,
      grid1Header: "What is an Explainer Video and when to use it?",
      grid1SubText:
        "An explainer video illustrates a complex idea into a simple and understandable video. When you want to explain your business, idea, product or service in the simplest possible manner, you should use explainer videos for the same.",
      grid1Link: "https://www.youtube.com/embed/ngsDkRTInn4",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/tqOwAD6L-Qg",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
        { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
      ],
      faqText: "FAQ",
      faq: [
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
        {
          title:
            "What are the different types of video services that you provide?",
          details:
            "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include:      ",
        },
      ],
    },
  },
};

/////////////////////contact us/////////////////////
export const contactLandingImg = contactUsImg;
export const contactGetInTouch = " Get in Touch";
export const contactArt = contactBackArt;
export const contactGetInTouchSubtext =
  "  Get in touch to discuss your employee wellbeing needs today. Please give us a call, drop us an email or fill out the contact form and we’ll get back to you.";
export const contactList = [
  {
    icon: 1,
    header: "Office",
    subText: "office # 8 Al-noor plaza, near t-chowk, shah rukne alam, Multan",
  },
  {
    icon: 2,
    header: "Mail Us",
    subText: "support@umeratiqstudio.com",
  },
  {
    icon: 3,
    header: "Call Us",
    subText: "+92-3157944844",
  },
];
