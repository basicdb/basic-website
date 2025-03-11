/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				black: {
					DEFAULT: '#08080C'
				},
				white: {
					'100': '#ffe7d6',
					'200': '#ffdac2',
					'300': '#ffcead',
					'400': '#ffc299',
					'500': '#ffb685',
					'600': '#ffa970',
					'700': '#ff9d5c',
					'800': '#ff9147',
					'900': '#ff8533',
					DEFAULT: '#fff3eb'
				},
				green: {
					'100': '#f1f8f6',
					'200': '#e4f2ec',
					'400': '#AED5CC',
					'500': '#6BB3A2',
					'600': '#53A28F',
					'700': '#3E796B',
					'800': '#2A5148',
					'900': '#1C3530',
					DEFAULT: '#d6ebe3'
				},
				indigo: {
					'100': '#f2eefc',
					'200': '#e6dcf9',
					'400': '#cdbaf3',
					'500': '#9a74e7',
					'600': '#5e25d0',
					'700': '#461c9c',
					'800': '#2f1268',
					'900': '#170934',
					DEFAULT: '#d9cbf6'
				},
				pink: {
					'100': '#f9f1f5',
					'200': '#edd4e2',
					'400': '#e1b7cf',
					'500': '#C36FA0',
					'600': '#b7528d',
					'700': '#813662',
					'800': '#562441',
					'900': '#2b1221',
					DEFAULT: '#e7c5d9'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				orbit: 'orbit calc(var(--duration)*1s) linear infinite',
				marquee: 'marquee var(--duration) infinite linear',
				'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
			},
			keyframes: {
				orbit: {
					'0%': {
						transform: 'rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))'
					},
					'100%': {
						transform: 'rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))'
					}
				},
				marquee: {
					from: {
						transform: 'translateX(0)'
					},
					to: {
						transform: 'translateX(calc(-100% - var(--gap)))'
					}
				},
				'marquee-vertical': {
					from: {
						transform: 'translateY(0)'
					},
					to: {
						transform: 'translateY(calc(-100% - var(--gap)))'
					}
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate"), require("daisyui")],
}
