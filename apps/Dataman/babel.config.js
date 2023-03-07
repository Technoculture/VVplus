module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      [
        "module:react-native-dotenv",
        // https://docs.expo.dev/guides/environment-variables/ https://blog.logrocket.com/understanding-react-native-env-variables/
        //  This babel plugin lets you inject environment variables into Javascript environment using dotenv for multiple environments.
        {
          envName: "APP_ENV",
          moduleName: "@env",
          path: ".env",
          blocklist: null,
          allowlist: null,
          blacklist: null, // DEPRECATED
          whitelist: null, // DEPRECATED
          safe: true,
          allowUndefined: true,
          verbose: false,
        },
      ],
      ["import", { libraryName: "@ant-design/react-native" }],
    ],
  };
};
