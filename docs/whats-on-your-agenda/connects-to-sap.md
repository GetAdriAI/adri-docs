# How Adri AI connects to your SAP system

Adri AI connects to SAP systems through secure APIs exposed by an Adri transport installed by the customer's SAP BASIS team. The exact communication path depends on whether the work is performed by an **interactive agent** or an **autonomous pipeline**.

## Adri AI platform components

The Adri AI platform brings together five components:

- **Interactive agents** help users perform SAP research and development tasks in real time.
- **Autonomous pipelines** combine algorithms, data, and agents to execute repeatable workflows.
- **Mining pipelines** analyze custom code, integrations, configuration, and business processes to build enterprise context.
- **Project Management** coordinates agents and people and can integrate with IT service management tools such as ServiceNow and Freshworks.
- **Context Engine** stores business and technical context, including business-process flows. It does not store transactional data or personal information.

![Adri AI platform components](/img/whats-on-your-agenda/adri-platform-components.png)

Interactive agents and pipelines use different communication architectures when they connect to a customer's SAP landscape.

## Interactive-agent connectivity

Interactive agents connect only when a user explicitly initiates the connection from Adri AI. The connection path runs between the customer's SAP stack, the Adri extension on the user's system, and the Adri AI virtual private cloud (VPC).

![Adri AI interactive-agent communication architecture](/img/whats-on-your-agenda/adri-interactive-agents-architecture.png)

The communication flow is:

1. The user selects **Connect** in the Adri AI interface.
2. The Adri extension communicates with the authorized SAP system through the API installed by the customer's BASIS team.
3. SAP data is exchanged with the Adri AI connector over Secure WebSockets (WSS).
4. Other application traffic is exchanged over HTTPS.
5. The relevant Adri AI agent uses the connection to complete the user-initiated task.

All traffic between the user and Adri AI is encrypted in transit using HTTPS with TLS or WSS. If the SAP environment uses certificates issued by an internal certificate authority (CA), Adri AI can be configured to trust the customer-provided CA certificate chain. During TLS negotiation, the SAP endpoint's server certificate is validated against the configured trusted CAs, providing authenticated and encrypted communication.

## Pipeline connectivity

Autonomous and mining pipelines connect directly from Adri AI runtimes to authorized SAP systems. They use the same encrypted transport protocols as interactive agents, but authenticate with dedicated SAP communication or service accounts instead of relying on a user-initiated interactive session.

![Adri AI pipeline communication architecture](/img/whats-on-your-agenda/adri-pipelines-architecture.png)

This connection model supports scheduled or long-running work such as mining, migration analysis, and transport-impact analysis. Access remains limited by the permissions assigned to the SAP communication or service account.

## Data stored by Adri AI

Adri AI stores only the information needed to provide and operate the service:

| Data | How it is handled |
| --- | --- |
| SAP connection configuration | Endpoint URLs and connection parameters are stored in the Adri AI application database. Authentication credentials are stored separately in a secure secrets vault. |
| User information | The user's name and corporate email address are stored for identification and account management. |
| Conversation and agent history | User messages, agent responses, and related execution history are stored to preserve context and continuity. These records can include SAP technical information shared by the user or returned by the connected system. |
| SAP source code | Adri AI accesses source code when an agent needs it, but does not maintain a separate persistent source-code repository. Excerpts can appear in conversation history or agent execution records. |

## Logging and retention

- **Sensitive information:** Operational logs do not contain authentication credentials, SAP business program source code, or other customer proprietary information.
- **Retention:** Logs are retained for no more than 30 days and are routinely purged.
- **Archival:** Logs are not archived beyond the 30-day retention period.
- **Deletion:** Periodic deletion ensures that log records are not retained beyond the stated period.
