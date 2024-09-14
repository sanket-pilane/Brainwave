import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <div className=" flex items-center justify-center h-screen bg-black ">
        <Link href="/sign-in">
          <Button size={"lg"}>Login</Button>
        </Link>
        <div className="mx-4"></div>
        <Link href="/sign-up">
          <Button variant={"outline"} size={"lg"}>
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
