// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "PaperPlane",
	tagline: "An open-source customisable solution to storing files in the cloud. ✈️",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://paperplane.ijskoud.dev/",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "ijsKoud", // Usually your GitHub org/user name.
	projectName: "paperplane", // Usually your repo name.

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"]
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/ijskoud/paperplane/tree/main/docs/"
				},
				blog: false,
				theme: {
					customCss: require.resolve("./src/css/custom.css")
				}
			})
		]
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: { defaultMode: "dark" },
			// Replace with your project's social card
			image: "img/docusaurus-social-card.jpg",
			navbar: {
				title: "PaperPlane",
				logo: {
					alt: "PaperPlane logo",
					src: "img/logo.svg"
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "guidesSidebar",
						position: "left",
						label: "Guides"
					},
					{
						type: "docSidebar",
						sidebarId: "apiReferenceSidebar",
						position: "left",
						label: "API Reference"
					},
					{
						href: "https://github.com/ijskoud/paperplane",
						label: "GitHub",
						position: "right"
					}
				]
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Installation",
								to: "/docs/guides/installation"
							},
							{
								label: "API Reference",
								to: "/docs/api/intro"
							},
							{
								label: "Guides",
								to: "/docs/guides/"
							}
						]
					},
					{
						title: "Community",
						items: [
							{
								label: "Discord",
								href: "https://ijskoud.dev/discord"
							},
							{
								label: "GitHub",
								href: "https://ijskoud.dev/github/paperplane"
							},
							{
								label: "GitHub Docs",
								href: "https://ijskoud.dev/github/paperplane-docs"
							}
						]
					}
				],
				copyright: `Copyright © ${new Date().getFullYear()} PaperPlane. Built with Docusaurus.`
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			}
		})
};

module.exports = config;
