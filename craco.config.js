const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#4c12a1",
              "link-color": "#4c12a1",
              "border-radius-base": "18px",
              "success-color": "#40D36C",
              "warning-color": "#FFBC00",
              "error-color": "#f5222d",
              "font-size-base": "14px",
              "heading-color": "rgba(0, 0, 0, 0.85)",
              "text-color": "rgba(0, 0, 0, 0.65)",
              "text-color-secondary": "rgba(0, 0, 0, .45)",
              "disabled-color ": "rgba(0, 0, 0, .25)",
              "border-color-base": "#d9d9d9",
              "box-shadow-base": "0 2px 8px rgba(76, 18, 161, 0.15)",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
