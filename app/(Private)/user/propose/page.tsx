import ProposalForm from "@/app/components/Features/ProjectProposalForm/ProposalForm";
import { fetcher } from "@/lib/db/supabaseFetcher";
import { Suspense } from "react";

const page = async () => {
  const sectors = await fetcher("Sectors");
  console.log(sectors);
  return (
    <>
      <Suspense fallback={<>wait</>}>
        <ProposalForm sectors={sectors} />
      </Suspense>
    </>
  );
};

export default page;
