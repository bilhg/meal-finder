import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { JSX } from "react";

interface SearchButtonProps {
    buttonStyle?: string,
    buttonText: string,
    buttonIcon?: JSX.Element | null
}

export default function SearchButton({ buttonStyle, buttonText, buttonIcon }: SearchButtonProps) {
    const basicStyle = 'w-full transition-colors duration-200 rounded-md py-3'
    const buttonClass = clsx(
        buttonStyle ? buttonStyle : "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100",
        basicStyle
      );

    return (
        <Button className={buttonClass}>
            {
                buttonIcon ? buttonIcon : ''
            }
            {buttonText}
        </Button>
    )
}