import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";

interface SocialCardProps {
  icon: ReactNode;
  title: string;
  username: string;
  link: string;
  color: string;
  glowColor: string;
}

const SocialCard = ({ icon, title, username, link, color, glowColor }: SocialCardProps) => {
  const isMailto = link.startsWith('mailto:');
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMailto) {
      e.preventDefault();
      window.location.href = link;
    }
  };
  
  return (
    <a
      href={link}
      onClick={handleClick}
      {...(!isMailto && { target: "_blank", rel: "noopener noreferrer" })}
      className="group relative bg-card border-2 border-border rounded-xl p-6 transition-all duration-500 hover:scale-[1.02] animate-fade-in card-neon-effect"
      style={{ 
        ['--card-glow' as string]: glowColor
      }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div 
            className="text-3xl transition-all duration-300 group-hover:scale-110 icon-glow"
            style={{ 
              color: color,
              ['--icon-glow' as string]: glowColor
            }}
          >
            {icon}
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{username}</p>
          </div>
        </div>
        <ExternalLink 
          className="text-muted-foreground transition-all duration-300 opacity-60 group-hover:opacity-100" 
          style={{ color }}
          size={20} 
        />
      </div>
    </a>
  );
};

export default SocialCard;
