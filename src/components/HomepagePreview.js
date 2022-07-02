import React from "react";
import styles from "./HomepagePreview.module.css";
import Link from "@docusaurus/Link";

const FeatureList = [
	{
		title: "Landing",
		img: "/img/landing/preview/landing.png",
	},
	{
		title: "Dashboard",
		img: "/img/landing/preview/dashboard.png",
	},
	{
		title: "Settings",
		img: "/img/landing/preview/settings.png",
	},
	{
		title: "Login",
		img: "/img/landing/preview/login.png",
	},
	{
		title: "File Login",
		img: "/img/landing/preview/file-login.png",
	},
	{
		title: "Upload Modal",
		img: "/img/landing/preview/upload-modal.png",
	},
	{
		title: "URL Modal",
		img: "/img/landing/preview/url-modal.png",
	},
	{
		title: "URL Update Modal",
		img: "/img/landing/preview/url-update-modal.png",
	},
	{
		title: "File Update Modal",
		img: "/img/landing/preview/file-update-modal.png",
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
