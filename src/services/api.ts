export interface ICategories {
  name: string;
}
export interface IStores {
  id: number;
  name: string;
  categories: string;
  img: string;
  distance: string;
  evaluation: number;
  delivery_price: string;
  delivery_time: string;
}
export interface IBanners {
  id: number;
  banner_img_url: string;
}
interface IApi {
  stores: IStores[];
  categories: ICategories[];
  banners: IBanners[];
}
export const api: IApi = {
  stores: [
    {
      id: 1,
      name: 'Restaurante Fogueira',
      categories: 'restaurante',
      img: 'https://i.ibb.co/BjDLyWy/brasileira.png',
      distance: '2Km',
      evaluation: 3.5,
      delivery_price: '5,00',
      delivery_time: '40 a 60 min',
    },
    {
      id: 2,
      name: 'Restaurante Tudo De Bom',
      categories: 'restaurante',
      img: 'https://i.ibb.co/8rS5n8L/marmita.png',
      distance: '5Km',
      evaluation: 4.8,
      delivery_price: '10,00',
      delivery_time: '80 a 100 min',
    },
    {
      id: 3,
      name: 'Disk Bebidas JF',
      categories: 'bebida',
      img: 'https://i.ibb.co/BjDLyWy/brasileira.png',
      distance: '2.2Km',
      evaluation: 4.7,
      delivery_price: '5,00',
      delivery_time: '40 a 80 min',
    },
    {
      id: 4,
      name: 'Mercado da Ju',
      categories: 'mercado',
      img: 'https://i.ibb.co/8rS5n8L/marmita.png',
      distance: '1.2Km',
      evaluation: 4.8,
      delivery_price: 'free',
      delivery_time: '20 a 40 min',
    },
    {
      id: 5,
      name: 'Brasador',
      categories: 'restaurante',
      img: 'https://i.ibb.co/BjDLyWy/brasileira.png',
      distance: '8Km',
      evaluation: 3.8,
      delivery_price: '6,00',
      delivery_time: '40 a 80 min',
    },
    {
      id: 6,
      name: 'SOS Bebidas',
      categories: 'bebida',
      img: 'https://i.ibb.co/8rS5n8L/marmita.png',
      distance: '2Km',
      evaluation: 4,
      delivery_price: '4,00',
      delivery_time: '30 a 50 min',
    },
    {
      id: 7,
      name: 'Restaurante Delicias Da Casa',
      categories: 'restaurante',
      img: 'https://i.ibb.co/BjDLyWy/brasileira.png',
      distance: '2.5Km',
      evaluation: 4.5,
      delivery_price: '6,00',
      delivery_time: '40 a 60 min',
    },
    {
      id: 8,
      name: 'Restaurante Delicias Da Casa',
      categories: 'restaurante',
      img: 'https://i.ibb.co/BjDLyWy/brasileira.png',
      distance: '2.5Km',
      evaluation: 4.5,
      delivery_price: '6,00',
      delivery_time: '40 a 60 min',
    },
    {
      id: 9,
      name: 'Restaurante Canã',
      categories: 'restaurante',
      img: 'https://i.ibb.co/BjDLyWy/brasileira.png',
      distance: '1Km',
      evaluation: 4.1,
      delivery_price: '2,00',
      delivery_time: '10 a 20 min',
    },
    {
      id: 10,
      name: 'Drogaria Santa Cruz',
      categories: 'farmácia',
      img: 'https://i.ibb.co/BjDLyWy/brasileira.png',
      distance: '3.5Km',
      evaluation: 4.9,
      delivery_price: '5,00',
      delivery_time: '20 a 40 min',
    },
  ],
  categories: [
    { name: 'restaurante' },
    { name: 'mercado' },
    { name: 'bebida' },
    { name: 'farmácia' },
    { name: 'express' },
  ],
  banners: [
    {
      id: 1,
      banner_img_url: 'https://i.ibb.co/LCnrwb0/banner1.png',
    },
    {
      id: 2,
      banner_img_url: 'https://i.ibb.co/6ZYYXvd/banner2.png',
    },
    {
      id: 3,
      banner_img_url: 'https://i.ibb.co/LCnrwb0/banner1.png',
    },
    {
      id: 4,
      banner_img_url: 'https://i.ibb.co/6ZYYXvd/banner2.png',
    },
    {
      id: 5,
      banner_img_url: 'https://i.ibb.co/LCnrwb0/banner1.png',
    },
  ],
};
