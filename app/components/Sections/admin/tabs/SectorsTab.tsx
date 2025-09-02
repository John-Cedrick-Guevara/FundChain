import TableList from "@/app/components/Common/TableUI";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/app/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Input } from "@/app/components/ui/input";
import { mockSectors } from "@/lib/data";

import { Settings, Plus } from "lucide-react";
import React from "react";
import AdminSectorRow from "../rows/AdminSectorRow";

const SectorsTab = () => {
  return (
    <Card className="card-glow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Settings className="w-5 h-5" />
            <span>Sector Management</span>
          </CardTitle>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="cyber">
                <Plus className="w-4 h-4 mr-2" />
                Add Sector
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Sector</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Sector Name</label>
                  <Input placeholder="Enter sector name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Description</label>
                  <Input placeholder="Enter description" />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Cancel</Button>
                  <Button variant="hero">Create Sector</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent>
        <TableList
          items={mockSectors}
          tableHeads={["Name", "Description", "Projects", "Actions"]}
          tableRow={function (item: any, index: number) {
            return <AdminSectorRow sector={item} key={index} />;
          }}
        />
      </CardContent>
    </Card>
  );
};

export default SectorsTab;
