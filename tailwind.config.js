module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/LFAHZQ2ROBFGJHPHSHGMSTOBGI.jpg')",
       })
    },
  }, 
  variants: {
    extend: {},
  },
  plugins: [],
}
