import { createContext, useState } from "react";
import { useTranslation } from "react-i18next";
export const PageContext = createContext({});
export function PageContextProvider({ children }) {
  const { t } = useTranslation();
  const [selectedPage, setSelectedPage] = useState(t("nav.home"));
  return (
    <PageContext.Provider value={{ selectedPage, setSelectedPage }}>
      {children}
    </PageContext.Provider>
  );
}
