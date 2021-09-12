import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import EachSurvival from "../Survival/EachSurvival";
import { AiOutlineClose } from "react-icons/ai";
import banner from "../../assets/images/header.png";
import "./modal.css";

interface survivalTypes {
  title?: string;
  role?: string;
  onClickFun?: any;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    outline: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "90%",
    margin: " 2vh auto",
    position: "relative",
    width: "90%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "10px",
  },
}));

const ModalComponent: React.FC<survivalTypes> = ({ title, role }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={{ overflowY: "scroll" }} className={classes.paper}>
      <AiOutlineClose onClick={handleClose} className="modal-x-icon" />
      <h2 className="modal-title">ANY TITLE HERE</h2>
      <p className="modal-description">
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <img className="modal-img" src={banner} alt="" />
      <p className="modal-speech">
        Use this area to describe your project. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt
        minus dignissimos deserunt repellat aperiam quasi sunt officia expedita
        beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
      </p>
      <span className="modal-span">Title: some text</span>
      <span className="modal-span">Title: some text</span>
      <span className="modal-span">Title: some text</span>
      <button onClick={handleClose} className="modal-btn">
        <AiOutlineClose />
        Close Prpject
      </button>
    </div>
  );

  return (
    <div>
      <EachSurvival title={title} role={role} onClickFun={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};
export default ModalComponent;
