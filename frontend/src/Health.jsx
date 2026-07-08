import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function Health() {
  const [isConnecting, setIsConnecting] = useState(true);
  const [backendStatus, setBackendStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function start_run() {
    try {
      const response = await fetch(import.meta.env.VITE_BACKEND);
      const status = await response.json();
      console.log(status);

      setBackendStatus(status.status);
      setIsConnecting(false);
    } catch (error) {
      setErrorMessage(error.message);
      console.error(error);
      setIsConnecting(false);
    }
  }

  useEffect(() => {
    start_run();
  }, []);

  if (isConnecting)
    return (
      <div>
        <Box sx={{ display: "flex" }}>
          <CircularProgress aria-label="Loading…" />
        </Box>
      </div>
    );
  if (errorMessage)
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error Alert with a scary title.
      </Alert>
    );
  return (
    <>
      <h2>Backend Status</h2>
      <p>{backendStatus}</p>
    </>
  );
}

export default Health;
