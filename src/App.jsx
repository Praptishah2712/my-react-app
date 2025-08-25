const App = () => {
  return (
    <div className="Login-Container">
      <h2 className="form-title">Login</h2>
      {/* <p className="seprator"><span></span></p> */}

      <form action="#" className="login-form">
        <div className="input-wrapper">
          <i className="material-symbols-rounded">mail</i>
          <input
            type="text"
            placeholder="Username"
            className="input-fields"
            required
          />
        </div>

        <div className="input-wrapper">
          <i className="material-symbols-rounded">person</i>
          <input
            type="password"
            placeholder="password"
            className="input-fields"
            required
          />
        </div>

        <button className="login-button">Login</button>
      </form>

      <p className="signup">
        Don’t have an account? <a href="#">Sign up</a>
      </p>
    </div>
  );
};

export default App;
