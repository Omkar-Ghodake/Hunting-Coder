import React, { useState } from 'react'
import styles from '../../styles/Blogpost.module.css'
const fs = require('fs')

const Slug = (props) => {
	const [blogData, setBlogData] = useState(props.myBlog)

	const createMarkup = (content) => {
		return { __html: content }
	}

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
			{ blogData && <div className={ styles.container }>
				<main className={ styles.main }>
					<h1 className={ styles.pageTitle }>{ blogData.title }</h1>
					<hr />
					<div dangerouslySetInnerHTML={ createMarkup(blogData.content) }></div>
				</main>
			</div> }
		</>
	)
}

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { slug: 'how-to-learn-flask' } },
			{ params: { slug: 'how-to-learn-javascript' } },
			{ params: { slug: 'how-to-learn-nextjs' } },
		],
		fallback: true // false or blocking
	}
}

export async function getStaticProps(context) {
	const { slug } = context.params
	const myBlog = fs.readFileSync(`blogData/${slug}.json`, 'utf8')

	return {
		props: { myBlog: JSON.parse(myBlog) }
	}
}

export default Slug