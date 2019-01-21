module.exports = {
  "extends": "airbnb",
  "plugins":[
    "react",
    "jsx-a11y",
    "import"
  ],
  parser: "babel-eslint",
  rules:{
    "no-underscore-dangle": ["error", { "allow": ["_id"] }],
    "import/prefer-default-export": "off",
  },
}
