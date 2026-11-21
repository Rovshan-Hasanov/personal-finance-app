# Product scope

## Objective

Build a useful personal finance organizer while learning core JavaScript,
React, Git, AWS, and later data-engineering concepts through small,
understandable increments.

The repository owner is the first user.

## Change of priorities

The original first milestone was an in-memory transaction overview (render
fictional transactions and calculate totals in the browser). That plan was
replaced: getting the frontend deployed to AWS came first, and the next focus
is designing the database rather than building more in-memory frontend
features.

## Milestone 1 (achieved): minimal frontend deployed to AWS

- A React/Vite frontend with a transaction form.
- Submitting the form logs the entered data to the browser console; nothing is
  stored.
- The production build is hosted as static files in S3 and served through
  CloudFront.
- Deployment is currently manual.

Because there is no backend and nothing is stored, the public URL exposes no
data.

## Milestone 2 (in progress): database design and build

Think through and build the database that will store transactions. The design
decisions are listed under "Decisions still open" below.

## Later milestones

- Connect the frontend to a backend that reads from and writes to the database.
- Analytics, forecasting, and similar features.

## Explicitly deferred

- real bank or credit-card data;
- bank integrations and automated imports;
- AWS data pipelines;
- budgeting, debt, savings goals, and net-worth tracking.

## Domain language

- **Transaction:** one movement of money.
- **Income:** money coming in.
- **Expense:** money going out.
- **Debt payment:** money paid toward a debt. Whether it counts as an expense
  in net cash flow is still undecided.
- **Category:** a label used to organize a transaction.
- **Net cash flow:** total income minus total expenses for the displayed period.

These definitions are intentionally small and may evolve as the product does.

## Decisions still open

These choices should be made close to the work that needs them:

- the database engine and where it runs (local first, or AWS);
- the transaction schema, including how categories and accounts ("from" / "to")
  are modeled;
- how debt payments are treated in income/expense totals;
- the backend/API design that sits between the frontend and the database;
- authentication: once the deployed site can read or write stored data, the
  public URL means anyone could use it, so auth must arrive no later than
  that;
- automating deploys from GitHub to AWS;
- which testing framework to add and when;
- the AWS data-engineering architecture.

