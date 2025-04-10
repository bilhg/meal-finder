import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { HTMLInputTypeAttribute, JSX } from "react";
import { Control } from "react-hook-form"
import { SearchFormType } from "@/lib/schema";

interface FormInputProps {
    label: string,
    type?: HTMLInputTypeAttribute,
    placeholder: string,
    icon?: JSX.Element,
    name: keyof SearchFormType,
    control: Control<SearchFormType>,
}

export default function FormInput( { label, name, type = "text", placeholder, control, icon }: FormInputProps) {
    return (
        <>
            <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <>
                <FormItem>
                    <FormLabel>
                        { icon ? <span>{icon}</span> : <></> }
                        {label} 
                    </FormLabel>
                    <FormControl>
                    <Input type={type} placeholder={placeholder} {...field} />
                    </FormControl>
                </FormItem>
                </>
            )}
            />
      </>
    )
}