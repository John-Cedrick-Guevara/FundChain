import TableList from "@/app/components/Common/TableUI";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { mockUsers } from "@/lib/data";
import { Users } from "lucide-react";
import React from "react";
import AdminUserRow from "../rows/AdminUserRow";

const UserTab = () => {
  return (
    <Card className="card-glow">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Users className="w-5 h-5" />
          <span>User Management</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <TableList
          items={mockUsers}
          tableHeads={[
            "Name",
            "Email",
            "Role",
            "Status",
            "Join Date",
            "Actions",
          ]}
          tableRow={function (item: any, index: number) {
            return <AdminUserRow user={item} key={index} />;
          }}
        />
      </CardContent>
    </Card>
  );
};

export default UserTab;
