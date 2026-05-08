import './styles.css'
import {
  graphEdges,
  graphNodes,
  insightCards,
  signalCards,
  summaryTiles,
  threadCards,
} from './data'

const edgeToneClass: Record<(typeof graphEdges)[number]['tone'], string> = {
  signal: 'edge edge-signal',
  risk: 'edge edge-risk',
  expansion: 'edge edge-expansion',
}

function App() {
  const nodeMap = new Map(graphNodes.map((node) => [node.id, node]))

  return (
    <main className="page-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Customer Intelligence Graph</p>
          <h1>See the commercial story as connected pressure, not disconnected dashboards.</h1>
          <p className="hero-text">
            This flagship maps how accounts, campaigns, product behavior, partner influence,
            trust risk, and experiment outcomes compound into real revenue decisions.
          </p>
        </div>
        <div className="summary-grid" aria-label="Headline summary">
          {summaryTiles.map((tile) => (
            <article className="summary-tile" key={tile.label}>
              <p className="tile-label">{tile.label}</p>
              <p className="tile-value">{tile.value}</p>
              <p className="tile-note">{tile.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="graph-stage">
        <div className="section-head">
          <p className="eyebrow">Relationship Surface</p>
          <h2>Nodes, edges, and pressure paths that explain what leadership should actually do next.</h2>
        </div>
        <div className="graph-frame">
          <svg
            className="edge-layer"
            viewBox="0 0 100 100"
            role="img"
            aria-label="Signal relationships between accounts, usage, campaigns, partners, risks, and experiments"
            preserveAspectRatio="none"
          >
            {graphEdges.map((edge) => {
              const from = nodeMap.get(edge.from)
              const to = nodeMap.get(edge.to)

              if (!from || !to) {
                return null
              }

              const midX = (from.x + to.x) / 2
              const controlY = Math.min(from.y, to.y) - 8

              return (
                <g key={`${edge.from}-${edge.to}`}>
                  <path
                    className={edgeToneClass[edge.tone]}
                    d={`M ${from.x} ${from.y} Q ${midX} ${controlY} ${to.x} ${to.y}`}
                  />
                  <text x={midX} y={controlY - 1.8} className="edge-label">
                    {edge.label}
                  </text>
                </g>
              )
            })}
          </svg>

          {graphNodes.map((node) => (
            <article
              key={node.id}
              className={`graph-node node-${node.accent}`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              <p className="node-category">{node.category}</p>
              <h3>{node.title}</h3>
              <p className="node-metric">{node.metric}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="threads-panel">
        <div className="section-head">
          <p className="eyebrow">Narrative Threads</p>
          <h2>Three linked stories the graph is surfacing right now.</h2>
        </div>
        <div className="thread-grid">
          {threadCards.map((thread) => (
            <article className="thread-card" key={thread.title}>
              <div className="thread-meta">
                <span>{thread.audience}</span>
              </div>
              <h3>{thread.title}</h3>
              <p className="thread-body">{thread.narrative}</p>
              <p className="thread-result">{thread.result}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mosaic-panel">
        <div className="section-head">
          <p className="eyebrow">Signal Board</p>
          <h2>A cleaner metro-style grid for the pressures shaping the next move.</h2>
        </div>
        <div className="mosaic-grid">
          {signalCards.map((signal) => (
            <article className="signal-tile" key={signal.title}>
              <p className="tile-label">{signal.owner}</p>
              <h3>{signal.title}</h3>
              <p className="signal-emphasis">{signal.emphasis}</p>
              <p className="signal-detail">{signal.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="insight-ribbon">
        {insightCards.map((insight) => (
          <article className="insight-card" key={insight.title}>
            <p className="tile-label">{insight.title}</p>
            <p className="insight-stat">{insight.stat}</p>
            <p className="tile-note">{insight.context}</p>
            <p className="insight-movement">{insight.movement}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
