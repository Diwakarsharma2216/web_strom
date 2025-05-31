import {getAllCompanions} from "@/lib/actions/companion.actions";
import CompanionCard from "@/components/CompanionCard";
import {getSubjectColor} from "@/lib/utils";
import { headers } from "next/headers";
export const dynamic = "force-dynamic";
const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  
 const headersList = headers();
    const companions = await getAllCompanions();
    

    return (
        <main>
            <section className="flex justify-between gap-4 max-sm:flex-col">
                <h1>Companion Library</h1>
                <div className="flex gap-4">
                    {/* <SearchInput />
                    <SubjectFilter /> */}
                </div>
            </section>
            <section className="companions-grid">
                {companions.map((companion) => (
                    <CompanionCard
                        key={companion.id}
                        {...companion}
                        color={getSubjectColor(companion.subject)}
                    />
                ))}
            </section>
        </main>
    )
}

export default CompanionsLibrary