import React from 'react';
import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tbl_ready: '',
      pk: '',
      sk: '',
      ck: '',
    };
  }

  handleLanguage(langValue, pk, sk, ck) {
    this.setState({ tbl_ready: langValue, pk: pk, ck: ck, sk: sk });
  }
  render() {
    var childrenWithMoreProps = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        third_changed: this.state.tbl_ready,
        pk: this.state.pk,
        sk: this.state.sk,
        ck: this.state.ck
      });
    });
    return (
      <MainContainer {...this.props}>
        <Sidebar onSelectLanguage={this.handleLanguage.bind(this)} />
        <Header />
        <div id='body'>
          <Grid>
            <Row>
              <Col xs={12}>
                {childrenWithMoreProps}
              </Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </MainContainer>
    );
  }
}
// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//       <div id="App" className="App">
//         {this.props.children}    
//       </div>
//     );
//   }
// }

// export default App;
