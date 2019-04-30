import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as Boot from 'react-bootstrap';

export default class Navlistitem extends Component {
    constructor(...args) {
      super(...args);
  
      this.attachRef = target => this.setState({ target });
      this.state = {
        show: false,
      };
    }
    render() {
      const { show, target } = this.state;
      const {label, subLabel} = this.props.data;
      return (
        <span>
          <Boot.Button
            variant="dark"
            className="rounded-0"
            ref={this.attachRef}
            onClick={() => this.setState({ show: !show })}
            onMouseEnter={() => this.setState({ show: true })}
            onMouseLeave={() => this.setState({ show: false })}
          >
            <Link to={label.link}>{label.text}</Link>
          </Boot.Button>
          <Boot.Overlay target={target} show={show} placement="bottom-start">
            {({ placement, scheduleUpdate, arrowProps, ...props }) => (
              <Boot.Tooltip
                id="overlay-example"
                {...props}
                className="list-group"
                arrowProps={{ref: React.createRef(), style: {display: 'none'}}}
                placement="bottom-start"
                bsPrefix="own-tooltip"
                >
                {subLabel.map((i, idx) => {
                    return (
                        <li
                            key={idx}
                            className="list-group-item p-2"
                            onClick={() => this.setState({ show: !show })}
                            onMouseEnter={() => this.setState({ show: true })}
                            onMouseLeave={() => this.setState({ show: false })}
                            >
                                <Link to={i.link}>{i.text}</Link>
                            </li>
                    );
                })}
              </Boot.Tooltip>
            )}
          </Boot.Overlay>
        </span>
      );
    }
  }