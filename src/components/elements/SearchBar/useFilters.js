import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";

export const useFilters = (callback, wait) => {
  const [filters, setFilters] = useState({
    searchTerm: "",
    minYear: "",
    maxYear: "",
  });

  const debouncedCallback = useCallback(
    debounce((v) => callback(v), wait),
    [callback]
  );

  useEffect(() => {
    debouncedCallback(filters);
  }, [filters]);

  return {
    filters,
    onChange: useCallback((event) => {
      event.persist();
      setFilters((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    }),
  };
};
