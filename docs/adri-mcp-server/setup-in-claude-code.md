---
title: Setup (Claude Code Example)
sidebar_position: 1
description: Connect Adri MCP Server in any MCP-compatible coding agent (shown here with Claude Code).
---

## Connect Adri MCP Server (Claude Code example)

Adri MCP Server works with any MCP-compatible coding agent, including Codex, Cline, Claude Code, and others.
This walkthrough uses Claude Code screenshots, but the server URL and auth flow are the same idea across agents.
If you are new: MCP is the standard way coding agents use external tools like Adri AI.

> In every screenshot, the red box shows where to focus.

### 1. Create `.mcp.json` in your project

1. Open your project folder in VS Code.
2. Click **New File** in the Explorer.

![Click New File in VS Code Explorer](/img/adri-mcp-server/setup/1.png)

3. Type `.mcp.json` and press Enter.

![Start entering the new filename](/img/adri-mcp-server/setup/2.png)

![Name the file .mcp.json](/img/adri-mcp-server/setup/3.png)

4. Open the new file.

![Open the .mcp.json editor](/img/adri-mcp-server/setup/4.png)

5. Paste this config:

This file tells your coding agent how to reach Adri MCP Server.

```json
{
  "mcpServers": {
    "adri-ai": {
      "type": "http",
      "url": "https://mcp-server.getadri.ai/mcp/mcp/"
    }
  }
}
```

![Paste Adri MCP server config in .mcp.json](/img/adri-mcp-server/setup/5.png)

### 2. Open MCP servers in Claude Code

1. Open Claude Code in VS Code.
2. Run `/mcp` and select **MCP servers**.

![Run /mcp and open MCP servers](/img/adri-mcp-server/setup/6.png)

### 3. Authenticate the `adri-ai` MCP server

1. In **MCP servers**, find `adri-ai` and click **Needs Auth**.

![Click Needs Auth for adri-ai](/img/adri-mcp-server/setup/7.png)

2. Click **Authenticate**.

![Click Authenticate](/img/adri-mcp-server/setup/8.png)

3. When prompted, click **Open** to launch browser auth.

![Allow VS Code to open the auth URL](/img/adri-mcp-server/setup/9.png)

4. In the browser, select the Adri project you want and continue.

![Select a project for MCP access](/img/adri-mcp-server/setup/10.png)

5. Click **Allow**.

![Allow Claude Code to access Adri AI](/img/adri-mcp-server/setup/11.png)

6. After **Authentication Successful**, return to VS Code.

![Authentication successful page](/img/adri-mcp-server/setup/12.png)

7. Confirm `adri-ai` shows **Connected**.

![Verify adri-ai is connected](/img/adri-mcp-server/setup/13.png)

### 4. Run your first prompt

1. Ask Claude: `List all SAP systems`.

![Run first prompt in Claude Code](/img/adri-mcp-server/setup/14.png)

2. When tool permission appears, choose the option that allows `mcp__adri-ai__...` for **all projects**.

Important:
- If the prompt shows **this session**, click **this session** and change it to **all projects**.
- Then select **Yes, allow ... for all projects**.

![Permission prompt showing "this session" scope](/img/adri-mcp-server/setup/15.png)

![Switch scope to "all projects" and allow](/img/adri-mcp-server/setup/16.png)

3. Verify Claude returns the SAP systems list.

![Successful response showing available SAP systems](/img/adri-mcp-server/setup/17.png)
