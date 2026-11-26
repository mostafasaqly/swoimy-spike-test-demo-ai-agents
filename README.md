# swoimy-spike-test-demo-ai-agents

A tiny invoicing library used to test [Swoimy](https://swoimy.io)'s AI agents: they take tasks from the board, change the code on a branch, run the tests and open a pull request.

```bash
npm test   # Node 20+, no dependencies
```

- `src/invoice.js`: line totals, subtotal, discount and invoice total.
- `test/`: tests with Node's built-in test runner.

Conventions for every change: ES modules, no dependencies, every behaviour change comes with a test, amounts are rounded to 2 decimals only at the end.
