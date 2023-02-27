import React, { useState, useCallback } from "react";
import FontAwesome from "react-fontawesome";
import "./SearchBar.css";

import { debounce } from "lodash";
import { useFilters } from "./useFilters";

export default function SearchBar({ callback, wait = 500 }) {
  const { filters, onChange } = useFilters(callback, wait);

  return (
    <div className="rmdb-searchbar">
      <div className="rmdb-searchbar-content">
        <FontAwesome className="rmdb-fa-search" name="search" size="2x" />
        <input
          type="text"
          className="rmdb-searchbar-input"
          placeholder="Search"
          onChange={onChange}
          value={filters.searchTerm}
          name="searchTerm"
        />
      </div>

      <div className="rmdb-searchbar-content">
        <FontAwesome className="rmdb-fa-search" name="search" size="2x" />
        <input
          type="text"
          className="rmdb-searchbar-input"
          placeholder="Min Year"
          onChange={onChange}
          value={filters.minYear}
          name="minYear"
        />
      </div>
      <div className="rmdb-searchbar-content">
        <FontAwesome className="rmdb-fa-search" name="search" size="2x" />
        <input
          type="text"
          className="rmdb-searchbar-input"
          placeholder="Max Year"
          onChange={onChange}
          value={filters.maxYear}
          name="maxYear"
        />
      </div>
    </div>
  );
}
