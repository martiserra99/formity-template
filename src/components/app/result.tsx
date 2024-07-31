import type { Value } from "expry";

import { Highlight } from "prism-react-renderer";

import { cn } from "@/utils";

interface ResultProps {
  result: Value;
  onRestart: () => void;
}

export default function Result({ result, onRestart }: ResultProps) {
  return (
    <div className="relative flex h-screen w-full items-center justify-center p-8">
      <div className="w-full max-w-md space-y-4">
        <div className="max-h-96 w-full rounded-3xl border border-neutral-800 bg-neutral-950 p-3">
          <Highlight
            code={JSON.stringify(result, null, 2)}
            language="jsx"
            theme={{ plain: {}, styles: [] }}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={cn(className, "flex overflow-x-auto font-mono")}
                style={style}
              >
                <code className="px-4">
                  {tokens.map((line, lineIndex) => (
                    <div key={lineIndex} {...getLineProps({ line })}>
                      {line.map((token, tokenIndex) => (
                        <span key={tokenIndex} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </code>
              </pre>
            )}
          </Highlight>
        </div>
        <button
          className={cn(
            "block w-full rounded-full bg-indigo-500 px-6 py-4 text-white hover:bg-indigo-400",
            "focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-black",
            "disabled:bg-indigo-500 disabled:opacity-60",
          )}
          onClick={onRestart}
        >
          Start Again
        </button>
      </div>
    </div>
  );
}