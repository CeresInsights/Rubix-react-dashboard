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
          <Hero className='text-center' style={{ height: 635, backgroundImage: 'url(/imgs/app/homepage/home_bg01.png)', paddingTop: '40px', backgroundPositionX: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', overflow: 'hidden' }}>
            <img src='/imgs/app/homepage/logo.png' width="135px" style={{ marginTop: 5 }} alt="logo" />
            <h1 className='fg-white' style={{ marginTop: 135, marginBottom: 25, fontWeight: 100 }}>So what are you waiting for?</h1>
            <Button lg outlined inverse retainBackground bsStyle='red' onClick={::this.handleNavigation}>Get Started</Button>
          </Hero>
      </div>
      <Hero className="second_title">
        <HeroHeader>
          <span>{"Ceres"}</span>
        </HeroHeader>
        <Grid>
          <Row>
            <Col sm={12} collapseLeft collapseRight>
              <p style={{ marginTop: 60 }}>
                <p>“ In this age of the customer, the only sustainable competitive advantage is knowledge of and engagement with customers.” – Forrester Research”
                  Innovations in technology and the rise of digital have changed the way firms have to communicate with consumers. A great brand can resonate with customers, inspire loyalty, and rejuvenate a company on the edge.
                  In this new era of customer engagement, what will separate the winners from everyone else is a differentiated brand experience that delivers relevant engagements with compelling personalization regardless of where the customer is.
                  Yet many firms struggle with gaining the necessary insight from their customer data to confidently<strong>answer important business questions</strong> such as:</p>
                <p>•	Who are our most valuable customers?</p>
                <p>•	What are our best-performing channels?</p>
                <p>•	What are our most effective campaigns?</p>
                <p>•	Are we allocating resources appropriately?</p>
                <p>•	What are our best opportunities for growth?</p>
                <p>•	Where should we focus our marketing spend?</p>
                <p>•	What should we do next to increase our results?</p>
                <p>Companies are leveraging customer data to move ever closer to the elusive goal of truly personalized marketing: the right offer, at the right time, in the right location and context, to the right person. Using technology and data, firms today can better understand their customers, deliver personalized one-to-one experiences, and drive significant bottom-line results</p>
              </p>
            </Col>
            {/* <Col sm={5} collapseLeft collapseRight>
              <div className='hidden-xs text-right'>
                <img src='/imgs/app/homepage/reactcode.png' />
              </div>
              <div className='visible-xs text-center'>
                <img width='250' src='/imgs/app/homepage/reactcode.png' />
              </div>
            </Col> */}
          </Row>
        </Grid>
      </Hero>
      <div className="homepage-hero" id="laptop_wrapper" >
        <div className="container">
          <div className="homepage-hero-header2"><span >Ceres: The Platform </span></div>
          <p style={{ marginTop: 60 }} className="text-center">From the ground up, we have developed a cloud based Customer Behavioral Insight Platform. The sustainable advantage of our platform is the use to our proprietary and patented Artificial Intelligence Algorithms to not only predict behaviors, but also provide recommended actions to take based on the behaviors identified in the data. Our algorithms have been designed to produce recommendations, which are also in alignment with business growth metrics to improve business results.</p>
          <div style={{ marginTop: 30 }} className="text-center" id="laptop_img_wrapper" >
            <img src="imgs/app/homepage/laptop.png" />
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
              <div style={{ marginTop: 60 }}>
                <p>Ceres Offers Impactful Consumer Insights Consulting
                With Ceres we combine your current data with its powerful capacities to provide you with impactful consumer insights and also:</p>
                <p>•	Assist you with collecting any additional data that would be helpful for advanced consumer insights</p>
                <p>•	Develop models which predict customer behavior and assist you with developing highly targeted marketing campaigns</p>
                <p>•	Provide you with improved analytics and prediction recommendations compared to current tools</p>
                <p>•	Design visualizations so you can easily see current opportunities for growth as well as your most successful campaigns</p>
                <p>•	Review your business strategy and help you establish a series of new attainable goals that you can begin implementing right away</p>
                <p>•	Provide frequent reports so you can track the progress of our new recommendations and easily compare new results to your prior campaigns</p>
              </div>
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
      <Hero style={{ position: 'relative', zIndex: 2 }}>
        <HeroHeader>
          <span>{"Don't hesitate to contact us. We are here to help"}</span>
        </HeroHeader>
        <div className='text-center' style={{ marginTop: 25, marginBottom: 25 }}>
          <div>
            <img src='/imgs/app/homepage/support.png' />
          </div>
        </div>
        <p className='text-center'>
          {"Email: support@ceres-a-i.com"}
        </p>
      </Hero>
      <div>
        <Hero className='text-center' style={{ height: 215, backgroundImage: 'url(/imgs/app/homepage/home_bg02.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', overflow: 'hidden', backgroundPosition: '0% 100%' }}>
          <h1 className='fg-white' style={{ marginTop: 0, marginBottom: 25, fontWeight: 100 }}>So what are you waiting for?</h1>
          <Button lg outlined inverse retainBackground bsStyle='red' onClick={::this.handleNavigation}>Click here to View Demo</Button>
          </Hero>
        </div >
      </div >
    );
  }
}
