import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Upload, FileText, Mail, Phone, MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { employees } from "@/constance/mockdata";



const Employees = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedEmployee, setSelectedEmployee] = useState<typeof employees[0] | null>(null);

  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || emp.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-primary text-white";
      case "On Leave":
        return "bg-yellow-300 text-white";
      case "Inactive":
        return "bg-destructive text-white";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Employee Master Data</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, ID, or department..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="on leave">On Leave</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Employee Table - Desktop */}
          <div className="hidden md:block border rounded-lg overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Employee ID</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Name</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Role</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Department</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y">
                {filteredEmployees.map((employee) => (
                  <tr key={employee.id} className="hover:bg-muted/50">
                    <td className="px-4 py-3 text-sm text-foreground">{employee.id}</td>
                    <td className="px-4 py-3 text-sm font-medium text-foreground">{employee.name}</td>
                    <td className="px-4 py-3 text-sm text-foreground">{employee.role}</td>
                    <td className="px-4 py-3 text-sm text-foreground">{employee.department}</td>
                    <td className="px-4 py-3 text-sm">
                      <Badge className={getStatusColor(employee.status)}>{employee.status}</Badge>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedEmployee(employee)}
                      >
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Employee Cards - Mobile */}
          <div className="md:hidden space-y-3">
            {filteredEmployees.map((employee) => (
              <Card key={employee.id} className="p-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-foreground">{employee.name}</p>
                      <p className="text-xs text-muted-foreground">{employee.id}</p>
                    </div>
                    <Badge className={getStatusColor(employee.status)}>{employee.status}</Badge>
                  </div>
                  <div className="text-sm text-foreground">
                    <p>{employee.role}</p>
                    <p className="text-muted-foreground">{employee.department}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => setSelectedEmployee(employee)}
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Employee Profile Dialog */}
      <Dialog open={!!selectedEmployee} onOpenChange={() => setSelectedEmployee(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-foreground">Employee Profile</DialogTitle>
            <DialogDescription>
              Detailed information about the employee
            </DialogDescription>
          </DialogHeader>
          {selectedEmployee && (
            <Tabs defaultValue="info" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="info">Information</TabsTrigger>
                <TabsTrigger value="documents">Documents</TabsTrigger>
              </TabsList>
              <TabsContent value="info" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Employee ID</p>
                    <p className="text-sm text-muted-foreground">{selectedEmployee.id}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Full Name</p>
                    <p className="text-sm text-muted-foreground">{selectedEmployee.name}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Role</p>
                    <p className="text-sm text-muted-foreground">{selectedEmployee.role}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Department</p>
                    <p className="text-sm text-muted-foreground">{selectedEmployee.department}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Status</p>
                    <Badge className={getStatusColor(selectedEmployee.status)}>{selectedEmployee.status}</Badge>
                  </div>
                </div>
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">{selectedEmployee.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">{selectedEmployee.phone}</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="documents" className="space-y-4">
                <div className="border-2 border-dashed rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm font-medium text-foreground mb-2">Upload Documents</p>
                  <p className="text-xs text-muted-foreground mb-4">
                    Drag and drop files here or click to browse
                  </p>
                  <Button variant="outline" size="sm">
                    <FileText className="w-4 h-4 mr-2" />
                    Select Files
                  </Button>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Uploaded Documents</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground">Resume.pdf</span>
                      </div>
                      <Button variant="ghost" size="sm">Download</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground">ID_Card.pdf</span>
                      </div>
                      <Button variant="ghost" size="sm">Download</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Employees;
