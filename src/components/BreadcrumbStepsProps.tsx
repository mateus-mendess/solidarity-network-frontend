import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

interface BreadcrumbStepsProps {
  steps: string[]; // nomes das etapas
  currentStep: number; // etapa atual (1-based, ex: 1 = primeira etapa)
}

const BreadcrumbSteps: React.FC<BreadcrumbStepsProps> = ({
  steps,
  currentStep,
}) => {
  return (
    <Breadcrumbs
      separator="›"
      aria-label="breadcrumb"
      sx={{
        fontSize: "16px",
        color: "#1E88E5",
        "& a": {
          textDecoration: "none",
          color: "#1E88E5",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      }}
    >
      {steps.map((label, index) => {
        const isActive = index === currentStep - 1;

        return isActive ? (
          <Typography key={label} sx={{ fontWeight: 600, color: "#1E88E5" }}>
            {label}
          </Typography>
        ) : (
          <Link key={label} to="#">
            {label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumbSteps;
