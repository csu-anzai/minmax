import React, { Component } from 'react';

class MailChimp extends Component {
  render() {
    return (
      <div id="mc_embed_signup" className="custom-form">
      <form action="//minmaxfit.us15.list-manage.com/subscribe/post?u=bde90eceb729c7eb8887d37de&amp;id=d33d1bbfef" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll" className="custom-email">
      	     <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Enter your email" required />
             <div className="hide" aria-hidden="true">
              <input type="text" name="b_bde90eceb729c7eb8887d37de_d33d1bbfef" tabindex="-1" value="" />
             </div>
            <input type="submit" value="Get Updates" name="subscribe" id="mc-embedded-subscribe" className="button" />

          </div>
      </form>
      </div>
    );
  }
}

export default MailChimp;
