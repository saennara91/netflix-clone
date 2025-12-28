import netflix_spinner from "../assets/netflix_spinner.gif";

const AuthLoading = () => {
  return (
    <div className="login-spinner">
      <img src={netflix_spinner} alt="loading" />
    </div>
  );
};

export default AuthLoading;
