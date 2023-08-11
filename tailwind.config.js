/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Barlow: ["Barlow", "sans-serif"],
        Fraunces: ["Fraunces", "serif"],
      },
      backgroundImage: {
        //mobile
        "mobile-cone":
          "url('/src/assets/images/mobile/image-gallery-cone.jpg')",
        "mobile-milkBottles":
          "url('/src/assets/images/mobile/image-gallery-milkbottles.jpg')",
        "mobile-orange":
          "url('/src/assets/images/mobile/image-gallery-orange.jpg')",
        "mobile-sugarCubes":
          "url('/src/assets/images/mobile/image-gallery-sugar-cubes.jpg')",
        "mobile-graphicDesign":
          "url('/src/assets/images/mobile/image-graphic-design.jpg')",
        "mobile-header": "url('/src/assets/images/mobile/image-header.jpg')",
        "mobile-photography":
          "url('/src/assets/images/mobile/image-photography.jpg')",
        "mobile-standOut":
          "url('/src/assets/images/mobile/image-stand-out.jpg')",
        "mobile-transform":
          "url('/src/assets/images/mobile/image-transform.jpg')",
        ///////Desktop
        "desktop-cone":
          "url('/src/assets/images/desktop/image-gallery-cone.jpg')",
        "desktop-milkBottles":
          "url('/src/assets/images/desktop/image-gallery-milkbottles.jpg')",
        "desktop-orange":
          "url('/src/assets/images/desktop/image-gallery-orange.jpg')",
        "desktop-sugarCubes":
          "url('/src/assets/images/desktop/image-gallery-sugar-cubes.jpg')",
        "desktop-graphicDesign":
          "url('/src/assets/images/desktop/image-graphic-design.jpg')",
        "desktop-header": "url('/src/assets/images/desktop/image-header.jpg')",
        "desktop-photography":
          "url('/src/assets/images/desktop/image-photography.jpg')",
        "desktop-standOut":
          "url('/src/assets/images/desktop/image-stand-out.jpg')",
        "desktop-transform":
          "url('/src/assets/images/desktop/image-transform.jpg')",
      },
      colors: {
        softRed: "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        cyanGraphicDesignText: " hsl(167, 40%, 24%)",
        darkBluePhotographyText: "hsl(198, 62%, 26%)",
        cyanFooter: "hsl(168, 34%, 41%)",
        veryDarkDesaturatedBlue: " hsl(212, 27%, 19%)",
        veryDarkGrayishBlue: "hsl(213, 9%, 39%)",
        darkGrayishBlue: "hsl(232, 10%, 55%)",
        grayishBlue: "hsl(210, 4%, 67%)",
        white: "hsl(0, 0%, 100%)",
        skyBlue: "#3ebfff",
        footerBg: "#86d5c5",
      },
    },
  },
  plugins: [],
};
