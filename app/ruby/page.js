import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminLoginForm from "@/components/admin/AdminLoginForm";
import { ADMIN_SESSION_COOKIE, verifyAdminSession } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export default async function RubyPage() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  const session = verifyAdminSession(sessionToken);

  if (session) {
    redirect("/ruby/dashboard");
  }

  return (
    <div className="min-h-[560px] flex items-center justify-center">
      <AdminLoginForm />
    </div>
  );
}
