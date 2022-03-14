import {
  TextField,
  CssBaseline,
  Button,
  Box,
  Container,
  Link,
  Avatar,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { changeEmail, changePassword, logIn } from "../redux/authSlice";

function SignIn() {
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);
  const error = useSelector((state) => state.auth.error);
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
    <>
      <CssBaseline />
      <Container maxWidth="xs">
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
          <Avatar sx={{ mx: "auto", bgcolor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Sign in
          </Typography>
          {error && (
            <Typography sx={{ textAlign: "center", color: "error.main" }}>
              {error}
            </Typography>
          )}
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
            <Link>Forgot Password?</Link>
            <Link href="/sign-up">Don't have an account? Sign up</Link>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default SignIn;
