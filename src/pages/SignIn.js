import { TextField, Button, Box, Link, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { changeEmail, changePassword, logIn } from "../redux/authSlice";
import { Link as RouterLink } from "react-router-dom";

function SignIn() {
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    dispatch(changeEmail(e.target.value));
  };
  const handlePasswordChange = (e) => {
    dispatch(changePassword(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Sign in
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Email Address"
        required
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => handleEmailChange(e)}
      />
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        required
        type="password"
        value={password}
        onChange={(e) => handlePasswordChange(e)}
      />
      <Button
        type="submit"
        variant="contained"
        disabled={isLoading}
        fullWidth
        sx={{ mt: 2 }}
      >
        {isLoading ? "Loading..." : "Sign in"}
      </Button>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
          cursor: "pointer",
        }}
      >
        <Link component={RouterLink} to="../forgot-password">
          Forgot Password?
        </Link>
        <Link component={RouterLink} to="../sign-up">
          Don't have an account? Sign up
        </Link>
      </Box>
    </form>
  );
}

export default SignIn;
