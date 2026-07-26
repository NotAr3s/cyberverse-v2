"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  FlaskConical,
  Trophy,
  Settings,
  User,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r border-gray-800 bg-black/40 p-5">
      <h1 className="text-2xl font-bold mb-8 text-cyan-400">
        CyberVerse
      </h1>

      <nav className="space-y-3">

        <Link
          href="/dashboard"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10"
        >
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link
          href="/dashboard/labs"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10"
        >
          <FlaskConical size={20} />
          Labs
        </Link>
        <Link
            href="/dashboard/challenges"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10"
            >
            <Trophy size={20} />
            Challenges
        </Link>
        
        <Link
          href="/dashboard/ctf"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10"
        >
          <Trophy size={20} />
          CTF Arena
        </Link>

        <Link
          href="/profile"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10"
        >
          <User size={20} />
          Profile
        </Link>

        <Link
          href="/settings"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10"
        >
          <Settings size={20} />
          Settings
        </Link>

      </nav>
    </aside>
  );
}