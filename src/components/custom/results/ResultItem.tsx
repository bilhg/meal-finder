import { ShopItem } from "@/lib/types";
import Image from "next/image";
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ResultActionButtons } from "./ResultActionButtons";
import { Building, Clock, MapPin, Train } from "lucide-react";

export default function ResultItem(item: ShopItem) {
    const { name, address, station_name, open, access, logo_image, urls } = item

    return (
        <Card className="shadow-lg hover:shadow-xl py-0 transition-all duration-300 mb-6 rounded-xl bg-transparent transform hover:-translate-y-1">
            <CardHeader className="p-4 bg-gray-50 dark:bg-gray-800 rounded-t-xl">
                <div className="flex items-center gap-4">
                    {logo_image ? (
                        <Image 
                            src={logo_image} 
                            alt={`${name} logo`}
                            width={64}
                            height={64}
                            className="w-16 h-16 rounded-lg object-cover border-2 border-white shadow-md"
                        />
                    ) : (
                        <div className="w-16 h-16 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center border-2 border-white shadow-md">
                            <Building className="w-8 h-8 text-gray-400" />
                        </div>
                    )}
                    <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-100">{name}</CardTitle>
                        <CardDescription className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                            <MapPin className="w-4 h-4" />
                            <span>{address}</span>
                        </CardDescription>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-4 space-y-3 bg-white dark:bg-gray-800/50">
                <div className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <Train className="w-5 h-5 text-blue-500" />
                        <span className="font-medium">最寄り駅:</span>
                    </div>
                    <span className="text-left">{station_name}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex items-center gap-2 flex-shrink-0">
                        <Clock className="w-5 h-5 text-blue-500" />
                        <span className="font-medium">営業時間:</span>
                    </div>
                    <span className="text-left">{open}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 border-l-4 border-gray-200 dark:border-gray-600 pl-3">{access}</p>
            </CardContent>
            <CardFooter className="bg-gray-50 dark:bg-gray-800 p-3 flex justify-end rounded-b-xl">
                <ResultActionButtons link={urls.pc} size={"default"} />
            </CardFooter>
        </Card>
    )
}