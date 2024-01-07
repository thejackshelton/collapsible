import {
  component$,
  type QwikIntrinsicElements,
  Slot,
  useContextProvider,
  useSignal,
} from "@builder.io/qwik";
import { type AccordionContext } from "./accordion-context.type";
import { accordionContextId } from "./accordion-context-id";

export type AccordionProps = QwikIntrinsicElements["div"] & {
  behavior?: "single" | "multi";
};

export const Accordion = component$(
  ({ behavior = "single", ...props }: AccordionProps) => {
    const selectedTriggerIdSig = useSignal<string | null>(null);

    const context: AccordionContext = {
      behavior,
      selectedTriggerIdSig,
    };

    useContextProvider(accordionContextId, context);

    return (
      <div {...props}>
        <Slot />
      </div>
    );
  }
);
