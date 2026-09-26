# Context layer built by Code Mining

## How is Context Layer created?

### 1. What are the possible input sources for Code Mining?

- ECC, S/4HANA
- Add-ons like CRM
- Java based systems like PI/PO that are synchronous and asynchronous Java-based interfaces (?)

### 2. What are the inputs that Code Mining considers? Does it factor in technical objects only or incorporates business context as well somehow?

### 3. How is a RICEFW object mapped to a business process?

- Does it rely on database tables to identify which module a program belongs to?

### 4. At which steps is human oversight required during the Context Layer creation?

Is there human oversight or verification of the knowledge graph after it is created automatically?

---

## How is Context Layer used?

### 1. Use case: code generation

### 2. Use case: code transformation

- eg 1: refactor legacy code into an object-oriented, capability-based structure before an S/4HANA migration
- eg 2: (modularization) separate functional capabilities within a large function module and help split it into smaller components

---

## Integrations

### 1. Where is this Context Layer created and stored? Does the custom code leave the company's network?

### 2. How would we use Adri?

Adri Cloud v. On-prem

- Onboarding via transports
- Ongoing operations via API
- API communication layer (with Adri Cloud over the public internet using HTTP)
- MCP server or server required?

### 3. What are the pre-requisites for integration?

Adri Cloud v. On-prem

- any open ports
