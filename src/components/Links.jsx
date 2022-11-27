import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { NpmLogo } from './npm.svg';

const links = [
  {
    icon: <AiFillGithub />,
    title: 'Github',
    link: 'https://github.com/lwhiteley',
  },
  {
    icon: <AiFillLinkedin />,
    title: 'Linkedin',
    link: 'https://jm.linkedin.com/in/layton-whiteley-25284541',
  },
  {
    icon: <AiOutlineTwitter />,
    title: 'Twitter',
    link: 'https://twitter.com/LaytonGates',
  },
  {
    icon: <NpmLogo />,
    title: 'npm',
    link: 'https://npmjs.com/~lwhiteley',
  },
  {
    icon: (
      <img
        src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
        width="48px"
      />
    ),
    title: 'Dev Community',
    link: 'https://dev.to/lwhiteley',
  },
];

export const Links = () => {
  return (
    <div class="flex space-x-6 justify-center">
      {links.map(({ icon, link, title }) => {
        return (
          <a
            key={link}
            alt={title}
            target="_blank"
            href={link}
            class="text-5xl"
          >
            {icon || title}
          </a>
        );
      })}
    </div>
  );
};
