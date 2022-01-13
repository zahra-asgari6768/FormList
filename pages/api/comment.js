import comment from './comment.json'

export default (req, res) => {
    res.status(200).json({ post: req.query.id, comment })
    switch (req.method) {
        case 'GET':
        
          break
        case 'POST':
        
          break
        default:
          res.status(405).end() 
          break
      }
}