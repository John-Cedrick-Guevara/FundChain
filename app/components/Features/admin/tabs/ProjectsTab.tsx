import TableList from "@/app/components/Common/TableUI";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { mockProjects } from "@/lib/data";
import { FolderOpen, Search, Filter } from "lucide-react";
import React from "react";
import AdminProjectRow from "../rows/AdminProjectRow";

const ProjectsTab = () => {
  return (
    <Card className="card-glow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <FolderOpen className="w-5 h-5" />
            <span>Project Management</span>
          </CardTitle>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                // value={searchQuery}
                // onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <TableList
          items={mockProjects}
          tableHeads={[
            "Project",
            "Proposer",
            "Funding",
            "Status",
            "Created",
            "Actions",
          ]}
          tableRow={function (item: any, index: number) {
            return <AdminProjectRow project={item} key={index} />;
          }}
        />
      </CardContent>
    </Card>
  );
};

export default ProjectsTab;
