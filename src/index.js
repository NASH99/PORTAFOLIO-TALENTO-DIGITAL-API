import app from './app.js'
import { PORT } from './config.js'

//Levantar el servidor
app.listen(PORT);
console.log('Server running in',PORT)

