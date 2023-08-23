import Input from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const CustomInput = styled(Input)(({ theme }) => ({
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& label": {
    color: "#fff",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#fff",
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: "#fff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#1dd597",
  },
  "& .MuiInputBase-input": {
    color: "#fff",
  },
}));

export default CustomInput;
