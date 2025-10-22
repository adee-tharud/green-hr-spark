import { ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    toast.success("Logged out successfully");
    navigate("/");
  };

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === "/dashboard") return "Dashboard";
    if (path === "/employees") return "Employee Master Data";
    if (path === "/leave-management") return "Leave Management";
    if (path === "/reports") return "Reports";
    return "HR Management";
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-14 md:h-16 border-b bg-white flex items-center justify-between px-3 md:px-6">
            <div className="flex items-center gap-2 md:gap-4">
              <SidebarTrigger />
              <h1 className="text-base md:text-xl font-semibold text-foreground truncate">{getPageTitle()}</h1>
            </div>
            <Button variant="ghost" size="sm" onClick={handleLogout} className="gap-1 md:gap-2">
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </header>
          <main className="flex-1 p-3 md:p-6 bg-muted/30">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
