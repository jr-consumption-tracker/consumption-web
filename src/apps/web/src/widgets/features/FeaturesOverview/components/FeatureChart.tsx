import { useId } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { BarShapeProps } from "recharts";

export interface ChartData {
  name: string;
  value?: number;
  [key: string]: string | number | undefined;
}

interface FeatureChartProps {
  data: ChartData[];
  type?: "bar" | "line" | "area";
  color?: string;
  secondaryColor?: string;
  dataKey?: string;
  secondaryDataKey?: string;
  unit?: string;
}

/**
 * FeatureChart - Prezentační komponenta pro zobrazení grafu v sekci funkcí.
 * Podporuje různé typy grafů s moderním, čistým vzhledem.
 */
export const FeatureChart = ({
  data,
  type = "bar",
  color = "var(--color-primary)",
  secondaryColor = "var(--color-surface-muted)",
  dataKey = "value",
  secondaryDataKey,
  unit = "",
}: FeatureChartProps) => {
  const chartId = useId();

  const renderChart = () => {
    switch (type) {
      case "area":
        return (
          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <defs>
              <linearGradient id={chartId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.15} />
                <stop offset="95%" stopColor={color} stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="var(--color-border)"
              opacity={0.4}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--color-text-muted)", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              style={{ whiteSpace: "nowrap" }}
              tick={{ fill: "var(--color-text-muted)", fontSize: 12 }}
              tickFormatter={(val) => `${val}${unit ? ` ${unit}` : ""}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
                borderRadius: "12px",
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                border: "1px solid var(--color-border)",
              }}
              itemStyle={{ color: "var(--color-text-main)", fontSize: "14px" }}
              formatter={(value) =>
                `${value == null ? "" : value}${unit ? ` ${unit}` : ""}`
              }
            />
            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={4}
              fillOpacity={1}
              fill={`url(#${chartId})`}
              animationDuration={1500}
            />
            {secondaryDataKey && (
              <Line
                type="monotone"
                dataKey={secondaryDataKey}
                stroke="var(--color-text-muted)"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
                animationDuration={1500}
              />
            )}
          </AreaChart>
        );
      case "line":
        return (
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="var(--color-border)"
              opacity={0.4}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--color-text-muted)", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              style={{ whiteSpace: "nowrap" }}
              tick={{ fill: "var(--color-text-muted)", fontSize: 12 }}
              tickFormatter={(val) => `${val}${unit ? ` ${unit}` : ""}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
                borderRadius: "12px",
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                border: "1px solid var(--color-border)",
              }}
              formatter={(value) =>
                `${value == null ? "" : value}${unit ? ` ${unit}` : ""}`
              }
            />
            {secondaryDataKey && (
              <Line
                type="monotone"
                dataKey={secondaryDataKey}
                stroke={secondaryColor}
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
                animationDuration={1500}
              />
            )}
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={3}
              dot={{
                fill: color,
                strokeWidth: 2,
                r: 4,
                stroke: "var(--color-surface)",
              }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              animationDuration={1500}
            />
          </LineChart>
        );
      default: {
        const maxValue = Math.max(...data.map((d) => Number(d[dataKey] || 0)));

        const renderBarShape = ({
          x,
          y,
          width,
          height,
          payload,
        }: BarShapeProps) => {
          const value = Number(payload?.[dataKey] || 0);
          const isMax = value === maxValue;
          const ratio = value / maxValue;
          const fillOpacity = isMax ? 1 : 0.4 + ratio * 0.5;
          const radius = 6;

          return (
            <path
              d={`M${x},${y + height} L${x},${y + radius} Q${x},${y} ${x + radius},${y} H${x + width - radius} Q${x + width},${y} ${x + width},${y + radius} L${x + width},${y + height} Z`}
              fill={color}
              fillOpacity={fillOpacity}
            />
          );
        };

        return (
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            barGap={8}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="var(--color-border)"
              opacity={0.4}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--color-text-muted)", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              style={{ whiteSpace: "nowrap" }}
              tick={{ fill: "var(--color-text-muted)", fontSize: 12 }}
              tickFormatter={(val) => `${val}${unit ? ` ${unit}` : ""}`}
            />
            <Tooltip
              cursor={{ fill: "var(--color-surface-soft)", opacity: 0.4 }}
              contentStyle={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
                borderRadius: "12px",
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                border: "1px solid var(--color-border)",
              }}
              formatter={(value) =>
                `${value == null ? "" : value}${unit ? ` ${unit}` : ""}`
              }
            />
            <Bar
              dataKey={dataKey}
              radius={[6, 6, 0, 0]}
              barSize={48}
              animationDuration={1500}
              shape={renderBarShape}
            />
          </BarChart>
        );
      }
    }
  };

  return (
    <div className="w-full h-full min-h-75">
      <ResponsiveContainer width="100%" height="100%">
        {renderChart()}
      </ResponsiveContainer>
    </div>
  );
};

FeatureChart.displayName = "FeatureChart";
