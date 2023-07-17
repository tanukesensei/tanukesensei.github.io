import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hello there, I'm <GradientText>Tanuke Sensei</GradientText> 👋
        </>
      }
      description={
        <>
          <p>
            I have a degree in Internet Systems and currently work as a
            fullstack developer at{' '}
            <a className="text-cyan-400 hover:underline" href="/#">
              Lubien Desenvolvimentos LTDA
            </a>
            . I also have 4 years of experience as a customer service support,
            at{' '}
            <a
              className="text-cyan-400 hover:underline"
              href="https://www.cigam.com.br/"
              target="_blank"
            >
              Cigam
            </a>
            .
          </p>
          <p>
            As a front-end, I have experience with HTML, CSS, Javascript,
            ReactJS, Tailwind CSS, Bootstrap CSS, Live View and NodeJS.
          </p>
          <p>
            As a backend, I have experience with NodeJS, Elixir, Phoenix, Ecto,
            PostgreSQL and MySQL. <br /> I also used PHP, Lavaravel and CakePHP
            a few years ago, so I have some experience with those as well.
          </p>
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/tanukesensei">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          {/* <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a> */}
          <a href="https://www.linkedin.com/in/tanukesensei/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          {/* <a href="/">
            <HeroSocial
            src="/assets/images/youtube-icon.png"
            alt="Youtube icon"
            />
          </a> */}
          <a href="https://github.com/tanukesensei">
            <HeroSocial
              src="/assets/images/github-mark-white.png"
              alt="Github icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
