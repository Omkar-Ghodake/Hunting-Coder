import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Footer = () => {
	return (
		<>
			<footer className={ styles.footer }>
				<div className={ styles.left }>
					<h1 className='mySpan'>Hunting Coder</h1>
				</div>

				<div className={ styles.center }>
					<ul>
						<Link href="/"><a><li className={ styles.navItem }>Home</li></a></Link>
						<Link href="/blogs"><a><li className={ styles.navItem }>Blogs</li></a></Link>
						<Link href="/about"><a><li className={ styles.navItem }>About</li></a></Link>
						<Link href="/contact"><a><li className={ styles.navItem }>Contact</li></a></Link>
					</ul>
				</div>

				<div className={ styles.right }>
					<h2>Follow us on</h2>
				</div>
			</footer>
		</>
	)
}

export default Footer