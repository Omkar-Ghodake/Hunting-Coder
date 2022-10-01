import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {

	const [formData, setFormData] = useState({
		name: '', email: '', desc: '', phone: ''
	})

	const handleOnSubmit = async (e) => {
		e.preventDefault()
		// console.log(JSON.stringify(formData))

		const data = await fetch('http://localhost:3000/api/postcontact/', {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json"
			}
		})

		const json = await data.json()
		console.log(json)

		setFormData({
			name: '', email: '', desc: '', phone: ''
		})
	}

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	return (
		<>
			<div className={ styles.container }>
				<h1>Contact Us</h1>

				<form onSubmit={ handleOnSubmit }>
					<div className={ styles.formGroup }>
						<label htmlFor="name" className={ styles.formLabel }>Name</label>
						<input type="text" value={ formData.name } id='name' className={ styles.formControl } name='name' onChange={ onChange } />
					</div>

					<div className={ styles.formGroup }>
						<label htmlFor="email" className={ styles.formLabel }>Email</label>
						<input type="email" value={ formData.email } id='email' className={ styles.formControl } name='email' onChange={ onChange } />
					</div>

					<div className={ styles.formGroup }>
						<label htmlFor="desc" className={ styles.formLabel }>Elaborate your Concern</label>
						<textarea value={ formData.desc } id='desc' className={ styles.formControl } placeholder='Write your concern here...' name='desc' onChange={ onChange } />
					</div>

					<div className={ styles.formGroup }>
						<label htmlFor="phone" className={ styles.formLabel }>Phone</label>
						<input type="text" value={ formData.phone } id='phone' className={ styles.formControl } name='phone' onChange={ onChange } />
					</div>

					<button type='submit'>Submit</button>
				</form>
			</div>
		</>
	)
}

export default Contact