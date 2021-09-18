const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            a: {
              // change anchor color and on hover
              color: "#2563EB",
              transitionProperty: "all",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDuration: "150ms",
              "&:hover": {
                // could be any. It's like extending css selector
                color: "#1D4ED8",
              },
            },
            pre: {
              backgroundColor: "none",
              margin: "none",
              padding: "none",
            },
            code: {
              backgroundColor: "#f5f7ff",
            },
          },
        },
      }),
      colors: {
        "light-blue": colors.lightBlue,
      },
      fontFamily: {
        pacifico: ["Pacifico"],
        lato: ["Lato"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
