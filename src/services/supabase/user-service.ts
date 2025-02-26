// src/services/supabase/user-service.ts
import { supabase } from "./config";
import { Database } from "@/types/supabase";

type User = Database["public"]["Tables"]["users"]["Row"];
type UserInsert = Database["public"]["Tables"]["users"]["Insert"];
type UserUpdate = Database["public"]["Tables"]["users"]["Update"];

// Tạo người dùng mới
export const createUser = async (userData: UserInsert) => {
  const { data, error } = await supabase
    .from("users")
    .insert([userData])
    .select();

  if (error) throw error;
  return data[0];
};

// Lấy người dùng theo firebase_uid
export const getUserByFirebaseUid = async (firebaseUid: string) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("firebase_uid", firebaseUid)
    .single();

  if (error) throw error;
  return data;
};

// Lấy người dùng theo employee_id
export const getUserByEmployeeId = async (employeeId: string) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("employee_id", employeeId)
    .single();

  if (error) throw error;
  return data;
};

// Cập nhật first_login flag
export const updateFirstLogin = async (userId: string, firstLogin: boolean) => {
  const { data, error } = await supabase
    .from("users")
    .update({
      first_login: firstLogin,
      updated_at: new Date().toISOString(),
    })
    .eq("id", userId)
    .select();

  if (error) throw error;
  return data[0];
};
