import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { IContact } from "./Contact.interface";
import styles from "./Contact.module.scss";

export const Contact: React.FC<IContact> = ({ title, image }) => {
  return (
    <>
      <Box>
        <Card variant="outlined">
          <React.Fragment>
            <CardContent className={styles["contact-container"]}>
              <img className={styles["contact-icon"]} src={image} alt={title} />
              <Typography variant="h5" component="div">
                {title}
              </Typography>
            </CardContent>
          </React.Fragment>
        </Card>
      </Box>
    </>
  );
};
