import { type Signal } from "@builder.io/qwik";

export interface AccordionContext {
  behavior: "single" | "multi";
  selectedTriggerIdSig: Signal<string | null>;
}

export interface AccordionItemContext {
  isItemOpenSig: Signal<boolean>;
  itemId: string;
  defaultValue: boolean;
}
