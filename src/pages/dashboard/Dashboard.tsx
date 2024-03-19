/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/Container";
import ErrorComponent from "@/components/ui/ErrorComponent";
import { LoadingPoints } from "@/components/ui/Loaders";
import { Button } from "@/components/ui/button";
import { useGetAllDonationQuery } from "@/redux/features/donation/donationApi";
import { Chart } from "react-google-charts";
import { Link } from "react-router-dom";

const options = {
  title: "Donation Chart :",
  is3D: true,
};
const Dashboard = () => {
  const { data, isLoading, isError } = useGetAllDonationQuery(undefined);
  if (isLoading) {
    return <LoadingPoints className="h-screen max-h-screen" />;
  }
  if (isError) {
    return <ErrorComponent className="h-screen max-h-screen" />;
  }
  const chartData = [
    ["Donation", "Hours per Day"],
    ...data.data.map((clothe: any) => [clothe.clotheTitle, clothe.quantity]),
  ];
  return (
    <Container className=" py-2 lg:py-5 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl  text-blue-500 text-center">
          Recent winter Donation Summary
        </h2>
        <Link to={"/winter-clothes"}>
          <Button variant={"ghost"} className="bg-gray-100 text-sm">
            Add Donation
          </Button>
        </Link>
      </div>
      <div>
        <Chart
          chartType="PieChart"
          data={chartData}
          options={options}
          width={"100%"}
          height={"500px"}
        />
      </div>
    </Container>
  );
};

export default Dashboard;
