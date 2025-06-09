import profilePicture1 from "@/assets/profile_pictutes/cedrickah.png";
import profilePicture2 from "@/assets/profile_pictutes/shedrach.jpg";
import workImage1 from "@/assets/work_images/pap.jpg";
import workImage2 from "@/assets/work_images/kp.png";
import workImage3 from "@/assets/work_images/postdroid.png";

export const siteConfig = {
  name: "Open Devans",
  description:
    "A collective of software engineers building exceptional web and mobile applications",
  url: "https://opendevans.com",
  links: {
    github: "https://github.com/Open-Devans",
    linkedin: "https://linkedin.com/company/opendevans",
  },
};

export const navigationLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/#services",
  },
  {
    title: "Work",
    href: "/#work",
  },
  {
    title: "Team",
    href: "/#team",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];

export const services = [
  {
    title: "Web Development",
    description:
      "Modern, responsive web applications built with React and Next.js",
    icon: "Code",
    features: [
      "Single Page Applications",
      "Server-Side Rendering",
      "Static Site Generation",
      "Progressive Web Apps",
    ],
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform mobile applications using React Native and Expo",
    icon: "Smartphone",
    features: [
      "iOS & Android Apps",
      "Offline Capabilities",
      "Push Notifications",
      "App Store Deployment",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design that balances aesthetics with functionality",
    icon: "Palette",
    features: ["Wireframing", "Prototyping", "User Testing", "Design Systems"],
  },
  {
    title: "Technical Consulting",
    description:
      "Expert guidance on technology choices and implementation strategies",
    icon: "Lightbulb",
    features: [
      "Technology Evaluation",
      "Architecture Planning",
      "Code Reviews",
      "Performance Optimization",
    ],
  },
  {
    title: "Open Source Software",
    description:
      "Contributing to and maintaining open source projects that benefit the developer community",
    icon: "Github",
    features: [
      "Library Development",
      "Documentation",
      "Community Support",
      "Issue Resolution",
    ],
  },
];

export const projects = [
  {
    title: "Pro Annonce+",
    description: "A modern marketplace solution",
    image: workImage1,
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Google Maps API"],
    category: "Mobile/Web Development",
    link: "https://pro-annonce.com",
  },
  {
    title: "KryptaPay P2P",
    description: "Mobile application for P2P crypto exchange",
    image: workImage2,
    technologies: ["React Native", "Expo", "Redux", "MongoDB", "Node.js"],
    category: "Mobile/Web Development",
    link: "https://krypta-pay.com",
  },
  {
    title: "Postdroid",
    description: "Open source API tester app",
    image: workImage3,
    technologies: ["React Native", "Expo", "Fetch"],
    category: "Mobile Development",
    link: "https://github.com/open-devans/postdroid",
  },
];

export const teamMembers = [
  {
    name: "Cedrick AHOUANGANSI",
    role: "Founder & Lead Developer",
    bio: "Full-stack engineer with 6+ years of experience building web and mobile applications. Specialized in backend development.",
    image: profilePicture1,
    skills: ["TypeScript", "Node.js", "Golang", "React", "React Native"],
    links: {
      github: "https://github.com/cedrickah",
      linkedin:
        "https://www.linkedin.com/in/cedrick-ahouangansi-0049901b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "https://x.com/cedrickentrep?s=09",
    },
  },
  {
    name: "Shedrach Jonah",
    role: "Mobile Developer",
    bio: "Passionate about creating seamless mobile experiences. Expert in React Native and Expo with a background in native iOS and Android development.",
    image: profilePicture2,
    skills: ["React Native", "Expo", "JavaScript", "TypeScript", "React"],
    links: {
      github: "https://github.com/ShedrachJonah11",
      linkedin: "https://www.linkedin.com/in/shedrach-jonah-4894a722a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      twitter: "https://x.com/shedyyyyyy_?s=21&t=DXoMQjeLYxVaXBq2dYtRVA",
    },
  },
];
