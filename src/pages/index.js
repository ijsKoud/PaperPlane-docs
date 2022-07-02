import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import HomepagePreview from "../components/HomepagePreview";

function HomepageHeader() {
	return (
		<header className={clsx("hero hero--dark-blue", styles.heroBanner)}>
			<div className="container">
				<img src="img/logo.png" />
				<h1 className="hero__title">PaperPlane</h1>
				<h2>Fast file/shorturl upload server packed with lots of cool features!</h2>
				<div className={styles.buttons}>
					<Link className="button button--secondary button--lg" to="/docs/get-started">
						Get Started
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	return (
		<Layout description="Fast file/shorturl upload server packed with lots of cool features!">
			<HomepageHeader />
			<main>
				<HomepageFeatures />
				<HomepagePreview />
			</main>
		</Layout>
	);
}
