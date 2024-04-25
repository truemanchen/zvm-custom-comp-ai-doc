/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty-pattern */

import { aiPptDocSrc } from './aiPptDocSrc';

interface AiPptDocProps {
  globalData: Record<string, any>;
  setGlobalData: (newValue: any) => void;
  value?: string;
}

const iframeInlineStyle: React.CSSProperties = {
  border: '0px solid',
  height: '100%',
  width: '100%',
};

export function AiPptDoc({}: AiPptDocProps) {
  return <iframe style={iframeInlineStyle} srcDoc={aiPptDocSrc}></iframe>;
}
