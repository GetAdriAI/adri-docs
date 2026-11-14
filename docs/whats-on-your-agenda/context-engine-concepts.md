# Context engine concepts

The Adri AI Context Engine is a process-centric map of your SAP landscape. It connects custom code, integrations, configuration, process activities, tables, documents, and other technical evidence to the business processes they support.

Every item ultimately links to one or more processes. This means users and agents can begin with a business question—such as *What supports Procure-to-Pay?*—and follow the graph to the relevant SAP objects and evidence instead of searching through isolated technical inventories.

To see this model in action, watch [Context Engine: every SAP business process, mapped to the custom code behind it](https://www.getadri.ai/videos/context-engine-process-to-custom-code). You can also browse the complete [Adri AI video library](https://www.getadri.ai/videos).

## How is the Context Engine created?

![Adri AI platform components and Context Engine](/img/whats-on-your-agenda/adri-platform-components.png)

The initial Context Engine snapshot is assembled by Adri AI's mining pipelines:

- **Code mining** discovers custom SAP objects and the processes and activities they support.
- **Integration mining** maps interfaces and the systems or processes they connect.
- **Configuration mining** identifies configuration areas, IMG activities, tables, and their process relationships.
- **Process mining** reconstructs how business processes actually execute, including activities, variants, and relationships between steps.

Each pipeline publishes evidence-backed claims into the same graph. Adri AI harmonizes different names for the same process—for example, “O2C,” “Order to Cash,” and “Sales Order Processing”—while retaining the original names as aliases. Pipelines can run in any order, and rerunning one pipeline replaces only that source's earlier claims rather than rebuilding the entire graph.

This creates a shared context layer instead of four disconnected reports. A process can be viewed together with its supporting code, integrations, configuration, execution paths, and source evidence.

## How does the Context Engine stay current?

The Context Engine is updated as Adri AI mining pipelines and workflows run. Execution events and new mining results publish fresh claims into the graph. When a source is rerun, relationships that are no longer supported are removed and new evidence is added.

This approach allows the Context Engine to evolve with the SAP landscape while preserving where each fact came from. Agents use the same current, process-linked context when answering questions or carrying out work.

For an example of an agent using this shared context, watch [Template rollout: what changes for an AP lead, answered from the Context Engine](https://www.getadri.ai/videos/template-rollout-fit-gap-invoice-blocks).

## Persona-based presentation and access

A persona describes a kind of reader and how information should be presented to them. It combines factors such as:

- the SAP roles associated with that reader;
- their skills and level of technical depth;
- subjects that should be included by name, summarized in plain language, or excluded from the wording;
- preferred style and vocabulary.

Adri AI includes starting personas for ABAP developers, functional consultants, data champions, and end users. Projects can adopt and customize these personas, map them to customer-specific SAP roles, and assign one or more personas to each member.

The same Context Engine finding can therefore be presented differently. An ABAP developer might see program, table, class, and function-module names, while an end user sees the business action and expected outcome without implementation detail.

### Example: the same invoice-block finding for two personas

Consider a realistic procure-to-pay finding discovered from configuration and custom-code mining. The Context Engine holds the underlying evidence once:

- In company code `MG20`, invoices with a price variance above the configured tolerance are blocked for payment.
- Custom enhancement `ZMM_IV_TOLERANCE_CHECK` adds a second check for planned delivery costs.
- The enhancement reads purchasing and invoice data and raises message `ZMM_IV 042` when the allowed variance is exceeded.
- An accounts-payable user resolves the issue by reviewing the blocked invoice and asking Purchasing to correct the purchase order or approve the variance.

Assume both users are authorized to know about this process and finding. Adri AI creates a separate rendition for each assigned persona.

| ABAP developer rendition | Accounts-payable end-user rendition |
| --- | --- |
| **Where it runs:** During Logistics Invoice Verification, enhancement `ZMM_IV_TOLERANCE_CHECK` performs an additional planned-delivery-cost tolerance check for company code `MG20`. | **What happens:** An invoice is automatically blocked when its price or planned delivery costs differ from the purchase order by more than the allowed amount. |
| **Technical evidence:** The enhancement compares the invoice and purchase-order values and raises message `ZMM_IV 042` when the variance exceeds the configured threshold. The developer rendition can name the implementing class, method, tables, fields, enhancement point, and related authorization objects when those details exist in the Context Engine. | **What you see:** The invoice remains visible in the blocked-invoice worklist with an explanation that the allowed variance was exceeded. Internal program, class, table, field, enhancement, and authorization-object names are omitted. |
| **Diagnostic action:** Inspect the enhancement execution, confirm the company-code branch, compare the calculated planned-delivery-cost variance with the active configuration, and reproduce the message in the relevant test system. | **Business action:** Check the invoice against the purchase order. If the invoice is wrong, ask the supplier for a correction. If the purchase order is wrong or the variance is acceptable, ask Purchasing to correct or approve it before payment continues. |
| **Change impact:** A code or configuration change can affect invoice blocking for `MG20`; regression tests should cover invoices below, at, and above the threshold, including planned delivery costs. | **Expected outcome:** After the discrepancy is corrected or approved, the invoice can be released and continue through the payment process. |

These are not two different facts. They are two controlled presentations of the same evidence. The developer gets implementation and diagnostic detail; the end user gets the business consequence, the action to take, and the expected result. Neither user can open the other rendition unless that other persona is also assigned to them.

:::important Personas do not grant access

Personas control **how permitted information is worded**, not **what underlying information a user is allowed to see**. Visibility is determined separately by SAP authorizations and the project's access policy. A persona can never reveal content that the user is not authorized to access.

Persona assignments also control access to persona-specific renditions. A user can view only the wording or presentation created for a persona assigned to them; they cannot switch to or read renditions created for other personas.

:::

Before returning Context Engine data through search, the API, or an agent, Adri AI applies the user's access policy. It then presents the permitted content using one of the member's assigned personas—normally their default persona—and language, with the original wording used as a fallback when no persona-specific version exists.
