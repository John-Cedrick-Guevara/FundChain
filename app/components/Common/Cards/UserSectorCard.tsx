import { motion } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";
import React from "react";

import Link from "next/link";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Progress } from "../../ui/progress";
import { SectorReturn } from "@/lib/interfaces";
import { getTotalFunds } from "@/lib/helperFunctions";

const UserSectorCard = ({
  sector,
  index,
}: {
  sector: SectorReturn;
  index: number;
}) => {
  const totalFunds = getTotalFunds(sector.funds) || 0;
  const sectorTargetFunds =
    sector.projects.reduce((sum, project) => (sum += project.targetFunds), 0) ||
    0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="card-glow hover:scale-105 transition-all duration-300 h-full">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl mb-2">{sector.name}</CardTitle>
            <Badge variant="secondary" className="text-xs">
              {sector.projects.length} projects
            </Badge>
          </div>
          <div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {sector.description}
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Funding Stats */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Total Funding
              </span>
              <span className="font-semibold">{totalFunds || 0}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Avg. per Project
              </span>
              <span className="font-semibold">{123}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Funding percentage
              </span>
              <div className="flex items-center space-x-1">
                <span className="font-semibold text-green-500">
                  {((totalFunds / sectorTargetFunds) * 100).toFixed(2) || 0}%
                </span>
              </div>
            </div>
          </div>

          {/* Activity Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Sector Activity</span>
              <span className="font-medium">
                {Math.round((sector.projects.length / 10) * 100)}%
              </span>
            </div>
            <Progress
              value={(sector.projects.length / 10) * 100}
              className="h-2"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <Button variant="cyber" size="sm" className="flex-1" asChild>
              <Link href={`/projects?sector=${sector.id}`}>
                Explore
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="sm" className="flex-1" asChild>
              <Link href={`/propose?sector=${sector.id}`}>Propose</Link>
            </Button>
          </div>

          {/* Recent Activity */}
          <div className="pt-2 border-t border-border/50">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Active</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default UserSectorCard;
