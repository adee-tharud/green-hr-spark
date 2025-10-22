import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Clock } from "lucide-react";
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
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const leaveRequests = [
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

const LeaveManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedLeave, setSelectedLeave] = useState<typeof leaveRequests[0] | null>(null);
  const [leaves, setLeaves] = useState(leaveRequests);

  const filteredLeaves = leaves.filter((leave) => {
    const matchesSearch =
      leave.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      leave.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      leave.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || leave.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-primary text-white";
      case "Pending":
        return "bg-warning text-white";
      case "Rejected":
        return "bg-destructive text-white";
      default:
        return "bg-muted";
    }
  };

  const handleApprove = () => {
    if (selectedLeave) {
      setLeaves(leaves.map(l => l.id === selectedLeave.id ? { ...l, status: "Approved" } : l));
      toast.success(`Leave request for ${selectedLeave.employeeName} has been approved`);
      setSelectedLeave(null);
    }
  };

  const handleReject = () => {
    if (selectedLeave) {
      setLeaves(leaves.map(l => l.id === selectedLeave.id ? { ...l, status: "Rejected" } : l));
      toast.error(`Leave request for ${selectedLeave.employeeName} has been rejected`);
      setSelectedLeave(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-foreground">Pending Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">
              {leaves.filter(l => l.status === "Pending").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-foreground">Approved This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {leaves.filter(l => l.status === "Approved").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-foreground">Rejected This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">
              {leaves.filter(l => l.status === "Rejected").length}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-foreground">Leave Requests</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by employee name, ID, or department..."
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
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Leave Requests Table */}
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Employee</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Department</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Leave Type</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Duration</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Start Date</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y">
                {filteredLeaves.map((leave) => (
                  <tr key={leave.id} className="hover:bg-muted/50">
                    <td className="px-4 py-3">
                      <div>
                        <p className="text-sm font-medium text-foreground">{leave.employeeName}</p>
                        <p className="text-xs text-muted-foreground">{leave.employeeId}</p>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm text-foreground">{leave.department}</td>
                    <td className="px-4 py-3 text-sm text-foreground">{leave.leaveType}</td>
                    <td className="px-4 py-3 text-sm text-foreground">{leave.duration}</td>
                    <td className="px-4 py-3 text-sm text-foreground">{leave.startDate}</td>
                    <td className="px-4 py-3">
                      <Badge className={getStatusColor(leave.status)}>{leave.status}</Badge>
                    </td>
                    <td className="px-4 py-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedLeave(leave)}
                      >
                        View Details
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Leave Details Dialog */}
      <Dialog open={!!selectedLeave} onOpenChange={() => setSelectedLeave(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-foreground">Leave Request Details</DialogTitle>
            <DialogDescription>
              Review and manage leave request
            </DialogDescription>
          </DialogHeader>
          {selectedLeave && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Employee Name</p>
                  <p className="text-sm text-muted-foreground">{selectedLeave.employeeName}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Employee ID</p>
                  <p className="text-sm text-muted-foreground">{selectedLeave.employeeId}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Department</p>
                  <p className="text-sm text-muted-foreground">{selectedLeave.department}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Leave Type</p>
                  <p className="text-sm text-muted-foreground">{selectedLeave.leaveType}</p>
                </div>
              </div>
              <div className="space-y-3 pt-4 border-t">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">
                    {selectedLeave.startDate} to {selectedLeave.endDate}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">{selectedLeave.duration}</span>
                </div>
              </div>
              <div className="space-y-2 pt-4 border-t">
                <p className="text-sm font-medium text-foreground">Reason</p>
                <p className="text-sm text-muted-foreground">{selectedLeave.reason}</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-foreground">Status</p>
                <Badge className={getStatusColor(selectedLeave.status)}>{selectedLeave.status}</Badge>
              </div>
            </div>
          )}
          {selectedLeave?.status === "Pending" && (
            <DialogFooter className="gap-2">
              <Button variant="outline" onClick={handleReject}>
                Reject
              </Button>
              <Button onClick={handleApprove}>
                Approve
              </Button>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LeaveManagement;
