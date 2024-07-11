import { Router } from 'express';
import {
  getAll,
  getById,
  create,
  login,
  logout,
  editById,
  deleteById,
  admin,
  verifyToken,
  updatePassword
} from '../controllers/user.controllers.js';
import userRequired from '../validators/token.validations.js';
import userValidations from '../validators/user.validations.js';
import validateFields from '../validators/fields.validations.js';

const router = Router();

router.get("/getAll", userRequired, getAll);

router.get("/getById/:id", userRequired, getById);

router.post("/login", login);

router.post("/logout", logout);

router.post("/create", [userValidations.email, userValidations.password], validateFields, create);

router.patch("/editById/:id", userRequired, editById);

router.patch("/disable/:id", userRequired, editById);

router.delete("/delete/:id", userRequired, deleteById);

router.get("/admin", userRequired, admin);

router.get('/verify-token', userRequired, verifyToken);

router.patch('/update-password', userRequired, updatePassword);

export default router;

