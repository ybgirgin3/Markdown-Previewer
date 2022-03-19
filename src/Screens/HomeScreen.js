import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { marked } from 'marked';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: '',
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    // markdown input style
    const inputStyle = {
      width: '400px',
      height: '50vh',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '10px',
    };

    // markdown output style
    const outputStyle = {
      width: '400px',
      height: '50vh',
      backgroundColor: '#DCDCDC',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: '10px',
    };

    return (
      <div className="App">
        <div className="container">
          <div className="row mt-4">
            <div className="col text-center">
              <h1>
                <Badge className="text-align-center" variant="light">
                  Markdown Previewer
                  {/* actual sub heading: this code block will be same for both columns */}
                </Badge>
              </h1>
            </div>

            {/* sub containers */}
            <div className="row mt-4">
              {/* markdown input starts */}
              <div className="col-md-6">
                <div className="col text-center">
                  <h4>
                    <Badge className="text-align-center" variant="secondary">
                      Markdown Input
                    </Badge>
                  </h4>
                  <div className="mark-input">
                    <textarea
                      className="input"
                      style={inputStyle}
                      value={this.state.markdown}
                      onChange={(e) => {
                        this.updateMarkdown(e.target.value);
                      }}>
                      {console.log(this.state.markdown)}
                    </textarea>
                  </div>
                </div>
              </div>
              {/* markdown input ends */}
              {/* preview starts */}
              <div className="col-md-6">
                <div className="col text-center">
                  <h4>
                    <Badge className="text-align-center" variant="secondary">
                      Preview
                    </Badge>
                  </h4>
                </div>
                <div
                  style={outputStyle}
                  dangerouslySetInnerHTML={{
                    __html: marked.parse(this.state.markdown),
                  }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
