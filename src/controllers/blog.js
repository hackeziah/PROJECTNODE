import Router from 'express';

let blogs = [
    {
        id : 1 ,
        content : 'Sample Content',
        dateCreated : 'May 14, 2015',
        contact : '09333333333',
        author : 'Kevin Paul Lamadrid'
    }
]

export default () => {
    let api = Router();
    
    return api;
}