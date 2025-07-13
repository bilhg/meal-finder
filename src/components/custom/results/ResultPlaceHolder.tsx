import Image from "next/image"
import { ChefHat } from "lucide-react";

const images = [
    "/images/food/food1.jpg",
    "/images/food/food2.jpg",
    "/images/food/food3.jpg",
    "/images/food/food4.jpg",
    "/images/food/food5.jpg",
    "/images/food/food6.jpg",
    "/images/food/food7.jpg",
    "/images/food/food8.jpg",
    "/images/food/food9.jpg",
];

export default function ResultPlaceHolder() {
    const shuffledImages = [...images].sort(() => Math.random() - 0.5).slice(0, 6)

    return (
        <div className="flex flex-col items-center justify-center h-full text-center p-4">
            <ChefHat size={64} className="text-gray-300 dark:text-gray-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">Find Your Perfect Meal</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2 mb-8">Select your criteria and click search to see delicious results.</p>
            
            <div className="w-full max-w-4xl">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {shuffledImages.map((url, index) => (
                        <div key={index} className="relative aspect-video overflow-hidden rounded-lg shadow-md">
                            <Image
                                src={url}
                                alt={`food-placeholder-${index}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 50vw, 33vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}