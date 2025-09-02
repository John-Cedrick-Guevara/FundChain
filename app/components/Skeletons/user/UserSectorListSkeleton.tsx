"use client";

import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { Skeleton } from "../../ui/skeleton";

export const UserSectorListSkeleton = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Skeleton className="h-10 w-64 mx-auto bg-zinc-800" />
          <Skeleton className="h-6 w-96 mx-auto bg-zinc-800" />
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="card-glow text-center">
              <CardContent className="p-6 space-y-2">
                <Skeleton className="h-8 w-20 mx-auto bg-zinc-800" />
                <Skeleton className="h-4 w-28 mx-auto bg-zinc-800" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <Card
              key={i}
              className="card-glow hover:scale-105 transition-all duration-300 h-full"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <Skeleton className="w-12 h-12 rounded-full bg-zinc-800" />
                  <Skeleton className="h-5 w-20 bg-zinc-800" />
                </div>
                <div>
                  <Skeleton className="h-6 w-32 mb-2 bg-zinc-800" />
                  <Skeleton className="h-4 w-full bg-zinc-800" />
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="flex justify-between items-center">
                      <Skeleton className="h-4 w-24 bg-zinc-800" />
                      <Skeleton className="h-4 w-16 bg-zinc-800" />
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <Skeleton className="h-4 w-24 bg-zinc-800" />
                    <Skeleton className="h-4 w-10 bg-zinc-800" />
                  </div>
                  <Skeleton className="h-2 w-full bg-zinc-800" />
                </div>

                <div className="flex space-x-2">
                  <Skeleton className="h-9 w-full bg-zinc-800 rounded-md" />
                  <Skeleton className="h-9 w-full bg-zinc-800 rounded-md" />
                </div>

                <div className="pt-2 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-4 w-28 bg-zinc-800" />
                    <Skeleton className="h-4 w-16 bg-zinc-800" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-glow max-w-2xl mx-auto">
            <CardContent className="p-8 space-y-4">
              <Skeleton className="h-8 w-64 mx-auto bg-zinc-800" />
              <Skeleton className="h-5 w-80 mx-auto bg-zinc-800" />
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Skeleton className="h-10 w-40 bg-zinc-800 rounded-md" />
                <Skeleton className="h-10 w-40 bg-zinc-800 rounded-md" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserSectorListSkeleton;
