/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=613e5d19698914bd5fc38313").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '613e5d1969891481a2c38314'
    htmlEl.dataset['wfSite'] = '613e5d19698914bd5fc38313'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = IndexView.Controller !== IndexView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/grants-cool-project-68c1a4.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body">
            <div className="af-class-wrap">
              <div data-collapse="medium" data-animation="default" data-duration={400} role="banner" className="af-class-navbar w-nav">
                <div className="af-class-navbar-container">
                  <div className="af-class-navbar-container-left">
                    <a href="#" className="af-class-navbar-brand af-class-game w-nav-brand"><img src="images/solscape-2.png" loading="lazy" width={120} alt /></a>
                    <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                      <div>
                        <a href="#about" className="af-class-nav-link w-nav-link">ABOUT</a>
                        <a href="#mint" className="af-class-nav-link w-nav-link">MINT</a>
                        <a href="#perks" className="af-class-nav-link w-nav-link">PERKS</a>
                        <a href="#road" className="af-class-nav-link w-nav-link">ROADMAP</a>
                        <a href="#" className="af-class-nav-link w-nav-link">RARITY</a>
                        <a href="#" className="af-class-nav-link w-nav-link">TEAM</a>
                      </div>
                      <div className="af-class-navbar-container-right">
                        <div className="af-class-nav-action af-class-fs-0">
                          <a href="#" className="af-class-button af-class-white w-button">CONNECT&nbsp;WALLET</a>
                        </div>
                      </div>
                    </nav>
                    <div className="af-class-menu-button-container">
                      <div className="af-class-menu-button w-nav-button"><img src="images/icons8-squared-menu-100_1icons8-squared-menu-100.png" loading="lazy" width={20} alt className="af-class-menu-button-icon" /></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="af-class-hero af-class-wf-section">
                <div data-duration-in={300} data-duration-out={100} className="w-tabs">
                  <div className="w-tab-content">
                    <div data-w-tab="Tab 1" className="af-class-tab-1 af-class-_1 w-tab-pane w--tab-active">
                      <div className="af-class-header-rpg-tab-content-wrap">
                        <div className="af-class-container">
                          <div className="af-class-col50">
                            <div className="af-class-text-highlight af-class-primary af-class-mb-10-copy">SOLSCAPE</div>
                            <h2 className="af-class-text-white">LOREM&nbsp;IPSUM</h2>
                            <p className="af-class-text-white-opacity af-class-mb-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla. </p>
                            <a href="#" className="af-class-button af-class-white w-button">Buy now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="about" className="af-class-section af-class-rpg-feature-1 af-class-wf-section">
                <div className="af-class-container">
                  <div className="af-class-div-block-2">
                    <div className="af-class-col50 af-class-right">
                      <div className="af-class-icon-2"><img src="images/icons8-battle-100_1icons8-battle-100.png" loading="lazy" width={50} alt className="af-class-rpg-feature-icon" /></div>
                      <h3 className="af-class-text-white">ABOUT</h3><img src="https://uploads-ssl.webflow.com/613d194161d4532d0f9c9b3b/613d194161d45377969c9bb3_divider.svg" loading="lazy" alt className="af-class-mb-40" />
                      <p className="af-class-text-white-opacity af-class-mb-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                    </div><img src="images/unknown.png" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 533px, 38vw" srcSet="images/unknown-p-500.png 500w, images/unknown.png 533w" alt className="af-class-image-4" />
                  </div>
                </div>
              </div>
              <div id="perks" className="af-class-section af-class-light af-class-about-fps af-class-wf-section">
                <div className="af-class-container">
                  <div className="af-class-center-block af-class-mb-60">
                    <h2 className="af-class-heading">PERKS</h2>
                    <p className="af-class-text-black-opacity af-class-mb-40 af-class-text-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    <div className="af-class-modal">
                      <div className="af-class-modal-close"><img src="images/close-modal.svg" loading="lazy" width={20} alt className="af-class-modal-close-icon" /></div>
                      <div className="af-class-modal-content">
                        <div className="w-container">
                          <div style={{paddingTop: '56.17021276595745%'}} className="w-embed-youtubevideo"><iframe src="https://www.youtube.com/embed/PWMTDRWJqu4?rel=0&controls=1&autoplay=0&mute=0&start=0" frameBorder={0} style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'auto'}} allow="autoplay; encrypted-media" allowFullScreen /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="af-class-row w-row">
                    <div className="af-class-column-4 w-col w-col-4">
                      <div className="af-class-icon-3"><img src="images/game-features-presets.png" loading="lazy" width={69} alt className="af-class-image-3" /></div>
                      <h6 className="af-class-text-center-copy af-class-title">PERK 1</h6>
                      <p className="af-class-text-extra-small af-class-text-center af-class-text-black-opacity">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>
                    <div className="af-class-column-3 w-col w-col-4">
                      <div className="af-class-icon-4"><img src="images/game-features-events.png" loading="lazy" width={69} alt className="af-class-image-2" /></div>
                      <h6 className="af-class-text-center-copy af-class-title">PERK&nbsp;2</h6>
                      <p className="af-class-text-extra-small af-class-text-center af-class-text-black-opacity">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>
                    <div className="af-class-column-2 w-col w-col-4">
                      <div className="af-class-icon-5"><img src="images/game-features-marketplace.png" loading="lazy" width={69} alt className="af-class-image" /></div>
                      <h6 className="af-class-text-center-copy af-class-title">PERK&nbsp;3</h6>
                      <p className="af-class-text-extra-small af-class-text-center af-class-text-black-opacity">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="mint" className="af-class-section af-class-rpg-feature-2 af-class-wf-section">
                <div className="af-class-container">
                  <div className="af-class-col50">
                    <div className="af-class-icon-base"><img src="images/icons8-storytelling-100-1_1icons8-storytelling-100-1.png" loading="lazy" width={50} alt className="af-class-icon-6" /></div>
                    <h3 className="af-class-text-white">MINTING</h3><img src="https://uploads-ssl.webflow.com/613d194161d4532d0f9c9b3b/613d194161d45377969c9bb3_divider.svg" loading="lazy" alt className="af-class-mb-40" />
                    <div className="af-class-rpg-feature-video">
                      <div className="af-class-div-block">
                        <div className="af-class-buy-form-2">
                          <h4 className="af-class-text-white-2">WHAT&nbsp;IS&nbsp;MINTING?</h4>
                          <p className="af-class-text-white-opacity-2 af-class-mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
                          <div className="af-class-divider af-class-mb-20" />
                          <h6 className="af-class-text-white-2 af-class-mb-20">MINT&nbsp;YOURS&nbsp;TODAY</h6>
                          <div className="w-form">
                            <form id="email-form" name="email-form" data-name="Email Form"><input type="text" className="af-class-select w-input" maxLength={256} name="QUANTITY" data-name="QUANTITY" placeholder="QUANTITY" id="QUANTITY" required />
                              <h1 className="af-class-text-white-2"><span className="af-class-text-span">PRICE:</span> 2.20&nbsp;SOL</h1><input type="submit" defaultValue="CONNECT WALLET" data-wait="Please wait..." className="af-class-buy-form-submit w-button" />
                            </form>
                            <div className="af-class-form-success w-form-done">
                              <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="af-class-form-error w-form-fail">
                              <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="road" className="af-class-section af-class-prg-awards af-class-wf-section">
                <div className="af-class-container">
                  <div className="af-class-div-block-9">
                    <h2 data-w-id="a86b62c2-9e32-a229-927e-5be665865fba" style={{opacity: 0}} className="af-class-heading-copy af-class-margin-bottom">ROADMAP</h2>
                    <div data-w-id="a86b62c2-9e32-a229-927e-5be665865fbc" style={{opacity: 0}} className="af-class-outer-block">
                      <div className="af-class-number-outer">
                        <div className="af-class-number">
                          <div className="af-class-text-block-4">01</div>
                        </div>
                        <div className="af-class-line-hold">
                          <div className="af-class-line">
                            <div className="af-class-indicator" />
                          </div>
                        </div>
                      </div>
                      <div className="af-class-detail">
                        <h2 className="af-class-heading-copy">Stage 1</h2>
                        <div className="af-class-text-block-8">- When our team presented each other with the idea of SolScape, we knew we had something incredibly unique on our hands. &nbsp;In a “sea” of NFT’s, we wanted something that would stand out. &nbsp;With that in mind, we spent day after day, hour after hour, curating a list of over 300+ items, assigning them stats and rarities.<br /><br />- Our goal during step 1 has been to create an NFT with multi-dimensional rarity and value metrics. While most generational mints count on the rarest possible items, traits, or attributes to find value, we have created a system where a combination of common items could even end up being more valuable than the rarest items in the game.<br />‍<br />- We believe that time is the most valuable asset, and with the creation of SolScape, we have wasted none.</div>
                      </div>
                    </div>
                    <div data-w-id="a86b62c2-9e32-a229-927e-5be665865fc9" style={{opacity: 0}} className="af-class-outer-block">
                      <div className="af-class-number-outer">
                        <div className="af-class-number">
                          <div className="af-class-text-block-4">02</div>
                        </div>
                        <div className="af-class-line-hold">
                          <div className="af-class-line">
                            <div className="af-class-indicator" />
                          </div>
                        </div>
                      </div>
                      <div className="af-class-detail">
                        <h2 className="af-class-heading-copy">Stage 2</h2>
                        <div className="af-class-text-block-8">- Building a community where we can see eye-to-eye on each other’s vision. You want something never before done, we want to give you something completely fresh. Every relationship is built on a 2 way street, and this is no different.<br /><br />- We want to reward those that believe in the vision .There will be both Sol &amp; NFT’s given out for giveaways as well as to those that we feel have made a positive impact in the community. We’ll be constantly looking at all forms of social media to scout people who are active, so try to make sure your username lines up across different platforms!</div>
                      </div>
                    </div>
                    <div data-w-id="a86b62c2-9e32-a229-927e-5be665865fd6" style={{opacity: 0}} className="af-class-outer-block">
                      <div className="af-class-number-outer">
                        <div className="af-class-number">
                          <div className="af-class-text-block-4">03</div>
                        </div>
                        <div className="af-class-line-hold">
                          <div className="af-class-line">
                            <div className="af-class-indicator" />
                          </div>
                        </div>
                      </div>
                      <div className="af-class-detail">
                        <h2 className="af-class-heading-copy">Stage 3</h2>
                        <div className="af-class-text-block-8">- This is where SolScape hits Solana! &nbsp;SolScape NFT’s will be available to mint for 2 Sol on September 18th, 1PM EST. Feeling lucky? &nbsp;Anyone who mints one of our unique 1 of 1 items will be given 5 Sol.<br /><br />- What's next? We will provide a spreadsheet outlining different rarities, as well as providing that information to secondary markets where SolScape will be available for immediate relisting.<br /><br />- But before you instantly relist, remember what we said about believing in the vision? &nbsp;Everyone who holds onto their original SolScape NFT (from mint) will receive a free airdrop which will be able to be used in conjunction with your SolScape NFT in our upcoming staking game. &nbsp;We hope this will provide yet another layer of incentive to holders, which in turn will lead to a rising price floor.<br /><br />- Participation in future community events will be reliant on verified ownership of a SolScape NFT.</div>
                      </div>
                    </div>
                    <div data-w-id="a86b62c2-9e32-a229-927e-5be665865fe3" style={{opacity: 0}} className="af-class-outer-block">
                      <div className="af-class-number-outer">
                        <div className="af-class-number">
                          <div className="af-class-text-block-4">04</div>
                        </div>
                        <div className="af-class-line-hold">
                          <div className="af-class-line">
                            <div className="af-class-indicator" />
                          </div>
                        </div>
                      </div>
                      <div className="af-class-detail">
                        <h2 className="af-class-heading-copy">Stage 4</h2>
                        <div className="af-class-text-block-8">- Finished development of the Sol Arena, a place where a SolScape NFT is your ticket to entry. &nbsp;Stake Solana based cryptocurrency's &amp; NFT's against other SolScape NFT holders in a winner-takes-all duel.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-footer af-class-wf-section">
              <div className="af-class-container">
                <div className="af-class-row af-class-mb-40 w-row">
                  <div className="w-col w-col-3">
                    <a href="https://www.esrb.org/" className="w-inline-block"><img src="images/solscape-2.png" loading="lazy" width={147} alt className="af-class-mb-10" /></a>
                  </div>
                  <div className="w-col w-col-9">
                    <p className="af-class-text-extra-small af-class-align-left af-class-text-white-opacity af-class-mb-10">SOLSCAPE 2021, Inc. All Rights Reserved. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                  </div>
                </div>
                <div className="af-class-divider af-class-mb-40" />
                <div className="af-class-footer-links">
                  <div className="af-class-subscribe-socials af-class-community af-class-align-right">
                    <a href="https://www.youtube.com/" className="af-class-footer-social af-class-footer-link w-inline-block"><img src="images/icons8-youtube-play-button-100_1icons8-youtube-play-button-100.png" loading="lazy" width={25} alt /></a>
                    <a href="https://www.twitch.tv/" className="af-class-footer-social af-class-footer-link w-inline-block"><img src="images/icons8-twitch-100_1icons8-twitch-100.png" loading="lazy" width={25} alt /></a>
                    <a href="https://www.facebook.com/" className="af-class-footer-social af-class-footer-link w-inline-block"><img src="images/icons8-facebook-100_1icons8-facebook-100.png" loading="lazy" width={25} alt /></a>
                    <a href="https://twitter.com/" className="af-class-footer-social af-class-footer-link w-inline-block"><img src="images/icons8-twitter-100_1icons8-twitter-100.png" loading="lazy" width={25} alt /></a>
                  </div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */