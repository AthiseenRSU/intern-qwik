import { component$, useSignal, useStore, $ } from "@builder.io/qwik";
import { css } from "~/styled-system/css";

export default component$(() => {
  const counter = useSignal(0);
  const clickStore = useStore({
    increment: $(() => {
      counter.value++;
    }),
    decrement: $(() => {
      counter.value--;
    }),
  });

  return (
    <>
      <div
        class={css({
          bg: "tomato",
        })}
      >
        <button onClick$={clickStore.decrement}>-</button>
        <span>{counter.value}</span>
        <button onClick$={clickStore.increment}>+</button>
      </div>
    </>
  );
});
