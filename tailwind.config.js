/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				light: "0 5px 26px rgba(69,95,124,.15)",
				dark: "0 6px 10px rgba(0,0,0,.03), 0 1px 18px rgba(0,0,0,.07), 0 5px 26px 0 rgba(67,94,131,.15)",
			},
			screens: {
				xl: "1186px",
				"2xl": undefined,
			},
			colors: {
				foreground: {
					primary: {
						DEFAULT: "#0666e5",
						hover: "#0a8dff",
						pressed: "#0055AA",
						inverted: "#0a8dff",
					},
					neutral: "#455f7c",
					strong: "#0f2741",
				},
				surface: {
					primary: {
						DEFAULT: "#0666e5",
						hover: "#0a8dff",
						pressed: "#0055AA",
						inverted: "#0a8dff",
					},
					neutral: {
						DEFAULT: "#fff",
						hover: "#f5f8fb",
					},
					strong: "#0f2741",
					muted: {
						DEFAULT: "#f5f8fb",
						hover: "#E5F1FF",
					},
					subtle: "#E5F1FF",
				},
				background: {
					neutral: "#fff",
					muted: "#f5f8fb",
					strong: "#001327",
				},
				border: {
					neutral: {
						DEFAULT: "#c4c4c4",
						hover: "#0666e5",
					},
					primary: {
						DEFAULT: "#0666e5",
						hover: "#0a8dff",
						pressed: "#0055AA",
						inverted: "#0a8dff",
					},
				},
			},
		},
	},
	plugins: [],
};
