# Select Multiple Collections

SAP Research Agent allows you to connect multiple SAP system collections in a single session, enabling cross-system research and comparison.

## Available Collections

The following system collections are available:

| Collection    | No. of standard objects indexed |
| :------------ | :------------------------------ |
| ECC 6.0 EHP 7 | 18 million                      |
| S/4HANA 2023  | 27 million                      |

## Use Cases

Selecting multiple collections is particularly useful for:

- **Migration Analysis**: Compare objects between ECC and S/4HANA to identify deprecated, renamed, or new objects
- **Cross-System Validation**: Verify that standard objects or configurations exist in both systems
- **Compatibility Checks**: Find equivalent functionality across different SAP versions

## How to Select Collections

1. Open the collection selector in SAP Research Agent
2. Check the collections you want to include in your session
3. Your queries will now search across all selected collections

:::tip
For migration scenarios, use the `/migrate` slash command which auto-selects both ECC 6.0 and S/4HANA 2023 collections. Learn more in [Slash Commands](slash-commands.md).
:::

## Enterprise Connections

If you are on Adri AI's Enterprise Plan, you can connect SAP Research Agent to your own SAP environment. This enables system-aware recommendations validated against your specific:

- Installed components
- Custom objects
- Active configurations
- Enhancement implementations

:::info
Check out the [free and open version](https://research.getadri.ai) to explore the standard object collections.
:::
