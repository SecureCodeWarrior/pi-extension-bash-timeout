# pi-extension-bash-timeout

A [pi](https://pi.dev) extension that enforces a default timeout on all `bash` tool calls.

If the model omits the `timeout` parameter, this extension sets it to **120 seconds**. If the model provides its own timeout, it is left unchanged.

## Install

```bash
pi install git:github.com/SecureCodeWarrior/pi-extension-bash-timeout
```

## How it works

Uses the `tool_call` hook to intercept bash calls before execution and inject a default timeout when none is provided. This prevents runaway processes from hanging indefinitely.
