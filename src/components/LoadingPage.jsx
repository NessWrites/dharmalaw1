import Logo from "./../assets/DLPC_logo.svg";
import "./../css/components/LoadingPage.css";

export default function LoadingPage() {
  return (
    <div className="loading">
      <img className="loadingLogo" src={Logo} alt="logo"/>
    </div>
  );
}
