import { Stack } from '@kadena/react-components';

import { checkSubTreeForActive } from '@/utils/staticGeneration';
import { GetStaticProps } from 'next';
import React, { FC } from 'react';

const Home: FC = () => {
  return <Stack>Error</Stack>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      leftMenuTree: checkSubTreeForActive(),
      frontmatter: {
        title: 'Welcome to Kadena docs',
        menu: 'Pact',
        label: 'Pact Test',
        order: 1,
        description: 'Home page',
        layout: 'home',
      },
    },
  };
};

export default Home;
