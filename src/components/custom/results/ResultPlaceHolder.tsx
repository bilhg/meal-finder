import Image from "next/image"

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
]

export default function ResultPlaceHolder() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full overflow-hidden">
        {images.map((url, index) => (
          <div key={index} className="relative aspect-square overflow-hidden border-2 rounded-md">
            <Image
              src={url}
              alt={`food-${index}`}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>
        ))}
      </div>
    )
}