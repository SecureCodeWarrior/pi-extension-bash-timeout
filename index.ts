import type { PiExtensionContext } from "@mariozechner/pi-coding-agent";
import { isToolCallEventType } from "@mariozechner/pi-coding-agent";

const DEFAULT_TIMEOUT_SECONDS = 120;

export function activate(pi: PiExtensionContext) {
  pi.on("tool_call", async (event) => {
    if (isToolCallEventType("bash", event)) {
      if (!event.input.timeout) {
        event.input.timeout = DEFAULT_TIMEOUT_SECONDS;
      }
    }
  });
}
