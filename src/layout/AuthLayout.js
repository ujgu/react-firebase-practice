import { Container, Avatar, Typography } from "@mui/material";
import LockOutlined from "@mui/icons-material/LockOutlined";
import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useIsLoggedIn } from "../config/hooks";
import { useSelector } from "react-redux";

export default function AuthLayout() {
  const isLoggedIn = useIsLoggedIn();

  const error = useSelector((state) => state.auth.error);

  if (isLoggedIn === null) return <h1>Loading...</h1>;
  else if (isLoggedIn === true) return <Navigate replace to="/" />;

  return (
    <Container maxWidth="xs" sx={{ pt: 4 }}>
      <Avatar sx={{ mx: "auto", bgcolor: "secondary.main" }}>
        <LockOutlined />
      </Avatar>
      {error && (
        <Typography sx={{ textAlign: "center", color: "error.main" }}>
          {error}
        </Typography>
      )}
      <Outlet />
    </Container>
  );
}
