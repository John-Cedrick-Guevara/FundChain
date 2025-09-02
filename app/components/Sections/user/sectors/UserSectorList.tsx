"use client"
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";

import {
  ArrowRight,
  TrendingUp,
  Cpu,
  Wheat,
  GraduationCap,
  Heart,
  Leaf,
  DollarSign,
} from "lucide-react";
import { mockSectors, getProjectsBySector, formatCurrency } from "@/lib/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Progress } from "@/app/components/ui/progress";

const sectorIcons = {
  Cpu,
  Wheat,
  GraduationCap,
  Heart,
  Leaf,
  DollarSign,
};

export const UserSectorList = () => {
  const getTotalFunding = (sectorId: string) => {
    const sectorProjects = getProjectsBySector(sectorId);
    return sectorProjects.reduce(
      (total, project) => total + project.raisedAmount,
      0
    );
  };

  const getAverageFunding = (sectorId: string) => {
    const sectorProjects = getProjectsBySector(sectorId);
    if (sectorProjects.length === 0) return 0;
    return getTotalFunding(sectorId) / sectorProjects.length;
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <h1 className="text-4xl font-bold text-gradient">
            Browse by Sectors
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore projects across different industries and find innovations
            that matter to you
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <Card className="card-glow text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-2">
                {mockSectors.reduce(
                  (total, sector) => total + sector.projectCount,
                  0
                )}
              </div>
              <div className="text-muted-foreground">Total Projects</div>
            </CardContent>
          </Card>
          <Card className="card-glow text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-2">
                {formatCurrency(
                  mockSectors.reduce(
                    (total, sector) => total + getTotalFunding(sector.id),
                    0
                  )
                )}
              </div>
              <div className="text-muted-foreground">Total Funded</div>
            </CardContent>
          </Card>
          <Card className="card-glow text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-2">
                {mockSectors.length}
              </div>
              <div className="text-muted-foreground">Active Sectors</div>
            </CardContent>
          </Card>
          <Card className="card-glow text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-2">89%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockSectors.map((sector, index) => {
            const IconComponent =
              sectorIcons[sector.icon as keyof typeof sectorIcons];
            const totalFunding = getTotalFunding(sector.id);
            const averageFunding = getAverageFunding(sector.id);
            const fundingGrowth = Math.floor(Math.random() * 30) + 10; // Mock growth percentage

            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-glow hover:scale-105 transition-all duration-300 h-full">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        {IconComponent && (
                          <IconComponent className="w-6 h-6 text-primary" />
                        )}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {sector.projectCount} projects
                      </Badge>
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">
                        {sector.name}
                      </CardTitle>
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
                        <span className="font-semibold">
                          {formatCurrency(totalFunding)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          Avg. per Project
                        </span>
                        <span className="font-semibold">
                          {formatCurrency(averageFunding)}
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">
                          Growth Rate
                        </span>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-3 h-3 text-green-500" />
                          <span className="font-semibold text-green-500">
                            +{fundingGrowth}%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Activity Progress */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Sector Activity
                        </span>
                        <span className="font-medium">
                          {Math.round((sector.projectCount / 20) * 100)}%
                        </span>
                      </div>
                      <Progress
                        value={(sector.projectCount / 20) * 100}
                        className="h-2"
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <Button
                        variant="cyber"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <Link href={`/projects?sector=${sector.id}`}>
                          Explore
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <Link href={`/propose?sector=${sector.id}`}>
                          Propose
                        </Link>
                      </Button>
                    </div>

                    {/* Recent Activity */}
                    <div className="pt-2 border-t border-border/50">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Last activity: 2 hours ago</span>
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
          })}
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
