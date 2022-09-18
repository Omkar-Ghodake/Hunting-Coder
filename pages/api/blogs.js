const fs = require('fs')

export default function handler(req, res) {
  fs.readdir('blogData', (err, data) => {
    let allBlogs = []
    data.forEach((blogName) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' })
      }
      var blogData = fs.readFileSync(`blogData/${blogName}`, 'utf-8')
      allBlogs.push(JSON.parse(blogData))
    })
    console.log(allBlogs)
    res.json(allBlogs)
  })
}