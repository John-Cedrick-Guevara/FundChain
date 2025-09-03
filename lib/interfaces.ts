import { ElementType } from "react";

export interface GetIndicatorStyle {
  width: number;
  left: number;
  name?: string;
}

export interface Sector {
  id: string;
  name: string;
}

// A vote record (expand with more fields if needed later)
export interface Votes {
  id: string;
  userId: string;
}
export interface Funds {
  id: string;
  amount: number;
}

export interface Project {
  votes: Votes[]; // exact: capital V
  created_at: string; // exact: underscore
  description: string;
  funds: Funds[];
  id: string;
  name: string;
  sector: Sector;
  status: string; // kept generic to avoid mismatch
  targetFunds: number; // exact: camelCase with F
  userId: User; // exact: key name, value is an object
}

export interface SectorReturn {
  id: string;
  description: string;
  name: string;
  funds: Funds[];
  projects: { id: string; name: string, targetFunds: number }[];
  votes: {id: string}[];
}

export interface DropDownProps {
  value: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
}

export interface User {
  name: string;
  id: string;
  email: string;
  role: "admin" | "user";
}
