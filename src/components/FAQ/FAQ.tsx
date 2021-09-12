import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { FAQTypes } from "./types";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import "./FAQ.css";
import Header from "../Header/Header";
const Accordion = withStyles({
  root: {
    boxShadow: "none",
    textAlign: "left",
    fontSize: "16px",
    color: "white",
    borderRadius: "5px",
    fontWeight: "bolder",
    backgroundColor: "#0f3345",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "#0f3345",
    borderRadius: "5px",
    color: "#ecd19a",
    margin: "7vh 0",
    marginBottom: -1,
    minHeight: 89,
    "&$expanded": {
      minHeight: 89,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2.5),
  },
}))(MuiAccordionDetails);

const CustomizedAccordions: React.FC<FAQTypes> = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div id="FAQ" className="faq-component">
      <Header header="FAQ" />
      <div className="accordion-wrpper">
        <Accordion
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              className={
                expanded === "panel1"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <AiOutlinePlus
                className={expanded === "panel1" ? "arrow active" : "arrow"}
              />
              <AiOutlineMinus
                className={expanded === "panel1" ? "minus active" : "minus"}
              />
              What are Crypto Keeperz?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Crypto Keeperz are a collection of 10,000 randomly generated
              characters from 120+ traits living on the Ethereum blockchain.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography
              className={
                expanded === "panel2"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <AiOutlineMinus
                className={expanded === "panel2" ? "minus active" : "minus"}
              />
              <AiOutlinePlus
                className={expanded === "panel2" ? "arrow active" : "arrow"}
              />
              IS THE ART RANDOMLY GENERATED?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, Crypto Keeper is completely unique with 120+ traits and
              millions of possible combinations.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography
              className={
                expanded === "panel3"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <AiOutlineMinus
                className={expanded === "panel3" ? "minus active" : "minus"}
              />
              <AiOutlinePlus
                className={expanded === "panel3" ? "arrow active" : "arrow"}
              />
              When will Crypto Keeperz be launching?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Launch date will be 19th September 8pm GMT.</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography
              className={
                expanded === "panel4"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <AiOutlineMinus
                className={expanded === "panel4" ? "minus active" : "minus"}
              />
              <AiOutlinePlus
                className={expanded === "panel4" ? "arrow active" : "arrow"}
              />
              How do I buy a Crypto Keeperz?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              All Crypto Keeper will be minted on our website for initial
              release. Once they sell out you will be able to purchase them on
              the secondary market on Opensea.io.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography
              className={
                expanded === "panel5"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <AiOutlineMinus
                className={expanded === "panel5" ? "minus active" : "minus"}
              />
              <AiOutlinePlus
                className={expanded === "panel5" ? "arrow active" : "arrow"}
              />
              How much will it cost?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              It will cost 0.08ETH + gas to mint a Crypto Keeper.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <Typography
              className={
                expanded === "panel6"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <AiOutlineMinus
                className={expanded === "panel6" ? "minus active" : "minus"}
              />
              <AiOutlinePlus
                className={expanded === "panel6" ? "arrow active" : "arrow"}
              />
              How many Crypto Keeperz can I mint in one transaction?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              There is a maximum of 20 Crypto Keeperz that can be minted per
              transaction.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
            <Typography
              className={
                expanded === "panel7"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <AiOutlineMinus
                className={expanded === "panel7" ? "minus active" : "minus"}
              />
              <AiOutlinePlus
                className={expanded === "panel7" ? "arrow active" : "arrow"}
              />
              How many Crypto Keeperz are available?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              There will only ever be a total of 10,000 Crypto Keeperz created.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
            <Typography
              className={
                expanded === "panel8"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <AiOutlineMinus
                className={expanded === "panel8" ? "minus active" : "minus"}
              />
              <AiOutlinePlus
                className={expanded === "panel8" ? "arrow active" : "arrow"}
              />
              How long after minting will my Crypto Keeper be revealed?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>The reveal will be 24 hours after launch.</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
export default CustomizedAccordions;
