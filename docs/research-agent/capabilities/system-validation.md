---
sidebar_position: 6
---

# System Validation

SAP Research Agent validates its recommendations against your connected SAP system by querying the indexed object database.

## How It Works

The agent writes ChromaSQL queries—a SQL-inspired domain-specific language created by Adri AI—to search the vector database containing your system's objects. This ensures that suggested tables, function modules, transactions, and other objects actually exist in your environment.

## What Gets Validated

The agent validates against all indexed SAP object types, including data dictionary objects, ABAP repository objects, classes, enhancements, and more. See [Available SAP Standard Objects](objects.md) for the complete list.

| System | Indexed Objects |
|--------|-----------------|
| ECC 6.0 EHP 7 | 18 million |
| S/4HANA 2023 | 27 million |

## Why It Matters

Without system validation, AI recommendations often reference:
- Objects from different SAP versions
- Components not installed in your system
- Deprecated or renamed objects

System validation eliminates these false positives by confirming object availability before including them in recommendations.

## Related

- [Search the SAP Index Directly](../use-cases/chromasql-search) - Query the index yourself using ChromaSQL
- [Available SAP Standard Objects](objects.md) - List of indexed object types