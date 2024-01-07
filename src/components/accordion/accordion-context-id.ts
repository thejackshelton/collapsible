import { createContextId } from "@builder.io/qwik";
import {
  type AccordionContext,
  type AccordionItemContext,
} from "./accordion-context.type";

export const accordionContextId =
  createContextId<AccordionContext>("accordion-root");

export const accordionItemContextId =
  createContextId<AccordionItemContext>("accordion-item");
