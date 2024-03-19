import DashboardNavBar from "../../Components/Navbar/DashboardNavBar";
import { useState } from "react";
import ActiveBids from './components/ActiveBids';
import ExpiredBids from './components/ExpiredBids';

const BidsPage = () => {
    const [activeTab, setActiveTab] = useState("active");

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    }

    // Define styles for the inner border
    const innerBorderStyle = {
        left: activeTab === "active" ? "0%" : "50%", // Adjust left position based on the active tab
        transition: "left 0.5s ease-in-out" 
    };

    return (
        <div className="bg-[#F7F9F8] min-h-screen">
            <DashboardNavBar />

            {/* Tab Navigation section */}
            <div className="p-14 flex flex-col items-center justify-center">
                <h1 className="font-Bold text-[45px] mb-5">Bids</h1>

                <div className="flex flex-row gap-[50px] hover:cursor-pointer  text-[19px] text-[#ABB3BF] font-SemiBold">
                    <p onClick={() => handleTabChange("active")} className={activeTab === "active" ? "text-[#234C65] cursor-pointer" : "cursor-pointer"}>Active Bids</p>
                    <p onClick={() => handleTabChange("expired")} className={activeTab === "expired" ? "text-[#234C65] cursor-pointer" : "cursor-pointer"}>Expired Bids</p>
                </div>
                
                {/* Border section */}
                <div className="mx-auto border bg-[#E7E9EE] mb-10 w-11/12 md:w-[22%] lg:w-[26%] relative"> 
                   {/* inner border */}
                   <div className="absolute bottom-0 left-0 border border-[#234C65] w-[50%] transition duration-300" style={innerBorderStyle} />
                </div>

                {/* Render ActiveBids or ExpiredBids based on activeTab state */}
                {activeTab === "active" && <ActiveBids />}
                {activeTab === "expired" && <ExpiredBids />}
            </div>
        </div>
    );
};

export default BidsPage;
