const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
    entry: "./public/index.js",
    output: {
        path: __dirname + "/public/dist/",
        filename: "bundle.js"
    },
    mode: "development",
    plugins: [new WebpackPwaManifest({
        filename: "manifest.json",
        inject: false,
        fingerprints: false,
        name: "Budget Tracker",
        short_name: "Budget Track",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        start_url: "/",
        display: "standalone",
        icons: [
            {
                src: path.resolve(
                    __dirname,
                    "public/icons/icon-192x192.png"
                    ),
                    sizes: [16, 32, 48, 128]
            }
            ]
        })
    ]
};

module.exports = config;