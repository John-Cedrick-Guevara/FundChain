"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Skeleton } from "../../ui/skeleton";

const AdminDashBoardListSkeleton = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Skeleton className="h-10 w-64 mb-2 bg-zinc-800" />
          <Skeleton className="h-6 w-96 bg-zinc-800" />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="card-glow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-10 w-10 rounded-full bg-zinc-800" />
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-28 bg-zinc-800" />
                    <Skeleton className="h-4 w-20 bg-zinc-800" />
                  </div>
                </div>
                <Skeleton className="h-8 w-24 bg-zinc-800" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs Skeleton */}
        <div className="space-y-6">
          <div className="flex space-x-4">
            <Skeleton className="h-10 w-28 bg-zinc-800 rounded-md" />
            <Skeleton className="h-10 w-28 bg-zinc-800 rounded-md" />
            <Skeleton className="h-10 w-28 bg-zinc-800 rounded-md" />
          </div>

          {/* Table Section */}
          <Card className="card-glow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>
                  <Skeleton className="h-6 w-40 bg-zinc-800" />
                </CardTitle>
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-10 w-64 bg-zinc-800 rounded-md" />
                  <Skeleton className="h-10 w-10 bg-zinc-800 rounded-md" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-6 gap-4 items-center border-b border-border pb-4"
                  >
                    {[...Array(6)].map((_, j) => (
                      <Skeleton
                        key={j}
                        className="h-5 w-full bg-zinc-800 rounded"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoardListSkeleton;
