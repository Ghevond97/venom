import React, { Component } from 'react';
import NavBar from './NavBar';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView } from "mdbreact";
import section2snake2 from './section2snake2.png';
import phoneIcon from './phone.png';
import emailIcon from './mail.png';
import locationIcon from './locationPin.png';

class AnimalVenom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venomSubcategories: {}
    }
  }
  componentDidMount() {
    this.getVenomSubCategories();
  }

  getVenomSubCategories = () => {
    const url = 'https://admin.armvenomprod.com/api/categories/3/subcategories';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          venomSubcategories: data.subcategories,
        });
      });
  }
  render() {
    const {venomSubcategories} = this.state;
    if(venomSubcategories && venomSubcategories.length> 0) {
      return (
        <>
          <NavBar />
          <section
            style={{
              backgroundColor: '#03548a',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: '8%',
              paddingBottom: '8%'
            }}
          >
            <div></div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'column',
                alignItems: 'center',
              }}
            >
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
            <p
              style={{
                fontFamily: 'roboto',
                fontSize: 25,
                color: 'white',
                fontWeight: 'lighter',
                maxWidth: '60%'
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
          <section>
            {venomSubcategories && venomSubcategories.length > 0 ? venomSubcategories.map(category => {
              return(
                <MDBCard
          className="my-5 px-5 mx-auto"
          style={{ fontWeight: 300, maxWidth: "90%" }}
        >
          <MDBCardBody style={{ paddingTop: 0 }}>
            <h2 className="h1-responsive font-weight-bold my-5 text-center">
              {category.translation.name}
            </h2>
            {/* <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit id
              laborum.
            </p> */}
            <MDBRow>
              <MDBCol md="12" lg="6">
                <div className="mb-4">
                  <MDBView hover rounded className="z-depth-1-half mb-4">
                    <img
                      className="img-fluid"
                      src="https://admin.armvenomprod.com/uploads/venom_images/15613218197688399130_ed6f09f3c4_c.jpg"
                      alt=""
                    />
                    <a href="#!">
                      <MDBMask overlay="white-slight" className="waves-light" />
                    </a>
                  </MDBView>
                  <div className="d-flex justify-content-between">
                    <a href="#!" className="deep-orange-text">
                      <h6 className="font-weight-bold">
                        {/* <MDBIcon icon="utensils" className="pr-2" /> */}
                        CODE
                      </h6>
                    </a>
                    <p className="font-weight-bold dark-grey-text">
                      {/* <MDBIcon far icon="clock" className="pr-2" /> */}
                      {category.venom[0].code}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <a href="#!" className="deep-orange-text">
                      <h6 className="font-weight-bold">
                        {/* <MDBIcon icon="utensils" className="pr-2" /> */}
                        CLASS
                      </h6>
                    </a>
                    <p className="font-weight-bold dark-grey-text">
                      {/* <MDBIcon far icon="clock" className="pr-2" /> */}
                      {category.venom[0].translation.class}
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <a href="#!" className="deep-orange-text">
                      <h6 className="font-weight-bold">
                        {/* <MDBIcon icon="utensils" className="pr-2" /> */}
                        CLASS
                      </h6>
                    </a>
                    <p className="font-weight-bold dark-grey-text">
                      {/* <MDBIcon far icon="clock" className="pr-2" /> */}
                      {category.venom[0].purity}
                    </p>
                  </div>
                  <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                    <a href="#!">{category.venom[0].translation.name}</a>
                  </h3>
                  <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                    Sed ut perspiciatis unde voluptatem omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beatae vitae explicabo. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                  </p>
                  <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                    <a href="#!">Common Names</a>
                  </h3>
                  <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                    {category.venom[0].translation.common_names}
                  </p>
                  <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                    <a href="#!">Origin</a>
                  </h3>
                  <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                    {category.venom[0].translation.origin}
                  </p>
                  <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                    <a href="#!">Form</a>
                  </h3>
                  <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                    {category.venom[0].translation.form}
                  </p>
                </div>
              </MDBCol>
  
              <MDBCol md="12" lg="6">
                <div style={{
                  borderBottom: "1px solid #e0e0e0",
                  marginBottom: "1.5rem"
                }}>
                {category.venom.map(venom =>{
                  return(
                    <MDBRow>
                    <MDBCol md="3">
                      <MDBView hover rounded className="z-depth-1-half mb-4">
                        <img
                          className="img-fluid"
                          src="https://admin.armvenomprod.com//uploads/venom_images/15613218197688399130_ed6f09f3c4_c.jpg"
                          alt=""
                        />
                        <a href="#!">
                          <MDBMask overlay="white-slight" className="waves-light" />
                        </a>
                      </MDBView>
                    </MDBCol>
                    <MDBCol md="9">
                      <p className="font-weight-bold dark-grey-text">
                       {venom.translation.name}
                      </p>
                      <div className="d-flex justify-content-between">
                        <MDBCol size="11" className="text-truncate pl-0 mb-3">
                          <a href="#!" className="dark-grey-text">
                            Purity-{venom.purity}
                          </a>
                        </MDBCol>
                        <a href="#!">
                          <MDBIcon icon="angle-double-right" />
                        </a>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  )
                })}
                  
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
              )
            }): ''}
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
        </>
      );  
    }

    return ''
  }
}

export default AnimalVenom;
