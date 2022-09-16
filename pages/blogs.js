import React from 'react'
import Link from 'next/link'
import styles from '../styles/Blogs.module.css'

const Blogs = () => {
	return (
		<div className={ styles.container }>
			<main className={ styles.main }>
				<div className="blogs">
					<div className={ styles.blogItem }>
						<Link href={ '/blogpost/learn-javascript' }>
							<h3>How to learn JavaScript in 2022?</h3>
						</Link>
						<p>Javascript is the language used to design logic for the web.</p>
					</div>

					<div className={ styles.blogItem }>
						<h3>How to learn JavaScript in 2022?</h3>
						<p>Javascript is the language used to design logic for the web.</p>
					</div>

					<div className={ styles.blogItem }>
						<h3>How to learn JavaScript in 2022?</h3>
						<p>Javascript is the language used to design logic for the web.</p>
					</div>

					<div className={ styles.blogItem }>
						<h3>How to learn JavaScript in 2022?</h3>
						<p>Javascript is the language used to design logic for the web.</p>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Blogs