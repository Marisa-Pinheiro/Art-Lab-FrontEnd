function AboutUs() {
  return (
    <div className="about-section">
      <h1>About Us Page</h1>
      <h2 style="text-align:center">Made with love by:</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQEqfJ19MNO4Mw/profile-displayphoto-shrink_800_800/0/1684847026270?e=1691625600&v=beta&t=Lz9clUQ3u0S2-7uQgDFPao5Ze30zBYinIJ4E4gMtsrQ"
              alt="marisa-Image"
              style="width:100%"
            />
            <div className="container">
              <h2>Marisa Pinheiro</h2>
              <p className="title">Junior Web Developer</p>
              <a href="marisa.nbsp@gmail.com">Send me an email!</a>
              <a href="linkedin.com/in/marisa-pinheiro-833a12113">
                Find me on Linked In
              </a>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQHutZ64ysndtw/profile-displayphoto-shrink_800_800/0/1685901605393?e=1691625600&v=beta&t=hTvC1qnydDfAemXqCw_j3dD_V-lyrxqZJpJkHTSLmbI"
              alt="pedro-Image"
              style="width:100%"
            />
            <div className="container">
              <h2>Pedro Nogueira</h2>
              <p className="title">Junior Web Developer</p>
              <a href="pedr0.nogueira@hotmail.com">Send me an email!</a>
              <a href="https://www.linkedin.com/in/pedroinogueira/">
                Find me on Linked In
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
