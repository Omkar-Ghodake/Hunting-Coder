import React, { useState } from 'react'
import styles from '../../styles/Blogpost.module.css'


const slug = (props) => {
	const [blogData, setBlogData] = useState(props.myBlog)

	// useEffect(() => {
	// 	if (!router.isReady) return

	// fetch(`http://127.0.0.1:3000/api/getblog?slug=${slug}`)
	// 	.then((data) => {
	// 		return data.json()
	// 	})
	// 	.then((parsed) => {
	// 		setBlogData(parsed)
	// 	})
	// }, [router.isReady])

	return (
		<>
			<div className={ styles.container }>
				<main className={ styles.main }>
					<h1 className={ styles.pageTitle }>{ blogData.title }</h1>
					<hr />
					<p>{ blogData.content }</p>
				</main>
			</div>
		</>
	)
}

export async function getServerSideProps(context) {
	const { slug } = context.query
	let data = await fetch(`http://127.0.0.1:3000/api/getblog?slug=${slug}`)
	let myBlog = await data.json()
	// setBlogData(myBlog)

	return {
		props: { myBlog }
	}
}

export default slug