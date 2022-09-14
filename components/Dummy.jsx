import React from 'react'

const Dummy = () => {
	return (
		<>
			<style jsx global>
				{ `
					.dummy {
						background: teal;
						color: #fff
					}
				`}
			</style>
			<div className='dummy'>I am Dummy</div>
		</>
	)
}

export default Dummy