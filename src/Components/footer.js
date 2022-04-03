
function Footer() {
  return (
    
    <footer className="footer">
      
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-sm-3 p-3  text-white"><h3>Career</h3>
            <h6>Programmer</h6>
            <h6>Frontend</h6>
            <h6>Backend</h6>

          </div>
          <div className="col-sm-3 p-3  text-white"><h3>About-us</h3>
            <h6>privacy policy</h6>
            <h6>Term & Condition</h6>
            <h6>Prices</h6>

          </div>
          <div className="col-sm-3 p-3  text-white"><h3>Contact-us</h3>
            <h6 >Mobile Number- +91-8573867986</h6>
            <h6> email-Id- azeemmohammad377@gmail.com</h6>
            <h6>Official Website- <a href="/"> theazeem.online</a></h6>
            <h6>Location- 58-shadab colony vikasnagar lucknow 226006, India</h6>
          </div>
          <div className="col-sm-3 p-3  ">
            <h4>Please Select language</h4>
            <select id="dropdown">
              <option value="N/A">select language</option>
              <option value="1">English</option>
              <option value="2">French</option>
              <option value="3">German</option>
              <option value="4">Spanish</option>
            </select>
          </div>

        </div>
      </div>

    </footer>
  );
}
export default Footer;
