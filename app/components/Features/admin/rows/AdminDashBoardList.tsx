"use client";
import React from "react";
import {
  Users,
  LucideIcon,
  FolderOpen,
  Settings,
  BarChart3,
} from "lucide-react";
import useSWR from "swr";
import { fetcher } from "@/lib/db/supabaseFetcher";
import { mockProjects, mockUsers } from "@/lib/data";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../ui/tabs";
import AdminStatCard from "../../../Cards/AdminStatCard";

import ProjectsTab from "../tabs/ProjectsTab";
import UserTab from "../tabs/UserTab";
import SectorsTab from "../tabs/SectorsTab";

// sample data
const stats = [
  {
    title: "Total Users",
    value: mockUsers.length,
    change: "+12%",
    icon: Users,
    color: "text-blue-500",
  },
  {
    title: "Active Projects",
    value: mockProjects.filter((p) => p.status === "approved").length,
    change: "+8%",
    icon: FolderOpen,
    color: "text-green-500",
  },
  {
    title: "Total Funding",
    value: 10,
    change: "+23%",
    icon: BarChart3,
    color: "text-purple-500",
  },
  {
    title: "Pending Reviews",
    value: 10,
    change: "-5%",
    icon: Settings,
    color: "text-orange-500",
  },
];

interface StatCardProps {
  title: string;
  value: string;
  subtext: string;
  Icon: LucideIcon;
}

const AdminDashBoardList = () => {
  const { data: projectss, error, mutate } = useSWR("Projects", fetcher);

  // console.log(projectss);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gradient mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage your FundChain platform
          </p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <AdminStatCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              color={stat.color}
              icon={stat.icon}
            />
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="projects" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
              <TabsTrigger
                value="projects"
                className="flex items-center space-x-2"
              >
                <FolderOpen className="w-4 h-4" />
                <span>Projects</span>
              </TabsTrigger>
              <TabsTrigger
                value="users"
                className="flex items-center space-x-2"
              >
                <Users className="w-4 h-4" />
                <span>Users</span>
              </TabsTrigger>
              <TabsTrigger
                value="sectors"
                className="flex items-center space-x-2"
              >
                <Settings className="w-4 h-4" />
                <span>Sectors</span>
              </TabsTrigger>
            </TabsList>

            {/* Projects Management */}
            <TabsContent value="projects" className="space-y-6">
              <ProjectsTab />
            </TabsContent>

            {/* Users Management */}
            <TabsContent value="users" className="space-y-6">
              <UserTab />
            </TabsContent>

            {/* Sectors Management */}
            <TabsContent value="sectors" className="space-y-6">
              <SectorsTab />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashBoardList;
