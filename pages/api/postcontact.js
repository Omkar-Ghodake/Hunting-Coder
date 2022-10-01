const fs = require('fs')

export default function handler(req, res) {
	if (req.method === 'POST') {
		try {
			console.log(req.body)
			const contactData = fs.readdirSync('contactData')
			fs.writeFileSync(`contactData/${contactData.length + 1}.json`, JSON.stringify(req.body))
			res.json("Yes, Post request")
		} catch (error) {
			res.json({ error })
		}
	} else {
		res.json("Coding Hunter")
	}
}