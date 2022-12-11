const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost:27017/product_manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to database"))
.catch((err) => console.error(err))