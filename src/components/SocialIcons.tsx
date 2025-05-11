import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import { SocialLink } from '../types';

interface SocialIconsProps {
  links: ReadonlyArray<SocialLink>;
}

const SocialIcons: React.FC<SocialIconsProps> = ({ links }) => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub':
        return <Github className="w-5 h-5" />;
      case 'LinkedIn':
        return <Linkedin className="w-5 h-5" />;
      case 'Twitter':
        return <Twitter className="w-5 h-5" />;
      case 'Instagram':
        return <Instagram className="w-5 h-5" />;
      case 'Email':
        return <Mail className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex space-x-4">
      {links.map((link) => (
        <a
          key={link.platform}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
          aria-label={link.platform}
        >
          {getIcon(link.platform)}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;