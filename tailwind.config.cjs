const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				explicit: {
					white: 'var(--white)',
					black: 'var(--black)',
					'white-light': 'var(--white-light)',
					'grey-slight': 'var(--grey-slight)'
				},
				nav: 'var(--nav)',
				highlight: 'var(--highlight)',
				important: 'var(--important)',
				body: 'var(--body)',
				sub: 'var(--sub)',
				bg: 'var(--bg)',
				box: 'var(--box)'
			},
			boxShadow: {
				'hover-default': 'var(--shadow-hover-default)',
				default: 'var(--shadow-default)'
			},
			transitionDelay: {
				50: '50ms'
			},
			backgroundImage: {
				primary: 'var(--gradient-primary)',
				stroke: 'var(--gradient-stroke)',
				404: 'var(--gradient-404)'
			},
			spacing: {
				'xx-large': 'var(--xx-large)',
				'x-large': 'var(--x-large)',
				large: 'var(--large)',
				medium: 'var(--medium)',
				small: 'var(--small)',
				'x-small': 'var(--x-small)',
				'xx-small': 'var(--xx-small)'
			},
			fontFamily: {
				sans: ['Manrope', ...defaultTheme.fontFamily.sans]
			},
			fontSize: {
				h1: 'var(--h1)',
				h2: 'var(--h2)',
				h3: 'var(--h3)',
				h4: 'var(--h4)',

				'p-x-large': 'var(--p-x-large)',
				'p-large': 'var(--p-large)',
				'p-medium': 'var(--p-medium)',
				'p-small': 'var(--p-small)',

				inter: [
					'var(--p-large)',
					{
						lineHeight: '1.625rem',
						letterSpacing: '0.2em'
					}
				],
				main: ['18px', { lineHeight: '1.688rem' }]
			}
		}
	},

	plugins: []
};

module.exports = config;
