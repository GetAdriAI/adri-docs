---
title: Set up PI/PO to Integration Suite migration
description: Set up Adri AI for SAP PI/PO migration and new integration development, from access requests to your first agent message.
---

# Set up PI/PO to Integration Suite migration

Use this guide to prepare Adri AI for:

- migrating interfaces from SAP PI/PO to SAP Integration Suite;
- developing new integrations in SAP PI/PO; and
- developing new integrations in SAP Integration Suite.

You will create an Adri project, request the required access, connect PI/PO and SAP BTP Cloud Foundry, prepare Adri AI Foundry for VS Code, and send your first migration request to the Code Agent.

## Before you begin

You need:

- the URL and credentials for your PI/PO system;
- an SAP BTP Cloud Foundry technical user that can sign in with a password and does not require multi-factor authentication;
- the Cloud Foundry API endpoint, organization, and space for the target runtime; and
- VS Code on your computer.

## 1. Sign up and create a project

First, [sign up and complete your profile](../../use-adri-for-free.md). Then [create a project](../../project-management/create-a-project.md). The project keeps the access, connections, packages, and agent sessions for this migration together.

## 2. Request a free trial

In Adri Basecamp, select **Free trial**. Choose the reason for the trial, enter any useful details, select the duration and number of seats, and select **Send request**.

![Complete the free-trial request](/img/integration-suite/pi-po-migration-setup/2.png)

![Choose the reason for the free trial](/img/integration-suite/pi-po-migration-setup/3.png)

![Send the free-trial request](/img/integration-suite/pi-po-migration-setup/4.png)

The page shows that your request is with Adri. You can withdraw it while it is pending, and Adri also sends you an email notification.

![Review the pending free-trial request](/img/integration-suite/pi-po-migration-setup/5.png)

:::info Request resolution
You no longer need to email the Adri team for a trial or entitlement. Submit the request in Adri Basecamp. The Adri team resolves requests within 24 hours.
:::

After approval, the **Free trial** page displays the active period and remaining days.

![Confirm that the free trial is active](/img/integration-suite/pi-po-migration-setup/7.png)

## 3. Request the SAP Integration Suite Toolkit entitlement

Open **Project settings**, select **Entitlements**, and scroll to **Adri packages**.

![Open the project entitlements](/img/integration-suite/pi-po-migration-setup/9.png)

On the **SAP Integration Suite Toolkit** card, select **Request access**. Add an optional note and select **Send request**.

![Request access to the SAP Integration Suite Toolkit](/img/integration-suite/pi-po-migration-setup/10.png)

![Send the entitlement request](/img/integration-suite/pi-po-migration-setup/11.png)

The card displays the request date while approval is pending. You can withdraw the request from the same card.

![Review the pending entitlement request](/img/integration-suite/pi-po-migration-setup/12.png)

After approval, the card displays **Active** and the entitlement end date.

![Confirm that the SAP Integration Suite Toolkit is active](/img/integration-suite/pi-po-migration-setup/14.png)

## 4. Install and sign in to Adri AI Foundry

Complete these existing setup guides in order:

1. [Install Adri AI Foundry for VS Code](../../vs-code-extension/install-vs-code-extension.md).
2. [Open a folder in VS Code](../../vs-code-extension/open-folder-in-vs-code.md).
3. [Sign in to Adri AI](../../vs-code-extension/sign-in-adri-ai.md).

Use a dedicated workspace folder for the migration so that the toolkit and generated integration artifacts remain together.

## 5. Add the SAP Integration Suite package to the workspace

In Adri AI Foundry, expand **Setup** and **Packages**. Select the **Add to Workspace** icon beside the SAP Integration Suite package.

![Add the SAP Integration Suite package to the workspace](/img/integration-suite/pi-po-migration-setup/16.png)

A green check confirms that the package is available in the workspace.

![Confirm that the SAP Integration Suite package is installed](/img/integration-suite/pi-po-migration-setup/17.png)

## 6. Add your PI/PO connection

In Adri Basecamp, open **My settings > Connections**, then select **+ PI/PO**.

![Start a new PI/PO connection](/img/integration-suite/pi-po-migration-setup/19.png)

Enter a connection name, the PI/PO host URL, username, and password. If the Integration Directory, ESR, and Runtime use different URLs, expand **Advanced: separate service URLs**. Select **Save connection**.

![Enter the PI/PO connection details](/img/integration-suite/pi-po-migration-setup/20.png)

The saved system appears in the connections list. PI/PO connections and the default selection are personal to you; agents use a PI/PO system only after you link it to a chat.

![Confirm that the PI/PO connection is saved](/img/integration-suite/pi-po-migration-setup/21.png)

## 7. Add the SAP BTP Cloud Foundry connection

On the same **Connections** page, scroll to **SAP BTP Connections**. First create an authentication profile, then create a target that uses it.

![Open the SAP BTP connection setup](/img/integration-suite/pi-po-migration-setup/23.png)

### Create the authentication profile

1. For **Auth profile type**, select **Cloud Foundry technical user**.
2. Enter a recognizable display name.
3. Select or enter the token URL for the subaccount region.
4. Enter the technical user's username and password. Add the identity-provider origin only when you use a custom identity provider.
5. Select **Save Cloud Foundry technical user profile**.

![Select the Cloud Foundry technical user profile type](/img/integration-suite/pi-po-migration-setup/24.png)

![Select the token URL region](/img/integration-suite/pi-po-migration-setup/25.png)

![Enter the Cloud Foundry technical-user credentials](/img/integration-suite/pi-po-migration-setup/26.png)

### Create and validate the Cloud Foundry target

1. Select the authentication profile you created.
2. For **Target kind**, select **Cloud Foundry**.
3. Enter a target display name, Cloud Foundry API URL, organization name, and space name.
4. Select **Save cloud foundry target**.
5. On the saved target, select **Validate**. Continue only after **Validation passed** appears.

You can find the API endpoint, organization, and space on the subaccount overview page in SAP BTP Cockpit.

![Find the Cloud Foundry endpoint, organization, and space in SAP BTP Cockpit](/img/integration-suite/pi-po-migration-setup/30.png)

![Enter and save the Cloud Foundry target](/img/integration-suite/pi-po-migration-setup/31.png)

![Validate the Cloud Foundry target](/img/integration-suite/pi-po-migration-setup/32.png)

![Confirm that Cloud Foundry validation passed](/img/integration-suite/pi-po-migration-setup/33.png)

## 8. Refresh the BTP targets in VS Code

Return to VS Code. In Adri AI Foundry, expand **BTP** and select **Refresh**. The authentication profile and target created in Adri Basecamp appear under **Synced From Adri**, **Sign-ins**, and **Targets**.

![Refresh BTP in Adri AI Foundry](/img/integration-suite/pi-po-migration-setup/35.png)

![Confirm that the BTP profile and target are available](/img/integration-suite/pi-po-migration-setup/36.png)

## 9. Connect PI/PO and start an agent session

In the **Object Tree**, select the connect icon beside your PI/PO system. When the status turns green, Adri can browse the PI/PO design-time and runtime objects available to your user.

![Connect to the PI/PO system from VS Code](/img/integration-suite/pi-po-migration-setup/38.png)

![Browse the connected PI/PO workspace](/img/integration-suite/pi-po-migration-setup/40.png)

Create or open an **Adri Code Agent** session. Select **Link systems**, enable the PI/PO system and the Cloud Foundry sign-in, and apply the selection.

![Link PI/PO and Cloud Foundry to the agent session](/img/integration-suite/pi-po-migration-setup/43.png)

## 10. Send your first migration request

Describe the interface you want the agent to migrate and the desired outcome. For example:

> Extract the batch sales order ICO and migrate it to an iFlow.

Review the linked PI/PO system, Cloud Foundry target, capabilities, and model shown above the message box, then select **Send**.

![Send the first PI/PO migration request to the Code Agent](/img/integration-suite/pi-po-migration-setup/48.png)

The same setup also supports greenfield development. Instead of asking the agent to migrate an existing interface, describe the new integration you want it to build in PI/PO or SAP Integration Suite.
