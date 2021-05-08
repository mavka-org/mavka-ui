import { muiTheme } from 'storybook-addon-material-ui'

import PurpleTheme from '../src/themes/PurpleTheme'

export const decorators = [
	muiTheme([PurpleTheme])
];

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }