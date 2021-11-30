import { useRouter } from "next/router";
import { useEffect } from "react";

export default function usePublicPage() {
  const router = useRouter();

  useEffect(() => {
    const _email = localStorage.getItem("email");
    if (_email) {
      router.push("/courses");
    }
  }, [router]);

  return null;
}
