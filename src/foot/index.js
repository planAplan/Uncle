import React, {Component} from 'react';
// import * as Boot from 'react-bootstrap';
// import Lang from '../utils';

// let logoSrc = require('../images/logo.png')
export default class Foot extends Component {

    goHome = () => {
        window.location.href = window.location.origin
    }
    render () {
        return (
            <div className="footer-container ">
    <div className="footer">
            <div className="footer-middle" style={{backgroundColor: 'rgb(246, 244, 236)'}}>
            <div className="container">
                            <div className="row"> 
                <div className="col-sm-3 col-xs-6 main-footer-column"><div className="block">
    <div className="block-title"><strong><span>Information</span></strong></div>

    <div className="block-content">
<ul className="links">
    <li><i className="icon-right-dir theme-color"></i><a href="https://www.olightstore.com.au/about/" title="About us">About us</a></li>
    <li><i className="icon-right-dir theme-color"></i><a href="https://www.olightstore.com.au/contacts" title="Contact us">Contact us</a></li>
    <li><i className="icon-right-dir theme-color"></i><a href="https://www.olightstore.com.au/customer/account" title="My account">My account</a></li>
    <li><i className="icon-right-dir theme-color"></i><a href="https://www.olightstore.com.au/privacy/" title="Privacy">Privacy</a></li>
    <li><i className="icon-right-dir theme-color"></i><a href="https://www.olightstore.com.au/warranty/" title="Warranty">Warranty</a></li>
    <li><i className="icon-right-dir theme-color"></i><a href="https://www.olightstore.com.au/returns/" title="Returns">Returns</a></li>
    <li><i className="icon-right-dir theme-color"></i><a href="https://www.olightstore.com.au/wholesale/" title="Wholesale">Wholesale and Dealer inquiries</a></li>


</ul>
</div>
</div></div>                                                   
                <div className="col-sm-3 col-xs-6 main-footer-column"><div className="block">
<div className="block-title"><strong><span>Contact Information</span></strong></div>
<div className="block-content">
<ul className="contact-info">
<li><i className="icon-location">&nbsp;</i><p><b>Address:</b><br />Unit 8 / 89 Derby Street<br /> Silverwater NSW Australia 2128</p></li>
<li><em className="icon-phone">&nbsp;</em>
<p><strong>Phone:</strong><br />0401 474 333<br />02 8097 4011</p>



</li>
<li><em className="icon-mail">&nbsp;</em>
<p><strong>Email:</strong><br /><a href="mailto:contact@olightstore.com.au">contact@olightstore.com.au</a></p>
</li>
</ul>
</div>
</div></div>                                                   
                <div className="col-sm-3 col-xs-6 main-footer-column"><div className="block">
    <div className="block-title"><strong><span>My Account</span></strong></div>
    <div className="block-content">
<ul className="features">
    <li><i className="icon-right-dir theme-color">&nbsp;</i>Sign In</li>
    <li><i className="icon-right-dir theme-color">&nbsp;</i>View Cart</li>
    <li><i className="icon-right-dir theme-color">&nbsp;</i>My Wishlist</li>
    <li><i className="icon-right-dir theme-color">&nbsp;</i>Track My Order</li>
    <li><i className="icon-right-dir theme-color">&nbsp;</i>Help</li>
</ul>
</div>
</div></div>                                                   
                <div className="col-sm-3 col-xs-6 main-footer-column"><div className="block block-subscribe">
    <div className="block-title">
        <strong><span>Be the First to Know</span></strong>
    </div>
    <form action="https://www.olightstore.com.au/newsletter/subscriber/new/" method="post" id="footer-newsletter-validate-detail" onSubmit={()=> 1}>
        <div className="block-content">
            <p>Get all the latest information on Events,<br />Subscribe to get emails about discounts and special offers:</p>
            <div className="input-box">
                <p className="label"><strong>Enter your e-mail Address</strong></p>
                <input type="text" name="email" id="newsletter_footer" title="Sign up for our newsletter" className="input-text required-entry validate-email" />
                <button type="submit" title="Submit" className="button"><span><span>Submit</span></span></button>
                <div className="clearer"></div>
            </div>
        </div>
    </form>
    {/* <script type="text/javascript">
        //<![CDATA[
            var footernewsletterSubscriberFormDetail = new VarienForm('footer-newsletter-validate-detail');
        //]]>
    </script> */}
</div>
</div>                                                   
                                </div>
                     
            </div>
        </div>
            <div className="footer-bottom" style={{backgroundColor: 'rgb(246, 244, 236)'}}>
            <div className="container">
                                    <a href="https://www.olightstore.com.au/" className="logo"><img src="https://www.olightstore.com.au/skin/frontend/smartwave/porto/images/logo-color.png" alt="" /></a>
                                                <address>©Copyright 2019 by Olight Australia. All Rights Reserved.</address>

                            </div>
        </div>
        </div>
</div>
            // <Boot.Container>
            //     <Boot.Row style={{marginTop: '15px'}}>
            //         <Boot.Col>
            //         </Boot.Col>
            //     </Boot.Row>
            //     <Boot.Row style={{marginTop: '5px'}}>
            //         <Boot.Col>
            //             <Boot.Image src={logoSrc} onClick={this.goHome}/>
            //         </Boot.Col>
            //         <Boot.Col lg={{span: 6}}>
            //             <address>©Copyright 2019 by ZZZZ. All Rights Reserved.</address>
            //         </Boot.Col>
            //     </Boot.Row>
            // </Boot.Container>
        );
    }
}

/**
 * 
            <Boot.Container>
                <Boot.Row style={{marginTop: '25px'}}>
                    <Boot.Col>
                        
                    </Boot.Col>
                </Boot.Row>
            </Boot.Container>
 */