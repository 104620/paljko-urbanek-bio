import React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { ISkill } from "./Skill.interface";
import styles from "./Skill.module.scss";

export const Skill: React.FC<ISkill> = ({ title, image }) => {
  return (
    <>
      <Box>
        <Card variant="outlined">
          <React.Fragment>
            <CardContent className={styles["skill-container"]}>
              <img className={styles["skill-icon"]} src={image} alt={title} />
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
