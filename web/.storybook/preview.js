import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import globalStyle from '../src/styles/globalStyle';
import { theme } from '../src/styles/Theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

const themes = [theme, globalStyle];
addDecorator(withThemesProvider(themes), ThemeProvider);
addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);
