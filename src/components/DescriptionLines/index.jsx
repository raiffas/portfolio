import { Text } from "components";

export function DescriptionLines({ lines, link, accentFirst }) {
  return (
    <Text as="div" className="md:text-base text-[18px] text-white-A700" size="txtJuraRegular16">
      {lines.map((line, i) => (
        <p key={i} className={`${accentFirst && i === 0 ? "text-red-A100" : "text-white-A700"} font-jura font-normal md:text-center`}>{line}</p>
      ))}
      {link && (
        <span className="text-red-A100 font-jura font-normal md:block md:text-center">
          {link.href
            ? <a href={link.href} rel="noreferrer">{link.text}</a>
            : link.text}
        </span>
      )}
    </Text>
  );
}
