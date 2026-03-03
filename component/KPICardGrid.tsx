interface KPIItem {
  label: string; 
  value?: string | number;
  percent?: string | number;
  trend?: "up" | "down";
}

interface KPICardGridProps {
  data: KPIItem[];
}

export default function KPICardGrid({ data }: KPICardGridProps) {
  return (
    <div className="nav-kpi-card-grid">
      {data?.map((item, index) => (
        <div key={index} className="nav-kpi-card-container">
          <p className="text-center text-p font-semibold">
            {item.label ?? ""}
          </p>

          <div className="nav-kpi-card-value-container">
            <span className="text-h6">
              {item.value ?? ""}
            </span>

            {item.percent !== undefined && (
              <div
                className={`nav-kpi-badge text-h6 ${
                  item.trend === "up" ? "is_active" : ""
                }`}
              >
                <div>
                  <span>{item.trend === "up" ? "+" : "-"}</span>
                  <span>{item.percent}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}