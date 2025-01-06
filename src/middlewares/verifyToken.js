// const { admin } = require('../config/firebase');

// // Middleware to verify Firebase token
// const verifyToken = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization?.split('Bearer ')[1];
//     if (!token) {
//       return res.status(401).json({ error: 'No token provided' });
//     }

//     const decodedToken = await admin.auth().verifyIdToken(token);
//     req.user = decodedToken; // Adds user info to request
//     next();
//   } catch (error) {
//     res.status(401).json({ error: 'Invalid token' });
//   }
// };

// module.exports = { verifyToken };
