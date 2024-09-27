/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				sm: "560px",
				md: "768px",
				lg: "976px",
				xl: "1200px",
			  },
			colors:{
				green:{
					bright:'#D9EDBF',
					medium:'#90D26D',
					dark:'#102E26'
				},
				orange:{
					bright:'#FFE2C7',
					medium:'#F6C393',
					orangeFox: '#EF790B',
					dark:'#894506',
				}
			},
			fontFamily:{
				logo1: ["Rowdies"],
				logo2: ["Yatra One"],
				custom: ["Josefin Sans"]
			  },
		},
	},
	plugins: [],
}
