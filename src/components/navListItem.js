import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as Boot from 'react-bootstrap';

export default class Navlistitem extends Component {
    constructor(...args) {
      super(...args);

      this.attachRef = target => this.setState({ target });
      this.state = { show: false };
    }
    createItem = (pro) => {
      if (!pro || !pro.length) return ;
      return (
        <Boot.ListGroup
          onMouseEnter={() => this.setState({ show: true })}
          onMouseLeave={() => this.setState({ show: false })}
        >
          {
            pro.map((i, idx) => {
              if (i.subpro.length) {
                return (
                    <Boot.ListGroup.Item key={idx} className="p-1">
                      <Navlistitem data={i} placement={'left-start'} dropdown/>
                    </Boot.ListGroup.Item>
                )
              } else {
                return (
                  <Boot.ListGroup.Item key={idx} className="p-1">
                    <Link to={i.link}>{i.title}</Link>
                  </Boot.ListGroup.Item>
                )
              }
            })
          }
        </Boot.ListGroup>
      )
      
    }
    render() {
      const { show, target } = this.state;
      const {title, link, subpro} = this.props.data;
      
      return (
        <span>
          <Link
            ref={this.attachRef}
            to={link}
            onClick={() => this.setState({ show: !show })}
            onMouseEnter={() => this.setState({ show: true })}
            onMouseLeave={() => this.setState({ show: false })}
          >
            {!this.props.dropdown ? title : [title, <Boot.Badge> > </Boot.Badge>]}
          </Link>
          <Boot.Overlay
            target={target}
            show={show}
            placement={this.props.placement || "bottom-start"}
            >
            {
              this.createItem(subpro)
            }
          </Boot.Overlay>
          {/* <Boot.OverlayTrigger
            placement="bottom-start"
            delay={{ show: 250, hide: 400 }}
            overlay={this.createItem(subpro)}
          >
            <Link to={link}>{title}</Link>
          </Boot.OverlayTrigger> */}
        </span>
      );
    }
  }