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
import {
  changeName,
  changeEmail,
  changePassword,
  register,
} from "../redux/authSlice";

function SignUp() {
  const name = useSelector((state) => state.auth.name);
  const email = useSelector((state) => state.auth.email);
  const password = useSelector((state) => state.auth.password);
  const error = useSelector((state) => state.auth.error);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };
  const handleEmailChange = (e) => {
    dispatch(changeEmail(e.target.value));
  };
  const handlePasswordChange = (e) => {
    dispatch(changePassword(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
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
            Sign up
          </Typography>
          {error && (
            <Typography sx={{ textAlign: "center", color: "error.main" }}>
              {error}
            </Typography>
          )}
          <TextField
            fullWidth
            margin="normal"
            label="Full Name"
            required
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => handleNameChange(e)}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email Address"
            required
            autoComplete="email"
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
            {isLoading ? "Loading..." : "Sign up"}
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              mt: 2,
              cursor: "pointer",
            }}
          >
            <Link href="/sign-in">Already have an account? Sign in</Link>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default SignUp;
