import React, { createContext, useContext, useEffect, useState } from 'react';
import { api, IBanners, ICategories, IStores } from '../services/api';

type AuthContextData = {
  store: IStores[] | undefined;
  categories: ICategories[] | undefined;
  banners: IBanners[] | undefined;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
};

type ApiDataProvaiderProps = {
  children: React.ReactNode;
};

export const ApiDataContext = createContext({} as AuthContextData);

function ApiDataProvaider({ children }: ApiDataProvaiderProps) {
  const [store, setStore] = useState<IStores[]>();
  const [categories, setCategories] = useState<ICategories[]>();
  const [banners, setBanners] = useState<IBanners[]>();
  const [category, setCategory] = useState('restaurante');

  useEffect(() => {
    async function getApi() {
      setStore(api.stores);
      setCategories(api.categories);
      setBanners(api.banners);
    }

    getApi();
  }, []);
  return (
    <ApiDataContext.Provider
      value={{ store, categories, banners, category, setCategory }}
    >
      {children}
    </ApiDataContext.Provider>
  );
}
function apiData() {
  const context = useContext(ApiDataContext);
  return context;
}

export { ApiDataProvaider, apiData };
