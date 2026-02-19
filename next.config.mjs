/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // food card er jorno
      {
        protocol: "https",
        // jekan teke amra ta use kortese sei website er url ta diye divo part:3 v:2 6.40se
        hostname: "www.themealdb.com",
        // port: "",
        //
        pathname: "/images/media/meals/**",
        search: "",
      },
      // review card jorno
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
