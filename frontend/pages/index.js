import { useRouter } from "next/router";
import { signIn, useSession, signOut, getSession } from "next-auth/react";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      autoLoginHandler(session.user.email);
    } else {
      router.push("/onboarding", undefined, { shallow: false });
    }
    return;
  }, [session, status]);

  return <></>;
}
