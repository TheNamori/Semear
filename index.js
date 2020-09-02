const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000

app.use('/', express.static(__dirname + '/www')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/fontawesome', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/')); //redirect Font Awesome
app.use('/css', express.static(__dirname + '/assets/css/')); //redirect Main CSS
app.use('/img', express.static(__dirname + '/assets/img/')); //redirect Main Img
app.use('/aos', express.static(__dirname + '/node_modules/aos/dis/aos.css')); //redirect aos CSS
app.use('/aos', express.static(__dirname + '/node_modules/aos/dis/aos.js')); //redirect aos JS


app.set('views', path.join(__dirname, 'views')) //redirect to view directory
app.set('view engine', 'ejs') //set the engine that the view will use
app.listen(PORT, () => console.log(`Listening on ${ PORT }`)) //listen to the PORT(3000) and prints it in the console
app.get('/', (req, res) => res.render('index')) //execute the file index.ejs in the directory views