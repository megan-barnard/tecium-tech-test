import { Box, Paper } from "@mui/material";

import AddIcon from '@mui/icons-material/Add';
import EditNotificationsIcon from '@mui/icons-material/EditNotifications';
import EmailIcon from '@mui/icons-material/Email';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import GridOnIcon from '@mui/icons-material/GridOn';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import EditIcon from '@mui/icons-material/Edit';
import { IconBox } from "../../assets/Styles";

const Header = ({ carName }) => {
  return (
    <Paper elevation={2} sx={{ p: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box sx={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
        <IconBox><EditIcon /></IconBox>
        <Box component="h1" sx={{ fontSize: '20px' }}>{ carName }</Box> 
      </Box>
      <IconBox sx={{ py: 1 }}>
        <AddIcon />
        <EmailIcon />
        <EditNotificationsIcon />
        <FilterDramaIcon />
        <GridOnIcon />
        <GroupAddIcon />
      </IconBox>
    </Paper>
  );
}

export default Header;