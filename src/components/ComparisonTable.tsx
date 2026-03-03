interface ComparisonRow {
  feature: string;
  values: string[];
}

interface ComparisonTableProps {
  columns: string[];
  rows: ComparisonRow[];
}

export function ComparisonTable({ columns, rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="min-w-full divide-y divide-border bg-white">
        <thead className="bg-accentSoft/30">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted">Feature</th>
            {columns.map((column) => (
              <th key={column} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-muted">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((row) => (
            <tr key={row.feature}>
              <td className="px-4 py-3 text-sm font-medium text-text">{row.feature}</td>
              {row.values.map((value, index) => (
                <td key={`${row.feature}-${index}`} className="px-4 py-3 text-sm text-muted">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
