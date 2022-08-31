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
				'xx-large': '10rem',
				'x-large': '4.5rem',
				large: '4rem',
				medium: '3.5rem',
				small: '3rem',
				'x-small': '2rem'
			},
			fontFamily: {
				sans: ['Manrope', ...defaultTheme.fontFamily.sans]
			},
			fontSize: {
				inter: [
					'1.25rem',
					{
						lineHeight: '1.625rem',
						letterSpacing: '0.2em'
					}
				],
				body: ['1.125rem', { lineHeight: '1.688rem' }]
			}
		}
	},

	plugins: []
};

module.exports = config;
