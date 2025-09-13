import { SignIn } from "@clerk/clerk-react";

const LoginPage = () => {
  return (
    <div className=" pt-40 flex items-center justify-center">
      <SignIn path="/login" signInUrl="/register" />
    </div>
  );
};

export default LoginPage;
