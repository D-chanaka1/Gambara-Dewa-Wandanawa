"use client";

import { createContext, useContext } from "react";

export type Lang = "sinhala" | "stotram";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export const LangContext = createContext<LangContextValue>({
  lang: "sinhala",
  setLang: () => {},
});

export function useLang(): LangContextValue {
  return useContext(LangContext);
}
