import ResultPanel from "@/components/custom/results/ResultPanel";
import SearchPanel from "@/components/custom/search/SearchPanel";

export default async function Home({ searchParams }: { 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> 
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#F9F5EB] dark:bg-gray-900 items-stretch align-middle">
      <div className="basis-1/3">
          <SearchPanel />
      </div>
      <div className="basis-1/3 md:basis-2/3">
          <ResultPanel searchParams={searchParams}/>
      </div>
    </div>
  )
}