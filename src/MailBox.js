import React, { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { Done } from "@mui/icons-material";

export default function MailBox() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [submit, setSubmit] = useState(false);
  return (
    <>
      {submit ? (
        <Done
          onClick={() => {
            setSubmit(false);
            setError(false);
            setValue("");
          }}
        />
      ) : (
        <form
          style={{
            display: "flex",
            gap: "10px",
            justigyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
            if (value.match(regex)) {
              setSubmit(true);
            } else {
              setError(true);
            }
          }}
        >
          <TextField
            error={error}
            id="outlined-error"
            placeholder={error ? "johnmadden/mail" : "Your mail"}
            helperText={error ? "Please insert a valid email" : ""}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
              if (value.match(regex)) {
                setError(false);
              } else {
                setError(true);
              }
            }}
            sx={{
              "& .MuiInputBase-input": {
                borderRadius: "2rem",
                backgroundColor: "info.main",
                border: "1px solid",
                borderColor: "primary.main",
                height: "10px",
              },
            }}
          />
          <Button type="submit">go</Button>
        </form>
      )}
    </>
  );
}
