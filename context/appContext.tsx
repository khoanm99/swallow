import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { useRouter } from 'next/router';

interface ISiteContext {
    lang: string;
    isMenuOpen: boolean;
    readonly setLocale: (locale: string) => void;
    readonly setMenuOpen: (val:boolean) => void;

};

const siteContextDefaultValues: ISiteContext = {
    lang: 'de',
    isMenuOpen: false,
    setLocale: () => null,
    setMenuOpen: () => null,
};

const SiteContext = createContext<ISiteContext>(siteContextDefaultValues);


export function useSiteContext() {
    return useContext(SiteContext);
}

type Props = {
    children: ReactNode;
};

export function SiteProvider({ children }: Props) {

    const router = useRouter();
    const [lang, setLocale] = useState<string>('de');
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);


    useEffect(() => {
        if (router.isReady && router.locale) {
            setLocale(router.locale);
        }
    }, [router.locale]);

    useEffect(() => {
        (async () => {
          if(!window || !window.localStorage) return;

          if (router.isReady && router.locale) {
            localStorage.setItem('vs-locale', router.locale ); 
          }
          
        })();
    }, [router.locale]);

 
    const value = {
        lang,
        isMenuOpen,
        setLocale,
        setMenuOpen,
    };


    return (
          <SiteContext.Provider value={value}>
              {children}
          </SiteContext.Provider>
    );
}
