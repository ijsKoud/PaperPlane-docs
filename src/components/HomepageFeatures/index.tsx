import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const previews = [
	{
		img: "https://cdn.ijskoud.dev/files/5G48qa0Cr2Xl.png",
		title: "Home page",
		alt: "Home page"
	},
	{
		img: "https://cdn.ijskoud.dev/files/pKpgyFzrBfIV.png",
		title: "Error page",
		alt: "error page"
	},

	// dashboard
	{
		img: "https://cdn.ijskoud.dev/files/LeGbN5Vvfg2a.png",
		title: "Dashboard home page",
		alt: "Dashboard home"
	},
	{
		img: "https://cdn.ijskoud.dev/files/sVUnJ0q5KaKt.png",
		title: "Dashboard files page",
		alt: "Dashboard files"
	},
	{
		img: "https://cdn.ijskoud.dev/files/JN8b4PAu8cza.png",
		title: "Dashboard shorturls page",
		alt: "Dashboard shorturls"
	},
	{
		img: "https://cdn.ijskoud.dev/files/bR51cUnDVO6S.png",
		title: "Dashboard pastebins page",
		alt: "Dashboard pastebins"
	},
	{
		img: "https://cdn.ijskoud.dev/files/DJODKmYSi9nw.png",
		title: "Dashboard settings page",
		alt: "Dashboard settings"
	},

	// admin panel
	{
		img: "https://cdn.ijskoud.dev/files/1fpBiZ3RFQcO.png",
		title: "Admin Panel home page",
		alt: "Admin Panel home"
	},
	{
		img: "https://cdn.ijskoud.dev/files/DkUxVp6GkhPi.png",
		title: "Admin Panel users page",
		alt: "Admin Panel users"
	},
	{
		img: "https://cdn.ijskoud.dev/files/bEpxupo4PmUc.png",
		title: "Admin Panel settings page",
		alt: "Admin Panel settings"
	},
	{
		img: "https://cdn.ijskoud.dev/files/9Nt155oB4dpE.png",
		title: "",
		alt: "Admin Panel settings"
	},
	{
		img: "https://cdn.ijskoud.dev/files/8KyUGj0gDfRD.png",
		title: "",
		alt: "Admin Panel settings"
	}
];

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className={styles.features}>
			<div className="container">
				<Heading as="h1" style={{ lineHeight: 1, marginBottom: 0 }}>
					Preview
				</Heading>
				<p>Want to know how paperplane looks like? Look no further, here you can see how every page looks like.</p>
				<div className={styles.featurelist}>
					{previews.map((preview) => (
						<div>
							<Heading as="h4">{preview.title}</Heading>
							<a className={styles.anchor} href={preview.img} target="_blank">
								<img className={styles.image} src={preview.img} alt={preview.alt} />
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
