"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * Handle not found. (Only for dev with static "export")
 */
export default function NotFound() {
  const router = useRouter();
  useEffect(() => router.push("/"), [router]);
  return <></>;
}
