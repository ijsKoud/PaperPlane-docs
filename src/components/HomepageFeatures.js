import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
	{
		title: "Easy to Use",
		Svg: require("../../static/img/landing/easy.svg").default,
		description: <>Set up PaperPlane with just a few commands and you are ready to go!</>,
	},
	{
		title: "Make it your own",
		Svg: require("../../static/img/landing/config.svg").default,
		description: (
			<>
				A lot of things are customisable, you can change the Discord embed, upload settings,
				dashboard theme, almost everything!
			</>
		),
	},
	{
		title: "File uploading",
		Svg: require("../../static/img/landing/file.svg").default,
		description: (
			<>
				PaperPlane allows you to store your favourite photo's, video's, documents and more all in
				one place!
			</>
		),
	},
	{
		title: "URL Shortening",
		Svg: require("../../static/img/landing/link.svg").default,
		description: (
			<>
				You can create custom short urls using PaperPlane's URL shortner, now you can rickroll your
				friends for free :D
			</>
		),
	},
];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx("col col--3")}>
			<div className="text--center">
				<Svg className={styles.featureSvg} alt={title} />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
