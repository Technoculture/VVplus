module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      ["import", { libraryName: "@ant-design/react-native" }],
    ],
  };
};
