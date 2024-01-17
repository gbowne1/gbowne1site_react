import "../assets/styles/About.css";
import profilePic from "../assets/images/me.jpg";

const About = () => {
  return (
    <section className="About-container">
      <header className="About-header">
        <h1>About Me</h1>
      </header>
      <article className="container-item About-bio">
        <div className="box">
          <img src={profilePic} alt="Headshot of Gregory Bowne" />
          <p>
            Hi there! my name is Gregory Bowne aka gbowne1. I am a 44 year old
            small business owner in the manufacturing sector. I own a machine
            and fabrication / engineering workshop with about 250 employees as
            of 4/30/2021. I also do manufacturing consulting as well as ERP &
            MRP software consutling for the major ERP and MRP software packages
            for regional manufacturing compaines and small machine shops.
          </p>
        </div>
      </article>

      <article className="container-item businesses">
        <div className="box">
          <h3>Businesses</h3>
          <ul>
            <li>
              <strong>Workshop Ownership:</strong>
              <br />
              Owns a machine and fabrication/engineering workshop with ~250
              employees (as of 4/30/2021).
            </li>

            <li>
              <strong>Consulting:</strong>
              <br />
              Provides manufacturing and ERP/MRP software consulting for
              regional manufacturing companies and small machine shops. Works
              with E2, JobBoss, Odoo, Microsoft Dynamics, and others.
            </li>
          </ul>
        </div>
      </article>
      <article className="container-item About-careers">
        <div className="box">
          <h3>Careers / Jobs</h3>
          <ul>
            <li>
              <strong>Workshop and Consulting:</strong>
              <br />
              Machine and fabrication/engineering workshop owner with ~250
              employees. Provides manufacturing and ERP/MRP software consulting
              for regional companies.
            </li>

            <li>
              <strong>Programming:</strong>
              <br />
              Codes as a hobby, working on personal projects.
            </li>

            <li>
              <strong>Mechanical CAD, CAM, CNC:</strong>
              <br />
              Experienced in Mechanical CAD, CAM, and CNC Programming. Former
              Autodesk Certified Instructor. Uses FreeCAD and KiCAD, not
              Autodesk products.
            </li>

            <li>
              <strong>Software Experience:</strong>
              <br />
              Core experience in AutoCAD 2002-2009, switched to Fusion 360 in
              mid-2013.
            </li>

            <li>
              <strong>CNC Programming:</strong>
              <br />
              Occasionally does CNC programming for 3 and 4 axes milling and
              lathes for a fee.
            </li>

            <li>
              <strong>Microsoft Office Specialist (MOS):</strong>
              <br />
              Certified for Microsoft Office products through Office 2010 on
              Windows.
            </li>
          </ul>
        </div>
      </article>

      <article className="container-item About-hobbies">
        <div className="box">
          <h3>Hobbies</h3>
          <ul>
            <li>
              <strong>Crafting:</strong>
              <br />
              Various crafts as a hobby.
            </li>

            <li>
              <strong>Tech and Programming:</strong>
              <br />
              Building and programming PCs.
              <br />
              IT work for home and business.
              <br />
            </li>

            <li>
              <strong>Metalworking/Machining:</strong>
              <br />
              Collecting vintage machine tools.
              <br />
              Metalworking as a main hobby.
              <br />
            </li>

            <li>
              <strong>Radio and Electronics:</strong>
              <br />
              Designing computers in the 8, 16, and early 32bit realm.
              <br />
              Shortwave radio listening.
              <br />
              Building antennas.
              <br />
            </li>

            <li>
              <strong>DXing and Communication:</strong>
              <br />
              Active participation in local radio DX parties.
              <br />
              Long-distance AM (Medium Wave) reception.
              <br />
              Active on GMRS and FRS.
              <br />
            </li>
          </ul>
        </div>
      </article>
      <article className="container-item About-computer-specs">
        <div className="box">
          <h3>Computer Specs</h3>
          <ul>
            <li>
              <strong>Case:</strong> CoolerMaster HAF 932
            </li>
            <li>
              <strong>Monitor:</strong> ACER @ 1920x1080 60Hz
            </li>
            <li>
              <strong>Keyboard:</strong> Logitech K520 with Logitech Unifying
              Receiver
            </li>
            <li>
              <strong>Mouse:</strong> Logitech M325 (Gray)
            </li>
            <li>
              <strong>Graphics:</strong> NVIDIA GF100GL [Quadro 4000] 2gb
            </li>
            <li>
              <strong>Motherboard:</strong> ASUSTek P8Z68-V PRO GEN3 v: Rev 1.xx
            </li>
            <li>
              <strong>RAM:</strong> 32GB
            </li>
            <li>
              <strong>Webcam:</strong> Logitech Webcam Pro 9000
            </li>
            <li>
              <strong>CPU:</strong> Intel Core i7-2600
            </li>
            <li>
              <strong>Printer:</strong> HP OfficeJet 8710
            </li>
            <li>
              <strong>Sound:</strong> Creative Labs X-Fi with EMU20k1
            </li>
            <li>
              <strong>Total Storage:</strong> 6.5TB
            </li>
            <li>
              <strong>Power Supply:</strong> eVGA 750w
            </li>
            <li>
              <strong>Optical Media:</strong> 48x Generic iATAPI DVD-RW (not
              enumerated properly)
            </li>
          </ul>
        </div>
      </article>
      <article className="container-item About-favorites">
        <div className="box">
          <h3>My Favorite Things</h3>
          {/* This is a placeholder list, you can change it to your favorite things */}
          <ul>
            <li>Spending Time with Friends and Family</li>
            <li>Watching Movies</li>
            <li>Exploring New Restaurants</li>
            <li>Reading a Good Book</li>
            <li>Taking Nature Walks</li>
            <li>Playing Video Games</li>
            <li>Attending Live Music Concerts</li>
            <li>Cooking and Trying New Recipes</li>
            <li>Traveling to Exciting Destinations</li>
            <li>Engaging in Creative Hobbies (e.g., painting, writing)</li>
            <li>Practicing Yoga or Meditation</li>
            <li>Attending Sporting Events</li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default About;
