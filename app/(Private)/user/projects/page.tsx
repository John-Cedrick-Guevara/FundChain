import UserProjectsList from "@/app/components/Sections/user/dashboard/UserProjectsList";
import UserProjectsListSkeleton from "@/app/components/Skeletons/user/UserProjectsListSkeleton";
import { Project } from "@/lib/interfaces";
import { createClient } from "@/lib/supabase/supabaseServer";
import { Suspense } from "react";

const Page = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("Projects")
    .select(
      `*, 
        sector(id, name),
        userId(id, name),
        votes:Votes!projectId(id, userId),
        funds:Funds(id, amount)`
    );

  if (error) {
    console.error("Error fetching projects:", error);
  }

  return (
    <Suspense fallback={<UserProjectsListSkeleton />}>
      <UserProjectsList fallbackData={data ?? []} />
    </Suspense>
  );
};

export default Page;
