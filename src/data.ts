export type SummaryTile = {
  label: string
  value: string
  note: string
}

export type GraphNode = {
  id: string
  title: string
  category: string
  metric: string
  accent: string
  x: number
  y: number
}

export type GraphEdge = {
  from: string
  to: string
  label: string
  tone: 'signal' | 'risk' | 'expansion'
}

export type ThreadCard = {
  title: string
  audience: string
  narrative: string
  result: string
}

export type SignalCard = {
  title: string
  owner: string
  emphasis: string
  detail: string
}

export type InsightCard = {
  title: string
  stat: string
  context: string
  movement: string
}

export const summaryTiles: SummaryTile[] = [
  {
    label: 'Accounts in graph',
    value: '148',
    note: 'Cross-linked across revenue, lifecycle, product, and support signals.',
  },
  {
    label: 'Expansion paths',
    value: '23',
    note: 'High-confidence paths where product usage and partner influence align.',
  },
  {
    label: 'Churn pressure clusters',
    value: '11',
    note: 'Nodes where trust, activation, and support pressure converge.',
  },
  {
    label: 'Executive briefings ready',
    value: '8',
    note: 'Scenarios already framed for commercial, product, and CS leadership.',
  },
]

export const graphNodes: GraphNode[] = [
  {
    id: 'account',
    title: 'Northstar Cloud',
    category: 'Strategic account',
    metric: '$1.8M ARR',
    accent: 'teal',
    x: 12,
    y: 20,
  },
  {
    id: 'usage',
    title: 'Product adoption pulse',
    category: 'Usage signal',
    metric: '+14% workflow depth',
    accent: 'cyan',
    x: 40,
    y: 8,
  },
  {
    id: 'campaign',
    title: 'Operator nurture stream',
    category: 'Lifecycle signal',
    metric: '37% reactivation lift',
    accent: 'amber',
    x: 70,
    y: 16,
  },
  {
    id: 'partner',
    title: 'Partner influence lane',
    category: 'Channel signal',
    metric: '2 sourced expansions',
    accent: 'violet',
    x: 74,
    y: 50,
  },
  {
    id: 'risk',
    title: 'Renewal trust watch',
    category: 'Risk cluster',
    metric: '-9 NPS delta',
    accent: 'rose',
    x: 44,
    y: 54,
  },
  {
    id: 'experiment',
    title: 'Packaging experiment',
    category: 'Decision layer',
    metric: '+6.1% ARPA',
    accent: 'lime',
    x: 16,
    y: 66,
  },
]

export const graphEdges: GraphEdge[] = [
  { from: 'account', to: 'usage', label: 'depth', tone: 'signal' },
  { from: 'usage', to: 'campaign', label: 'response', tone: 'expansion' },
  { from: 'campaign', to: 'partner', label: 'influence', tone: 'expansion' },
  { from: 'partner', to: 'risk', label: 'handoff drag', tone: 'risk' },
  { from: 'risk', to: 'experiment', label: 'intervention', tone: 'signal' },
  { from: 'experiment', to: 'account', label: 'reprice path', tone: 'expansion' },
  { from: 'usage', to: 'risk', label: 'adoption fragility', tone: 'risk' },
]

export const threadCards: ThreadCard[] = [
  {
    title: 'Expansion thread',
    audience: 'Revenue + Product',
    narrative:
      'Usage depth, workflow automation, and partner advocacy are clustering around two enterprise teams that now have budget authority.',
    result: 'Recommend expansion packaging and executive sponsor activation this month.',
  },
  {
    title: 'Trust recovery thread',
    audience: 'Success + Support',
    narrative:
      'Support friction is compressing adoption confidence in the same cohort where renewal conversations open in 41 days.',
    result: 'Route to recovery playbook, freeze high-friction experiment lanes, and reset onboarding narrative.',
  },
  {
    title: 'Attribution thread',
    audience: 'Growth + RevOps',
    narrative:
      'Partner influence is amplifying downstream conversion quality more than paid search, but the signal is hidden without relationship mapping.',
    result: 'Reweight sourcing credit and shift campaign budget toward assisted expansion motion.',
  },
]

export const signalCards: SignalCard[] = [
  {
    title: 'Lifecycle compression',
    owner: 'Growth systems',
    emphasis: 'High intent buyers are moving faster than the current approval path.',
    detail: 'Trim procurement friction on mid-market lanes before the signal decays.',
  },
  {
    title: 'Customer story gravity',
    owner: 'Content + demand gen',
    emphasis: 'Referenceable proof is driving better second-touch conversion than promotional copy.',
    detail: 'Tie customer stories directly to the nodes with the strongest expansion probability.',
  },
  {
    title: 'Governance pressure',
    owner: 'Security + CS',
    emphasis: 'Access review drag is hitting the same accounts that carry enterprise trust risk.',
    detail: 'Surface vendor and identity posture next to commercial timelines, not in a separate silo.',
  },
  {
    title: 'AI assist value',
    owner: 'Ops + enablement',
    emphasis: 'Prompt-guided account summaries reduce time-to-briefing but need confidence thresholds.',
    detail: 'Use graph confidence to determine which summaries can go straight to leadership.',
  },
]

export const insightCards: InsightCard[] = [
  {
    title: 'Graph confidence',
    stat: '84%',
    context: 'Relationship quality across lifecycle, revenue, product, and support edges.',
    movement: '+7 pts since last weekly sync',
  },
  {
    title: 'Revenue at leverage',
    stat: '$3.4M',
    context: 'Accounts where one operational intervention could change commercial trajectory.',
    movement: '11 active scenarios',
  },
  {
    title: 'Signal decay window',
    stat: '18 days',
    context: 'Average window before a high-quality expansion signal loses urgency.',
    movement: '-4 days QoQ',
  },
  {
    title: 'Briefing readiness',
    stat: '6 / 8',
    context: 'Priority clusters already translated into leadership-ready narratives.',
    movement: '2 awaiting product validation',
  },
]
