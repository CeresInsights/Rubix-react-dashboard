import React from 'react';

import { withRouter } from 'react-router';
import classNames from 'classnames';

import {
  Row,
  Col,
  Tab,
  Nav,
  Grid,
  Label,
  Button,
  NavItem,
} from '@sketchpixy/rubix';

class Hero extends React.Component {
  render() {
    return (
      <div {...this.props}
           className={classNames(this.props.className,
                                 'homepage-hero')}>
        <Grid fixed>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

class HeroHeader extends React.Component {
  render() {
    return (
      <div {...this.props}
           className={classNames(this.props.className,
                                 'homepage-hero-header')}>
        {this.props.children}
      </div>
    );
  }
}

class HeroHeader2 extends React.Component {
  render() {
    return (
      <div {...this.props}
           className={classNames(this.props.className,
                                 'homepage-hero-header2')}>
        {this.props.children}
      </div>
    );
  }
}

@withRouter
export default class Homepage extends React.Component {
  handleNavigation() {
    this.props.router.push('/ltr/login');
  }

  render() {
    return (
      <div id='homepage-container'>
        <div>
          <Hero className='text-center' style={{height: 635, backgroundImage: 'url(/imgs/app/homepage/home_bg01.png)', paddingTop:'40px', backgroundPositionX:'center',backgroundRepeat: 'no-repeat', backgroundSize: 'cover', overflow: 'hidden'}}>
            <img src='/imgs/app/homepage/logo.png' width="135px" style={{marginTop: 5}} alt="logo"/>
            <h1 className='fg-white' style={{marginTop: 135, marginBottom: 25, fontWeight: 100}}>So what are you waiting for?</h1>
            <Button lg outlined inverse retainBackground bsStyle='red' onClick={::this.handleNavigation}>Get Started</Button>
          </Hero>
        </div>
        <Hero className="second_title">
          <HeroHeader>
            <span>{"Don't wait for Web Components "}</span>
          </HeroHeader>
          <Grid>
            <Row>
              <Col sm={7} collapseLeft collapseRight>
                <p style={{marginTop: 60}}>
                  Rubix is built on top of React which uses a Virtual DOM implementation for ultra-high performance and semantic markup coupled with CommonJS for composable Components.
                </p>
                <p>The result: <strong>clean and elegant code.</strong></p>
              </Col>
              <Col sm={5} collapseLeft collapseRight>
                <div className='hidden-xs text-right'>
                  <img src='/imgs/app/homepage/reactcode.png' />
                </div>
                <div className='visible-xs text-center'>
                  <img width='250' src='/imgs/app/homepage/reactcode.png' />
                </div>
              </Col>
            </Row>
          </Grid>
        </Hero>
        <div className="homepage-hero" id="laptop_wrapper" >
            <div className="container">
                <div className="homepage-hero-header2"><span >Where does it come from? </span></div>
                <p className="text-center">Rubix implements custom React Components on top of the popular react-bootstrap project enabling you to write shorter, semantic markup. Say Goodbye to unwieldy classnames and spaghetti code!</p>
                <div className="text-center" id="laptop_img_wrapper" >
                    <img src="imgs/app/homepage/laptop.png"/>
                </div>
            </div>
            <div className="laptopbg"></div>
        </div>
        <Hero>
          <HeroHeader>
            <span>{"Why do we use it?"}</span>
          </HeroHeader>
          <Grid>
            <Row>
              <Col sm={7} collapseLeft collapseRight>
                <p style={{marginTop: 60}}>
                  Rubix is built on top of React which uses a Virtual DOM implementation for ultra-high performance and semantic markup coupled with CommonJS for composable Components.
                </p>
                <p>The result: <strong>clean and elegant code.</strong></p>
              </Col>
              <Col sm={5} collapseLeft collapseRight>
                <div className='hidden-xs text-right'>
                  <img src='/imgs/app/homepage/auto.png' />
                </div>
                <div className='visible-xs text-center'>
                  <img width='250' src='/imgs/app/homepage/auto.png' />
                </div>
              </Col>
            </Row>
          </Grid>
        </Hero>
        <Hero style={{position: 'relative', zIndex: 2}}>
          <HeroHeader>
            <span>{"Advanced Theming and Customizations "}</span>
          </HeroHeader>
          <div className='text-center' style={{marginTop: 25, marginBottom: 25}}>
            <div>
              <img src='/imgs/app/homepage/support.png' />
            </div>
          </div>
          <p className='text-center'>
            {"We provide SASS mixins to customize individual UI elements or even the entire theme!"}
          </p>
        </Hero>
        <div>
          <Hero className='text-center' style={{height: 215, backgroundImage: 'url(/imgs/app/homepage/home_bg02.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', overflow: 'hidden', backgroundPosition: '0% 100%'}}>
            <h1 className='fg-white' style={{marginTop: 0, marginBottom: 25, fontWeight: 100}}>So what are you waiting for?</h1>
            <Button lg outlined inverse retainBackground bsStyle='red' onClick={::this.handleNavigation}>Click here to View Demo</Button>
          </Hero>
        </div>
      </div>
    );
  }
}
