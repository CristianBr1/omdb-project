// src/hooks/useLocalStorage.js
import { useState, useEffect } from "react";

// chave -> string usada no localStorage
// valorInicial -> estado default
export function useLocalStorage(key, valorInicial) {
  const [valor, setValor] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : valorInicial;
    } catch (error) {
      console.error("Erro ao carregar do localStorage", error);
      return valorInicial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(valor));
    } catch (error) {
      console.error("Erro ao salvar no localStorage", error);
    }
  }, [key, valor]);

  return [valor, setValor];
}
