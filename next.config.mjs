// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactCompiler: true,
//   images: {
//     domains: [
//       "lh3.googleusercontent.com", 
//       "i.ibb.co",                  
//     ],
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "i.ibb.co",       // for URLs like https://i.ibb.co/...
      "i.ibb.co.com",   // for URLs like https://i.ibb.co.com/...
    ],
  },
};

export default nextConfig;

