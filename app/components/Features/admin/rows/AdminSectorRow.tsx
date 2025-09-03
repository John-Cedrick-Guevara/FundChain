import { Button } from "@/app/components/ui/button";
import { TableRow, TableCell } from "@/app/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {  Edit, Trash2 } from "lucide-react";
import React from "react";


interface SectorRowProps {
name: string
description: string
projectCount: number
}

const AdminSectorRow = ({sector} : {sector:SectorRowProps}) => {
  return (
    <TableRow >
      <TableCell className="font-medium">{sector.name}</TableCell>
      <TableCell className="max-w-md truncate">{sector.description}</TableCell>
      <TableCell>
        <Badge variant="secondary">{sector.projectCount}</Badge>
      </TableCell>
      <TableCell>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Edit className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-red-500 hover:text-red-600"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default AdminSectorRow;
