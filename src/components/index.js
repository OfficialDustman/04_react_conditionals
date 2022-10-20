import React, { useState } from "react";
import myImage from "./image-victor.jpg";

function SignInOrOut() {
  const [isAuth, setIsAuth] = useState(false);

  const handleAuth = () => {
    setIsAuth(!isAuth);
  };

  return (
    <>
      {isAuth ? (
        <section className="form_container">
          <header>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/topibro-tech.appspot.com/o/minified-images%2Ftopibro-logo2.png?alt=media&token=a27cd13f-8d1e-45b5-a191-b0ecde94bb28"
              alt="Topibro Logo"
            />
          </header>

          <form action="">
            <label htmlFor="#name">Username</label>
            <input type="text" id="name" required />

            <label htmlFor="#email">E-Mail</label>
            <input type="email" id="email" required />

            <label htmlFor="#password">Password</label>
            <input type="password" id="password" required />

            <input type="submit" value="SIGN IN" onClick={handleAuth} />
          </form>
        </section>
      ) : (
        <div className="card">
          <div className="cover-photo">
            <img src={myImage} className="profile" />
          </div>
          <h3 className="profile-name">James Carson</h3>
          <p className="about">
            UI/UX Designer <br /> Front End Developer
          </p>

          <button className="btn" onClick={handleAuth}>
            Sign Out
          </button>
        </div>
      )}
    </>
  );
}

export default SignInOrOut;