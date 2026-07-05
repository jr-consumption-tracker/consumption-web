import { AuthLayoutContent } from "./AuthLayoutContent";
import { AuthLayoutInfo } from "./AuthLayoutInfo";

type AuthLayoutProps = {
  children: React.ReactNode;
  header: string;
  description: string;
};

const AuthLayout = ({ children, header, description }: AuthLayoutProps) => {
  return (
    <div className="relative overflow-hidden bg-surface">
      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-8">
        <div className="w-full max-w-6xl">
          {/* Auth card */}
          <div className="relative bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden">
            <div className="relative flex flex-col md:h-auth md:flex-row">
              <AuthLayoutInfo header={header} description={description} />
              <AuthLayoutContent>{children}</AuthLayoutContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
