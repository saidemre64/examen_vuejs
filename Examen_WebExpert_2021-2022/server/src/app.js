const express = require('express');
const cors = require('cors');

const { errorHandler } = require('./middleware/errorHandler')
const movieRouter = require('./routers/movieRouter');

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.get('', (request, response) => {
    response.send({
        message: 'Welcome to the Movies API of the DVO exam 2022. Go to /api/movies to see all the objects.'
    })
})

app.use('/api/movies', movieRouter);

app.use(errorHandler);

app.get('*', (request, response) => {
    response.send({
        message: 'This route cannot be found'
    })
})

app.listen(port, () => console.log(`Server started on port ${port}`));