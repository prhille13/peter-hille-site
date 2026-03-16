module.exports = {
  apps: [
    {
      name: "portfolio",
      script: "node_modules/.bin/next",
      args: "start",
      cwd: "/Users/peterhille/peter-hille-portfolio",
      env: {
        NODE_ENV: "production",
        PORT: 3001,
      },
    },
  ],
};
