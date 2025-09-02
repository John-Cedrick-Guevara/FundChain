"use client";

import { Card, CardContent } from "@/app/components/ui/card";
import { Skeleton } from "../../ui/skeleton";

const UserProjectsListSkeleton = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Skeleton className="h-10 w-64 mx-auto bg-zinc-800" />
          <Skeleton className="h-6 w-96 mx-auto bg-zinc-800" />
        </div>

        {/* Filters */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Skeleton className="h-10 w-full bg-zinc-800 rounded-md" />
            <Skeleton className="h-10 w-full bg-zinc-800 rounded-md" />
            <Skeleton className="h-10 w-full bg-zinc-800 rounded-md" />
            <Skeleton className="h-6 w-32 bg-zinc-800 mx-auto" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card
              key={i}
              className="card-glow hover:scale-105 transition-all duration-300 h-full"
            >
              <CardContent className="p-6 space-y-4">
                <Skeleton className="h-40 w-full bg-zinc-800 rounded-lg" />
                <Skeleton className="h-6 w-3/4 bg-zinc-800" />
                <Skeleton className="h-4 w-full bg-zinc-800" />
                <Skeleton className="h-4 w-5/6 bg-zinc-800" />
                <div className="flex justify-between items-center mt-4">
                  <Skeleton className="h-6 w-20 bg-zinc-800" />
                  <Skeleton className="h-6 w-12 bg-zinc-800" />
                </div>
                <Skeleton className="h-2 w-full bg-zinc-800" />
                <div className="flex space-x-2 pt-4">
                  <Skeleton className="h-9 w-full bg-zinc-800 rounded-md" />
                  <Skeleton className="h-9 w-full bg-zinc-800 rounded-md" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProjectsListSkeleton;
