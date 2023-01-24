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
import logo1 from "./assets/images/home/logos/1.png";
import logo2 from "./assets/images/home/logos/2.png";
import logo3 from "./assets/images/home/logos/3.png";
import logo4 from "./assets/images/home/logos/4.png";
import logo5 from "./assets/images/home/logos/5.png";
import logo6 from "./assets/images/home/logos/6.png";
import review1 from "./assets/images/home/reviews/review1.png";
import review2 from "./assets/images/home/reviews/review2.png";
import review3 from "./assets/images/home/reviews/review3.png";
import review4 from "./assets/images/home/reviews/review4.png";
import work1 from "./assets/images/home/research.png";
import work2 from "./assets/images/home/script.png";
import work3 from "./assets/images/home/storyboard.png";
import work4 from "./assets/images/home/animation.png";
import work5 from "./assets/images/home/mic.png";
import work6 from "./assets/images/home/mobile.png";
import workGif from "./assets/images/home/workGif.gif";
// import homeVid1 from "./assets/images/home/";

/////////////////////common exports/////////////////////
export const common_1 = common1;
export const common_2 = common2;
export const companyLogo = logo;
/////////////////////Navbar/////////////////////
export const navbar = {
  logo: logo,
  menuNames: [
    { link: "/", name: "HOME" },
    { link: "#", name: "PRODUCTS" },
    {
      name: "SERVICES",
      services: [
        {
          name: "Animation",
          subServices: [
            { link: "/whiteboard-animation", name: "Whiteboard animation" },
            { link: "/2d-animation", name: "2D animation" },
            { link: "/3d-animation", name: "3D animation" },
            { link: "/promo-videos", name: "Promo videos" },
            { link: "/premium-videos", name: "Premium videos" },
            { link: "/live-action-explainer", name: "Live action explainer" },
            { link: "/logo-animation", name: "Logo animation" },
            { link: "/interactive-videos", name: "Interactive videos" },
            { link: "/video-editing", name: "Video editing" },
          ],
        },
        {
          name: "GRAPHIC DESIGNING",
          subServices: [
            { link: "/logo-design", ame: "Logo design" },
            { link: "/branding-Material", ame: "Branding Material" },
            { link: "/storyboard", ame: "Storyboard" },
            { link: "/caricature", ame: "Caricature" },
            { link: "/icon-design", ame: "Icon design" },
            { link: "/infographics", ame: "Infographics" },
            { link: "/2d-3d-character-design", ame: "2D/3D Character design" },
            { link: "/social-media-design", ame: "Social Media Design" },
            { link: "/illustrations", ame: "Illustrations" },
            { link: "/nft", ame: "NFTs" },
          ],
        },
      ],
    },
    { link: "#", name: "BLOG" },
    { link: "#", name: "ABOUT US" },
    { link: "/contact", name: "CONTACT US" },
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
        image: work1,
        headerText: "Research",
        SubText:
          "We understand your needs, target audience and your existing marketing strategy.",
      },
      {
        image: work2,
        headerText: "Script",
        SubText:
          "We draft script that explains your business in the most effective way",
      },
      {
        image: work3,
        headerText: "Storyboard Designing",
        SubText: "We create stunning visual representation as per the script.",
      },
    ],
    centerCard: workGif,
    rightCard: [
      {
        image: work4,
        headerText: "Animation Production",
        SubText: "We give life to storyboard with engaging animation.",
      },
      {
        image: work5,
        headerText: "Voiceover",
        SubText:
          "We provide bespoke voiceover by a real human with music & sound effects.",
      },
      {
        image: work6,
        headerText: "Go Live",
        SubText: "It’s time to take your beautiful creation to the world.",
      },
    ],
  },
  videoType: {
    headerText: "Video Types",
    card: [
      {
        image: photoVideoImg,
        headerText: "Whiteboard Videos",
        // "Explainer Videos",
        SubText:
          "Explain your product or service in the most effective way and generate more leads",
      },
      {
        image: photoVideoImg,
        headerText: "2D Animated Video​s",
        SubText:
          "Describe each and every component of your product with stunning 3D visuals",
      },
      {
        image: photoVideoImg,
        headerText: "3D Animated Video​s",
        SubText:
          "Describe each and every component of your product with stunning 3D visuals",
      },
      {
        image: photoVideoImg,
        headerText: "Live Action Video Series",
        SubText: "Animated video series with a uniform theme and a common goal",
      },
      {
        image: photoVideoImg,
        headerText: "Graphic Design",
        SubText:
          "Show how your product or service works and make your customers’ lives easier",
      },
      {
        image: photoVideoImg,
        headerText: "Game & Web Development",
        SubText:
          "Sell complex ideas effectively and boost attention & retention of your audience",
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
    logo: [
      {
        logo: logo1,
      },
      {
        logo: logo2,
      },
      {
        logo: logo3,
      },
      {
        logo: logo4,
      },
      {
        logo: logo5,
      },
      {
        logo: logo6,
      },
    ],
  },
  reviews: {
    headerText: "What People Say",
    review: [
      {
        review: review1,
      },
      {
        review: review2,
      },
      {
        review: review3,
      },
      {
        review: review4,
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
    link: "https://www.youtube.com/embed/MEeu75fQUa8",
  },
  {
    id: 1,
    link: "https://www.youtube.com/embed/lpoL7Aw-7j8",
  },
  {
    id: 0,
    link: "https://www.youtube.com/embed/Zb17YZuEPJI",
  },
  {
    id: 0,
    link: "https://www.youtube.com/embed/tA3VMm7oDw0",
  },
  {
    id: 0,
    link: "https://www.youtube.com/embed/_sU--px8c2Q",
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
      grid1Link: "https://www.youtube.com/embed/GTu6oQ3IDuo",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/dlaXj7xnk3U",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        {
          title: "Whiteboard Animation Style 1",
          links: [
            { link: "https://www.youtube.com/embed/GTu6oQ3IDuo" },
            { link: "https://www.youtube.com/embed/COhmQmgN18g" },
            { link: "https://www.youtube.com/embed/w6lbHhcfyMQ" },
            { link: "https://www.youtube.com/embed/GQgjmBB_Plo" },
          ],
        },
        {
          title: "Whiteboard Animation Style 2",
          links: [
            { link: "https://www.youtube.com/embed/Ldlk2SxRGzw" },
            { link: "https://www.youtube.com/embed/MUxprrJQyDA" },
            { link: "https://www.youtube.com/embed/dlaXj7xnk3U" },
            { link: "https://www.youtube.com/embed/cA3YVvDokgc" },
          ],
        },
        {
          title: "Whiteboard Animation Style 3",
          links: [
            { link: "https://www.youtube.com/embed/Zkt-nJ8P2-Y" },
            { link: "https://www.youtube.com/embed/msQ4z3UOMNo" },
            { link: "https://www.youtube.com/embed/kpj2F62G-3o" },
          ],
        },
        {
          title: "Colored whiteboard Animation Style 1",
          links: [
            { link: "https://www.youtube.com/embed/dkztTbZDZro" },
            { link: "https://www.youtube.com/embed/0AAiUSh0jCg" },
            { link: "https://www.youtube.com/embed/-qxlazeKIbo" },
          ],
        },
        {
          title: "Vyond 2D",
          links: [{ link: "https://www.youtube.com/embed/Zkt-nJ8P2-Y" }],
        },
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
      grid1Link: "https://www.youtube.com/embed/Zb17YZuEPJI",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/ws7N5XJMq4s",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        {
          title: "",
          links: [
            { link: "https://www.youtube.com/embed/plFBAEx_RWw" },
            { link: "https://www.youtube.com/embed/EAT_WS0ojQw" },
            { link: "https://www.youtube.com/embed/XTMYVwCDqnY" },
            { link: "https://www.youtube.com/embed/S4b9k0Xtxz8" },
            { link: "https://www.youtube.com/embed/JuRBq2cXn50" },
            { link: "https://www.youtube.com/embed/WS5IZaxToXM" },
          ],
        },
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
      grid1Link: "https://www.youtube.com/embed/tA3VMm7oDw0",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/k1YEO6_mLiI",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        {
          title: "",
          links: [
            { link: "https://www.youtube.com/embed/Xa9eEfOnEwc" },
            { link: "https://www.youtube.com/embed/o7Ds5ca9hY8" },
            { link: "https://www.youtube.com/embed/GdqBstVaZ0Y" },
          ],
        },
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
      grid1Link: "https://www.youtube.com/embed/QJAxFJnJ35I",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/vK-bLXt7IIA",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        {
          title: "",
          links: [
            { link: "https://www.youtube.com/embed/PkdFLVan0XQ" },
            { link: "https://www.youtube.com/embed/Gq1kg4loy3E" },
            { link: "https://www.youtube.com/embed/6e-rHu-aeuU" },
            { link: "https://www.youtube.com/embed/_JvPzsr2nz0" },
          ],
        },
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
      grid1Link: "https://www.youtube.com/embed/lpoL7Aw-7j8",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/2u2qCB_YOMw",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        {
          title: "",
          links: [
            { link: "https://www.youtube.com/embed/JgUEkm8WyVU" },
            { link: "https://www.youtube.com/embed/c13IzOm3-R0" },
            { link: "https://www.youtube.com/embed/BSo2EuGTUEA" },
          ],
        },
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
      grid1Link: "https://www.youtube.com/embed/DRvTPzsgqfE",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/_sU--px8c2Q",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        {
          title: "",
          links: [
            { link: "https://www.youtube.com/embed/ZrvXhApcFB0" },
            { link: "https://www.youtube.com/embed/6jzIL2vZ-7c" },
          ],
        },
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
      grid1Link: "https://www.youtube.com/embed/mvLyzXB-Jpg",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/jHB4whayU6E",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        {
          title: "",
          links: [{ link: "https://www.youtube.com/embed/jmozOyBhuyA" }],
        },
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
        {
          title: "",
          links: [
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
          ],
        },
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
      grid1Link: "https://www.youtube.com/embed/DRvTPzsgqfE",
      grid2SubText:
        "Marketing is no longer just about money but meticulous planning, marvelous execution, mesmerizing experience, and hence a memorable output so that your money becomes a motivation for your buyers to buy. Make your marketing, branding, and advertising memorable with our corporate animated videos.",
      grid2Link: "https://www.youtube.com/embed/_sU--px8c2Q",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        {
          title: "",
          links: [
            { link: "https://www.youtube.com/embed/ZrvXhApcFB0" },
            { link: "https://www.youtube.com/embed/6jzIL2vZ-7c" },
          ],
        },
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
        {
          title: "",
          links: [
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
          ],
        },
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
        {
          title: "",
          links: [
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
          ],
        },
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
        {
          title: "",
          links: [
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
          ],
        },
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
        {
          title: "",
          links: [
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
          ],
        },
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
        {
          title: "",
          links: [
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
          ],
        },
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
        {
          title: "",
          links: [
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
          ],
        },
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
        {
          title: "",
          links: [
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
          ],
        },
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
        {
          title: "",
          links: [
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
          ],
        },
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
        {
          title: "",
          links: [
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
          ],
        },
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
        {
          title: "",
          links: [
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
            { link: "https://www.youtube.com/embed/ngsDkRTInn4" },
          ],
        },
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

/////////////////////privacy/////////////////////

export const privacy = `Privacy Policy
Muhammad Umer built the Rocket Bumpy game as an Ad Supported game. This SERVICE is provided by Muhammad Umer at no cost and is intended for use as is.

This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.

If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.

The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Rocket Bumpy unless otherwise defined in this Privacy Policy.

Information Collection and Use

For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information. The information that I request will be retained on your device and is not collected by me in any way.

The game does use third party services that may collect information used to identify you.

Link to privacy policy of third party service providers used by the game

Google Play Services
Log Data

I want to inform you that whenever you use my Service, in a case of an error in the game I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the game when utilizing my Service, the time and date of your use of the Service, and other statistics.

Cookies

Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.

This Service does not use these “cookies” explicitly. However, the game may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.

Service Providers

I may employ third-party companies and individuals due to the following reasons:

To facilitate our Service;
To provide the Service on our behalf;
To perform Service-related services; or
To assist us in analyzing how our Service is used.
I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.

Security

I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.

Links to Other Sites

This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.

Children’s Privacy

These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do necessary actions.

Changes to This Privacy Policy

I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.

Contact Us

If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at uastudio2023@gmail.com.`;
