import { useEffect } from "react";
import { signUp, signIn } from "./config/firebase";

const App = () => {
  useEffect(() => {
    // signUp("Joe", "joe@mail.com", "1234567")
    //   .then(() => {
    //     console.log("Done");
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    signIn("joe@mail.com", "1234567")
      .then(() => {
        console.log("Done");
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return <h1>Hi, App!</h1>;
};

export default App;
