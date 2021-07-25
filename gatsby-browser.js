/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it


import AppContextProvider from './src/context'
export const wrapRootElement = AppContextProvider

export const onRouteUpdate = ({ location, prevLocation }) => {
  // console.log('new pathname', location.pathname)
  // console.log('old pathname', prevLocation ? prevLocation.pathname : null)
  if(location.pathname === '/home-value-estimator/') {
    (
      function (h,b) {
      var w = window, d = document, s = 'script', x, y;
      w['__hb_namespace'] = h;
      w[h] = w[h] || function () {
        (w[h].q=w[h].q||[]).push(arguments) };
        y = d.createElement(s);
        x = d.getElementsByTagName(s)[0];
        y.async = 1;
        y.src = b;
        x.parentNode.insertBefore(y,x)
        }
    )('Homebot','https://embed.homebotapp.com/lgw/v1/widget.js');
    Homebot('#homebot_homeowner', '03bb83cda45c729b233efed7893784d286d9d7ee1b085bd6')
  }

  if(location.pathname === '/mortgage-calculator/') {
    (function() {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src="https://cdn.calculatestuff.com/resizer.js";
      (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(s);
    })()
  }
}

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`) // eslint-disable-line
    console.log(`# IntersectionObserver is polyfilled!`)
  }

  // Object-fit/Object-position polyfill for gatsby-image (IE)
  const testImg = document.createElement(`img`)
  if (
    typeof testImg.style.objectFit === `undefined` ||
    typeof testImg.style.objectPosition === `undefined`
  ) {
    import(`object-fit-images`)()
    console.log(`👍 Object-fit/Object-position are polyfilled`)
  }
}
