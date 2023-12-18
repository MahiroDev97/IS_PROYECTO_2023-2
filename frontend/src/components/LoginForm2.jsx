


return (
    <Box component="form" noValidate autoComplete="off">
      <div className="App">
        <div className="container">
          <div className="card_area">
            <h1 className="container_title">Back to your digital life</h1>
            <p className="container_para">Choose one of the option to go</p>
            <div className="input_card">
              <TextField
                className="input"
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
              <TextField
                className="input"
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
            </div>
            <div className="line">
              <p className="line_para">Or continue with</p>
            </div>
            <div className="social_card">
              <div className="google">
                <img className="google_img" alt="" src="/1.png" />
              </div>
              <div className="google">
                <img className="google_img" alt="" src="/2.png" />
              </div>
              <div className="google">
                <img className="google_img" alt="" src="/3.png" />
              </div>
            </div>
            <div className="card_button">
              <button class="button-28">Log in</button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );