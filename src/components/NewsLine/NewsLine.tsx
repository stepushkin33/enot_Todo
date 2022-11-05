import React from "react";
import { useNews } from "../../app/hooks/useNews";
import { Box, Typography } from "@mui/material";
import * as styles from "./newsLine.styles";

const NewsLine = () => {
  const { data } = useNews();

  return (
    <Box sx={styles.lineStyle}>
      <Typography variant="body1" component="span">
        {data}
      </Typography>
    </Box>
  );
};

export default NewsLine;
