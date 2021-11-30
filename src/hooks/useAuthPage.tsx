import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useAuthPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const _email = localStorage.getItem("email");
    if (_email) {
      setEmail(_email);
    } else {
      router.push("/");
    }
  }, [router]);

  return { email };
}
