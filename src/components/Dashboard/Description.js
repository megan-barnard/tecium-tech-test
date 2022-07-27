import { Box, Divider, Paper, Typography } from "@mui/material";
import { BlockHeading } from "../../assets/Styles";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';

const Description = ({ carDesc }) => {
  return (
    <Paper elevation={2} sx={{ p: 3, height: "100%" }}>
      <BlockHeading title="Description">
        <EditIcon />
        <ContentCopyIcon />
      </BlockHeading>
      <Box sx={{ fontSize: "15px" }}>{ carDesc }</Box>
    </Paper>
  );
}

export default Description;