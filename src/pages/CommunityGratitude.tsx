/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/Container";
import { CommentAddForm } from "@/components/form/CommentAddForm";
import ErrorComponent from "@/components/ui/ErrorComponent";
import { LoadingPoints } from "@/components/ui/Loaders";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  useGetAllCommentsQuery,
  useGetAllDonationQuery,
} from "@/redux/features/donation/donationApi";
import { ThumbsDown, ThumbsUp } from "lucide-react";

const CommunityGratitude = () => {
  const {
    data: commentsData,
    isLoading,
    isError,
    error,
  } = useGetAllCommentsQuery(undefined);
  const { data: donationData } = useGetAllDonationQuery(undefined);
  return (
    <div className="pt-8">
      <Container className="min-h-screen lg:grid grid-cols-12 gap-6 space-y-10 lg:space-y-0">
        <div className="col-span-9">
          <img
            src="https://thejoinhands.org/images/resource/clothes_blanket2.jpg"
            alt=""
          />
          <div className="py-8">
            <h1 className="text-2xl lg:text-4xl font-bold mb-4">
              Clean Water Charity - $15,000 funds a well for a village wish your
              help
            </h1>
            <div className="flex gap-4">
              <Badge
                variant="destructive"
                className="px-4 py-1 text-base rounded-xs bg-yellow-600"
              >
                Food
              </Badge>
              <Badge
                variant="destructive"
                className="px-4 py-1 text-base rounded-xs bg-yellow-600"
              >
                Water
              </Badge>
              <Badge
                variant="destructive"
                className="px-4 py-1 text-base rounded-xs bg-yellow-600"
              >
                Salter
              </Badge>
            </div>
            <p className="font-medium text-green-400 mt-8">
              HASIB SHARIF / 21 FEB, 2024
            </p>
          </div>
          <div className="space-y-4 text-slate-700">
            <p>
              The Clean Water Charity extends a heartfelt invitation to join
              their mission in bringing life-changing access to clean water to
              underserved villages worldwide. With just $15,000, the charity can
              fund the construction of a well, transforming the daily reality
              for an entire community. Your support becomes a beacon of hope,
              ensuring families no longer need to trek miles for contaminated
              water sources or suffer from waterborne illnesses. By contributing
              to this noble cause, you directly impact lives, empowering
              communities with the most fundamental resource for survival and
              prosperity. Together, let's make a tangible difference, one well
              at a time, and fulfill the collective wish for a world where clean
              water is a universal reality. Join hands with us today and be the
              catalyst for positive change.
            </p>
            <p>
              The Clean Water Charity fervently appeals for your assistance in
              realizing its vision of providing clean and safe water to
              communities in dire need. With a donation of $15,000, you can
              sponsor the construction of a much-needed well, becoming an
              integral part of transforming lives and uplifting entire villages.
              Your generosity will alleviate the burdens of water scarcity and
              contamination, fostering healthier, more resilient communities.
              Every drop of clean water delivered through this initiative
              represents a ripple of hope, cascading into improved health,
              education, and economic opportunities for generations to come.
              Your support is not merely a financial contribution; it's a beacon
              of compassion and solidarity, resonating with those who dream of a
              future free from the shackles of water insecurity. Together, let's
              embark on this noble journey, empowering communities and
              fulfilling the fundamental human right to clean water. Join us in
              our endeavor, and together, we can make waves of positive change
              across the globe.
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-xl lg:text-3xl font-bold">
              Appreciation comments :
            </h2>
            <div className="bg-gray-200 dark:bg-slate-600 mt-4 p-4 lg:p-8 rounded  space-y-8">
              <CommentAddForm />
              {isLoading ? (
                <LoadingPoints />
              ) : isError ? (
                <ErrorComponent error={error} />
              ) : (
                <div className="space-y-8">
                  {commentsData.data.map((comment: any) => (
                    <div
                      key={comment._id}
                      className="bg-white dark:bg-slate-900 rounded-lg p-4 space-y-2"
                    >
                      <div className="flex items-center gap-2">
                        <div className="">
                          <img
                            src={
                              comment.image ||
                              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU"
                            }
                            alt=""
                            className={cn(
                              "object-cover w-14 h-14 rounded-full"
                            )}
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-700">
                            {comment.userName}
                          </h3>
                          <p className=" text-slate-400 text-sm">
                            {new Date(comment.date).toDateString()}
                          </p>
                        </div>
                      </div>
                      <p className="line-clamp-2 text-sm text-slate-500">
                        {comment.comment}
                      </p>
                      <div className="flex items-center whitespace-pre space-x-1">
                        <Button size={"sm"} variant={"ghost"} className="py-0">
                          <ThumbsDown size={18} />
                        </Button>
                        <div className="h-[15px] bg-gray-700 w-[2px] rounded"></div>
                        <Button size={"sm"} variant={"ghost"} className="py-0">
                          <ThumbsUp size={18} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-3 relative">
          <div className="  sticky top-20 right-0">
            <h3 className="text-lg font-semibold underline underline-offset-8 px-2">
              Recent Donations :
            </h3>
            <div className="mt-4 space-y-2 divide-y-2">
              {donationData?.data?.slice(0, 5).map((donation: any) => (
                <div
                  key={donation._id}
                  className="bg-white dark: px-2 pt-2 pb-1 space-y-2 hover:bg-gray-100 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className="">
                      <img
                        src={
                          donation.clotheImage ||
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVA_HrQLjkHiJ2Ag5RGuwbFeDKRLfldnDasw&usqp=CAU"
                        }
                        alt=""
                        className={cn("object-cover w-14 h-14 rounded")}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-700">
                        {donation.clotheTitle}
                      </h3>
                      <p className=" text-slate-400 text-sm">
                        {new Date(donation.date).toDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CommunityGratitude;
