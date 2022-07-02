const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
	module.exports = {
		title: "PaperPlane",
		tagline: "File uploading. URL Shortening. Protected views.",
		url: "https://paperplane.ijskoud.dev/",
		baseUrl: "/",
		onBrokenLinks: "throw",
		onBrokenMarkdownLinks: "warn",
		favicon: "img/favicon.ico",
		organizationName: "ijsKoud", // Usually your GitHub org/user name.
		projectName: "PaperPlane", // Usually your repo name.

		presets: [
			[
				"@docusaurus/preset-classic",
				/** @type {import('@docusaurus/preset-classic').Options} */
				({
					docs: {
						sidebarPath: require.resolve("./sidebars.js"),
						editUrl: "https://github.com/ijsKoud/PaperPlane-docs/edit/main",
						remarkPlugins: [[require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }]],
					},
					theme: {
						customCss: require.resolve("./src/css/custom.css"),
					},
				}),
			],
		],

		themeConfig:
			/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
			({
				prism: {
					additionalLanguages: ["nginx"],
				},
				navbar: {
					title: "PaperPlane",
					logo: {
						alt: "PaperPlane",
						src: "img/favicon.ico",
					},
					items: [
						{
							type: "doc",
							docId: "get-started",
							position: "left",
							label: "Get Started",
						},
						{
							type: "doc",
							docId: "config/application",
							position: "left",
							label: "Configuration",
						},
						{
							type: "doc",
							docId: "uploaders/sharex",
							position: "left",
							label: "Uploaders",
						},
						{
							href: "https://github.com/ijsKoud/PaperPlane",
							label: "GitHub",
							position: "right",
						},
					],
				},
				footer: {
					style: "dark",
					links: [
						{
							title: "Docs",
							items: [
								{
									label: "Get Started",
									to: "/docs/get-started",
								},
								{
									label: "Configuration",
									to: "/docs/config/application",
								},
								{
									label: "NGINX Config",
									to: "/docs/config/nginx",
								},
								{
									label: "Uploaders",
									to: "/docs/uploaders/sharex",
								},
							],
						},
						{
							title: "Community",
							items: [
								{
									label: "Discord",
									href: "https://ijskoud.dev/discord",
								},
								{
									label: "GitHub",
									href: "https://github.com/ijsKoud/PaperPlane",
								},
								{
									label: "GitHub Docs",
									href: "https://github.com/ijsKoud/PaperPlane-docs",
								},
							],
						},
					],
					copyright: `Copyright © ${new Date().getFullYear()} ijsKoud`,
				},
				prism: {
					theme: lightCodeTheme,
					darkTheme: darkCodeTheme,
				},
			}),
	}
);
