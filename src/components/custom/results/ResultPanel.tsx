import { ShopItem } from "@/lib/types";
import ResultItem from "./ResultItem";
import ResultPlaceHolder from "./ResultPlaceHolder";
import { fetchShopData } from "@/lib/action";
import { ListChecks, ServerCrash, SearchX } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default async function ResultPanel(props: { 
    searchParams: { [key: string]: string | string[] | undefined }
  }) {    
    const searchParams = await props.searchParams
    const hasSearchParams = searchParams.genre && searchParams.budget;
    
    if (!hasSearchParams) {
      return (
        <div className="p-4 md:p-8 px-2 md:px-4 h-full">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-full">
            <ResultPlaceHolder />
          </div>
        </div>
      );
    }

    const { data: shop, error } = await fetchShopData(searchParams);

    if (error) {
      return (
        <div className="p-4 md:p-8 px-2 md:px-4 h-full">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-full flex flex-col items-center justify-center text-red-500">
            <ServerCrash size={48} className="mb-4" />
            <h2 className="text-xl font-semibold mb-2">Failed to Load Results</h2>
            <p className="text-center">There was an error fetching data from the server. Please try again later.</p>
            <p className="text-sm text-gray-400 mt-4">Error: {error}</p>
          </div>
        </div>
      );
    }

    if (!shop || shop.length === 0) {
      return (
        <div className="p-4 md:p-8 px-2 md:px-4 h-full">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-full flex flex-col items-center justify-center text-gray-500">
            <SearchX size={48} className="mb-4" />
            <h2 className="text-xl font-semibold">No Results Found</h2>
            <p>Try adjusting your search criteria.</p>
          </div>
        </div>
      );
    }

    return (
        <div className="p-4 md:p-8 px-2 md:px-4 h-full">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-full">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                    <ListChecks className="w-8 h-8 text-blue-500" />
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-800 dark:text-gray-100">
                        Search Results
                    </h1>
                </div>
                <Separator />
              </div>
              <div className="overflow-y-auto max-h-[calc(80vh-25px)] px-4 py-2">
                  {shop.map((item: ShopItem, index: number) => (
                      <ResultItem key={index} {...item}/>
                  ))}
              </div>
            </div>
        </div>
    )
}