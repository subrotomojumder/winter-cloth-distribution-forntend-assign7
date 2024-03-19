import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Sidebar from "../shared/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="-mb-6">
      <div className="grid grid-cols-12">
        <Sidebar className="col-span-2" />
        <div className="col-span-10">
          <div className="min-h-screen">
          <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
