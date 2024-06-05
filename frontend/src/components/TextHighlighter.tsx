/**
 * Text with highlighted parts.
 */
export default function TextHighlighter({
  text,
  regexGroup,
  cssHighlight,
  className,
}: {
  text: string;
  regexGroup: RegExp;
  cssHighlight: string;
  className?: string;
}) {
  // Detect parts and slice
  const textSliced = text.split(regexGroup).map((subText) => ({
    subText,
    isMatch: regexGroup.test(subText),
  }));

  // Render
  return (
    <p className={"whitespace-normal" + (className ? ` ${className}` : "")}>
      {textSliced.map((slice, key) =>
        slice.isMatch ? (
          <span className={cssHighlight} key={key}>
            {slice.subText}
          </span>
        ) : (
          <span key={key}>{slice.subText}</span>
        )
      )}
    </p>
  );
}
