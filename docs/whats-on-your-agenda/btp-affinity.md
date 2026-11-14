import SignUpAndProfileSetupComponent from '@site/src/components/SignUpAndProfileSetupComponent.mdx';
import CreateDemoProjectComponent from '@site/src/components/CreateDemoProjectComponent.mdx';
import ExploreBtpAffinityComponent from '@site/src/components/ExploreBtpAffinityComponent.mdx';

# Explore BTP affinity capabilities

Adri AI measures the BTP affinity of your custom-code portfolio. It begins with a mined inventory of custom objects and applications, evaluates how tightly their logic and data are coupled to SAP, and scores how readily each can move to SAP Business Technology Platform (BTP).

Code affinity asks whether the application's logic can run outside the SAP system. Data affinity asks whether its data, or the data-intensive work it performs, can live outside the SAP system. Keeping these as separate scores makes the recommendation more precise: an application may be suited to moving its logic, its data, both, or neither.

For the complete methodology—including inventory creation, application grouping, scoring, target selection, migration order, and capacity estimation—read Darshita Chaturvedi's [methodology for moving SAP custom code to BTP](https://www.linkedin.com/pulse/our-methodology-help-sap-architects-move-custom-code-btp-chaturvedi-owrdc/).

## Explore BTP affinity in Adri AI

Adri AI includes a curated reference portfolio with hundreds of ABAP objects. Create your own demo project, copy the prepared Willow reference data, and inspect the BTP Affinity pipeline without connecting an SAP system.

## Step 1: Sign up for Adri AI

<SignUpAndProfileSetupComponent />

## Step 2: Create a demo project and copy its data

<CreateDemoProjectComponent />

## Step 3: Explore the BTP Affinity pipeline

<ExploreBtpAffinityComponent />
