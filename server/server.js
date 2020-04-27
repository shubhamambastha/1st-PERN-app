import express from 'express';
const app = express();
import cors from 'cors';
import routes from './Routes/index';
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/', routes.todo)

app.listen(PORT, ()=>{
    console.log(`Server is started on PORT ${PORT}`)
})