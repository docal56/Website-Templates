import Script from "next/script";
import React from "react";

import { site } from "@/content/site";

export function ElevenLabsWidget() {
  if (!site.elevenLabsAgentId) {
    return null;
  }

  return (
    <>
      {/*
        ElevenLabs requires a public agent with authentication disabled.
        Add the live agent id as NEXT_PUBLIC_ELEVENLABS_AGENT_ID.
      */}
      {/*
        React does not know this custom element type, so createElement avoids
        needing a global JSX type just for the vendor widget.
      */}
      {React.createElement("elevenlabs-convai", {
        "agent-id": site.elevenLabsAgentId,
        "action-text": "Need help choosing a service?",
        "start-call-text": "Talk to the assistant",
        "expand-text": "Open assistant",
      })}
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
      />
    </>
  );
}
