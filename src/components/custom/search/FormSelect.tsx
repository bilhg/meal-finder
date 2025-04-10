import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SearchFormType } from "@/lib/schema"
import { JSX } from "react"
import { Control } from "react-hook-form"

interface FormSelectProps {
    label: string,
    placeholder: string,
    icon: React.ReactElement | null,
    options: SelectOption[],
    control: Control<SearchFormType>,
    name: keyof SearchFormType,
}

interface SelectOption {
    text: string,
    value: string,
    icon?: JSX.Element,
}

export default function FormSelect({
    label,
    icon,
    options,
    placeholder,
    name,
    control,
        }: FormSelectProps) {
    return (
        <FormField
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {
                    icon ? <span>{icon}</span> : ""
                }
                {label}
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full" >
                    <SelectValue placeholder={placeholder}/>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {
                        options.map((item, index) => (
                            <SelectItem key={index} value={item.value}>
                                {item.icon ? item.icon : ''} {item.text} 
                            </SelectItem>
                        ))
                    }
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
    )
}