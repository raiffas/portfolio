import { Text } from "components";

export function RichText({ segments, className, size }) {
  return (
    <Text className={className} size={size}>
      {segments.map((seg, i) => (
        <span
          key={i}
          className={
            seg.type === "accent"
              ? "text-red-A100 font-jura text-left font-normal"
              : "text-white-A700 font-jura text-left font-normal"
          }
        >
          {seg.text}
        </span>
      ))}
    </Text>
  );
}
