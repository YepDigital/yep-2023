/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const theme = require("tailwindcss/defaultTheme");

module.exports = {
  //--------------------------------------------------------------------------
  // The various configurable Tailwind configuration files.
  presets: [
    require('tailwindcss/defaultConfig'),
  ],
	content: [
		"./src/**/*.{njk,md,html,css}",
		"!./src/sitemap.xml.njk",
		"!./src/robots.txt.njk",
	],
  theme: {
    extend: {
      colors: {
				'brand': {
					50: '#F8FBFF',
					100: '#D3E6FD',
					200: '#8BBBF9',
					300: '#4291F5',
					400: '#0C69DF',
					500: '#084796',
					600: '#073B7E',
					700: '#053066',
					800: '#04254E',
					900: '#031935',
					950: '#021329'
				},
				'alt': {
					50: "#FFF1F0",
					100: "#FFDEDC",
					200: "#FFC1BD",
					300: "#FEA09A",
					400: "#FE847B",
					500: "#FE6157",
					600: "#FE2516",
					700: "#CB0F01",
					800: "#890A01",
					900: "#420500",
					950: "#230300"
				},
				'tert': {
					50: "#EFFAF5",
					100: "#D8F3E7",
					200: "#ADE6CC",
					300: "#76D6AB",
					400: "#3AC084",
					500: "#2F9D6C",
					600: "#2A8D61",
					700: "#247A53",
					800: "#1F6646",
					900: "#154730",
					950: "#103726"
				},
        //--------------------------------------------------------------------------
        // Create a new colour class for body text to use anywhere
        body: {
          DEFAULT: colors.zinc["800"],
        },
        //--------------------------------------------------------------------------
        // Set a default colour for the focus ring.
        focus: {
          DEFAULT: colors.blue["400"],
        },
			},      //--------------------------------------------------------------------------
      // Customise the default border colour
      borderColor: ({ theme }) => ({
        DEFAULT: theme('colors.grey.200', 'currentColor'),
        ...theme('colors'),
      }),
      //--------------------------------------------------------------------------
      // Change that god awful blue ring colour
      ringColor: ({ theme }) => ({
        DEFAULT: theme('colors.brand.500', 'currentColor'),
        ...theme('colors'),
      }),
      fontFamily: {
        //--------------------------------------------------------------------------
        // Use a custom display font for this site by changing 'Fancy' to the
        // font name you want and uncommenting the following line.
        // display: [
        //   // 'Fancy',
        //   ...theme.fontFamily.sans,
        // ],
        sans: [
					['Interphases', ...theme.fontFamily.sans],
					{fontVariationSettings: "'slnt' 0"}
				],
        serif: [
          // 'Lavigne',
          ...theme.fontFamily.serif,
        ],
        mono: [
          // 'Anonymous',
          ...theme.fontFamily.mono,
        ],
      },
      // The default of 150ms is too fast, so we'll use 300ms instead.
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
			// Text sizes xl and above are fluid, max size is Tailwind's default sizes while the smallest is eyeballed to work well.
			// Calculated using: https://min-max-calculator.9elements.com or https://royalfig.github.io/fluid-typography-calculator
			// with Min/Max Viewports of 500/2560px
      fontSize: {
				// Min/Max 20/21px (this does actually scale sub pixel)
        small: ['clamp(1rem, 0.909rem + 0.29vw, 1.375rem)', '1.4'],
				// Min/Max 16/24px
        default: ['clamp(1.125rem, 1.034rem + 0.29vw, 1.5rem)', '1.5'],
				// Min/Max 22/28px
        heading: ['clamp(1.375rem, 1.284rem + 0.29vw, 1.75rem)', '1.3'],
				// Min/Max 24/32px
        'heading-xl': ['clamp(2rem, 1.818rem + 0.58vw, 2.75rem)', '1.3']
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  variants: {},
  corePlugins: {
    //--------------------------------------------------------------------------
    // I set my own container below, so I don't need the default one.
    container: false,
    //--------------------------------------------------------------------------
    // Disable all these and use opacity modifier instead which makes
    // it possible to see and use hex values in the browser dev tools
    // https://twitter.com/adamwathan/status/1529596984235118595
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    ringOpacity: false
  },
  plugins: [
		// plugin(function({ addComponents, theme }) {
		// 	const components = {
		// 		// The main wrapper for all sections on our website. Has a max width and is centered.
		// 		'.container': {
		// 			marginLeft: 'auto',
		// 			marginRight: 'auto',
		// 			maxWidth: theme('screens.xl'),
		// 			paddingLeft: 'env(safe-area-inset-left)',
		// 			paddingRight: 'env(safe-area-inset-right)',
		// 			width: '92%',
		// 		},
		// 	}
		// 	addComponents(components)
		// }),

    // require("@tailwindcss/typography"),

    // https://github.com/tailwindlabs/tailwindcss-forms
    // require("@tailwindcss/forms"),

    // https://github.com/ThirusOfficial/tailwind-grid-auto-fit
    // require('@shrutibalasa/tailwind-grid-auto-fit'),

    // https://github.com/vivgui/tailwindcss-hyphens
    // require('@vivgui/tailwindcss-hyphens'),

		// https://github.com/davidhellmann/tailwindcss-fluid-type
		// require('tailwindcss-fluid-type')({
		// 	settings: {
		// 		prefix: 'fl-', // set a prefix to use it alongside the default font sizes
		// 		ratioMin: 1.125, // Multiplicator Min
		// 		ratioMax: 1.2, // Multiplicator Max
		// 		screenMin: 20, // 20rem === 320px
		// 		screenMax: 96, // 96rem === 1536px
		// 		extendValues: true, // When you set extendValues to true it will extend the default values. Set it to false to overwrite the values.
		// 	},
		// 	// Font sizes without line-height as that is set in the base layer as a fluid line height.
		// 	values: {
		// 		'xs': [-2],
		// 		'sm': [-1],
		// 		'base': [0],
		// 		'lg': [1],
		// 		'xl': [2],
		// 		'2xl': [3],
		// 		'3xl': [4],
		// 		'4xl': [5],
		// 		'5xl': [6],
		// 		'6xl': [7],
		// 		'7xl': [8],
		// 		'8xl': [9],
		// 		'9xl': [10]
		// 	}
		// }),
	]
};
