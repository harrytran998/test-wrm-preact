import styles from './style.module.css';
import { useState, useEffect } from 'preact/hooks';

export default function Home() {
	const [count, setCount] = useState(0);
	useEffect(() => {
		if (count) {
			console.log("WWWW");
		}
	})
	return (
		<>
			<section class={styles.home}>
				<h1>XXXX</h1>
				<p>AAA</p>
				<>
					<button style={{ width: 30 }} onClick={() => setCount(count - 1)}>
						-
					</button>
					<output style={{ padding: 10 }}>Count: {count}</output>
					<button style={{ width: 30 }} onClick={() => setCount(count + 1)}>
						+
					</button>
				</>
			</section>
		</>
	);
}
