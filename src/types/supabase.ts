export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          employee_id: string;
          firebase_uid: string;
          full_name: string;
          email: string | null;
          phone: string | null;
          position: string | null;
          department_id: string | null;
          role: string;
          first_login: boolean;
          created_at: string;
          updated_at: string;
          last_login: string | null;
          status: string;
          created_by: string | null;
        };
        Insert: {
          id?: string;
          employee_id: string;
          firebase_uid: string;
          full_name: string;
          email?: string | null;
          phone?: string | null;
          position?: string | null;
          department_id?: string | null;
          role?: string;
          first_login?: boolean;
          created_at?: string;
          updated_at?: string;
          last_login?: string | null;
          status?: string;
          created_by?: string | null;
        };
        Update: {
          id?: string;
          employee_id?: string;
          firebase_uid?: string;
          full_name?: string;
          email?: string | null;
          phone?: string | null;
          position?: string | null;
          department_id?: string | null;
          role?: string;
          first_login?: boolean;
          created_at?: string;
          updated_at?: string;
          last_login?: string | null;
          status?: string;
          created_by?: string | null;
        };
      };
      departments: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          manager_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          manager_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          manager_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
