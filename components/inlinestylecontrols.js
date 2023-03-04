import React from "react";

function InLineStyleControls({ editorState }) {
  const currentStyle = editorState.getCurrentInlineStyle();

  let INLINE_STYLES = [
    { label: "Bold", style: "BOLD" },
    { label: "Italic", style: "ITALIC" },
    { label: "Underline", style: "UNDERLINE" },
    { label: "Monospace", style: "CODE" },
  ];

  return (
    <div>
      {INLINE_STYLES.map((type) => (
        <span
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
        />
      ))}
    </div>
  );
}

export default InLineStyleControls;
