module.exports = {
  apps: [
    {
      name: "portfolio-admin-api",
      script: "server/content-api.mjs",
      cwd: "/var/www/sinansevgi.com.tr-src",
      env: {
        ADMIN_PASSWORD: "sinan2026",
        ADMIN_API_PORT: 3001,
        SRC_PATH: "/var/www/sinansevgi.com.tr-src",
        DEPLOY_TARGET: "/var/www/sinansevgi.com.tr",
        GIT_BRANCH: "yonetim",
      },
    },
  ],
};
