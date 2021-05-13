import PurpleTheme from '../src/themes/PurpleTheme'
import { addDecorator } from '@storybook/react';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

addDecorator((story) => (
  <ThemeProvider theme={responsiveFontSizes(createMuiTheme(PurpleTheme))}>{story()}</ThemeProvider>
));

export const parameters = {
	viewMode: 'docs',
	options: {
    storySort: {
      order: ['Introduction', 'Style', 'Elements', 'Content', 'User Input', 'Layout', 'Navigation', 'User Feedback'],
    },
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}