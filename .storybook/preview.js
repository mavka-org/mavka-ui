import { muiTheme } from 'storybook-addon-material-ui'

import PurpleTheme from '../src/themes/PurpleTheme'

export const decorators = [
	muiTheme([PurpleTheme])
];

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