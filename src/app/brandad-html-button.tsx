'use client';
import { styled } from "@mui/material/styles";
import { ButtonProps } from '@mui/material/Button';
import { orange } from '@mui/material/colors';
import HtmlButton from "./common/html-button";

const BrandedHtmlButton = styled(HtmlButton)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[500],
  '&:hover': {
    backgroundColor: orange[700],
  },
  padding: theme.spacing(2),
  borderRadius: theme.spacing(3),
}));

export default BrandedHtmlButton;