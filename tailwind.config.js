module.exports = {
  purge: {
    mode: "all",
    content: ["./src/**/*.html"],
  },
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
