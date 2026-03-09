import ChatInterface from "@/components/ChatInterface";
import PageHeader from "@/components/PageHeader";

export default function DebateSimulator() {
  return (
    <div className="flex h-screen flex-col">
      <PageHeader
        title="Debate Simulator"
        subtitle="Practice defending the faith against AI opponents"
        icon="⚔️"
      />
      <ChatInterface
        endpoint="/api/chat"
        placeholder="State your position or respond to the opponent..."
        systemContext="debate_simulator"
        welcomeMessage={`Welcome to the Debate Simulator.

Choose your opponent by starting with one of these:

• "Debate an ATHEIST about [topic]"
• "Debate a PROTESTANT about [topic]"
• "Debate a MUSLIM about [topic]"
• "Debate an ORTHODOX Christian about [topic]"
• "Debate a SECULAR progressive about [topic]"
• "Debate a SKEPTIC about [topic]"

The AI will argue against you. It won't be a pushover — expect real objections and pushback. After several exchanges, it will break character and score your performance.

Example: "Debate an atheist about the problem of evil"

Ready when you are.`}
      />
    </div>
  );
}
