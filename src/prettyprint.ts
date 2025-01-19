import chalk from "chalk";

const timestampGen = () =>
  chalk.magenta(
    `[${new Date().toLocaleString("en-US", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })}]`
  ) + " ";

interface InfoOptions {
  label?: string;
  timestamp?: boolean;
}

type MessageOptions = string | boolean | InfoOptions;

function parseOptions(labelOrOptions?: MessageOptions): {
  label: string;
  showTimestamp: boolean;
} {
  let label = "";
  let showTimestamp = true;

  if (typeof labelOrOptions === "string") {
    label = labelOrOptions;
  } else if (typeof labelOrOptions === "boolean") {
    showTimestamp = labelOrOptions;
  } else if (labelOrOptions) {
    label = labelOrOptions.label || "";
    showTimestamp = labelOrOptions.timestamp !== false;
  }

  return { label, showTimestamp };
}

export function info(message: string, labelOrOptions?: MessageOptions) {
  const { label, showTimestamp } = parseOptions(labelOrOptions);

  console.log(
    chalk.blue(
      (showTimestamp ? timestampGen() : "") +
        (label ? chalk.cyan(`[${label}] `) : "") +
        message
    )
  );
}

export function success(message: string, labelOrOptions?: MessageOptions) {
  const { label, showTimestamp } = parseOptions(labelOrOptions);

  console.log(
    chalk.green(
      (showTimestamp ? timestampGen() : "") +
        (label ? chalk.cyan(`[${label}] `) : "") +
        message
    )
  );
}

export function warn(message: string, labelOrOptions?: MessageOptions) {
  const { label, showTimestamp } = parseOptions(labelOrOptions);

  console.log(
    chalk.yellow(
      (showTimestamp ? timestampGen() : "") +
        (label ? chalk.cyan(`[${label}] `) : "") +
        message
    )
  );
}

export function error(message: string, labelOrOptions?: MessageOptions) {
  const { label, showTimestamp } = parseOptions(labelOrOptions);

  console.error(
    chalk.red(
      (showTimestamp ? timestampGen() : "") +
        (label != "" ? chalk.cyan(`[${label}] `) : "") +
        message
    )
  );
}
