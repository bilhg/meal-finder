import { Suspense } from "react";
import { ShopItem } from "@/lib/types";
import ResultSkeleton from "./Skeleton";
import ResultItem from "./ResultItem";
import ResultPlaceHolder from "./ResultPlaceHolder";
import { fetchShopData } from "@/lib/action";

export default async function ResultPanel({ searchParams }: { 
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  }) {    
    const params = await searchParams;
    const genre = params?.genre;
    const budget = params?.budget;

    let shop: ShopItem[] | null = null;
    let error: string | null = null;
  
    if (genre && budget) {
      const result = await fetchShopData(params);
      shop = result.data;
      error = result.error;
    } else {
      shop = null; 
      error = null; 
    }

    if (error) {
      return (
        <div className="p-4 md:p-8 px-2 md:px-4">
          <div className="w-full">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-[95vh] md:h-[85vh] flex items-center justify-center text-red-500">
              Error: {error}
            </div>
          </div>
        </div>
      );
    }

    return (
        <div className="p-4 md:p-8 px-2 md:px-4">
            <div className="w-full">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-[95vh] md:h-[85vh]">
                    {
                        shop ? <>
                        <h1 className="font-bold text-2xl underline mb-2">Results</h1> 
                            <Suspense fallback={<ResultSkeleton />}>
                                    <div className="overflow-y-auto h-11/12 px-4 py-6">
                                        {
                                            shop?.length == 0 ? <div>No Result</div>
                                                              : shop?.map((item: ShopItem, index: number) => {
                                                                return (
                                                                    <ResultItem key={index} {...item}/>
                                                                )
                                                            })
                                        }
                                    </div>
                            </Suspense>
                         </>
                          : <ResultPlaceHolder /> 
                    }
                </div>
            </div>
        </div>
    )
}