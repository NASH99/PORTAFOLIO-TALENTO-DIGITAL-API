import app from './app.js'
import { PORT } from './config.js'

//Levantamiento del servidor
app.listen(PORT);
console.log('Server running in',PORT)

