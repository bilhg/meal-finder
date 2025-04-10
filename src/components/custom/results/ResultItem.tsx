import { ShopItem } from "@/lib/types";
import Image from "next/image";
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

export default function ResultItem(item: ShopItem) {
    const { name, address, station_name, open, close, access, logo_image } = item

    return (
        <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow mb-1.5">
              <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{address}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center">
                    {logo_image ? <Image 
                                    src={logo_image} 
                                    alt="Company logo" 
                                    width={32}
                                    height={32}
                                    className="w-8 h-8 rounded-full object-cover mr-3"
                                />
                                : <div className="w-8 h-8 rounded-full bg-[#dbc1c1] overflow-hidden mr-3" />}                
                    <div>
                        <p className="text-sm font-medium">最寄り駅： {station_name}</p>
                        <p className="text-xs font-medium text-balance">{open}</p>
                        <p className="text-xs font-medium">{close}</p>
                        <p className="text-xs text-[#757575]"></p>
                    </div>
                </div>
                </CardContent>
                <CardFooter>
                    <p className="text-xs font-medium text-balance">{access}</p>
                </CardFooter>
        </Card>
    )
}