"use client";
import { motion } from "framer-motion";

import { ArrowRight } from "lucide-react";
import { mockSectors } from "@/lib/data";
import { Card, CardContent } from "@/app/components/ui/card";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import UserSectorCard from "@/app/components/Common/Cards/UserSectorCard";
import { SectorReturn } from "@/lib/interfaces";
import useSWR from "swr";
import { fetcher, sectorFetcher } from "@/lib/db/supabaseFetcher";

export const UserSectorList = ({
  fallbackData,
}: {
  fallbackData: SectorReturn[];
}) => {
  const { data: sectors } = useSWR("Sectors", sectorFetcher, {
    suspense: true,
    fallbackData,
  });

  console.log(sectors);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 ">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-20"
        >
          <h1 className="text-4xl font-bold text-gradient">
            Browse by Sectors
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore projects across different industries and find innovations
            that matter to you
          </p>
        </motion.div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <UserSectorCard sector={sector} index={index} key={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Card className="card-glow max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gradient mb-4">
                Don't see your sector?
              </h3>
              <p className="text-muted-foreground mb-6">
                We're always expanding into new areas. Propose your project and
                help us grow into new sectors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link href="/user/propose">
                    Propose Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  Request New Sector
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default UserSectorList;
