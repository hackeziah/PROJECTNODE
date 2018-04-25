import express from 'express';
import blog from './controllers/blog';

export default () => {
    let router = express();

    router.use('/blog', blog);

    return router;
}
