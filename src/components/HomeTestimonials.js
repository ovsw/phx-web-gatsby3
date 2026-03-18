/** @jsx jsx */
import React, { useEffect, useRef } from "react"; // eslint-disable-line
import { jsx } from "theme-ui";

const EMBED_SOCIAL_IFRAME_SRC =
  "https://embedsocial.com/api/pro_hashtag/4a142e12aa7c4865b23549a0fceb79927b1094c9";
const EMBED_SOCIAL_RESIZER_SRC = "https://embedsocial.com/js/iframe.js";

const HomeTestimonials = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const initIframeResize = () => {
      if (
        typeof window !== "undefined" &&
        typeof window.iFrameResize === "function" &&
        iframeRef.current
      ) {
        window.iFrameResize({}, iframeRef.current);
      }
    };

    const existingScript = document.querySelector(
      `script[src="${EMBED_SOCIAL_RESIZER_SRC}"]`
    );

    if (existingScript) {
      if (typeof window.iFrameResize === "function") {
        initIframeResize();
      } else {
        existingScript.addEventListener("load", initIframeResize, {
          once: true,
        });
      }

      return () => {
        existingScript.removeEventListener("load", initIframeResize);
      };
    }

    const script = document.createElement("script");
    script.src = EMBED_SOCIAL_RESIZER_SRC;
    script.async = true;
    script.addEventListener("load", initIframeResize, { once: true });
    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", initIframeResize);
    };
  }, []);

  return (
    <>
      <section
        sx={{
          bg: "black",
          overflow: "hidden",
        }}
      >
        <div
          sx={{
            width: "100%",
          }}
        >
          <iframe
            ref={iframeRef}
            title="Google reviews"
            src={EMBED_SOCIAL_IFRAME_SRC}
            scrolling="no"
            style={{
              border: "0",
              width: "100%",
              height: "100%",
              minHeight: "420px",
              overflow: "hidden",
              display: "block",
            }}
          />
        </div>
      </section>
    </>
  );
};

export default HomeTestimonials;
