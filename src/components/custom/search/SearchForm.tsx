'use client'

import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import SearchButton from "./SearchButton";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form } from "@/components/ui/form"
import { SearchFormType, searchSchema } from "@/lib/schema";
import { ChefHat, Coffee, CookingPot, DollarSign, Fish, Forklift, Globe, KeyRound, Pizza, Search, Sparkles, Utensils, Wine } from "lucide-react";
import { ButtonLoading } from "../util/LoadingButton";
import { useState } from "react";
import { useRouter } from "next/navigation";

const genreOptions = [
  { text: "居酒屋", value: "G001", icon: <Utensils /> },
  { text: "ダイニングバー", value: "G002", icon: <Wine /> },
  { text: "創作料理", value: "G003", icon: <Sparkles /> },
  { text: "和食", value: "G004", icon: <Fish /> },
  { text: "洋食", value: "G005", icon: <Forklift /> },
  { text: "イタリア料理", value: "G006", icon: <Pizza /> },
  { text: "中華料理", value: "G007", icon: <Utensils /> },
  { text: "焼肉", value: "G008", icon: <ChefHat /> },
  { text: "韓国料理", value: "G017", icon: <Utensils /> },
  { text: "アジア系料理", value: "G009", icon: <Globe /> },
  { text: "バー", value: "G012", icon: <ChefHat /> },
  { text: "ラーメン", value: "G013", icon: <ChefHat /> },
  { text: "お好み焼き", value: "G016", icon: <ChefHat /> },
  { text: "カフェ", value: "G014", icon: <Coffee /> },
  { text: "その他", value: "G015", icon: <CookingPot /> },
];

const budgetOptions = [
  { text: "～500円", value: "B009" },
  { text: "501～1000円", value: "B010" },
  { text: "1001～1500円", value: "B011" },
  { text: "1501～2000円", value: "B001" },
  { text: "2001～3000円", value: "B002" },
  { text: "3001～4000円", value: "B003" },
  { text: "4001～5000円", value: "B008" },
  { text: "5001～7000円", value: "B004" },
  { text: "7001～10000円", value: "B005" },
];

export default function SearchForm() {
    const { replace } = useRouter();

    const [isLoading, setIsLoading] = useState(false)
    const form = useForm<SearchFormType>({
      resolver: zodResolver(searchSchema),
      defaultValues: {
        genre: "",
        budget: "",
        keyword: "",
      },
    });
    
    const onSubmit = form.handleSubmit((data) => {
      const searchParams = new URLSearchParams(data);
      setIsLoading(prev => !prev)
    
      if (data.genre) {
        searchParams.set("genre", data.genre);
      }

      if (data.budget) {
        searchParams.set("budget", data.budget);
      }

      if (data.keyword) {
        searchParams.set("keyword", data.keyword);
      }
      setTimeout(() => {
        setIsLoading(prev => !prev)
      }, 300);
      replace(`?${searchParams.toString()}`);
    })

    return (
        <Form {...form}>
          <form autoComplete="off" onSubmit={onSubmit} className="space-y-4 px-4 py-6">
            <FormSelect 
                name="genre"
                label="料理ジャンル"
                icon={<ChefHat />}
                placeholder="ジャンルを選択してください"
                control={form.control}
                options={genreOptions}
            />
            <FormSelect 
                name="budget"
                control={form.control}
                label="予算"
                icon={<DollarSign />}
                placeholder="予算を選択してください"
                options={budgetOptions}
            />
            <FormInput 
              name="keyword"
              icon={<KeyRound />}
              placeholder="キーボード(駅、店名...)"
              label="キーボード"
              type="text"
              control={form.control}
            />
              <div className="flex justify-center align-middle gap-2.5">
                  <div className="w-[150px]">
                    { isLoading
                      ? <ButtonLoading />
                      : <SearchButton 
                        buttonStyle="bg-slate-800 dark:bg-white text-white dark:text-gray-900 hover:bg-slate-600 dark:hover:bg-gray-100"
                        buttonText="Search!"
                        buttonIcon={<Search />}
                      />
                    }
                  </div>
              </div>
          </form>
        </Form>
    )
}