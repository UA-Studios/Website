import logo from "./assets/images/home/logo.png";
import landingImg from "./assets/images/home/landing.png";
import photoVideoImg from "./assets/images/home/photoVideo.png";
import planeImg from "./assets/images/home/plane.png";
import camImg from "./assets/images/home/cam.png";
import camFileImg from "./assets/images/home/camFile.png";
import contactUsImg from "./assets/images/contact/CONTACT US.png";
import contactBackArt from "./assets/images/contact/backart.gif";
import common1 from "./assets/images/common 1.png";
import common2 from "./assets/images/common 2.png";
import twoDanimationImg from "./assets/images/animation/2Danimation.png";
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
import whiteboard from "./assets/images/animation/whiteboard.png";
import call from "./assets/images/contact/call.png";
import email from "./assets/images/contact/@.png";
import location from "./assets/images/contact/location.png";
import threeDanimation from "./assets/images/animation/3D animation.png";
import promo from "./assets/images/animation/promo.png";
import premium from "./assets/images/animation/premium.png";
import live from "./assets/images/animation/Live action explainer.png";
import interactive from "./assets/images/animation/interactive.png";
import video from "./assets/images/animation/vid  editing.png";
import logoAnimation from "./assets/images/animation/LOGO ANIMATION.png";
import aboutus from "./assets/images/about/ABOUTUS.jpg";
import rightimg from "./assets/images/about/new 3.png";
import design from "./assets/images/design/GRAPHIC DES.png";
import design1 from "./assets/images/design/flyer.jpg";
import design2 from "./assets/images/design/logo.jpeg";
import design3 from "./assets/images/design/logo2.jpg";
import design4 from "./assets/images/design/logo3.jpg";
import design5 from "./assets/images/design/logo4.jpg";
import design6 from "./assets/images/design/banner.jpg";
import design7 from "./assets/images/design/brochure.jpg";
import video1 from "./assets/images/home/video/Explainer vides.png";
import video2 from "./assets/images/home/video/TRAINNIG VIDEOS.png";
import video3 from "./assets/images/home/video/3d animation.png";
import video4 from "./assets/images/home/video/VIDEO SERIES.png";
import video5 from "./assets/images/home/video/whiteboard banner.png";
import game1 from "./assets/images/game/Game devalopment.png";

// import homeVid1 from "./assets/images/home/";

/////////////////////common exports/////////////////////
export const common_1 = common1;
export const common_2 = common2;
export const companyLogo = logo;
/////////////////////Navbar/////////////////////
export const navbar = {
  logo: logo,
  menuNames: [
    { link: "/products", name: "PRODUCTS" },
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
            // { link: "/interactive-videos", name: "Interactive videos" },
            { link: "/video-editing", name: "Video editing" },
          ],
        },
        {
          name: "GRAPHIC DESIGNING",
          link: "/graphic-designing",
        },
        {
          name: "GAME DEVELOPMENT",
          link: "/game-development",
        },
        {
          name: "WEB DEVELOPMENT",
          link: "/web-development",
        },
      ],
    },
    { link: "#", name: "BLOG" },
    { link: "/about-us", name: "ABOUT US" },
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
        image: video1,
        headerText: "Explainer Videos",
        SubText:
          "Explain your product or service in the most effective way and generate more leads",
      },
      {
        image: video4,
        headerText: "Video Series",
        SubText: "Animated video series with a uniform theme and a common goal",
      },
      {
        image: video2,
        headerText: "Training Videos",
        SubText:
          "Show how your product or service works and make your customers’ lives easier",
      },
      {
        image: video5,
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
        image: video3,
        headerText: "3D Animated Videos",
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
export const portfolioFooterBtnLink =
  "https://www.youtube.com/channel/UCPL0uASGcB9p1hViMmHyFHg";
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
      coverImg: whiteboard,
      grid1Header: "When to use Whiteboard Animation Video?",
      grid1SubText:
        "Whiteboard videos work best for complex or lengthy topics, educational topics or stories that are long.",
      grid1Link: "https://www.youtube.com/embed/GTu6oQ3IDuo",
      grid2SubText:
        "Unfold your story about your product or service with hand drawings using our Whiteboard Animation videos. As the name suggests, whiteboard videos use a white screen and the animation unfolds drawing-by-drawing.",
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
    },
    twoDanimation: {
      coverImg: twoDanimationImg,
      grid1Header: "What is a 2D Animation Video and when to use it?",
      grid1SubText:
        "Widely used in an advertisement, movies, cartoon shows, marketing videos, games, etc. 2D animation videos have their objects and characters created in two-dimensional space. Use 2D animation videos when you want to quickly make a less complex and more appealing content to tell your brand’s story.",
      grid1Link: "https://www.youtube.com/embed/Zb17YZuEPJI",
      grid2SubText:
        "Explain, entertain, engage and entice your customers with our 2D animated videos. The use of characters and situational life events make them highly relatable to your audience. Such videos are budget-friendly and can increase business conversions beyond expectations. 2D animation videos can be used as product explainer videos, mobile app explainer videos, and corporate explainer videos. ",
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
    },
    threeDanimation: {
      coverImg: threeDanimation,
      grid1Header:
        "Why should you prefer 3D Animation Video over 2D Animation Video?",
      grid1SubText:
        "3D animation videos are more realistic than 2D animation videos. Despite being much more expensive than their 2D counterparts, they are the preferred choice when it comes to showing something larger than life.",
      grid1Link: "https://www.youtube.com/embed/tA3VMm7oDw0",
      grid2SubText:
        "Whether you want to show the cross-section of a complex machine or a 3D character design of your mascot, walkthrough video of your residential or commercial building or a marketing video describing your product or service, our affordable 3D animation videos are all that you need.",
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
    },
    promoVids: {
      coverImg: promo,
      grid1SubText:
        "Welcome to our Promo Video category! Here, you'll find a wide range of high-quality videos that are perfect for promoting your business, product, or service. Whether you're looking to create a buzz around a new launch or simply want to showcase your brand in a creative way, our selection of promo videos is sure to impress.",
      grid1Link: "https://www.youtube.com/embed/QJAxFJnJ35I",
      grid2SubText:
        "Our team of professional videographers and editors are dedicated to creating visually stunning and engaging content that will help you stand out from the competition. With a focus on storytelling and effective messaging, our promo videos will help you connect with your target audience and achieve your marketing goals.",
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
    },
    premiumVids: {
      coverImg: premium,
      grid1SubText:
        "Introducing our Premium Video collection! These exclusive videos are designed to take your visual content to the next level, with stunning visuals, expert storytelling, and cutting-edge production techniques.",
      grid1Link: "https://www.youtube.com/embed/lpoL7Aw-7j8",
      grid2SubText:
        "Our Premium Videos are perfect for businesses looking to make a big impact with their marketing campaigns, product launches, or other high-profile events. Whether you're looking to create a buzz around a new product, drive more sales, or simply showcase your brand in the best possible light, our premium videos will help you achieve your goals.",
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
    },
    liveActionExplainer: {
      coverImg: live,
      grid1SubText:
        "At Umeratiq Studio, we understand the importance of visually appealing and effective marketing strategies. That's why we're dedicated to delivering stunning and engaging live action explainer videos that capture the attention of your target audience and leave a lasting impression. Our team of experts specializes in capturing dynamic footage, whether it be real-life actions, scenic landscapes, or unique perspectives, and combining it with special effects to bring your ideas to life.",
      grid1Link: "https://www.youtube.com/embed/DRvTPzsgqfE",
      grid2SubText:
        "With our live action videos, you can effectively showcase your product, service, or brand in a way that sets you apart from the competition. Our focus is on delivering high-quality content that not only looks great, but effectively communicates your message to your target audience. Our team of experts work closely with you to understand your goals and create a video that not only meets, but exceeds your expectations.",
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
    },
    logoAnimation: {
      coverImg: logoAnimation,
      grid1SubText:
        "At Umeratiq Studio, we understand the importance of visually appealing and effective marketing strategies. That's why we're dedicated to delivering stunning and engaging live action explainer videos that capture the attention of your target audience and leave a lasting impression. Our team of experts specializes in capturing dynamic footage, whether it be real-life actions, scenic landscapes, or unique perspectives, and combining it with special effects to bring your ideas to life.",
      grid1Link: "https://www.youtube.com/embed/mvLyzXB-Jpg",
      grid2SubText:
        "With our live action videos, you can effectively showcase your product, service, or brand in a way that sets you apart from the competition. Our focus is on delivering high-quality content that not only looks great, but effectively communicates your message to your target audience. Our team of experts work closely with you to understand your goals and create a video that not only meets, but exceeds your expectations.",
      grid2Link: "https://www.youtube.com/embed/jHB4whayU6E",
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        {
          title: "",
          links: [{ link: "https://www.youtube.com/embed/jmozOyBhuyA" }],
        },
      ],
    },
    interactiveVids: {
      coverImg: interactive,
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
    },
    videoEditing: {
      coverImg: video,
      grid1SubText:
        "At Umeratiq Studio, our team of experienced video editors are experts in the art of storytelling and use the latest software and techniques to turn raw footage into a visually stunning and emotionally engaging video. Whether you're looking to create a promotional video, a corporate video, or a personal memory reel, our video editing services will bring your vision to life with precision and professionalism.",
      grid1Link: "https://www.youtube.com/embed/DRvTPzsgqfE",
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
    },
  },
  graphicDesigning: {
    graphicDesign: {
      coverImg: design,
      grid1SubText:
        "At Umeratiq Studio, we offer a wide range of graphic design services to help businesses and individuals bring their creative vision to life. Our team of talented graphic designers use their skills and experience to create visually stunning and impactful designs that effectively communicate your brand's message to your target audience.",
      grid1Img: design2,
      grid2SubText:
        "At Umeratiq Studio, we understand the importance of visual communication, and we're dedicated to helping our clients create designs that accurately represent their brand and values. From concept to final product, our graphic design services are designed to make the process of bringing your vision to life as easy and stress-free as possible. Choose Umeratiq Studio for your next graphic design project and elevate your brand's visual presence with professional and impactful designs.",
      grid2Img: design3,
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        {
          title: "LOGO",
          imgs: [{ img: design4 }, { img: design5 }],
        },
        {
          title: "BANNER",
          imgs: [{ img: design6 }],
        },
        {
          title: "BROCHURE",
          imgs: [{ img: design7 }],
        },
        {
          title: "FLYER",
          imgs: [{ img: design1 }],
        },
      ],
    },
  },
  gameDevelopment: {
    gameDevelopment: {
      coverImg: game1,
      grid1SubText:
        "At Umeratiq Studio, we offer a wide range of graphic design services to help businesses and individuals bring their creative vision to life. Our team of talented graphic designers use their skills and experience to create visually stunning and impactful designs that effectively communicate your brand's message to your target audience.",
      grid1Img: design2,
      grid2SubText:
        "At Umeratiq Studio, we understand the importance of visual communication, and we're dedicated to helping our clients create designs that accurately represent their brand and values. From concept to final product, our graphic design services are designed to make the process of bringing your vision to life as easy and stress-free as possible. Choose Umeratiq Studio for your next graphic design project and elevate your brand's visual presence with professional and impactful designs.",
      grid2Img: design3,
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        {
          title: "LOGO",
          imgs: [{ img: design4 }, { img: design5 }],
        },
        {
          title: "BANNER",
          imgs: [{ img: design6 }],
        },
        {
          title: "BROCHURE",
          imgs: [{ img: design7 }],
        },
        {
          title: "FLYER",
          imgs: [{ img: design1 }],
        },
      ],
    },
  },
  web: {
    web: {
      coverImg: game1,
      grid1SubText:
        "At Umeratiq Studio, we offer a wide range of graphic design services to help businesses and individuals bring their creative vision to life. Our team of talented graphic designers use their skills and experience to create visually stunning and impactful designs that effectively communicate your brand's message to your target audience.",
      grid1Img: design2,
      grid2SubText:
        "At Umeratiq Studio, we understand the importance of visual communication, and we're dedicated to helping our clients create designs that accurately represent their brand and values. From concept to final product, our graphic design services are designed to make the process of bringing your vision to life as easy and stress-free as possible. Choose Umeratiq Studio for your next graphic design project and elevate your brand's visual presence with professional and impactful designs.",
      grid2Img: design3,
      explainertext: "Some of the Animated Explainer Videos we’ve made:​",
      explainervids: [
        {
          title: "LOGO",
          imgs: [{ img: design4 }, { img: design5 }],
        },
        {
          title: "BANNER",
          imgs: [{ img: design6 }],
        },
        {
          title: "BROCHURE",
          imgs: [{ img: design7 }],
        },
        {
          title: "FLYER",
          imgs: [{ img: design1 }],
        },
      ],
    },
  },
  faq: {
    faqText: "FAQ",
    faq: [
      {
        title:
          "What are the different types of video services that you provide?",
        details:
          "We provide all types of 2D animation and certain types of 3D animation video services. Our list of video types include: Corporate Videos, Explainer Videos, Whiteboard Animation, Character Animation, Motion Graphics Videos, Mobile App Explainer Videos, Event Promotional Videos, Infographic Videos, Educational Videos, Stop Motion Videos, etc.",
      },
      {
        title:
          "Why should you choose Umer Atiq Animation as your video company?",
        details:
          "Our video production company aims to make your name. Hence every video is fully customised to achieve your marketing objectives. With over 6 years of experience, over 1000 videos successfully delivered to our clients and over 5 million views on our YouTube channels, we are nothing like other video animation companies. Our videos fit in your budget, provide top-notch quality and our entire team of creative writers, designers and animators is at your disposal to make your brand’s message reach your audience through an engaging video. What are you waiting for? Partner with us to create an outstanding video for your brand.",
      },
      {
        title: "How much time does it take to make an animated video?",
        details:
          "Putting life into a video requires extensive research, knowledge about your industry, a perfect script that can do justice to your video and amazing animation that can elevate your brand. Every video requires experts from different domains: creative head, scriptwriters, illustrators, designers, animators and voice-over artists. Having said that, usually a 1-minute 2D animation video takes about 7-10 working days and a 1-minute 3D animation takes about 15-30 days. It might take more time depending on the complexity of the video, duration of the video, integrating your feedback/revisions, etc. But your time is our utmost priority; we thrive on delivering your project on time.",
      },
      {
        title: "How much does an animation video cost?",
        details:
          "An animation video comprises various stages – script writing, storyboard designing, animation, voice-over and background music & SFX. Cost of the video depends on how many stages would you like us to do, the style of video, the length of the video and how quickly you want it. Having said that, a 1-minute 2D animated video costs somewhere between PKR 10,000 to PKR 30,000 and a 1-minute 3D animated video costs somewhere between PKR 60,000 to PKR 90,000. For an accurate quote for your video, kindly email us on Support@umeratiqstudio.com and we’d be happy to help you.",
      },
      {
        title: "What’s your video production process?",
        details:
          "At Umer Atiq Animation, we create engaging, high quality, visually engaging and completely customised animation videos as per your needs and industry. And this is backed by a solid process. Every video follows a 6-step process: Requirement gathering, Scriptwriting, Storyboard Designing, Animation, Voiceover and Background Music & SFX. Each stage comes with the liberty of revisions till your satisfaction. Each stage takes us a step closer to your dream video. Depending on your needs, our video production company can also provide unlimited changes and/or quicker delivery of video. We’re very flexible to help you achieve your dreams.",
      },
      {
        title: "What are your payment terms?",
        details:
          "Once you partner with us for your video production needs, we send you an official proposal that mentions our payment terms, bank details and terms and conditions to proceed. Throughout the process, your consent is being taken at each stage to ensure an amazing output.",
      },
      {
        title: "Is it possible to speed up the production process?",
        details:
          "We understand that you might have some unanticipated events where you might need to showcase your brand to get the maximum benefit. Depending on your budget, we might speed up the video production process. Do get in touch today and let us know your deadline and we will make every effort to accommodate that and create a fantastic video for you.",
      },
      {
        title: "What details do I need to send?",
        details:
          "We usually require your brand logo, brand guidelines (if any), your existing website / brochure / presentation, etc.",
      },
      {
        title: "How much revision(s) do you allow?",
        details:
          "As we had mentioned, our video production process is a 6-step process; work proceeds to the next stage only with the client’s approval. Typically, two changes per stage are allowed, but at times, we offer unlimited revisions until our client is satisfied with the outcome (terms and conditions apply). Usually, our work gets over only when you are satisfied with the video. So you can be assured that you will get a quality output.",
      },
      {
        title: "What is included in the final deliverables?",
        details:
          "A WhatsApp HD quality video (854×480 pixels), YouTube HD quality video (1920×1080 pixels), And any other deliverables as discussed in our proposal.",
      },
      {
        title: "Do I need more than 1 video?",
        details:
          "Every video is prepared based on its objectives and goals. Since every video tells a different story and with the attention span going down, it’s essential to put out your brand communication from time to time in different ways to engage your target audience. So if you feel that you want to put out your brand communication regularly in different ways, want to communicate various products / services in front of your audience or want to tackle multiple marketing goals, we have special packages to meet your bulk video requirements.",
      },
    ],
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
    icon: location,
    header: "Office",
    subText: "office # 8 Al-noor plaza, near t-chowk, shah rukne alam, Multan",
  },
  {
    icon: email,
    header: "Mail Us",
    subText: "support@umeratiqstudio.com",
  },
  {
    icon: call,
    header: "Call Us",
    subText: "+92-3157944844",
  },
];

/////////////////////footer/////////////////////

export const footer = {
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
        // { link: "/interactive-videos", name: "Interactive videos" },
        { link: "/video-editing", name: "Video editing" },
      ],
    },
  ],
  newServices: [
    {
      name: "GRAPHIC DESIGNING",
      link: "/graphic-designing",
    },
    {
      name: "GAME DEVELOPMENT",
      link: "/game-development",
    },
    {
      name: "WEB DEVELOPMENT",
      link: "/web-development",
    },
  ],
};

/////////////////////about us/////////////////////

export const about = {
  image: aboutus,
  rightimg: rightimg,
};
