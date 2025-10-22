import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const employeeSummary = [
  { id: "EMP001", name: "John Doe", department: "IT", role: "Senior Developer", joinDate: "2020-01-15", status: "Active" },
  { id: "EMP002", name: "Jane Smith", department: "HR", role: "HR Manager", joinDate: "2019-03-20", status: "Active" },
  { id: "EMP003", name: "Mike Johnson", department: "Sales", role: "Sales Executive", joinDate: "2021-06-10", status: "On Leave" },
  { id: "EMP004", name: "Sarah Williams", department: "IT", role: "Project Manager", joinDate: "2018-09-05", status: "Active" },
  { id: "EMP005", name: "Tom Brown", department: "IT", role: "Developer", joinDate: "2022-02-28", status: "Active" },
];

const leaveBalance = [
  { employeeId: "EMP001", name: "John Doe", department: "IT", annualLeave: 12, sickLeave: 8, personalLeave: 4, used: 5, remaining: 19 },
  { employeeId: "EMP002", name: "Jane Smith", department: "HR", annualLeave: 15, sickLeave: 10, personalLeave: 5, used: 8, remaining: 22 },
  { employeeId: "EMP003", name: "Mike Johnson", department: "Sales", annualLeave: 12, sickLeave: 8, personalLeave: 4, used: 12, remaining: 12 },
  { employeeId: "EMP004", name: "Sarah Williams", department: "IT", annualLeave: 15, sickLeave: 10, personalLeave: 5, used: 6, remaining: 24 },
  { employeeId: "EMP005", name: "Tom Brown", department: "IT", annualLeave: 12, sickLeave: 8, personalLeave: 4, used: 3, remaining: 21 },
];

const Reports = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-primary text-white";
      case "On Leave":
        return "bg-warning text-white";
      case "Inactive":
        return "bg-destructive text-white";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="space-y-6">
      {/* Employee Summary Report */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-foreground">Employee Summary Report</CardTitle>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export PDF
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead className="bg-muted">
                <tr>
                  <th className="px-3 md:px-4 py-3 text-left text-xs md:text-sm font-semibold text-foreground">Employee ID</th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs md:text-sm font-semibold text-foreground">Name</th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs md:text-sm font-semibold text-foreground">Department</th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs md:text-sm font-semibold text-foreground">Role</th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs md:text-sm font-semibold text-foreground">Join Date</th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs md:text-sm font-semibold text-foreground">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y">
                {employeeSummary.map((employee) => (
                  <tr key={employee.id} className="hover:bg-muted/50">
                    <td className="px-3 md:px-4 py-3 text-xs md:text-sm text-foreground">{employee.id}</td>
                    <td className="px-3 md:px-4 py-3 text-xs md:text-sm font-medium text-foreground">{employee.name}</td>
                    <td className="px-3 md:px-4 py-3 text-xs md:text-sm text-foreground">{employee.department}</td>
                    <td className="px-3 md:px-4 py-3 text-xs md:text-sm text-foreground">{employee.role}</td>
                    <td className="px-3 md:px-4 py-3 text-xs md:text-sm text-foreground">{employee.joinDate}</td>
                    <td className="px-3 md:px-4 py-3">
                      <Badge className={getStatusColor(employee.status)}>{employee.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Leave Balance Report */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-foreground">Leave Balance Report</CardTitle>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export PDF
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead className="bg-muted">
                <tr>
                  <th className="px-3 md:px-4 py-3 text-left text-xs md:text-sm font-semibold text-foreground">Employee ID</th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs md:text-sm font-semibold text-foreground">Name</th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs md:text-sm font-semibold text-foreground">Department</th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs md:text-sm font-semibold text-foreground">Annual Leave</th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs md:text-sm font-semibold text-foreground">Sick Leave</th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs md:text-sm font-semibold text-foreground">Personal Leave</th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs md:text-sm font-semibold text-foreground">Used</th>
                  <th className="px-3 md:px-4 py-3 text-left text-xs md:text-sm font-semibold text-foreground">Remaining</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y">
                {leaveBalance.map((record) => (
                  <tr key={record.employeeId} className="hover:bg-muted/50">
                    <td className="px-3 md:px-4 py-3 text-xs md:text-sm text-foreground">{record.employeeId}</td>
                    <td className="px-3 md:px-4 py-3 text-xs md:text-sm font-medium text-foreground">{record.name}</td>
                    <td className="px-3 md:px-4 py-3 text-xs md:text-sm text-foreground">{record.department}</td>
                    <td className="px-3 md:px-4 py-3 text-xs md:text-sm text-foreground">{record.annualLeave}</td>
                    <td className="px-3 md:px-4 py-3 text-xs md:text-sm text-foreground">{record.sickLeave}</td>
                    <td className="px-3 md:px-4 py-3 text-xs md:text-sm text-foreground">{record.personalLeave}</td>
                    <td className="px-3 md:px-4 py-3 text-xs md:text-sm text-foreground">{record.used}</td>
                    <td className="px-3 md:px-4 py-3 text-xs md:text-sm font-semibold text-primary">{record.remaining}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Report Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-foreground">Total Employees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{employeeSummary.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-foreground">Average Leave Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {Math.round(leaveBalance.reduce((acc, curr) => acc + curr.remaining, 0) / leaveBalance.length)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-foreground">Total Leave Used</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {leaveBalance.reduce((acc, curr) => acc + curr.used, 0)}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
