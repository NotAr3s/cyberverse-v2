import { Shield } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-cyan-500 p-2">
        <Shield className="h-6 w-6 text-black" />
      </div>

      <div>
        <h1 className="text-xl font-bold text-white">
          CyberVerse
        </h1>

        <p className="text-xs text-cyan-400">
          Cybersecurity Platform
        </p>
      </div>
    </div>
  );
}