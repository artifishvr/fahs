import chalk from "chalk";

export function inspect(variable: any) {
  // We make an error to get the stack trace
  const stack = new Error().stack;
  const callerLine = stack?.split("\n")[2];

  const match = /\((.*):(\d+):\d+\)/.exec(callerLine);
  const filePath = match?.[1] || "unknown location";
  const lineNumber = match?.[2] || "?";

  let type: any;
  if (Array.isArray(variable)) {
    type = "Array";
  } else if (variable === null) {
    type = "null";
  } else {
    type = typeof variable;
  }

  let formattedValue =
    typeof variable === "object"
      ? JSON.stringify(variable, null, 2) // Pretty print objects with 2 space indentation
      : String(variable);

  console.log(
    chalk.white(
      chalk.dim("Inspecting from ") +
        chalk.gray(`${filePath}:${lineNumber}\n`) +
        chalk.yellow(`Type: ${type}\n`) +
        chalk.green(formattedValue) +
        "\n"
    )
  );
}
