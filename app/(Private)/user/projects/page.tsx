import UserProjectsList from "@/app/components/Sections/user/dashboard/UserProjectsList";
import UserProjectsListSkeleton from "@/app/components/Skeletons/user/UserProjectsListSkeleton";

import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<UserProjectsListSkeleton />}>
      <UserProjectsList />
    </Suspense>
  );
};

export default page;
