"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * Handle error. (Only for dev with static "export")
 */
export default function Error({}: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => router.push("/"), [router]);
  return <></>;
}
