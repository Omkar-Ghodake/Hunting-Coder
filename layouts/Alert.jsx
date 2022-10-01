import React from 'react'
import styles from '../styles/Alert.module.css'

const Alert = (props) => {
	return (
		<>
			<div className={ `${styles.alert} ${styles.props.alert.type}` } role="alert">
				A simple primary alert—check it out!
			</div>
		</>
	)
}

export default Alert