const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				highlight: 'var(--highlight)',
				important: 'var(--important)',
				body: 'var(--body)',
				sub: 'var(--sub)',
				bg: 'var(--bg)'
			},
			backgroundImage: {
				primary: 'var(--gradient-primary)',
				stroke: 'var(--gradient-stroke)'
			},
			spacing: {
				'xx-large': 'var(--xx-large)',
				'x-large': 'var(--x-large)',
				large: 'var(--large)',
				medium: 'var(--medium)',
				small: 'var(--small)',
				'x-small': 'var(--x-small)'
			},
			fontFamily: {
				sans: ['Manrope', ...defaultTheme.fontFamily.sans]
			},
			fontSize: {
				h1: 'var(--h1)',
				h2: 'var(--h2)',
				h3: 'var(--h3)',

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
				body: ['var(--p-small)', { lineHeight: '1.688rem' }]
			}
		}
	},

	plugins: []
};

module.exports = config;
