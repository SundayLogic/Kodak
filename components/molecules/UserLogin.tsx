import LogStatus from "../atoms/buttons/LogStatus";
import UserImg from "../atoms/images/UserImg";

const UserLogin = () => {
  return (
    <div className="flex items-center justify-center space-x-3 ">
      <div className="invisible md:visible">
        <LogStatus status={true} />
      </div>
      <UserImg w={50} h={50} />
    </div>
  );
};
export default UserLogin;

