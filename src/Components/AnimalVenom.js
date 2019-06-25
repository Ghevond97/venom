import React, { Component } from 'react';
import axios from 'axios';
// import NavBar from './NavBar';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
} from 'mdbreact';
import phoneIcon from './phone.png';
import emailIcon from './mail.png';
import locationIcon from './locationPin.png';
import './AnimalVenom.scss';

class AnimalVenom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venomSubcategories: null,
      activeIndex: 0,
    };
  }
  componentDidMount() {
    this.getVenomSubCategories();
  }

  getVenomSubCategories = () => {
    const { id, lang } = this.props;

    const url = `https://admin.armvenomprod.com/api/categories/${id}/subcategories`;
    axios
      .get(url, { headers: { 'Content-Type': 'application/json' } })
      .then(res => res.data)
      .then(data => {
        data.subcategories[0].venom.forEach(element => {
          element.translations.forEach(e => {
            if (e.lang === lang) {
              element.translations = e;
            }
          });
        });

        this.setState({
          venomSubcategories: data.subcategories,
        });
      })
      .catch(e => console.log(e, 'error'));
  };
  render() {
    const { venomSubcategories } = this.state;
    const { venomCategories } = this.props;

    if (venomSubcategories && venomSubcategories.length > 0) {
      console.log('SUBCATEGORIES', venomSubcategories);
      return (
        <>
          {/* <NavBar /> */}
          <section
            style={{
              backgroundColor: '#03548a',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: '8%',
              paddingBottom: '8%',
            }}
          >
            <div></div>
            <div
            className="section1"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'column',
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
                }}
              >
                <img
                  src={`https://admin.armvenomprod.com${venomCategories.image}`}
                  alt=""
                  style={{
                    // maxHeight: 151,
                    // maxWidth: 180,
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
                  }}
                >
                  {venomCategories
                    ? venomCategories.translations[0].name
                    : 'snake'}
                </span>
              </div>
            </div>
            <p
              style={{
                fontFamily: 'roboto',
                fontSize: 25,
                color: 'white',
                fontWeight: 'lighter',
                maxWidth: '60%',
              }}
            >
              {venomCategories
                ? venomCategories.translations[0].description
                : 'loading'}
            </p>
          </section>
          <section>
            {venomSubcategories && venomSubcategories.length > 0
              ? venomSubcategories.map((category, i) => {
                  console.log('', category);
                  return (
                    <MDBCard
                      className="my-5 px-5 mx-auto"
                      style={{ fontWeight: 300, maxWidth: '90%' }}
                    >
                      <MDBCardBody style={{ paddingTop: 0 }}>
                        <h2 className="h1-responsive font-weight-bold my-5 text-center">
                          {category.translations[0].name}
                        </h2>
                        {/* <p className="dark-grey-text mx-auto mb-5 w-75 text-center">
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt mollit id laborum.
                        </p> */}
                        <MDBRow>
                          <MDBCol md="12" lg="6" className="big-card-container">
                            <div className="mb-3">
                              <MDBView
                                hover
                                rounded
                                className="z-depth-1-half mb-4"
                                style={{ minHeight: '30%', maxHeight: 100 }}
                              >
                                <img
                                  className="img-fluid"
                                  src={`https://admin.armvenomprod.com${
                                    category.venom[this.state.activeIndex]
                                      ? category.venom[this.state.activeIndex]
                                          .image
                                      : ''
                                  }`}
                                  // src={'https://mdbootstrap.com/img/Photos/Slides/1.jpg'}

                                  // style={{maxWidth: "80%", maxHeight: '60%'}}
                                  alt=""
                                />
                                <a href="#!">
                                  <MDBMask
                                    overlay="white-slight"
                                    className="waves-light"
                                  />
                                </a>
                              </MDBView>
                              <div class="news-data d-flex justify-content-between">
                                <a href="#!" class="deep-orange-text">
                                  <h6 class="font-weight-bold">
                                    Code
                                  </h6>
                                </a>
                                <p class="font-weight-bold dark-grey-text">
                                {category.venom[this.state.activeIndex].code}
                                </p>
                              </div>
                              <div className="d-flex justify-content-between">
                                  <a href="#!" className="deep-orange-text">
                                    <h6 className="font-weight-bold">
                                     
                                      Purity
                                    </h6>
                                  </a>
                                  <p className="font-weight-bold dark-grey-text">
                                
                                    {
                                      category.venom[this.state.activeIndex]
                                        .purity
                                    }
                                  </p>
                                </div>
                                <div className="d-flex justify-content-between">
                                  <a href="#!" className="deep-orange-text">
                                    <h6 className="font-weight-bold">
                                   
                                      Price
                                    </h6>
                                  </a>
                                  <p className="font-weight-bold dark-grey-text">
                                 
                                    {
                                      category.venom[this.state.activeIndex]
                                        .price
                                    }
                                  </p>
                                </div>
                                <div className="d-flex justify-content-between">
                                  <a href="#!" className="deep-orange-text">
                                    <h6 className="font-weight-bold">
                                    
                                      Name
                                    </h6>
                                  </a>
                                  <p className="font-weight-bold dark-grey-text">
                                
                                    {
                                      category.venom[this.state.activeIndex]
                                        .translations.name
                                    }
                                  </p>
                                </div>
                              <div className="d-flex justify-content-between">
                                <a href="#!" className="deep-orange-text">
                                  <h6 className="font-weight-bold">
                                    Common Names
                                  </h6>
                                </a>
                                <p className="font-weight-bold dark-grey-text">
                                  {
                                    category.venom[this.state.activeIndex]
                                      .translations.common_names
                                  }
                                </p>
                              </div>
                              <div className="d-flex justify-content-between">
                                <a href="#!" className="deep-orange-text">
                                  <h6 className="font-weight-bold">
                                    Origin
                                  </h6>
                                </a>
                                <p className="font-weight-bold dark-grey-text">
                                  {
                                    category.venom[this.state.activeIndex]
                                      .translations.origin
                                  }
                                </p>
                              </div>
                              
                              <div className="d-flex justify-content-between">
                                <a href="#!" className="deep-orange-text">
                                  <h6 className="font-weight-bold">
                                    Form
                                  </h6>
                                </a>
                                <p className="font-weight-bold dark-grey-text">
                                  {
                                    category.venom[this.state.activeIndex]
                                      .translations.form
                                  }
                                </p>
                              </div>
                                <div className="d-flex justify-content-between">
                                  <a href="#!" className="deep-orange-text">
                                    <h6 className="font-weight-bold">
                                     
                                      Class
                                    </h6>
                                  </a>
                                  <p className="font-weight-bold dark-grey-text">
                                 
                                    {
                                      category.venom[this.state.activeIndex]
                                        .code
                                    }
                                  </p>
                                </div>
                                <div className="d-flex justify-content-between">
                                <a href="#!" className="deep-orange-text">
                                  <h6 className="font-weight-bold">
                                    Order
                                  </h6>
                                </a>
                                <p className="font-weight-bold dark-grey-text">
                                  {
                                    category.venom[this.state.activeIndex]
                                      .translations.order
                                  }
                                </p>
                              </div>
                              <div className="d-flex justify-content-between">
                                <a href="#!" className="deep-orange-text">
                                  <h6 className="font-weight-bold">
                                    Suborder
                                  </h6>
                                </a>
                                <p className="font-weight-bold dark-grey-text">
                                  {
                                    category.venom[this.state.activeIndex]
                                      .translations.suborder
                                  }
                                </p>
                              </div>
                              <div className="d-flex justify-content-between">
                                <a href="#!" className="deep-orange-text">
                                  <h6 className="font-weight-bold">
                                    Family
                                  </h6>
                                </a>
                                <p className="font-weight-bold dark-grey-text">
                                  {
                                    category.venom[this.state.activeIndex]
                                      .translations.family
                                  }
                                </p>
                              </div>
                              <div className="d-flex justify-content-between">
                                <a href="#!" className="deep-orange-text">
                                  <h6 className="font-weight-bold">
                                    Subfamily
                                  </h6>
                                </a>
                                <p className="font-weight-bold dark-grey-text">
                                  {
                                    category.venom[this.state.activeIndex]
                                      .translations.subfamily
                                  }
                                </p>
                              </div>
                              <div className="d-flex justify-content-between">
                                <a href="#!" className="deep-orange-text">
                                  <h6 className="font-weight-bold">
                                    Genus
                                  </h6>
                                </a>
                                <p className="font-weight-bold dark-grey-text">
                                  {
                                    category.venom[this.state.activeIndex]
                                      .translations.genus
                                  }
                                </p>
                              </div>
                              {/* <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                                <a href="#!">Title of the news</a>
                              </h3>
                              <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">
                                Sed ut perspiciatis unde voluptatem omnis iste
                                natus error sit voluptatem accusantium
                                doloremque laudantium, totam rem aperiam, eaque
                                ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae explicabo. Duis aute
                                irure dolor in reprehenderit in voluptate velit
                                esse cillum dolore eu fugiat.
                              </p> */}
                            </div>
                          </MDBCol>

                          <MDBCol md="12" lg="6">
                            {category.venom.map((venom, j) => {
                              return (
                                <div
                                  onClick={() => {
                                    this.setState({ activeIndex: j });
                                    // category.venom[0] = venom;
                                  }}
                                  style={{
                                    borderBottom: '1px solid #e0e0e0',
                                    marginBottom: '1.5rem',
                                  }}
                                >
                                  <MDBRow>
                                    <MDBCol md="3">
                                      <MDBView
                                        hover
                                        rounded
                                        className="z-depth-1-half mb-4"
                                      >
                                        <img
                                          className="img-fluid"
                                          src={`https://admin.armvenomprod.com${venom.image}`}
                                          alt=""
                                        />
                                        <a href="#!">
                                          <MDBMask
                                            overlay="white-slight"
                                            className="waves-light"
                                          />
                                        </a>
                                      </MDBView>
                                    </MDBCol>
                                    <MDBCol md="9">
                                      <p className="font-weight-bold dark-grey-text">
                                        26/02/2018
                                      </p>
                                      <div className="d-flex justify-content-between">
                                        <MDBCol
                                          size="11"
                                          className="text-truncate pl-0 mb-3"
                                        >
                                          <a
                                            href="#!"
                                            className="dark-grey-text"
                                          >
                                            At vero eos et accusamus et iusto
                                            odio dignissimos ducimus qui
                                            blanditiis
                                          </a>
                                        </MDBCol>
                                        <a href="#!">
                                          <MDBIcon icon="angle-double-right" />
                                        </a>
                                      </div>
                                    </MDBCol>
                                  </MDBRow>
                                </div>
                              );
                            })}
                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody>
                    </MDBCard>
                  );
                })
              : ''}
          </section>
          <section>
            <div
              className="footer-container"
              // style={{
              //   paddingTop: '1%',
              //   alignItems: 'center',
              //   minHeight: 200,
              //   width: '100%',
              //   backgroundColor: '#03548a',
              //   bottom: 0,
              //   display: 'flex',
              //   justifyContent: 'center',
              // }}
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
        </>
      );
    }

    return '';
  }
}

export default AnimalVenom;
