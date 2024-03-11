import Advisors from "@/components/pages/team/Advisors";
import TeamMembers from "@/components/pages/team/TeamMembers";

export default function Team() {
  return (
    <main className="overflow-hidden">
      <TeamMembers />
      <Advisors />
    </main>
  );
}
