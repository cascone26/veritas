"use client";

import { useEffect, useState, useCallback } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if already dismissed
    if (localStorage.getItem("veritas-install-dismissed")) return;

    // Track visit count
    const visits = parseInt(localStorage.getItem("veritas-visits") || "0", 10) + 1;
    localStorage.setItem("veritas-visits", String(visits));

    // Don't show until 3rd visit
    if (visits < 3) return;

    // Check if already installed (standalone mode)
    if (window.matchMedia("(display-mode: standalone)").matches) return;

    // iOS detection
    const ua = navigator.userAgent;
    const ios = /iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream;
    setIsIOS(ios);

    if (ios) {
      setShowBanner(true);
      return;
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowBanner(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = useCallback(async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setShowBanner(false);
    }
    setDeferredPrompt(null);
  }, [deferredPrompt]);

  const handleDismiss = useCallback(() => {
    localStorage.setItem("veritas-install-dismissed", "1");
    setShowBanner(false);
  }, []);

  if (!showBanner) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
        background: "#1c1917",
        borderTop: "1px solid #292524",
        color: "#e7e5e4",
        fontSize: "14px",
        fontFamily: "var(--font-inter), sans-serif",
      }}
    >
      <span>
        {isIOS
          ? "Tap Share \u2192 Add to Home Screen to install Veritas"
          : "Add Veritas to your home screen for quick access"}
      </span>
      <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
        {!isIOS && (
          <button
            onClick={handleInstall}
            style={{
              padding: "6px 14px",
              borderRadius: "6px",
              border: "none",
              background: "#d97706",
              color: "#fff",
              fontSize: "13px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Install
          </button>
        )}
        <button
          onClick={handleDismiss}
          style={{
            padding: "6px 14px",
            borderRadius: "6px",
            border: "1px solid #44403c",
            background: "transparent",
            color: "#a8a29e",
            fontSize: "13px",
            cursor: "pointer",
          }}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
