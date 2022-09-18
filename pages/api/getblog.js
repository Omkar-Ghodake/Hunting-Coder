const fs = require('fs')

export default function handler(req, res) {
	try {
		const data = fs.readFileSync(`blogData/${req.query.slug}.json`, 'utf8')
		res.json(JSON.parse(data))
	} catch (error) {
		res.status(500).json({ success: false, error: 'No Such Blog Found!' })
	}
}