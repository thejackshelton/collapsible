import {
  component$,
  type QwikIntrinsicElements,
  Slot,
  useContextProvider,
  useId,
  useSignal,
} from "@builder.io/qwik";
import { type AccordionItemContext } from "./accordion-context.type";
import { accordionItemContextId } from "./accordion-context-id";

export type AccordionItemProps = {
  defaultValue?: boolean;
} & QwikIntrinsicElements["div"];

export const AccordionItem = component$(
  ({ defaultValue = false, id, ...props }) => {
    const isItemOpenSig = useSignal<boolean>(defaultValue);
    const localId = useId();
    const itemId = id || localId;

    const itemContext: AccordionItemContext = {
      isItemOpenSig,
      itemId,
      defaultValue,
    };

    useContextProvider(accordionItemContextId, itemContext);

    return (
      <div {...props}>
        <Slot />
      </div>
    );
  }
);
