import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Collapsible } from "~/components/collapsible/collapsible";
import { CollapsibleContent } from "~/components/collapsible/collapsible-content";
import { CollapsibleTrigger } from "~/components/collapsible/collapsible-trigger";
import "../components/collapsible/collapsible.css";

export default component$(() => {
  const openSig = useSignal<boolean>(true);

  return (
    <div style={{ height: "1000px" }}>
      <h2>Collapsible</h2>
      <Collapsible bind:isOpen={openSig}>
        <CollapsibleTrigger>I am trigger 1!</CollapsibleTrigger>
        <CollapsibleContent class="animation">
          I am the content 1!
        </CollapsibleContent>
      </Collapsible>

      <button
        onClick$={() => {
          openSig.value = !openSig.value;
        }}
      >
        Programmatic toggle
      </button>

      <Collapsible>
        <CollapsibleTrigger>Without animation</CollapsibleTrigger>
        <CollapsibleContent>I am the content 2!</CollapsibleContent>
      </Collapsible>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
