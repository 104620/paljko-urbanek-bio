import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { ICardCustom } from "./CardCustom.interface";
import styles from "./CardCustom.module.scss";

export const CardCustom: React.FC<ICardCustom> = ({ title, subtitle }) => {
  return (
    <>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <React.Fragment>
            <CardContent>
              <Typography variant="h4" component="div">
                {title}
              </Typography>
              {subtitle ? (
                <Typography
                  sx={{ mb: 1.5 }}
                  variant="h6"
                  color="text.secondary"
                >
                  {subtitle}
                </Typography>
              ) : undefined}
            </CardContent>
          </React.Fragment>
        </Card>
      </Box>
    </>
  );
};
