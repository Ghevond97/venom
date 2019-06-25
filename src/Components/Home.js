import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import img1 from './background.jpg';
import AboutUsSnakeImage from './AboutUsSnakeImage.png';
import section2snake1 from './section2snake1.png';
import section2scorpion2 from './section2scorpion2.png';
import phoneIcon from './phone.png';
import emailIcon from './mail.png';
import locationIcon from './locationPin.png';
import './Home.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // venomCategories: null,
      name: '',
      email: '',
      companyName: '',
      message: '',
    };
  }

  sendMessage = () => {
    const { name, email, companyName, message } = this.state;
    const url = 'https://admin.armvenomprod.com/api/send-message';
    let msgObj = {};
    msgObj.name = name;
    msgObj.email = email;
    msgObj.company = companyName;
    msgObj.message = message;
    axios
      .post(url, msgObj, { headers: { 'Content-Type': 'application/json' } })
      .then(res => console.log('RESULT', res))
      .catch(err => console.log(err));
  };
  // componentDidMount() {
  //   this.getVenomCategories();
  //   // this.getVenomSubCategories();
  // }

  // getVenomSubCategories = () => {
  //   const {id}  = this.props;
  //   const url = `https://admin.armvenomprod.com/api/categories/3/subcategories?lang=hy`;
  //   axios.get(url, {headers: {'Content-Type': 'application/json'}})
  //     .then(res => res.data)
  //     .then(data => {
  //       console.log('DAAWRAF',data);
  //       this.setState({
  //         venomSubcategories: data.subcategories,
  //       });
  //     });
  // }

  // getVenomCategories = () => {
  //   const { lang } = this.props;
  //   const url = `https://admin.armvenomprod.com/api/venom-categories?lang=${lang}`;
  //   fetch(url, { headers: { 'Content-Type': 'application/json' } })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log('NNNNN', data);
  //       this.setState({ venomCategories: data });
  //     });
  // };
  render() {
    const { venomCategories } = this.props;
    if (venomCategories) {
    }
    return (
      <>
        {/* <NavBar /> */}
        <a id="home">
          <section>
            <div className="back-image-container">
              <h1>Venom</h1>
              <img className="back-image" src={img1} alt="" />
            </div>
          </section>
        </a>
        <a id="about">
          <section>
            <div className="about-us-container">
              <h2>About Us</h2>
              <div className="about-us-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <img
                  className="about-us-image"
                  src={AboutUsSnakeImage}
                  alt=""
                />
              </div>
            </div>
          </section>
        </a>
        <a id="venoms">
          <section className="venoms-container">
            <h2>Venoms</h2>
            <div className="categories-container">
              <div>
                <img
                  className="section-1-image-1"
                  src={section2snake1}
                  alt=""
                />
              </div>
              <div className="venom-categories">
                {venomCategories
                  ? venomCategories.categories.map(category => {
                      return (
                        <Link to={`${category.id}`}>
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                            }}
                          >
                            <div
                              style={{
                                // maxHeight: 236,
                                // maxWidth: 236,
                                // backgroundColor: 'white',
                                display: 'flex',
                                // width: 236,
                                // height: 236,
                                // borderRadius: '50%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                // backgroundColor: 'white',
                              }}
                            >
                              <img
                                src={`https://admin.armvenomprod.com${category.image}`}
                                alt=""
                                style={{
                                  maxHeight: 236,
                                  maxWidth: 236,
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
                                {category.translations[0].name}
                              </span>
                            </div>
                          </div>
                        </Link>
                      );
                    })
                  : 'NULL MOTHERFUCKER'}
              </div>
              <div>
                <div>
                  <img
                    className="section-1-image-4"
                    src={section2scorpion2}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </a>
        <a id="contact">
          <section
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              paddingBottom: '5%',
              alignItems: 'center',
            }}
          >
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
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingBottom: '5%',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', marginTop: '2%' }}>
                {/* <MDBInput
                  label="Your Name"
                  outline
                  size="lg"
                  onChange={e => {
                    this.setState({ name: e.target.value });
                  }}
                  className="test-name"
                  style={{backgroundColor:"red", marginBottom: '-1.5rem', marginTop: '-1.5rem'}}
                />
                <MDBInput
                  label="Your Email"
                  outline
                  size="lg"
                  onChange={e => {
                    this.setState({ email: e.target.value });
                  }}
                  className="test-name"

                />
                <MDBInput
                  label="Company Name"
                  outline
                  size="lg"
                  onChange={e => {
                    this.setState({ companyName: e.target.value });
                  }}
                  className="test-name"
                /> */}
                <input class="form-control form-control-lg" style={{marginBottom: '3%'}} type="text" placeholder="Name" onChange={e => {
                    this.setState({ name: e.target.value });
                  }}></input>
                <input class="form-control form-control-lg" style={{marginBottom: '3%'}} type="text" placeholder="Email" onChange={e => {
                    this.setState({ email: e.target.value });
                  }}></input>
                <input class="form-control form-control-lg" style={{marginBottom: '3%'}} type="text" placeholder="Company" onChange={e => {
                    this.setState({ companyName: e.target.value });
                  }}></input>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1"></label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="Your Text Here"
                    onChange={e => {
                      this.setState({ message: e.target.value });
                    }}
                  />
                </div>
                <MDBBtn color="blue-grey" onClick={this.sendMessage}>
                  Submit Message
                </MDBBtn>
              </div>
            </div>
          </section>
        </a>
        <section>
          <div
            className="footer-container"
            style={{
              paddingTop: '1%',
              alignItems: 'center',
              minHeight: 200,
              width: '100%',
              backgroundColor: '#03548a',
              bottom: 0,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              className="footer-items"
              // style={{
              //   display: 'flex',
              //   flexDirection: 'row',
              //   justifyContent: 'space-evenly',
              //   width: '100%',
              // }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <img src={locationIcon} style={{ width: 30, height: 30 }} />
                <h3
                  style={{
                    color: 'white',
                    paddingLeft: '5%',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                  }}
                >
                  Baghramyan 1
                </h3>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <img src={phoneIcon} style={{ width: 30, height: 30 }} />
                <h3 style={{ color: 'white', paddingLeft: '5%' }}>
                  +37498888888
                </h3>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <img src={emailIcon} style={{ width: 30, height: 30 }} />
                <h3 style={{ color: 'white', paddingLeft: '5%' }}>
                  venom@gmail.com
                </h3>
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
