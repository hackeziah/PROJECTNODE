import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import config from './config';

let app = express();
app.server = http.createServer(app);
app.use(bodyParser.json({
    limit: config.bodylimit
}));

let blogs = [
    {
        id : 1 ,
        content : 'Sample Content',
        dateCreated : 'May 14, 2015',
        contact : '09333333333',
        author : 'Kevin Paul Lamadrid'
    }
]

app.post('/', (req, res) => {
    const parsedblog =  {
        id : req.body.id,
        content : req.body.content,
        dateCreated : req.body.dateCreated,
        contact : req.body.contact,
        author : req.body.author 
    }
    blogs.push(parsedblog);
    
    res.status(201).json(parsedblog);
});

app.get('/', (req, res) => {
    console.log('GET Hitted!');
    res.status(200).json(blogs);
});

const port = 3002;
app.server.listen(port);
console.log(`server running on ${port}`);
export default app;
