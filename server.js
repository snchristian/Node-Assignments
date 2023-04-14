const bodyParser = require('body-parser'); 
const express = require('express'); 
const dotenv = require('dotenv');
const song = require('./routes/song')
const artist = require('./routes/artist')
const user = require('./routes/user')
const logger = require('./middlewares/logger')
const error = require('./middlewares/error')
const connectDB = require('./config/db')
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload')


dotenv.config({ path: './config/config.env' });

connectDB()

const app = express(); 

app.use(fileUpload())
app.use(cookieParser())
app.use(logger)
app.use(bodyParser.json())
app.use('/song', song)
app.use('/artist', artist)
app.use('/user', user);
app.use(error)

const PORT = process.env.PORT || 5001

const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})

process.on('unhandledRejection',(err,promise) =>{
    console.log(`Error: ${err.message}`)
    server.close(() => process.exit(1))
})