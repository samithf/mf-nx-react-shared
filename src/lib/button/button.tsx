/* eslint-disable-next-line */
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

export type ButtonProps = MuiButtonProps;

export function Button(props: ButtonProps) {
  return <MuiButton {...props}></MuiButton>;
}

export default Button;
