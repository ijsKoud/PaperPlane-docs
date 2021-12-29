import React from "react";
import styles from "./HomepagePreview.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
	{
		title: "Dashboard",
		img: "/img/landing/preview/dashboard.png",
	},
	{
		title: "Upload page",
		img: "/img/landing/preview/upload.png",
	},
	{
		title: "Login",
		img: "/img/landing/preview/login.png",
	},
	{
		title: "Settings",
		img: "/img/landing/preview/settings.png",
	},
	{
		title: "Embed Settings",
		img: "/img/landing/preview/embed-settings.png",
	},
];

function Feature({ img, title }) {
	return (
		<div>
			<Link className={styles.previewLink} to={img} target="_blank" rel="noreferrer">
				{title}
			</Link>
			<img className={styles.previewImg} alt={title} src={img} />
		</div>
	);
}

export default function HomepagePreview() {
	return (
		<section className={styles.preview}>
			<h1 className={styles.previewTitle}>PaperPlane Preview</h1>
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
