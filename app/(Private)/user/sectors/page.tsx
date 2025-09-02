import UserSectorList from "@/app/components/Sections/user/sectors/UserSectorList";
import UserSectorListSkeleton from "@/app/components/Skeletons/user/UserSectorListSkeleton";
import { createClient } from "@/lib/supabase/supabaseServer";

import React, { Suspense } from "react";

const page = async () => {
  const supabase = await createClient();
  const secttorsData = await supabase
    .from("Sectors")
    .select("id, name, Projects(id, name), Votes(id), Funds(id,amount,projectId) ");

  console.log("sector:", secttorsData.data);

  return (
    <Suspense fallback={<UserSectorListSkeleton />}>
      
      <UserSectorList />
    </Suspense>
  );
};

export default page;
