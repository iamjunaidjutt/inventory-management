/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "ap-south-1.console.aws.amazon.com/",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
