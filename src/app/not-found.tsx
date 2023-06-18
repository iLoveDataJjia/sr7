"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * Handle not found.
 */
export default function NotFound() {
  const router = useRouter();
  useEffect(() => {
    router.push("/characters/clara");
  }, [router]);
  return <></>;
}
