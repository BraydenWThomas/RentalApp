import { Button, Grid, TextField, Stack } from "@mui/material";
import "../Styles/SignupPage.css"

const SignupPage = () => {
    

    return (
        <Grid container>
            <Grid xs={1}/>
            <Grid xs={10} className="formbox">
                <Stack direction="row" spacing={5}>
                    <Stack direction="column">
                        <p>First Name:</p>
                        <TextField/>
                    </Stack>
                    <Stack direction="column">
                        <p>Last Name:</p>
                        <TextField/>
                    </Stack>
                </Stack>
            </Grid>
            <Grid xs={1}/>
        </Grid>
    )
}

export default SignupPage