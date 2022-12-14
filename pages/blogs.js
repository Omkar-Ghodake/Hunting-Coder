import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Blogs.module.css'
const fs = require('fs')

const Blogs = (props) => {
	// const getBlogs = async () => {
	// 	const data = await fetch('http://localhost:3000/api/blogs')
	// 	const parsed = await data.json()
	// 	console.log(parsed)
	// }

	const [blogs, setBlogs] = useState(props.allBlogs)

	// useEffect(() => {
	// 	// getBlogs()
	// 	fetch('http://localhost:3000/api/blogs')
	// 		.then((data) => {
	// 			parsedData = data.json()
	// 		})
	// 		.then((parsedData) => {
	// 			setBlogs(parsedData)
	// 		})
	// }, [])

	return (
		<div className={ styles.container }>
			<main className={ styles.main }>
				{ blogs.map((element, index) => {
					return <div key={ index }>
						<div className={ styles.blogItem }>
							<Link href={ `/blogpost/${element.slug}` }>
								<h3 className={ styles.link } >{ element.title }</h3>
							</Link>
							<p>{ element.metadesc.substr(0, 140) }...</p>
						</div>
					</div>
				}) }
				{/* <div className={ styles.blogItem }>
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
					</div> */}
			</main >
		</div >
	)
}

export async function getStaticProps(context) {
	let allBlogs = []
	fs.readdir('blogData', (err, data) => {
		data.forEach((blogName) => {
			var blogData = fs.readFileSync(`blogData/${blogName}`, 'utf-8')
			allBlogs.push(JSON.parse(blogData))
		})
	})
	return {
		props: { allBlogs }, // will be passed to the page component as props
	}
}

export default Blogs