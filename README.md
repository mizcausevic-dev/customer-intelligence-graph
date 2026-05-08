# Customer Intelligence Graph

<p align="center">
  <img src="https://img.shields.io/badge/React-19-111827?style=for-the-badge&logo=react&logoColor=61DAFB&labelColor=111827" alt="React badge" />
  <img src="https://img.shields.io/badge/Vite-8-111827?style=for-the-badge&logo=vite&logoColor=F7B801&labelColor=111827" alt="Vite badge" />
  <img src="https://img.shields.io/badge/TypeScript-6.x-111827?style=for-the-badge&logo=typescript&logoColor=ffffff&labelColor=111827" alt="TypeScript badge" />
  <img src="https://img.shields.io/badge/Interface-Graph%20Control%20Plane-0f172a?style=for-the-badge&color=14b8a6" alt="Graph control plane badge" />
</p>

## Executive Summary

Customer Intelligence Graph is a recruiter-ready flagship frontend that maps how accounts, lifecycle campaigns, product usage, partner influence, trust risk, and experimentation outcomes compound into real commercial decisions.

Instead of showing one more KPI board, it translates customer intelligence into a relationship surface: nodes, edges, pressure paths, narrative threads, and action-ready insights.

## Recruiter Takeaway

This project shows how I think when a company needs more than a dashboard:

- I turn fragmented growth, revenue, and lifecycle signals into a coherent operating model.
- I design internal products that help leadership understand *why* a commercial outcome is happening, not just *what* changed.
- I build interfaces that connect technology, operations, GTM, and narrative decision-making.

## Overview

| Area | What it shows |
| --- | --- |
| Relationship graph | Connected account, lifecycle, usage, partner, risk, and experiment nodes |
| Narrative threads | Expansion, recovery, and attribution stories derived from linked signals |
| Signal board | Metro-style decision surface for operational and commercial pressure |
| Insight ribbon | Executive-facing summary cards for leverage, decay, confidence, and readiness |

## Why This Exists

Most growth and revenue teams can see events. Fewer can see relationships.

Customer Intelligence Graph is framed around a simple idea: the most important commercial decisions usually live between systems, not inside any single one. Revenue, lifecycle motion, experimentation, product usage, support drag, and trust signals all shape the customer story, but they are often reviewed in separate dashboards owned by different teams.

This interface compresses those fragments into one connected surface.

## Architecture

```mermaid
flowchart LR
    A["Strategic Account"] --> B["Usage Pulse"]
    B --> C["Lifecycle Campaign"]
    C --> D["Partner Influence"]
    B --> E["Trust Risk"]
    D --> E
    E --> F["Experiment Intervention"]
    F --> A
```

Additional implementation notes live in [docs/architecture.md](./docs/architecture.md).

## Screenshots

### Hero

![Hero](https://raw.githubusercontent.com/mizcausevic-dev/customer-intelligence-graph/project/customer-intelligence-graph/screenshots/01-hero.svg)

### Relationship Surface

![Relationship surface](https://raw.githubusercontent.com/mizcausevic-dev/customer-intelligence-graph/project/customer-intelligence-graph/screenshots/02-graph.svg)

### Narrative Threads

![Narrative threads](https://raw.githubusercontent.com/mizcausevic-dev/customer-intelligence-graph/project/customer-intelligence-graph/screenshots/03-threads-v2.svg)

### Signal Board

![Signal board](https://raw.githubusercontent.com/mizcausevic-dev/customer-intelligence-graph/project/customer-intelligence-graph/screenshots/04-signals-v2.svg)

## Running Locally

```powershell
Set-Location "C:\Users\chaus\dev\repos\customer-intelligence-graph"
npm install
npm run dev
```

## Validation

```powershell
npm test
npm run build
npm run lint
```

## Portfolio Links

- [Kinetic Gain](https://kineticgain.com/)
- [Skills / Portfolio](https://mizcausevic.com/skills/)
- [LinkedIn](https://www.linkedin.com/in/mirzacausevic)
- [Medium](https://medium.com/@mizcausevic)
- [GitHub](https://github.com/mizcausevic-dev)
