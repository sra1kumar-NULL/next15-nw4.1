import type { NextConfig } from "next";

import { withGluestackUI } from "@gluestack/ui-next-adapter";

const nextConfig: NextConfig = {
  transpilePackages: ["nativewind", "react-native-css-interop"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
  },
};

export default withGluestackUI(nextConfig);
