import React from "react";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const Signup = () => {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };

  const avatarStyle = { backgroundColor: "#FFBCBC" };
  const marginTop = { marginTop: 20 };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
          <h2>Sign Up</h2>
        </Grid>

        <form>
          <TextField fullWidth label="Name" />
          <TextField fullWidth label="Email" />
          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField fullWidth label="Password" />
          <TextField fullWidth label="Confirm Password" />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            align="centre"
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
