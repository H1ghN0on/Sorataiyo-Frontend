import AuthLayout from "../AuthLayout";

import "./Finish.scss";

const FinishPage = () => {
  return (
    <AuthLayout title="Thank you for registration!" isRegister isFinish>
      <h2 className="finish-title">You will be redirected to login page in 3 seconds</h2>
    </AuthLayout>
  );
};

export default FinishPage;
