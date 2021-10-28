import { Box } from "@material-ui/core";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

interface WelcomeMessageProps {
  position: string;
  country?: string;
}

const WelcomeMessage = ({
  position,
  country = "VietNam",
}: WelcomeMessageProps) => {
  const {
    authInfo: { username },
  } = useContext(AuthContext);
  return (
    <Box mb={1} textAlign="center">
      Welcome {username} - {position} from {country}
    </Box>
  );
};

export default WelcomeMessage;
