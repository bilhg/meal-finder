import { Skeleton } from "@/components/ui/skeleton";

export default function ResultSkeleton() {
    return (
        <>
            <div className="border border-[#e3e3e3] rounded-lg p-4 bg-white m-3">
                <Skeleton className="h-6 w-[250px] mb-2" />
                <div className="flex items-center">
                        <Skeleton className="h-8 w-8 mr-3 rounded-full" />
                    <div>
                        <Skeleton className="h-4 w-[250px] mb-2" />
                        <Skeleton className="h-4 w-[200px]" />
                    </div>
                </div>
            </div>
            <div className="border border-[#e3e3e3] rounded-lg p-4 bg-white m-3">
            <Skeleton className="h-6 w-[250px] mb-2" />
            <div className="flex items-center">
                    <Skeleton className="h-8 w-8 mr-3 rounded-full" />
                <div>
                    <Skeleton className="h-4 w-[250px] mb-2" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        </div>
        <div className="border border-[#e3e3e3] rounded-lg p-4 bg-white m-3">
            <Skeleton className="h-6 w-[250px] mb-2" />
            <div className="flex items-center">
                    <Skeleton className="h-8 w-8 mr-3 rounded-full" />
                <div>
                    <Skeleton className="h-4 w-[250px] mb-2" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        </div>
        <div className="border border-[#e3e3e3] rounded-lg p-4 bg-white m-3">
            <Skeleton className="h-6 w-[250px] mb-2" />
            <div className="flex items-center">
                    <Skeleton className="h-8 w-8 mr-3 rounded-full" />
                <div>
                    <Skeleton className="h-4 w-[250px] mb-2" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        </div>
        <div className="border border-[#e3e3e3] rounded-lg p-4 bg-white m-3">
            <Skeleton className="h-6 w-[250px] mb-2" />
            <div className="flex items-center">
                    <Skeleton className="h-8 w-8 mr-3 rounded-full" />
                <div>
                    <Skeleton className="h-4 w-[250px] mb-2" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        </div>
        </>
    )
}