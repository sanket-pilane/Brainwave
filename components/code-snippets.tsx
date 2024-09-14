// components/CodeBlock.tsx
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FC } from "react";

interface CodeBlockProps {
  codeString: string;
  language: string;
}

const CodeBlock: FC<CodeBlockProps> = ({ codeString, language }) => (
  <SyntaxHighlighter language={language} style={solarizedlight}>
    {codeString}
  </SyntaxHighlighter>
);

export default CodeBlock;
