import {
  Linkedin,
  Npm,
  Twitter,
  Github,
  Devdotto,
} from '@icons-pack/react-simple-icons';

const iconSize = 32;
const links = [
  {
    icon: <Github size={iconSize} />,
    title: 'Github',
    link: 'https://github.com/lwhiteley',
  },
  {
    icon: <Linkedin size={iconSize} />,
    title: 'Linkedin',
    link: 'https://jm.linkedin.com/in/layton-whiteley-25284541',
  },
  {
    icon: <Twitter size={iconSize} />,
    title: 'Twitter',
    link: 'https://twitter.com/LaytonGates',
  },
  {
    icon: <Npm size={iconSize} />,
    title: 'npm',
    link: 'https://npmjs.com/~lwhiteley',
  },
  {
    icon: <Devdotto size={iconSize} />,
    title: 'Dev Community',
    link: 'https://dev.to/lwhiteley',
  },
];

export const Links = () => {
  return (
    <div className="flex space-x-6 justify-center">
      {links.map(({ icon, link, title }) => {
        return (
          <a
            key={link}
            alt={title}
            target="_blank"
            href={link}
            className="text-5xl"
          >
            {icon || title}
          </a>
        );
      })}
    </div>
  );
};
