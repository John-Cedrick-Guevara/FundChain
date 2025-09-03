import { SectorReturn } from "../interfaces";
import { createBrowserClientSupabase } from "../supabase/supabaseBrowser";
import { createClient } from "../supabase/supabaseServer";

const supabase = createBrowserClientSupabase();

// general fetcher
export const fetcher = async (table: string) => {
  const { data, error } = await supabase.from(table).select("*");

  if (error) throw error;

  return data;
};

// Project sector
export const projectFetcher = async (table: string) => {
  const { data, error } = await supabase.from("Projects")
    .select(`*,     sector(id, name),
        userId(id, name),
        votes:Votes!projectId(id, userId), funds:Funds(id, amount)`);

  if (error) throw error;

  return data;
};

// User fetcher for admin list
export const adminUserFetcher = async () => {
  const { data: users, error } = await supabase
    .from("Users")
    .select(
      "id, name, email, status,Projects(id, name), Funds(id),  Votes!userId(id, userId)"
    )
    .eq("role", "user");

  if (error) throw error;

  return users;
};

// User fetcher for admin list
export const adminSectorFetcher = async () => {
  const { data: users, error } = await supabase
    .from("Sectors")
    .select("*, Projects(name), Votes(id)");

  if (error) throw error;

  return users;
};

// users fetcher for sectors
export async function sectorFetcher(): Promise<SectorReturn[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("Sectors")
    .select(
      "id, name, description, projects:Projects(id, name, targetFunds),votes:Votes(id), funds:Funds(id,amount,projectId) "
    );

  if (error) {
    console.error("Error fetching projects:", error);
  }

  return data ?? [];
}
