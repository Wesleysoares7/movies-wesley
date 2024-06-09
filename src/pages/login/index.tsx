import logo from "../../assets/images/logo.svg";
import LoginForm from "./components/form";

const Login = () => {
  return (
    <div className="relative h-dvh flex items-center justify-center bg-black/45">
      <img
        className="absolute top-6 left-8 opacity-100 h-10"
        src={logo}
        alt="netflix logo"
      />
      <img
        className="h-full absolute top-0 left-0 w-full -z-10"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/6b27d791-2d75-4ed0-9387-a776827fbdf3/BR-pt-20240603-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="netflix background image"
      />
      <LoginForm />
    </div>
  );
};

export default Login;
