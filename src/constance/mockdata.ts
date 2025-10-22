// src/mockdata.ts

import { LucideIcon } from "lucide-react";
import { Users, Building2, TrendingUp, UserCheck } from "lucide-react";

// Stats
export const stats: { title: string; value: string; icon: LucideIcon; color: string }[] = [
  { title: "Total Employees", value: "103", icon: Users, color: "bg-primary" },
  { title: "Departments", value: "4", icon: Building2, color: "bg-success" },
  { title: "Present Today", value: "95", icon: UserCheck, color: "bg-info" },
  { title: "Attendance Rate", value: "92%", icon: TrendingUp, color: "bg-primary" },
];

// Employee Role Data
export const employeeRoleData = [
  { role: "Manager", count: 12 },
  { role: "Developer", count: 45 },
  { role: "HR", count: 8 },
  { role: "Sales", count: 23 },
  { role: "Support", count: 15 },
];

// Department Data
export const departmentData = [
  { name: "IT", value: 45, color: "#22c55e" },
  { name: "Sales", value: 23, color: "#16a34a" },
  { name: "HR", value: 8, color: "#15803d" },
  { name: "Operations", value: 27, color: "#86efac" },
];

// Attendance Data
export const attendanceData = [
  { month: "Jan", attendance: 92 },
  { month: "Feb", attendance: 88 },
  { month: "Mar", attendance: 95 },
  { month: "Apr", attendance: 90 },
  { month: "May", attendance: 93 },
  { month: "Jun", attendance: 91 },
];

export const employees = [
  { id: "EMP001", name: "John Doe", role: "Senior Developer", department: "IT", status: "Active", email: "john@company.com", phone: "+1234567890" },
  { id: "EMP002", name: "Jane Smith", role: "HR Manager", department: "HR", status: "Active", email: "jane@company.com", phone: "+1234567891" },
  { id: "EMP003", name: "Mike Johnson", role: "Sales Executive", department: "Sales", status: "On Leave", email: "mike@company.com", phone: "+1234567892" },
  { id: "EMP004", name: "Sarah Williams", role: "Project Manager", department: "IT", status: "Active", email: "sarah@company.com", phone: "+1234567893" },
  { id: "EMP005", name: "Tom Brown", role: "Developer", department: "IT", status: "Active", email: "tom@company.com", phone: "+1234567894" },
];

export const leaveRequests = [
  {
    id: "LR001",
    employeeId: "EMP001",
    employeeName: "John Doe",
    department: "IT",
    leaveType: "Sick Leave",
    startDate: "2025-10-25",
    endDate: "2025-10-27",
    duration: "3 days",
    reason: "Medical appointment and recovery",
    status: "Pending",
  },
  {
    id: "LR002",
    employeeId: "EMP003",
    employeeName: "Mike Johnson",
    department: "Sales",
    leaveType: "Vacation",
    startDate: "2025-11-01",
    endDate: "2025-11-05",
    duration: "5 days",
    reason: "Family vacation",
    status: "Approved",
  },
  {
    id: "LR003",
    employeeId: "EMP005",
    employeeName: "Tom Brown",
    department: "IT",
    leaveType: "Personal Leave",
    startDate: "2025-10-28",
    endDate: "2025-10-28",
    duration: "1 day",
    reason: "Personal matters",
    status: "Pending",
  },
  {
    id: "LR004",
    employeeId: "EMP002",
    employeeName: "Jane Smith",
    department: "HR",
    leaveType: "Sick Leave",
    startDate: "2025-10-20",
    endDate: "2025-10-21",
    duration: "2 days",
    reason: "Flu recovery",
    status: "Rejected",
  },
];

export const employeeSummary = [
  { id: "EMP001", name: "John Doe", department: "IT", role: "Senior Developer", joinDate: "2020-01-15", status: "Active" },
  { id: "EMP002", name: "Jane Smith", department: "HR", role: "HR Manager", joinDate: "2019-03-20", status: "Active" },
  { id: "EMP003", name: "Mike Johnson", department: "Sales", role: "Sales Executive", joinDate: "2021-06-10", status: "On Leave" },
  { id: "EMP004", name: "Sarah Williams", department: "IT", role: "Project Manager", joinDate: "2018-09-05", status: "Active" },
  { id: "EMP005", name: "Tom Brown", department: "IT", role: "Developer", joinDate: "2022-02-28", status: "Active" },
];

export const leaveBalance = [
  { employeeId: "EMP001", name: "John Doe", department: "IT", annualLeave: 12, sickLeave: 8, personalLeave: 4, used: 5, remaining: 19 },
  { employeeId: "EMP002", name: "Jane Smith", department: "HR", annualLeave: 15, sickLeave: 10, personalLeave: 5, used: 8, remaining: 22 },
  { employeeId: "EMP003", name: "Mike Johnson", department: "Sales", annualLeave: 12, sickLeave: 8, personalLeave: 4, used: 12, remaining: 12 },
  { employeeId: "EMP004", name: "Sarah Williams", department: "IT", annualLeave: 15, sickLeave: 10, personalLeave: 5, used: 6, remaining: 24 },
  { employeeId: "EMP005", name: "Tom Brown", department: "IT", annualLeave: 12, sickLeave: 8, personalLeave: 4, used: 3, remaining: 21 },
];