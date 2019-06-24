import React, { Component } from 'react';
import NavBar from './NavBar';
import NavbarPage from './mdbNavbar';
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import img1 from './background.jpg';
import AboutUsSnakeImage from './AboutUsSnakeImage.png';
import section2snake1 from './section2snake1.png';
import section2snake2 from './section2snake2.png';
import section2scorpion1 from './section2scorpion1.png';
import section2scorpion2 from './section2scorpion2.jpg';
import phoneIcon from './phone.png';
import emailIcon from './mail.png';
import locationIcon from './locationPin.png';
import './Home.scss';
class Home extends Component {

  componentDidMount() {
    this.getVenomCategories();
  }

  getVenomCategories = () => {
    const url = 'https://admin.armvenomprod.com/api/venom-categories';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // this.setState({
        //   fullData: data,
        //   dailyData: dailyData,
        //   hourlyData: hourlyData,
        //   axisData: axisData,
        //   minMaxData: minMaxData,
        // });
      });
  }
  render() {
    return (
      <>
        <NavBar />
        <div className="back-image" style={{display: 'flex', justifyContent: 'center'}}>
        <h1 style={{color: 'white', position: 'absolute', marginTop: '10%', zIndex: 4, fontSize: 90, textAlign: 'center'}}>Venom</h1>
          <img
            src={img1}
            alt=""
            style={{
              maxHeight: 500,
              width: '100%',
              top: 0,
              objectFit: 'cover',
            }}
          />
        </div>
        <section>
          <div style={{ paddingLeft: 140 }}>
            <h2
              style={{
                fontFamily: 'roboto',
                fontSize: 77,
                color: '#03548a',
                fontWeight: 'lighter',
              }}
            >
              About Us
            </h2>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <p
                style={{
                  fontFamily: 'roboto',
                  fontSize: 25,
                  color: '#03548a',
                  fontWeight: 'lighter',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <img src={AboutUsSnakeImage} alt="" />
            </div>
          </div>
        </section>
        <section style={{ backgroundColor: '#03548a' }}>
          <h2
            style={{
              color: 'white',
              fontWeight: 100,
              paddingTop: 32,
              fontSize: 50,
              textAlign: 'center',
              fontFamily: 'roboto',
              letterSpacing: 4,
            }}
          >
            Venoms
          </h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <img
                src={section2snake1}
                style={{ maxHeight: 353, maxWidth: 335, objectFit: 'cover', opacity: 0.5 }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 800,
              }}
            >
              <div>
                <div
                  style={{
                    maxHeight: 236,
                    maxWidth: 236,
                    backgroundColor: 'white',
                    display: 'flex',
                    width: 236,
                    height: 236,
                    borderRadius: '50%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                  }}
                >
                  <img
                    src={section2snake2}
                    alt=""
                    style={{
                      maxHeight: 151,
                      maxWidth: 180,
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div style={{ paddingTop: '5%' }}>
                  <span
                    style={{
                      color: 'white',
                      fontWeight: 100,
                      paddingTop: 32,
                      fontSize: 40,
                      textAlign: 'center',
                      fontFamily: 'roboto',
                      letterSpacing: 4,
                      paddingTop: '10%',
                    }}
                  >
                    Snake
                  </span>
                </div>
              </div>
              <div>
                <div
                  style={{
                    maxHeight: 236,
                    maxWidth: 236,
                    backgroundColor: 'white',
                    display: 'flex',
                    width: 236,
                    height: 236,
                    borderRadius: '50%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                  }}
                >
                  <img
                    src={section2scorpion1}
                    alt=""
                    style={{
                      maxHeight: 151,
                      maxWidth: 180,
                      objectFit: 'cover',
                      transform: 'rotate(-60deg)',
                    }}
                  />
                </div>
                <div style={{ paddingTop: '5%' }}>
                  <span
                    style={{
                      color: 'white',
                      fontWeight: 100,
                      paddingTop: 32,
                      fontSize: 40,
                      textAlign: 'center',
                      fontFamily: 'roboto',
                      letterSpacing: 4,
                    }}
                  >
                    Snake
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img
                  src={section2scorpion2}
                  alt=""
                  style={{ maxHeight: 300, maxWidth: 300, objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>
        <section style={{display:'flex', flexDirection:'column', justifyContent: 'center', paddingBottom: '5%', alignItems: 'center' }}>
        <h2
            style={{
              color: '#555c60',
              fontWeight: 100,
              paddingTop: 32,
              fontSize: 50,
              textAlign: 'center',
              fontFamily: 'roboto',
              letterSpacing: 4,
            }}
          >
            Contact Us
          </h2>
          <div style={{display:'flex', flexDirection:'row', justifyContent: 'center', paddingBottom: '5%', alignItems: 'center' }}>
          <div style={{display:'flex', flexDirection:'column' }}>
            <MDBInput label="Your Name" outline size="lg" />
            <MDBInput label="Your Email" outline size="lg" />
            <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
            </label>
            <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            placeholder="Your Text Here"
            />
            </div>
          <MDBBtn color="blue-grey">Submit Message</MDBBtn>
          </div>
          </div>
          
        </section>
        <section>
            <div style={{ paddingTop: '1%', alignItems: 'center', minHeight: 200, width: '100%', backgroundColor: '#03548a', bottom: 0, display: 'flex', justifyContent:'center'}}>
            <div style={{display:'flex', flexDirection:'row', justifyContent: "space-evenly", width: '100%'}}>
              <div style={{display:'flex', flexDirection: 'row', alignItems: 'center'}}>
                <img src={locationIcon} style={{width: 30, height: 30}} />
                <h3 style={{color:'white', paddingLeft: '5%',  whiteSpace: 'nowrap', overflow: 'hidden'}}>Baghramyan 1</h3>
              </div>
              <div style={{display:'flex', flexDirection: 'row', alignItems: 'center'}}>
                <img src={phoneIcon} style={{width: 30, height: 30}}/>
                <h3 style={{color:'white', paddingLeft: '5%'}}>+37498888888</h3>
              </div>
              <div style={{display:'flex' , flexDirection: 'row', alignItems: 'center'}}>
                <img src={emailIcon} style={{width: 30, height: 30}}/>
                <h3 style={{color:'white', paddingLeft: '5%'}}>venom@gmail.com</h3>
              </div>
            </div>
            </div>
          </section>
        {/* <Img1 /> */}
      </>

      // <NavbarPage />
    );
  }
}

export default Home;
