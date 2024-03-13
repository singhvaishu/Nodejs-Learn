require('dotenv').config()

const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')
const server = express();
const path = require('path');
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')

//db connection
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL);

    console.log('database connected')
}

//schema


//VtuHrZwjfz7FSh2K

//HW7uylxxu1G3a3TQ --db pass


server.use(cors());

server.use(express.json());
server.use(morgan('default'))
server.use(express.static('public'));
server.use('/products', productRouter.router);
server.use('/users', userRouter.router);
server.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})
//MVC


server.listen(8080, () => {
    console.log("server started");
});