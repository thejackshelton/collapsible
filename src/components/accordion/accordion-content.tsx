import { Slot, component$, useContext } from "@builder.io/qwik";
import { accordionItemContextId } from "./accordion-context-id";

export const AccordionContent = component$(() => {
  const itemContext = useContext(accordionItemContextId);

  return (
    <div hidden={!itemContext.isItemOpenSig.value}>
      <Slot />
    </div>
  );
});
