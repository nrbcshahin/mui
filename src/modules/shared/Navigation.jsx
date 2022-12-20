import {
  ContentCopy,
  ContentCut,
  ContentPaste,
  ExpandMore,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          ELECTRICIT BILL
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: 0,
          }}
        >
          <MenuList>
            <Link to="/desco">
              <MenuItem>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
              </MenuItem>
            </Link>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>
          </MenuList>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          GAS BILL
        </AccordionSummary>
        <AccordionDetails
          sx={{
            padding: 0,
          }}
        >
          s
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Navigation;
