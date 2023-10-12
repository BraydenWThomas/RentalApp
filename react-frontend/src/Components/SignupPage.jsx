import { Button, Grid, TextField, Stack, Container } from "@mui/material";
import "../Styles/SignupPage.css"

const SignupPage = () => {
    

    return (
        <Container maxWidth="sm">
            <div className="formbox">
                    <form>
                        <Grid container>
                            <Grid xs={6} paddingInline={2}>
                                <p className="fieldLabel">First Name*</p>
                                <TextField fullWidth className="formfield" color="secondary" required id="outline-required"/>
                            </Grid>
                            <Grid xs={6} paddingInline={2}>
                                <p className="fieldLabel">Last Name*</p>
                                <TextField fullWidth className="formfield" color="secondary"/>
                            </Grid>
                            <Grid xs={12} paddingInline={2}>
                            <p className="fieldLabel">Email*</p>
                            <TextField fullWidth className="formfield" color="secondary"/>
                            </Grid>
                            <Grid xs={12} paddingInline={2}>
                                <p className="fieldLabel">Date of Birth*</p>
                                <TextField fullWidth className="formfield" color="secondary"/>
                            </Grid>
                            <Grid xs={12} paddingInline={2}>
                                <p className="fieldLabel">Password*</p>
                                <TextField fullWidth className="formfield" color="secondary"/>
                            </Grid>
                            <Grid xs={12} paddingInline={2}>
                                <p className="fieldLabel">Confirm Password*</p>
                                <TextField fullWidth className="formfield" color="secondary"/>
                                <p className="fieldLabel">Use 8 or more characters with a mix of lower and upper case letters & numbers.</p>
                            </Grid>
                        </Grid>
                    </form>
                </div>
        </Container>
    )
}

export default SignupPage