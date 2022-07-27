import { Paper} from "@mui/material";
import { BlockHeading } from "../../assets/Styles";
import AddIcon from '@mui/icons-material/Add';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';

const GpsMap = () => {
  return (
    <Paper elevation={2} sx={{ p: 1 }}>
      <BlockHeading title="Location">
        <AddIcon />
        <AccountTreeIcon />
        <AddLocationIcon />
        <AutoAwesomeMotionIcon />
      </BlockHeading>
      <iframe width="100%" height="440" id="gmap_canvas" src="https://maps.google.com/maps?q=toronto&t=&z=9&ie=UTF8&iwloc=&output=embed" scrolling="no"></iframe>
    </Paper>
  );
}

export default GpsMap;