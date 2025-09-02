import UserDashboard from "@/app/components/Sections/user/dashboard/UserDashboard";
import UserDashboardSkeleton from "@/app/components/Skeletons/user/UserDashBoardSkeleton";
import { Skeleton } from "@/app/components/ui/skeleton";
import { getUserDashboardData } from "@/lib/supabase/queries/userDashBoard";
import React, { Suspense } from "react";

const page = async () => {
  const stats = await getUserDashboardData();

  return (
    <>
      <Suspense fallback={<UserDashboardSkeleton />}>
        <UserDashboard stats={stats} />
      </Suspense>
    </>
  );
};

export default page;
