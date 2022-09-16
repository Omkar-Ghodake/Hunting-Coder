import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Blogpost.module.css'


const slug = () => {
	const router = useRouter()
	const { slug } = router.query

	return (
		<>
			<div className={ styles.container }>
				<main className={ styles.main }>
					<h1 className={ styles.pageTitle }>Title of the page { slug }</h1>
					<hr />
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, commodi architecto itaque asperiores eveniet debitis voluptatum facere facilis rem non quas adipisci voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde commodi numquam ad sapiente, error ex doloremque suscipit voluptate voluptas, harum facilis odit nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quo perferendis maiores minima rem corporis, saepe soluta nam voluptas at?</p>
				</main>
			</div>
		</>
	)
}

export default slug