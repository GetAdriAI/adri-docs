# Agentic Harness

## What is an agent?

An AI agent is a system that uses an AI model to pursue a goal on a user's behalf. Instead of producing only a single response, it can decide what to do next, use tools, inspect the results, and repeat until it completes the task or needs human input.

For SAP work, an agent might inspect business requirements, search system metadata, analyze custom code, propose a design, make an approved change, run tests, and report the outcome.

## What is an agentic harness?

An agentic harness is the environment around an AI model that makes this kind of work possible and dependable. It gives the agent instructions, context, tools, permissions, workflow controls, memory, and feedback. It also establishes guardrails such as approvals, audit logs, testing, and monitoring.

The model provides reasoning, but the harness determines what the agent can see, what it can do, and how its work is governed. A strong harness turns a general-purpose model into a useful agent for a specific business and technical environment.

## Adri AI's agentic harness

Adri AI provides a harness for ERP migration and development across the delivery lifecycle: **Discover, Design, Develop, Test, Deploy, and Operate**.

![Adri AI agentic harness for ERP migration and development](/img/whats-on-your-agenda/adri-ai-agentic-harness-stack-diagram.png)

The diagram shows three connected layers:

1. **Systems of record** provide the source material and operational evidence the agents need. These include tools used for requirements, process discovery, design, development, testing, deployment, and monitoring.
2. **The Adri AI platform** supplies shared capabilities through the Adri Context Engine, Adri Workflow Engine, Adri Agent Factory, risk controls, audit logs, and third-party integrations.
3. **Adri AI agents and workflows** apply those platform capabilities to concrete ERP tasks—from autonomous context building and fit-gap analysis to RAP/CAP development, regression testing, template governance, and incident triage.

Together, these layers keep agent work grounded in enterprise context while making actions traceable and governable throughout the SAP lifecycle.
