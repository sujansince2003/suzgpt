import { SignUp } from "@clerk/clerk-react";

const signupPage = () => {
  return (
    <div className=" pt-40 flex items-center justify-center">
      <SignUp path="/register" signInUrl="/login" />;
    </div>
  );
};

export default signupPage;
