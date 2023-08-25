import DashboardNavBar from "../../Components/Navbar/DashboardNavBar";

const DriversReports = () => {
  return (
    <div className="bg-[#F7F9F8] min-h-screen">
      <DashboardNavBar />

      <div className="p-12" id="cars-section">
        <h3 className="mt-5 font-Bold text-center text-[#0A0D14] mb-2 lg:text-4xl md:text-4xl text-3xl">
          Reports
        </h3>
        <p className="text-center text-[19px] text-[#545151] font-Light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa officia
          expedita illo architecto.
        </p>
      </div>
    </div>
  );
};

export default DriversReports;
