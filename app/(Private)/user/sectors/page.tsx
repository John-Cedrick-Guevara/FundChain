import UserSectorList from "@/app/components/Features/user/sectors/UserSectorList";
import UserSectorListSkeleton from "@/app/components/Skeletons/user/UserSectorListSkeleton";
import { sectorFetcher } from "@/lib/db/supabaseFetcher";
import { createClient } from "@/lib/supabase/supabaseServer";

import React, { Suspense } from "react";

const page = async () => {
  const data = await sectorFetcher();

  return (
    <Suspense fallback={<UserSectorListSkeleton />}>
      <UserSectorList fallbackData={data ?? []} />
    </Suspense>
  );
};

export default page;
