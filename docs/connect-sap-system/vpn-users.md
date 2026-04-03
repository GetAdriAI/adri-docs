---
title: VPN Users
---

import ConnectToAConnectionComponent from '@site/src/components/ConnectToAConnectionComponent.mdx';
import Link from '@docusaurus/Link';
import {ADRI_URLS} from '@site/src/constants/urls';

- Create your SAP connection first: <Link to="/connect-sap-system/connect-your-sap-system">Connect Your SAP System</Link>
- Need help finding the **Project Settings** app? See <Link to="/project-management/open-a-project">Open a Project</Link>.

## Install Adri Relay on your laptop

Use this section if your SAP systems are only reachable through VPN.
**Adri Relay** is a small desktop app that securely connects Adri AI to your VPN-only SAP systems.

> In every screenshot, the red box shows exactly where to focus.

1. Open <a href={ADRI_URLS.web}>getadri.ai</a> and click **Downloads** in the top navigation.

![Open Downloads from the Adri AI website](/img/vpn-users/1.png)

2. On the **Download Adri Relay** page, choose your OS and click **Download**.

![Choose your OS and download Adri Relay](/img/vpn-users/2.png)

3. Unzip the downloaded file and start the Adri Relay app.
4. On macOS, if the app is blocked, run this command in Terminal:

```sh
xattr -dr com.apple.quarantine "/Applications/Adri Relay.app"
```

![Run this command on macOS if needed](/img/vpn-users/3.png)

## Configure Adri Relay

1. In Adri Project Manager, open **Project Settings** and click **Connections**.

![Open Connections in Project Settings](/img/vpn-users/4.png)

2. In the **Adri Relay** section, click **Generate Relay Configuration**.

![Generate Relay Configuration](/img/vpn-users/5.png)

3. Copy the generated relay configuration using the copy icon.

![Copy relay configuration using the copy icon](/img/vpn-users/6.png)

![Copy relay configuration (alternate view)](/img/vpn-users/7.png)

4. Open the Adri Relay desktop app and go to the **Settings** tab.

![Open Settings in Adri Relay](/img/vpn-users/8.png)

5. Scroll to **Quick Setup** and paste the copied relay configuration.

![Paste relay configuration in Quick Setup](/img/vpn-users/9.png)

6. Click **Import Configuration**.

![Click Import Configuration](/img/vpn-users/10.png)

7. Click **Register**.

![Register the imported configuration](/img/vpn-users/11.png)

8. Wait until you see **Setup complete**.

![Verify Setup complete status](/img/vpn-users/12.png)

9. Open the **Dashboard** tab.

![Open Dashboard tab](/img/vpn-users/13.png)

10. Click **Connect**.

![Click Connect in Dashboard](/img/vpn-users/14.png)

11. Confirm the status changes to **Connected**.

![Verify Connected status](/img/vpn-users/15.png)

<ConnectToAConnectionComponent />
