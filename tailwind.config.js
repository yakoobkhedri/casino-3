/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary':'#3A9C76',
        'secondary':'#FFCF72',
        'dark': '#070F1C'
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      fontFamily: {
        paydaRegular: "payda-Regular",
        paydaMedium: "payda-Medium",
        paydaSemiBold: "payda-SemiBold",
        paydaBold: "payda-Bold",
        paydaExtraBold: "payda-ExtraBold",
        paydaBlack: "payda-Black",
        MontserratRegular: "Montserrat-Regular",
        MontserratBold: "Montserrat-Bold",
        faNumRegular: "fanumber-Regular",
        faNumBold: "fanumber-Bold",
      },
      maxWidth:{
        'content':'1260px',
      },
    }
},
}

