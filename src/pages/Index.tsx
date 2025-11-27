import Header from "@/components/Header";
import SocialCard from "@/components/SocialCard";
import Footer from "@/components/Footer";
import MouseTracker from "@/components/MouseTracker";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaGlobe } from "react-icons/fa";

const Index = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      title: "GitHub",
      username: "@cicerossti",
      link: "https://github.com/cicerossti",
      color: "#4ade80",
      glowColor: "rgba(74, 222, 128, 0.5)",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      username: "Cícero S. Sousa",
      link: "https://www.linkedin.com/in/c%C3%ADcero-s-sousa-622b48232/",
      color: "#0a66c2",
      glowColor: "rgba(10, 102, 194, 0.5)",
    },
    {
      icon: <FaTwitter />,
      title: "Twitter/X",
      username: "@eucicerosilva",
      link: "https://x.com/eucicerosilva",
      color: "#1da1f2",
      glowColor: "rgba(29, 161, 242, 0.5)",
    },
    {
      icon: <FaInstagram />,
      title: "Instagram",
      username: "@cicerosilva.ti",
      link: "https://www.instagram.com/cicerosilva.ti/",
      color: "#e4405f",
      glowColor: "rgba(228, 64, 95, 0.5)",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      username: "ci**09@gmail.com",
      link: "mailto:cicerosilva2109@gmail.com?subject=Contato%20via%20Site",
      color: "#a78bfa",
      glowColor: "rgba(167, 139, 250, 0.5)",
    },
    {
      icon: <FaGlobe />,
      title: "Website",
      username: "cicerossousa.com.br",
      link: "http://cicerossousa.com.br",
      color: "#22d3ee",
      glowColor: "rgba(34, 211, 238, 0.5)",
    },
  ];

  return (
    <>
      <MouseTracker />
      <div className="min-h-screen relative z-10 flex flex-col items-center justify-center p-4 md:p-8">
        <div className="max-w-4xl w-full space-y-12">
          <Header />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {socialLinks.map((link, index) => (
              <SocialCard key={index} {...link} />
            ))}
          </div>
          
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
