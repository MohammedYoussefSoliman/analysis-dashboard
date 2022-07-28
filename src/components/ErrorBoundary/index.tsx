/* eslint-disable react/jsx-no-useless-fragment */
import React from "react";
import { useNavigate } from "react-router-dom";

type ErrorBoundaryProps = {
  children: React.ReactNode;
  error: boolean;
};

export default function ErrorBoundary({ children, error }: ErrorBoundaryProps) {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (error) navigate("/error");
  }, [error, navigate]);

  return <>{children}</>;
}
