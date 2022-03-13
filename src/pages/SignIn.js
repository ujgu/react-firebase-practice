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

function SignIn() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xs">
        <Box component="form" sx={{ mt: 4 }}>
          <Avatar sx={{ mx: "auto", bgcolor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
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
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            required
            type="password"
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Sign in
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
            <Link>Don't have an account? Sign up</Link>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default SignIn;
