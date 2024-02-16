'use client';
import { styled } from "@mui/material/styles";
import { ButtonProps } from '@mui/material/Button';
import { green } from '@mui/material/colors';
import CommonButton from "./common/button";

const BrandedButton = styled(CommonButton)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(green[500]),
  backgroundColor: green[500],
  '&:hover': {
    backgroundColor: green[700],
  },
  borderRadius: theme.spacing(1),
}));

export default BrandedButton;