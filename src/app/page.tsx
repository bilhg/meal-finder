import ResultPanel from "@/components/custom/results/ResultPanel";
import SearchPanel from "@/components/custom/search/SearchPanel";
import ResultSkeleton from "@/components/custom/results/Skeleton";
import { Suspense } from "react";

export default async function Home({ searchParams }: { 
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <main className="flex flex-col md:flex-row min-h-screen bg-[#F9F5EB] dark:bg-gray-900">
      <div className="w-full md:basis-1/3">
          <SearchPanel />
      </div>
      <div className="w-full md:basis-2/3">
        <Suspense fallback={<ResultSkeleton />}>
          <ResultPanel searchParams={searchParams}/>
        </Suspense>
      </div>
    </main>
  )
}