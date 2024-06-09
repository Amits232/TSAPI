import express from 'express';
import userRouter from './users/users.routes';
import entrepreneurRouter from './entrepreneurs/entrepreneurs.routes';
import constructorRouter from './constructors/constructors.routes';

//config
//process.env.PORT --> the live server port
const PORT = process.env.PORT || 9876;

//create the server
const server = express();

//config JSON support
server.use(express.json());

//using routes
server.use('/api/users', userRouter);
server.use('/api/entrepreneurs', entrepreneurRouter);
server.use('/api/constructors', constructorRouter);

//run the server
server.listen(PORT, () => console.log(`[Server] http://localhost:${PORT}`));