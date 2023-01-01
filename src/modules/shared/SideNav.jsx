import {
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Box,
  Avatar,
} from "@mui/material";
import { ExpandMore, Send } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const navigate = useNavigate();

  const btnLink = () => {
    navigate("/electricity-bill/dpdc-postpaid/bill-list");
  };

  return (
    <div>
      <Box
        display="flex"
        justifyContent="start"
        sx={{
          pt: 2,
          pb: 2.5,
          pl: 1,
          color: "white",
        }}
      >
        <Avatar
          sx={{ width: 45, height: 45 }}
          src="/static/images/avatar/2.jpg"
        />
        <Box
          sx={{
            ml: 1.2,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          <Box
            sx={{
              fontSize: 13,
              mt: 0.5,
              mb: 0.3,
            }}
          >
            Shahin.100
          </Box>
          <Box
            sx={{
              fontSize: 12,
            }}
          >
            Shahin Khalifa
          </Box>
        </Box>
      </Box>
      <Accordion className="accordion">
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Electricity</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            p: 0,
          }}
        >
          <List>
            <ListItemButton
              onClick={btnLink}
              sx={{
                pt: 0.5,
                pr: 1,
                pb: 0.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: "20px",
                }}
              >
                <Send
                  sx={{
                    fontSize: 13,
                    minWidth: 0.1,
                  }}
                />
              </ListItemIcon>
              <ListItemText>DESCO Postpaid</ListItemText>
            </ListItemButton>
            <ListItemButton
              sx={{
                pt: 0.5,
                pr: 1,
                pb: 0.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: "20px",
                }}
              >
                <Send
                  sx={{
                    fontSize: 13,
                  }}
                />
              </ListItemIcon>
              <ListItemText>DPDC Postpaid</ListItemText>
            </ListItemButton>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion className="accordion">
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography>Gas Bill</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            p: 0,
          }}
        >
          <List>
            <ListItemButton
              sx={{
                pt: 0.5,
                pr: 1,
                pb: 0.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: "20px",
                }}
              >
                <Send
                  sx={{
                    fontSize: 13,
                    minWidth: 0.1,
                  }}
                />
              </ListItemIcon>
              <ListItemText>Bakhrabad</ListItemText>
            </ListItemButton>
            <ListItemButton
              sx={{
                pt: 0.5,
                pr: 1,
                pb: 0.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: "20px",
                }}
              >
                <Send
                  sx={{
                    fontSize: 13,
                  }}
                />
              </ListItemIcon>
              <ListItemText>Karnaphuli</ListItemText>
            </ListItemButton>
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SideNav;
