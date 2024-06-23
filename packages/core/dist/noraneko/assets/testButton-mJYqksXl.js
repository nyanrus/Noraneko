import { r as render, c as createComponent, a as createSignal, b as createElement, d as createTextNode, i as insertNode, s as setProp, e as insert } from "../index.js";
function Counter() {
  const [count, setCount] = createSignal(0);
  setInterval(() => setCount(count() + 1), 1e3);
  return (() => {
    var _el$ = createElement("div"), _el$2 = createTextNode(`Count: `);
    insertNode(_el$, _el$2);
    setProp(_el$, "style", "font-size:30px");
    setProp(_el$, "onClick", () => {
      window.alert("click!");
    });
    insert(_el$, count, null);
    return _el$;
  })();
}
render(() => createComponent(Counter, {}), document.getElementById("browser"));
//# sourceMappingURL=testButton-mJYqksXl.js.map
