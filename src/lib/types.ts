export interface ShopItem extends Record<string, unknown> {
  id: string;
  name: string;
  address: string;
  station_name?: string;
  open: string;
  close: string;
  access?: string;
  urls: {
    pc: string;
    mobile?: string;
  };
  catch: string;
  logo_image?: string;
}