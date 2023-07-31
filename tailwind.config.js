/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			padding: {
				4.05: '1.05rem',
			},
			fontSize: {
				17: '17px',
			},
			colors: {
				black: "#1f1f1f",
				primary: '#008AFC',
				secondary: '#06283D',
				primaryGreen: '#207b9a',
				lightBlue: '#DFF6FF',
				primaryYellow: '#f5d571',
				EEE: '#EEE',
				lightSkin: '#E7E6E6',
			},
			fontFamily: {
				Inter: ['Inter', 'sans-serif'],
				Poppins: ['Poppins', 'sans-serif'],
			},
			keyframes: {
				ctaBtn: {
					'0%, 100%': { transform: 'translateX(0) translateY(0) skew(-12deg)' },
					'50%': { transform: 'translateX(3px) translateY(3px) skew(-12deg)' },
				},
				yellowBtn: {
					'0%': { 'box-shadow': '0 0 0 0 #f5d571' },
					'100%': { 'box-shadow': '0 0 0 0.85rem transparent' },
				},
				greenBtn: {
					'0%': { 'box-shadow': '0 0 0 0 #207b9a' },
					'100%': { 'box-shadow': '0 0 0 0.85rem transparent' },
				},
				primaryBtn: {
					'0%': { 'box-shadow': '0 0 0 0 #008AFC' },
					'100%': { 'box-shadow': '0 0 0 0.85rem transparent' },
				},
				lightBlueBtn: {
					'0%': { 'box-shadow': '0 0 0 0 #DFF6FF' },
					'100%': { 'box-shadow': '0 0 0 0.85rem transparent' },
				},
			},
			animation: {
				ctaBtn: 'ctaBtn 150ms ease-in-out',
				'btn-pulse-green': 'greenBtn 1s ease',
				'btn-pulse-yellow': 'yellowBtn 1s ease',
				'btn-pulse-primary': 'primaryBtn 1s ease',
				'btn-pulse-lightBlue': 'lightBlueBtn 1s ease',
			},
			boxShadow: {
				'5xl': '0 0 40px',
			},
			dropShadow: {
				primary: '0 0 20px #008AFC',
				black: '0 0 10px rgba(0,0,0,0.2)',
			}
		},
	},
	plugins: [],
};