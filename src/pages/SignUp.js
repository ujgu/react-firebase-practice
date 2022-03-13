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

function SignUp() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xs">
        <Box component="form" sx={{ mt: 4 }}>
          <Avatar sx={{ mx: "auto", bgcolor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Sign up
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Full Name"
            required
            autoComplete="name"
            autoFocus
          />
          <TextField
            fullWidth
            margin="normal"
            label="Email Address"
            required
            autoComplete="email"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Password"
            required
            type="password"
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Sign up
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
            <Link>Already have an account? Sign in</Link>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default SignUp;
