"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdBanner() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      try {
        if (typeof window !== "undefined") {
          if (!window.adsbygoogle) window.adsbygoogle = [];
          window.adsbygoogle.push({});
        }
      } catch (err) {
        console.log("AdSense error:", err);
      }
    }, 500); // delay fix

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5140104627268162"
        data-ad-slot="3965292595"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}
