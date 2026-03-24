---
sidebar_position: 2
title: Adri MCP Server
description: What the Adri MCP Server provides and what remains exclusive to the full Adri AI platform.
---

# Adri MCP Server (Coming Soon)

The Adri MCP Server brings core Adri capabilities into any MCP-compatible code agent such as Claude Code, Codex, or Cursor.

## What You Get

### Knowledge Base Access

- **System-specific knowledge graph** — query the same vector database that powers the Adri Research Agent, containing millions of standard and custom SAP objects per connected system
- **SAP Business Accelerator Hub** — search SAP's standard API and object catalog
- **Semantic and keyword search** — use ChromaSQL-style queries to find objects by meaning, not just exact names
- **Multi-system queries** — search across multiple connected SAP systems (ECC, S/4HANA) in a single request

### ADT API Capabilities

- **ABAP object operations** — create, read, and modify a wide range of ABAP repository objects (programs, function modules, classes, data dictionary objects, and more)
- **ATC checks** — run ABAP Test Cockpit checks against your code
- **Run ABAP applications** — execute programs and function modules directly
- **Object locking and transport management** — handle development workflow operations

### Configuration Reading

- **IMG activity extraction** — read SAP customizing activities and their metadata
- **Installed component inspection** — query activated business functions, licensed modules, and configured features
- **Cross-module configuration** — access configuration across MM, SD, FI, PP, and custom namespaces

### Specialized ABAP Bug Fixing

- **Code Medic agent** — Adri's specialized agent for diagnosing and fixing complex ABAP issues, purpose-built to outperform general-purpose models like Claude Opus 4.6 on SAP-specific bugs. Available through the MCP Server, so your code agent can delegate ABAP repairs to Code Medic directly.

### Document Generation

- **Functional specifications** in Word and PDF formats
- **Technical specifications** grounded in your actual system objects and dependencies

## Platform-Only Features

MCP as a technology has limitations. The following capabilities require the full Adri AI platform. Use the platform in combination with your favorite code agent tool like Claude Code or Codex to get:

### Background Code Development

The Adri Code Agent can develop code autonomously in the background — debugging, setting breakpoints, reading runtime logs, and iterating on fixes without blocking your workflow. MCP operates synchronously within a single tool call, so long-running development sessions are not feasible.

### Lift and Shift at Scale

The platform can perform lift and shift operations across thousands of ABAP objects, coordinating cross-object dependencies and impact analysis. MCP's request-response model does not support this kind of large-scale, multi-step orchestration.

### Automatic Agent Triggers on Runtime Errors

The Adri platform can monitor live runtime error logs and automatically trigger the Code Medic agent to diagnose and fix issues as they occur. MCP servers are passive — they respond to requests but cannot initiate actions on their own.

### Automatic Workflow Runs on Change Requests

When a new change request is created, the platform can automatically kick off workflow runs that update process documentation, validate configurations, and coordinate across agents. MCP does not support event-driven automation.

### Connected Agent Collaboration

On the platform, the Research Agent, Code Agent, Code Medic, and Process Manager share context seamlessly — the output of one agent feeds directly into the next. Through MCP, each tool call is independent with no shared state between invocations.

### End-to-End Process Management

The platform's Process Manager maps business processes to T-codes, configurations, and code, keeping documentation automatically in sync as agents make changes. This continuous synchronization layer is not available via MCP.
