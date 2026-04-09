---
title: Work with SAP Configuration using Claude Code
sidebar_position: 2
description: Use Claude Code with Adri MCP to read SAP configuration using the SAP configuration guide prompt.
---

import Link from '@docusaurus/Link';

## Same goal as Claude Chat: load the SAP configuration guide first

In both approaches, the first goal is the same: start from Adri AI's SAP configuration guide prompt.

- Claude Chat flow:
<Link to="/use-cases/read-write-sap-configuration">Read and Write SAP Configuration</Link>
- Claude Code flow (this page):
use `/adri-ai:sap_read_configuration_guide`

This gives users the same guidance foundation before running configuration read/write tasks.

Legend:

- **Red box**: user action
- **Blue box**: important information to note

## Step-by-step in Claude Code

1. In Claude Code, type `/adri` and select `/adri-ai:sap_read_configuration_guide (MCP)`.

![Select the sap_read_configuration_guide prompt in Claude Code](/img/use-cases/claude-code-configuration/1.png)

2. Confirm the SAP IMG Configuration Extraction Guide is loaded.
This confirms you are using the correct Adri guide context.

![Guide loaded confirmation in Claude Code](/img/use-cases/claude-code-configuration/2.png)

3. Ask your configuration request.

Example:

```text
Connect to Dedicated [ADMIN] system and explain all the pricing condition types we have in the system.
```

![Submit the pricing condition types request](/img/use-cases/claude-code-configuration/3.png)

4. Review tool execution details.
The flow may retry some tool calls automatically; this is normal while establishing session/query flow.

![Tool call trace and retry behavior in Claude Code](/img/use-cases/claude-code-configuration/4.png)

5. Read the structured output summary.

![Structured configuration output overview](/img/use-cases/claude-code-configuration/5.png)

6. Scroll through the detailed sections and condition groups.

![Detailed discounts and surcharges section](/img/use-cases/claude-code-configuration/6.png)

![Country and costing condition sections](/img/use-cases/claude-code-configuration/7.png)

![MM purchasing condition section](/img/use-cases/claude-code-configuration/8.png)

![Summary statistics at the end](/img/use-cases/claude-code-configuration/9.png)

## Optional for higher accuracy

Run IMG Extraction before deep configuration analysis:
<Link to="/adri-mcp-server/setup-img-extraction">Setup IMG Extraction</Link>
