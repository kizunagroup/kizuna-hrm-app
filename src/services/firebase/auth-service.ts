import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updatePassword,
  signOut as firebaseSignOut,
  User as FirebaseUser,
} from "firebase/auth";
import { auth } from "./config";

// Chuyển đổi employeeId thành email (cho Firebase)
const employeeIdToEmail = (employeeId: string) =>
  `${employeeId}@kizuna-hrm.firebaseapp.com`;

// Đăng nhập bằng employeeId
export const signIn = async (employeeId: string, password: string) => {
  const email = employeeIdToEmail(employeeId);
  return signInWithEmailAndPassword(auth, email, password);
};

// Tạo người dùng mới
export const createUser = async (employeeId: string, password: string) => {
  const email = employeeIdToEmail(employeeId);
  return createUserWithEmailAndPassword(auth, email, password);
};

// Đổi mật khẩu
export const changePassword = async (
  user: FirebaseUser,
  newPassword: string
) => {
  return updatePassword(user, newPassword);
};

// Đăng xuất
export const signOut = async () => {
  return firebaseSignOut(auth);
};

// Lấy user hiện tại
export const getCurrentUser = () => {
  return auth.currentUser;
};
