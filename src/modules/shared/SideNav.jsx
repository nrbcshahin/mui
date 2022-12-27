import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { ExpandMore, Send } from "@mui/icons-material";

const SideNav = () => {
  return (
    <div>
      <Accordion className="accordion">
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItemButton
              sx={{
                p: 0,
              }}
            >
              <ListItemIcon>
                <Send
                  sx={{
                    fontSize: 13,
                    minWidth : .1

                  }}
                />
              </ListItemIcon>
              <ListItemText>DESCO Postpaid</ListItemText>
            </ListItemButton>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SideNav;
