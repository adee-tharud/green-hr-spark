import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Building2, TrendingUp, UserCheck } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

const employeeRoleData = [
  { role: "Manager", count: 12 },
  { role: "Developer", count: 45 },
  { role: "HR", count: 8 },
  { role: "Sales", count: 23 },
  { role: "Support", count: 15 },
];

const departmentData = [
  { name: "IT", value: 45, color: "#22c55e" },
  { name: "Sales", value: 23, color: "#16a34a" },
  { name: "HR", value: 8, color: "#15803d" },
  { name: "Operations", value: 27, color: "#86efac" },
];

const attendanceData = [
  { month: "Jan", attendance: 92 },
  { month: "Feb", attendance: 88 },
  { month: "Mar", attendance: 95 },
  { month: "Apr", attendance: 90 },
  { month: "May", attendance: 93 },
  { month: "Jun", attendance: 91 },
];

const stats = [
  { title: "Total Employees", value: "103", icon: Users, color: "bg-primary" },
  { title: "Departments", value: "4", icon: Building2, color: "bg-success" },
  { title: "Present Today", value: "95", icon: UserCheck, color: "bg-info" },
  { title: "Attendance Rate", value: "92%", icon: TrendingUp, color: "bg-primary" },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-foreground">
                {stat.title}
              </CardTitle>
              <div className={`${stat.color} p-2 rounded-lg`}>
                <stat.icon className="h-4 w-4 text-white" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Employee Distribution by Role */}
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground">Employee Distribution by Role</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={employeeRoleData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="role" stroke="#000000" />
                <YAxis stroke="#000000" />
                <Tooltip />
                <Bar dataKey="count" fill="#22c55e" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Department-wise Employees */}
        <Card>
          <CardHeader>
            <CardTitle className="text-foreground">Department-wise Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Attendance Trend */}
      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Employee Attendance Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#000000" />
              <YAxis stroke="#000000" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="attendance"
                stroke="#22c55e"
                strokeWidth={2}
                dot={{ fill: "#22c55e", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
