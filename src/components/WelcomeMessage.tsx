import { Box } from "@material-ui/core";
import React from "react";

interface WelcomeMessageProps {
  position: string;
  country?: string;
}

const WelcomeMessage = ({
  position,
  country = "VietNam",
}: WelcomeMessageProps) => {
  return (
    <Box mb={1} textAlign='center'>
      Welcome {position} from {country}
    </Box>
  );
};

export default WelcomeMessage;
