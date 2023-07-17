import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

import { ProjectComponent } from '@/components/ProjectComponent';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <ProjectComponent
        name="Grocery Store"
        description="A template for an organic grocery store."
        link="https://tanukesensei.github.io/groceryStore"
        img={{
          src: '/assets/images/grocery-store.png',
          alt: 'organic grocery store',
        }}
        category={
          <>
            <Tags color={ColorTags.ROSE}>HTML 5</Tags>
            <Tags color={ColorTags.INDIGO}>CSS</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            {/* <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags> */}
          </>
        }
      />
      <Project
        name="Pokédex"
        description="A pokédex made as a Vue JS study project, using the concept of a single page application, a
        simple search and the possibility to flip pokémon sprites. The information and images are provided by pokeApi."
        link="https://tanukesensei.github.io/pokedex/"
        img={{
          src: '/assets/images/pokedex.png',
          alt: 'Pokedex',
        }}
        category={
          <>
            <Tags color={ColorTags.ROSE}>HTML 5</Tags>
            <Tags color={ColorTags.GREEN}>Vuejs</Tags>
            <Tags color={ColorTags.YELLOW}>Javascript</Tags>
            {/* <Tags color={ColorTags.SKY}>Tailwind.css</Tags> */}
          </>
        }
      />
      <ProjectComponent
        name="File Metadata API"
        description="File metadata project made to train creation of Restfull APIs using Javascript and express."
        link="https://file-metadata-api.fly.dev/"
        img={{
          src: '/assets/images/file-metadata-api.jpg',
          alt: 'File Metadata',
        }}
        category={
          <>
            {/* <Tags color={ColorTags.VIOLET}>Next.js</Tags> */}
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            <Tags color={ColorTags.EMERALD}>Express</Tags>
          </>
        }
      />
      <ProjectComponent
        name="Url Shortener API"
        description="Url shortener project made to train creation of Restfull APIs using Javascript and express."
        link="https://url-shortener-project.fly.dev/"
        img={{
          src: '/assets/images/url-shortener-api.jpg',
          alt: 'Url Shortener',
        }}
        category={
          <>
            <Tags color={ColorTags.INDIGO}>CSS</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            <Tags color={ColorTags.EMERALD}>Express</Tags>
          </>
        }
      />
      <ProjectComponent
        name="Header Parser API"
        description="Header Parser API project made to train creation of Restfull APIs using Javascript and express."
        link="https://headerparser-project.fly.dev/"
        img={{
          src: '/assets/images/header-parser-api.jpg',
          alt: 'Header Parser API',
        }}
        category={
          <>
            <Tags color={ColorTags.INDIGO}>CSS</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            <Tags color={ColorTags.EMERALD}>Express</Tags>
          </>
        }
      />
      <ProjectComponent
        name="Timestamp API"
        description="A timestamp API project made to train creation of Restfull APIs using Javascript and express."
        link="https://timestamp-api-project.fly.dev/"
        img={{
          src: '/assets/images/timestamp-api.jpg',
          alt: 'Timestamp API',
        }}
        category={
          <>
            <Tags color={ColorTags.INDIGO}>CSS</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            <Tags color={ColorTags.EMERALD}>Express</Tags>
          </>
        }
      />
      <ProjectComponent
        name="Exercise Tracker API"
        description="A exercise tracker API project made to train creation of Restfull APIs using Javascript and express."
        link="https://exercisetracker.fly.dev/"
        img={{
          src: '/assets/images/exercise-tracker-api.jpg',
          alt: 'Exercise Tracker API',
        }}
        category={
          <>
            <Tags color={ColorTags.INDIGO}>CSS</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            <Tags color={ColorTags.EMERALD}>Express</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
