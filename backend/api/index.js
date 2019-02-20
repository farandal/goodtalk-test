import { Router } from 'express';
//API controllers
import items from './items';
//documentation endpoints
import docs from './docs';

const router = new Router();
//API routes
router.use('/items', items);
//Documentation endpoints
router.use('/docs', docs);

export default router;