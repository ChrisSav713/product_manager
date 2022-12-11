const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('./config/mongoose.config')

const productRoutes = require('./routes/product.routes')
productRoutes(app)

app.get('/', (req, res) => {
    res.send(("express running"))
})

app.listen(port, () => console.log(`Server running on port ${port}`))