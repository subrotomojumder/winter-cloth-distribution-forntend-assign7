import Container from "@/components/Container";
import DonorTestimonials from "@/components/home/DonorTestimonials";
import ErrorComponent from "@/components/ui/ErrorComponent";
import { LoadingPoints } from "@/components/ui/Loaders";
import SectionHeading from "@/components/ui/SectionHeading";
import VolunteerCard from "@/components/ui/VolunteerCard";
import { useGetAllVolunteersQuery } from "@/redux/features/auth/authApi";
import { TVolunteer } from "@/types/users.type";

const AboutUs = () => {
  const {
    data: volunteersData,
    isLoading,
    isError,
  } = useGetAllVolunteersQuery(undefined);

  return (
    <div className="pt-16 lg:pt-20  bg-gray-50 dark:bg-slate-950">
      <div
        className="w-full md:min-h-[450px] flex flex-col justify-center text-white space-y-2 lg:space-y-4 p-14 lg:p-20 px-5 text-center lg:text-start"
        style={{
          background: `linear-gradient(45deg, rgba(123, 20, 73, 0.88), rgba(245, 40, 145, 0.06)), url(https://www.radiustheme.com/demo/html/medilink/medilink/img/slider/slide1-1.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          objectPosition: "top",
        }}
      >
        <h2 className="text-3xl lg:text-4xl text-yellow-400 font-bold font-serif">
          Serve the Humanity
        </h2>
        <h1 className="text-xl lg:text-3xl font-semibold font-mono">
          Sign up for volunteer program
        </h1>
        <p className="font-thin max-w-[60ch] mx-auto lg:mx-0 text-sm md:text-base">
          Transform lives with your donation. Join us in creating change. Every
          contribution matters. Competently recaptiualize alternative internal
          or "organic" sources before future-proof vortals. Completely
          predominate just in time architectures vis-a-vis equity invested
          paradigms. Efficiently reconceptualize innovative expertise after
          premier strategic theme areas. Continually iterate diverse interfaces
          vis-a-vis interdependent potentialities.
        </p>
      </div>
      <Container className="min-h-screen">
        <SectionHeading
          headingText="Volunteers Wall"
          details="Volunteer your time, ignite someone's hope, and paint the world with compassion. Show the volunteer lists on the About Us page in a section"
        />
        {isLoading ? (
          <LoadingPoints />
        ) : isError ? (
          <ErrorComponent />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 my-8">
            {volunteersData?.data?.map(
              (volunteer: TVolunteer & { _id: string }) => (
                <VolunteerCard key={volunteer._id} data={volunteer} />
              )
            )}
          </div>
        )}
      </Container>
      <DonorTestimonials />
    </div>
  );
};

export default AboutUs;
