// tailwind.config.js
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        backgroundImage: {
                 'graphic': "url('/img/hero-pattern.svg')",
                   'photo': "url('images/desktop/image-photography.jpg')",
                    }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }