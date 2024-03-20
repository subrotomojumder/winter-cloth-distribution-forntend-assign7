import Container from "@/components/Container";
import ErrorComponent from "@/components/ui/ErrorComponent";
import { LoadingPoints } from "@/components/ui/Loaders";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useGetAllDonorQuery } from "@/redux/features/donation/donationApi";
import { TUser } from "@/types/users.type";

const LeaderBoard = () => {
  const { data, isLoading, isError, error } = useGetAllDonorQuery(undefined);
  return (
    <Container className="min-h-screen ">
      <div className="mx-2 xl:mx-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl  text-blue-500 text-center">
            Donation Leaderboard
          </h2>
        </div>
        {isLoading ? (
          <LoadingPoints className="min-h-[60vh]" />
        ) : isError ? (
          <ErrorComponent error={error} />
        ) : (
          <Table className=" border rounded-md px-0 ">
            <TableHeader>
              <TableRow>
                <TableHead className="">Position</TableHead>
                <TableHead className="">Image</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-center">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.data?.map((user: TUser, inx: number) => (
                <TableRow key={user._id}>
                  <TableCell>{++inx}</TableCell>
                  <TableCell>
                    <div className=" w-10 lg:w-16">
                      <img
                        src={user.image}
                        alt=""
                        className={cn("object-cover rounded h-full w-full")}
                      />
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{user.name}</TableCell>
                  <TableCell className="text-center lg:text-base font-semibold">
                    $ {user.donation}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            {/* <TableFooter>
              <TableRow>
                <TableCell colSpan={4}>Total Services</TableCell>
                <TableCell className="text-right ">
                  <span className="pr-3">{data.data?.length}</span>
                </TableCell>
              </TableRow>
            </TableFooter> */}
          </Table>
        )}
      </div>
    </Container>
  );
};

export default LeaderBoard;
