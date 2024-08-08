import EmployeeStatus from "../../components/EmployeeStatus"
import NewSalesTable from "../../components/NewSalesTable"
import SalesDetailsChart from "../../components/SalesDetailsChart"
import StatsCard from "../../components/StatusCard"


const Dashboard = () => {
    return (
        <>
            {/* Main Content */}
            <div className="flex-1 ml-56 p-3">
                {/* Navbar */}
                {/* <Navbar /> */}

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 ">
                    <StatsCard title="Total Sales" value={1345} icon="fas fa-chart-line" />
                    <StatsCard title="Leads" value={3820} icon="fas fa-user-plus" />
                    <StatsCard title="Pending" value={2040} icon="fas fa-clock" />
                </div>
                <br />
                {/* Sales Details Chart */}
                <SalesDetailsChart />

                {/* New Sales Table */}
                <NewSalesTable />

                {/* Employee Status */}
                <div className="mt-4">
                    <EmployeeStatus />
                </div>
            </div>
        </>
    )
}

export default Dashboard