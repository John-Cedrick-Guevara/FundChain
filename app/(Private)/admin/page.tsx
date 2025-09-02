import AdminDashBoardList from "@/app/components/Sections/admin/rows/AdminDashBoardList";
import AdminDashBoardListSkeleton from "@/app/components/Skeletons/admin/AdminDashboardSkeleton";

import React, { Suspense } from "react";

const page = () => {
  return (
    <main className="text-white p-8">
      <Suspense fallback={<AdminDashBoardListSkeleton />}>
        <AdminDashBoardList />
      </Suspense>
    </main>
  );
};

export default page;
