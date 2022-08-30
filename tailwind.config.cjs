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
				'xx-large': '160px',
				'x-large': '72px',
				large: '64px',
				medium: '56px',
				small: '48px',
				'x-small': '32px'
			},
			fontFamily: {
				sans: ['Manrope', ...defaultTheme.fontFamily.sans]
			},
			fontSize: {
				h2: [
					'48px',
					{
						lineHeight: '54px'
					}
				],
				h3: [
					'28px',
					{
						lineHeight: '38.25px'
					}
				],
				inter: [
					'20px',
					{
						lineHeight: '26px'
					}
				],
				body: ['18px', { lineHeight: '27px' }]
			}
		}
	},

	plugins: []
};

module.exports = config;
