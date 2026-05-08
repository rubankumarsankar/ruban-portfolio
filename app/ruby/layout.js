import AdminShell from "@/components/admin/AdminShell";

export const metadata = {
  title: "Ruby Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RubyLayout({ children }) {
  return <AdminShell>{children}</AdminShell>;
}
