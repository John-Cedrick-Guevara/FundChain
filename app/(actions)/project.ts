"use server"
import { createClient } from "@/lib/supabase/supabaseServer";
import { ProjectForm } from "../components/Features/ProjectProposalForm/ProposalForm";

export async function submitProposal(formData: ProjectForm, userId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase.from("Projects").insert([
    {
      team_size: formData.teamSize,
      expected_outcome: formData.expectedOutcome,
      potential_risks: formData.risks,
      sector: formData.sectorId,
      targetFunds: formData.requestedAmount,
      description: formData.description,
      name: formData.name,
      userId: userId,
    },
  ]);

  if (error) return { success: false, message: error };
  console.log(error);

  return { success: true, message: "Project submitted." };
}
