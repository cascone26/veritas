"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { recordPageVisit } from "@/lib/activity";

// Silently records page visits for personalized recommendations
export default function ActivityTracker() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname) recordPageVisit(pathname);
  }, [pathname]);
  return null;
}
