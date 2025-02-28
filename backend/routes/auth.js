const { body, validationResult } = require('express-validator');
const { registerUser, loginUser } = require('../controllers/authController');


router.post(
  '/register',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed');
      error.statusCode = 400; 
      error.data = errors.array(); 
      throw error;
    }
    registerUser(req, res, next);
  }
);


router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error('Validation failed');
      error.statusCode = 400;
      error.data = errors.array(); 
      throw error;
    }
    loginUser(req, res, next);
  }
);

module.exports = router;