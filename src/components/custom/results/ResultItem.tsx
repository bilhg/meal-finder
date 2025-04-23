import { ShopItem } from "@/lib/types";
import Image from "next/image";
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { ResultActionButtons } from "./ResultActionButtons";

export default function ResultItem(item: ShopItem) {
    const { name, address, station_name, open, close, access, logo_image, urls } = item

    return (
        <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow mb-4 rounded-xl">
              <CardHeader className="space-y-1">
              <div className="items-start gap-2">
                    <div>
                        <CardTitle className="text-lg font-semibold">{name}</CardTitle>
                        <CardDescription className="text-xs text-gray-500">{address}</CardDescription>
                    </div>
                </div>
                </CardHeader>
                <CardContent>
                    <div className="flex items-start gap-4">
                    {logo_image ? <Image 
                                    src={logo_image} 
                                    alt="Company logo" 
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full object-cover border shadow-sm"
                                />
                                : <div className="w-10 h-10 rounded-full bg-gray-200" />}                
                <div className="space-y-1 text-sm text-gray-800">
                        <p>
                        <span className="font-medium text-gray-600">最寄り駅：</span>
                        {station_name}
                        </p>
                        <p className="text-xs text-gray-700">open：{open}</p>
                        <p className="text-xs text-gray-700">close：{close}</p>
                        <p className="text-xs text-gray-500">{access}</p>
                    </div>
                </div>
                </CardContent>
                <CardFooter className="border-t">
                    <ResultActionButtons link={urls.pc} size={"small"} />
                </CardFooter>
        </Card>
    )
}