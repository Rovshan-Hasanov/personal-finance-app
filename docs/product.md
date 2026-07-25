# Product scope

## Objective

Build a useful personal finance organizer while learning core JavaScript,
React, Git, and later data-engineering concepts through small, understandable
increments.

The repository owner is the first user.

## First milestone: in-memory transaction overview

The first working version will:

1. Render a small set of fictional income and expense transactions.
2. Show a date, description, category, type, and amount for each transaction.
3. Calculate total income from the displayed transactions.
4. Calculate total expenses from the displayed transactions.
5. Calculate net cash flow as income minus expenses.
6. Keep transaction data in JavaScript/React memory only.

Refreshing the browser may reset the data during this milestone. That is an
intentional constraint, not a defect.

## Explicitly deferred

The following are outside the first milestone:

- local-storage or file persistence;
- a backend API or database;
- authentication or multiple users;
- real bank or credit-card data;
- bank integrations and automated imports;
- AWS infrastructure or data pipelines;
- budgeting, forecasting, debt, savings goals, and net-worth tracking;
- advanced analytics and dashboards.

Persistence will be considered only after the basic frontend data flow and
transaction workflow are understood.

## Initial domain language

- **Transaction:** one movement of money.
- **Income:** money coming in.
- **Expense:** money going out.
- **Category:** a label used to organize a transaction.
- **Net cash flow:** total income minus total expenses for the displayed period.

These definitions are intentionally small and may evolve as the product does.

## Success criteria

The milestone is successful when:

- fictional transactions render without errors;
- totals are derived from the transaction data rather than typed separately;
- income, expenses, and net cash flow are calculated correctly;
- the implementation is understandable to the repository owner;
- linting, formatting checks, and the production build pass; and
- no persistence mechanism or unnecessary dependency has been introduced.

## Decisions still open

These choices should be made close to the work that needs them:

- the initial visual layout;
- the exact fictional transaction fields;
- how categories will be created and edited;
- which testing framework to add and when;
- the eventual persistence and backend design;
- the AWS data-engineering architecture.

