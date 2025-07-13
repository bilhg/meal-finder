import { ShopItem } from "./types";

interface FetchShopDataResult {
  data: ShopItem[] | null;
  error: string | null;
}

export async function fetchShopData(params: {
  genre?: string | string[] | undefined;
  budget?: string | string[] | undefined;
  keyword?: string | string[] | undefined;
}): Promise<FetchShopDataResult> {
  const { genre, budget, keyword } = params

  if (!genre || !budget) {
    return { data: null, error: "Genre and budget are required search parameters." };
  }

  const apiKey = process.env.HOTPEPPER_API_KEY || "";

  if (!apiKey) {
    return { data: null, error: "Invalid API KEY" };
  }

  const url = new URL("https://webservice.recruit.co.jp/hotpepper/gourmet/v1/");
  url.searchParams.set("key", apiKey);
  url.searchParams.set("format", "json");
  url.searchParams.set("genre", genre as string); 
  url.searchParams.set("budget", budget as string);
  url.searchParams.set("keyword", keyword as string);
  url.searchParams.set("large_area", "Z011"); // Tokyo

  try {
    const res = await fetch(url.toString(), {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      let errorMessage = `Failed to fetch from Hotpepper: ${res.status}`;
      try {
        const errorData = await res.json();
        console.error("Hotpepper API Error:", res.status, errorData);
        errorMessage += ` - ${errorData?.error?.message || res.statusText}`;
      } catch (e) {
        console.error("Error parsing Hotpepper error response:", e);
        errorMessage += ` - ${res.statusText}`;
      }
      return { data: null, error: errorMessage };
    }

    const json = await res.json();
    const results = json.results;
    return { data: results?.shop || [], error: null };

  } catch (error: unknown) {
    console.error("Error fetching from Hotpepper:", error);
  
    let message = "Unknown error occurred";
  
    if (error instanceof Error) {
      message = error.message;
    }
  
    return {
      data: null,
      error: `Error fetching from Hotpepper: ${message}`,
    };
  }
}