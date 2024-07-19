import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Andrew Ziegler",
  logo: "/logo.webp",
  email: "ziegler.andrew@outlook.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/zigg1",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Email",
    url: "ziegler.andrew@outlook.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Andrew Ziegler",
    description:
      "Andrew Ziegler, Computer Programmer",
    image: identity.logo,
  },
  role: "Computer Programmer",
  description:
    "Hi! My name is Andrew. I make programs for things on the computer.",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Andrew Ziegler",
    description:
      "Andrew Ziegler, Computer Programmer",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `
I am Andrew Ziegler. Lots of computer code has been typed by me over a very long time span.
<br/><br/>
I like Windows, but I like Linux more. Databases, websites, mobile apps (specifically Android), installing and configuring hardware, I can do it all. Self-trained in the matters, I am very passionate about the work. I hope this website can be a part of my demonstration of that.<br/><br/>
Enjoy my work? Please support me by sharing my content. Thank you!`, // Markdown is supported
    image_l: {
      url: "/about-img-1.png",
      alt: "Left Picture",
    },
    image_r: {
      url: "/about-img-2.jpg",
      alt: "Right Picture",
    },
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Andrew Ziegler",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "King Of The Hill Soundboard App",
      description: "Available for Android phones. Press a button and hear an original short audio clip from the TV show King Of The Hill. Over 100 downloads!",
      image: "/angry hank hill.png",
      year: "2024",
      url: "https://play.google.com/store/apps/details?id=com.zigg.soundboard&hl=en",
    },
    {
      title: "Space Station Locator Website",
      description: "Tracks the speed, altitude, longitude, and latitude of the International Space Station",
      image: "/iss.webp",
      year: "2020",
      url: "/spacestationlocation",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Andrew Ziegler",
    description: "Things on my mind",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
