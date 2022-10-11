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
            label="mail"
            placeholder="Your mail"
            helperText={error ? "Incorrect entry." : ""}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <Button type="submit" alignSelf="center">
            go
          </Button>
        </form>
      )}
    </>
  );
}
