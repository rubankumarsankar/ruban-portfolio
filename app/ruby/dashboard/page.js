import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminDashboard from "@/components/admin/AdminDashboard";
import { portfolioData } from "@/data/portfolio";
import { ADMIN_SESSION_COOKIE, verifyAdminSession } from "@/lib/admin-auth";
import { getEnquiries } from "@/lib/enquiries";

export const dynamic = "force-dynamic";

export default async function RubyDashboardPage() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  const session = verifyAdminSession(sessionToken);

  if (!session) {
    redirect("/ruby");
  }

  const enquiries = await getEnquiries();

  return (
    <div className="min-h-full">
      <AdminDashboard
        enquiries={enquiries}
        adminEmail={session.email}
        contactInfo={portfolioData.personalInfo}
      />
    </div>
  );
}
