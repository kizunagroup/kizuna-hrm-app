export interface User {
  id: string;
  employeeId: string;
  firebaseUid: string;
  fullName: string;
  email?: string;
  role: "admin" | "employee";
  departmentId?: string;
  firstLogin: boolean;
  status: "active" | "inactive";
}

export interface Department {
  id: string;
  name: string;
  description?: string;
  managerId?: string;
}
