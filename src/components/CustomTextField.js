import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)({
  borderColor: "#1dd597",

  "& label.Mui-focused": {
    color: "#fff",
  },
  "& label": {
    color: "#fff",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#fff",
  },
  "& .MuiInput-underline:hover:before": {
    borderBottomColor: "#fff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#1dd597",
  },
});

export default CustomTextField;
