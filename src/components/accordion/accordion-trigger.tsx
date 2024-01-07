import {
  type QwikIntrinsicElements,
  Slot,
  component$,
  sync$,
  useContext,
  useTask$,
  useSignal,
} from "@builder.io/qwik";
import {
  accordionContextId,
  accordionItemContextId,
} from "./accordion-context-id";

export type AccordionTriggerProps = QwikIntrinsicElements["button"];

export const AccordionTrigger = component$((props: AccordionTriggerProps) => {
  const triggerRef = useSignal<HTMLElement>();
  const context = useContext(accordionContextId);
  const itemContext = useContext(accordionItemContextId);
  const triggerId = `${itemContext.itemId}-trigger`;

  useTask$(function resetTriggersTask({ track }) {
    track(() => context.selectedTriggerIdSig.value);

    if (
      context.behavior === "single" &&
      triggerId !== context.selectedTriggerIdSig.value
    ) {
      itemContext.isItemOpenSig.value = false;
    }
  });

  return (
    <button
      ref={triggerRef}
      {...props}
      onClick$={() => {
        context.selectedTriggerIdSig.value = triggerId;
        itemContext.isItemOpenSig.value = !itemContext.isItemOpenSig.value;
      }}
      onKeyDown$={[
        sync$((e: KeyboardEvent) => {
          const keys = [
            "ArrowDown",
            "ArrowUp",
            "PageDown",
            "PageUp",
            "Home",
            "End",
          ];
          if (keys.includes(e.key)) {
            e.preventDefault();
          }
        }),
        props.onKeyDown$,
      ]}
    >
      <Slot />
    </button>
  );
});
