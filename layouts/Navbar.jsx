import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
	return (
		<>
			<nav className={ styles.navbar }>
				<ul className={ styles.navList }>
					<Link href="/"><a><li className={ styles.navItem }>Home</li></a></Link>
					<Link href="/blogs"><a><li className={ styles.navItem }>Blogs</li></a></Link>
					<Link href="/about"><a><li className={ styles.navItem }>About</li></a></Link>
					<Link href="/contact"><a><li className={ styles.navItem }>Contact</li></a></Link>
				</ul>
			</nav>
		</>
	)
}

export default Navbar