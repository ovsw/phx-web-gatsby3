/** @jsx jsx */
import React from "react"; // eslint-disable-line
import { jsx, Container } from "theme-ui";
import { Helmet } from "react-helmet";
// import HomeTestimonialItem from './HomeTestimonialItem'

const HomeTestimonials = () => {
  return (
    <>
      <Helmet>
        <script src="https://embedsocial.com/embedscript/ri.js" />
      </Helmet>
      {/*{esScript}*/}
      <section
        sx={{
          variant: "sections.hpSection",
          bg: "black",
          pb: [4, null, null, 5],
        }}
      >
        <Container>
          <span sx={{ variant: "text.superHeading", color: "white" }}>Reviews from Our</span>
          <h2 sx={{ variant: "text.mainHeading", mb: 4, color: "primary" }}>
            Satisfied <span sx={{ color: "white" }}>Clients</span>
          </h2>
          <div className="embedsocial-reviews" data-ref="dbf6aa080360d368baaa5c359edfb1d06eab94c0">
            {/* this iframe would normally be loaded by the embedsocial script. To add a trailing slash on the iframe source (by request from Sting) I've manually pasted it below */}
            <iframe
              src="https://embedsocial.com/api/reviews/widget/dbf6aa080360d368baaa5c359edfb1d06eab94c0/"
              id="embedIFrame_dbf6aa080360d368baaa5c359edfb1d06eab94c082lo7c"
              className="embedsocial-reviews-iframe"
              scrolling="no"
              style={{ width: "100%", height: "591px", border: "0px", overflow: "hidden" }}
            ></iframe>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomeTestimonials;
