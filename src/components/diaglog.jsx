import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import appConfig from "../config";
import Csv from "./csv";

export const DialogComponent = ({
  open,
  handleClose,
  Score,
  isGameOver,
  generated,
  csvUser,
  csvResult,
  time,
  afterBlock,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        style: {
          backgroundColor: "#fff",
          borderRadius: 20,
        },
      }}
    >
      <DialogTitle id="alert-dialog-title">
        <span style={{ fontFamily: "Noto sans" }}>
          {appConfig.popUpHeading}
        </span>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" component="div">
          <span className="sub" style={{ fontFamily: "Noto sans" }}>
            Your Score: {parseInt(Score) ?? "0"}
          </span>
          {isGameOver && (
            <>
              <h2 className="sub">Game Over</h2>
              <Csv
                value1={generated}
                value2={csvUser}
                value3={csvResult}
                value4={time}
              />
            </>
          )}
        </DialogContentText>
      </DialogContent>
      <div style={{ backgroundColor: "#2EA0DE" }}>
        {!isGameOver && (
          <DialogActions>
            <Button
              onClick={afterBlock}
              autoFocus
              className="sub"
              style={{
                color: "#fff",
                textAlign: "center",
                textDecoration: "underline",
              }}
            >
              {" "}
              <span>{appConfig.popUpNextButton}</span>
            </Button>
          </DialogActions>
        )}
        {isGameOver && (
          <DialogActions>
            <Button
              autoFocus
              style={{
                color: "#fff",
                textAlign: "center",
                textDecoration: "underline",
              }}
            >
              <span>{appConfig.popUpEndButton}</span>
            </Button>
          </DialogActions>
        )}
      </div>
    </Dialog>
  );
};
