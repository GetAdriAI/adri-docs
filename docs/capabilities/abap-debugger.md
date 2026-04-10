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
