import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const SubmitButton = styled(Button)({
  borderColor: "#1dd597",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#111d19",
    borderColor: "#1dd597",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#1dd597",
    borderColor: "#1dd597",
  },
});

export default SubmitButton;
