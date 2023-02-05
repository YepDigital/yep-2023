/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
const colors = require("tailwindcss/colors");
const theme = require("tailwindcss/defaultTheme");

module.exports = {
  //--------------------------------------------------------------------------
  // The various configurable Tailwind configuration files.
  presets: [
    require('tailwindcss/defaultConfig'),
  ],
	content: [
		"./src/**/*.{njk,md,html}",
		"!./src/tailwind",
		"!./src/sitemap.xml.njk",
		"!./src/robots.txt.njk",
	],
  theme: {
    extend: {
      colors: {
				'brand': {
					"50": "#FAF5F5",
					"100": "#F4E7E6",
					"200": "#EFCECC",
					"300": "#EEADAA",
					"400": "#F38781",
					"500": "#FD6057",
					"600": "#EB372D",
					"700": "#BC2C24",
					"800": "#802C28",
					"900": "#4A2321"
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
					'Manrope',
					...defaultTheme.fontFamily.sans
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
      // Font sizes without line-height as that is set in the base layer as a fluid line height.
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.primary.700'),
            '--tw-prose-headings': theme('colors.primary.600'),
            '--tw-prose-lead': theme('colors.primary.700'),
            '--tw-prose-links': theme('colors.primary.500'),
            '--tw-prose-bold': theme('colors.primary.700'),
            '--tw-prose-counters': theme('colors.primary.500'),
            '--tw-prose-bullets': theme('colors.primary.500'),
            '--tw-prose-hr': theme('colors.primary.600'),
            '--tw-prose-quotes': theme('colors.primary.600'),
            '--tw-prose-quote-borders': theme('colors.primary.600'),
            '--tw-prose-captions': theme('colors.primary.600'),
            '--tw-prose-code': theme('colors.primary.600'),
            '--tw-prose-pre-code': theme('colors.primary.600'),
            '--tw-prose-pre-bg': theme('colors.white'),
            '--tw-prose-th-borders': theme('colors.primary.600'),
            '--tw-prose-td-borders': theme('colors.primary.600'),

            '--tw-prose-invert-body': theme('colors.grey[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.grey[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.grey[400]'),
            '--tw-prose-invert-bullets': theme('colors.primary[500]'),
            '--tw-prose-invert-hr': theme('colors.grey[600]'),
            '--tw-prose-invert-quotes': theme('colors.grey[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.grey[600]'),
            '--tw-prose-invert-captions': theme('colors.grey[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.grey[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.grey[600]'),
            '--tw-prose-invert-td-borders': theme('colors.grey[600]'),
          },
        }
      }),
    },
  },
  safelist: [],
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

    require("@tailwindcss/typography"),

    // https://github.com/tailwindlabs/tailwindcss-forms
    // require("@tailwindcss/forms"),

    // https://github.com/ThirusOfficial/tailwind-grid-auto-fit
    // require('@shrutibalasa/tailwind-grid-auto-fit'),

    // https://github.com/vivgui/tailwindcss-hyphens
    // require('@vivgui/tailwindcss-hyphens'),

		// https://github.com/davidhellmann/tailwindcss-fluid-type
		require('tailwindcss-fluid-type')({
			settings: {
				prefix: 'fl-', // set a prefix to use it alongside the default font sizes
				ratioMin: 1.125, // Multiplicator Min
				ratioMax: 1.2, // Multiplicator Max
				screenMin: 20, // 20rem === 320px
				screenMax: 96, // 96rem === 1536px
				extendValues: true, // When you set extendValues to true it will extend the default values. Set it to false to overwrite the values.
			},
			// Font sizes without line-height as that is set in the base layer as a fluid line height.
			values: {
				'xs': [-2],
				'sm': [-1],
				'base': [0],
				'lg': [1],
				'xl': [2],
				'2xl': [3],
				'3xl': [4],
				'4xl': [5],
				'5xl': [6],
				'6xl': [7],
				'7xl': [8],
				'8xl': [9],
				'9xl': [10]
			}
		}),
	]
};
