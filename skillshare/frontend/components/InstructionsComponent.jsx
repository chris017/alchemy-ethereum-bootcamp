import styles from "../styles/InstructionsComponent.module.css";
import Router, { useRouter } from "next/router";
export default function InstructionsComponent() {
	const router = useRouter();
	return (
		<div className={styles.container}>
			<header className={styles.header_container}>
				<h1>
					Skill<span>-Share</span>
				</h1>
			</header>
			<div className={styles.headerv2}>
				<h2>
					Skill<span>-Share</span> is a decentralized application that allows users to<br></br>exchange skills with each other in a <span>peer-to-peer</span> manner.<br></br>The dApp can be used to <span>connect</span> users with complementary<br></br>skills and facilitate skill<span>-sharing</span> and learning.
				</h2>
			</div>
		</div>
	);
}
