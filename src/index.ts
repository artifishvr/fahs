import { inspect } from "./inspect";
import { info, warn, error, success } from "./prettyprint";

inspect([1, 2, 3]);
inspect({ a: 1, b: 2, c: 3 });
inspect("Hello, world!");
inspect(42);
inspect(null);
inspect(true);

warn("Watch out, world!");
error("Help, world!");
success("Hooray, world!");
info("Hello, world!");

info("Hello, world!", "Label");
info("Hello, world!", { label: "Label", timestamp: false });
info("Hello, world!", false);

export { inspect };
