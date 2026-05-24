"use client";

import { HeroSearchFormView } from "../view/hero-search-form.view";

export function HeroSearchFormController() {
  async function handleSearch() {
  }
  
  return (
    <HeroSearchFormView handleSearch={handleSearch} />
  );
}
