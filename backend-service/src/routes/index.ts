import { Router } from 'express';
import authRoutes from './auth';
import migrateRoutes from './migrate';

const router = Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to base API',
  });
});

router.use('/auth', authRoutes);
router.use('/migrate', migrateRoutes);

export default router;
