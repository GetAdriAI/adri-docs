---
title: ABAP Debugger
sidebar_position: 1
description: Adri AI agents can launch ABAP debugger sessions, set breakpoints, and step through execution.
---

import Link from '@docusaurus/Link';

## ABAP Debugger Capability

Adri AI agents can use the SAP debugger workflow, including:

- setting breakpoints
- launching a debug run in the selected SAP system
- stepping through execution (step over/step into/continue)
- collecting runtime findings from actual execution paths

This is very useful for hard-to-trace behavior, exits, and BAdI resolution.

## Full Debugger Capability Matrix

This section shows exactly what is available today.

### Available now

| Capability | What this lets you do | Status |
| --- | --- | --- |
| Launch and end debug session | Start a debugger run on the selected SAP system and end it cleanly | Working |
| Breakpoint management | Add, remove, and sync line breakpoints | Working |
| Conditional breakpoint checks | Validate breakpoint conditions before running | Working |
| Step controls | Step over, step into, step return, continue, run to line, and jump to line | Working |
| Variable inspection | View all variables at the stop point | Working |
| Call stack inspection | View full stack frames while paused | Working |
| Deep variable read | Read full values of large variables | Working |
| Runtime variable edit | Change variable values while paused | Working |
| Expression watch | Watch expressions like `SY-SUBRC`, `SY-TABIX`, and similar values | Working |
| Targeted variable fetch | Fetch specific variables quickly by reference | Working |

### Not implemented yet

| Capability | Notes |
| --- | --- |
| Statement breakpoints | Useful for kernel BAdI discovery; line breakpoints work today but statement-level does not |
| Watchpoints | Break when a variable value changes |
| Exception breakpoints | Break on specific ABAP exception classes |
| Evaluate expression | Ad-hoc ABAP expression evaluation in debug context |
| Multiple debug sessions | Simultaneous debug sessions for the same SAP context are not supported yet |

### Summary

- Core ABAP debugging workflow is fully available for day-to-day debugging tasks.
- `5` advanced capabilities are still pending.
- You can now cover most practical debugging flows directly from Adri AI without manual debugger switching.

## Pre-requisites

1. Complete MCP setup in Claude Code:
<Link to="/adri-mcp-server/setup-in-claude-code">Setup (Claude Code)</Link>
2. Make sure your target SAP system is connected.

> In these screenshots, the red box shows user action and the blue box shows important information to note.

## Step-by-step (Claude Code example)

1. In Claude Code, type `/adri` and select `/adri-ai:sap_debugger_guide (MCP)`.

![Select the sap_debugger_guide prompt](/img/capabilities/abap-debugger/1.png)

2. Confirm the debugger guide is loaded.
It asks for the SAP session/program context and where to place breakpoints.

![Debugger guide loaded with required inputs](/img/capabilities/abap-debugger/2.png)

3. Ask your debug objective and include where you want the breakpoint.

![Submit debugger objective and breakpoint target](/img/capabilities/abap-debugger/3.png)

4. When prompted, allow debugger launch (recommended: allow for all projects).

![Approve debugger launch tool permission](/img/capabilities/abap-debugger/4.png)

5. Review runtime results captured by the agent from debugger execution.

![Captured debugger findings and runtime analysis](/img/capabilities/abap-debugger/5.png)
