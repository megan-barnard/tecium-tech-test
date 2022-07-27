import { Box, Paper } from "@mui/material";
import { BlockHeading } from "../../../assets/Styles";
import { ResponsiveContainer } from 'recharts';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AddBoxIcon from '@mui/icons-material/AddBox';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LoopIcon from '@mui/icons-material/Loop';

const ChartTemplate = ({ children, height, title }) => {
  return (
    <Paper elevation={2} sx={{ p: 1, m: 0, height: height+20, width: '100%' }}>
      <BlockHeading title={title}>
        <FileDownloadIcon />
        <AddBoxIcon />
        <BookmarkIcon />
        <LoopIcon />
      </BlockHeading>
      <Box sx={{ px: 0.5, height: height-50, width: '100%' }}>
        <ResponsiveContainer>
          {children}
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}

export default ChartTemplate;