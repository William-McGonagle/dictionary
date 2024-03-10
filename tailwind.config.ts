import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      "primary": {
          DEFAULT: "#041e42",
          '50': '#ebf9ff',
          '100': '#d1f2ff',
          '200': '#aee8ff',
          '300': '#76ddff',
          '400': '#35c7ff',
          '500': '#07a5ff',
          '600': '#007fff',
          '700': '#0065ff',
          '800': '#0054d7',
          '900': '#004ca8',
          '950': '#041e42'
      },
      "secondary": {
          DEFAULT: "#63666A",
          '50': '#f5f6f6',
          '100': '#e6e7e7',
          '200': '#cfd1d2',
          '300': '#adafb3',
          '400': '#84888c',
          '500': '#63666a',
          '600': '#5a5c60',
          '700': '#4d4e51',
          '800': '#434447',
          '900': '#3b3c3e',
          '950': '#252527'
      }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};
export default config;
