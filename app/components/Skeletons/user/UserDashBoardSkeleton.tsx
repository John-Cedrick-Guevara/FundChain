"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import { Skeleton } from "../../ui/skeleton";

const UserDashboardSkeleton = () => {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <Skeleton className="h-8 w-64 mb-2 bg-zinc-800" />
        <Skeleton className="h-5 w-96 bg-zinc-800" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="card-glow">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-10 w-10 rounded-full bg-zinc-800" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-5 w-24 bg-zinc-800" />
                  <Skeleton className="h-4 w-32 bg-zinc-800" />
                </div>
              </div>
              <Skeleton className="h-8 w-20 bg-zinc-800" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserDashboardSkeleton;
