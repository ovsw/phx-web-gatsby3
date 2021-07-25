import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { jsx, Container } from "theme-ui";

const NotFoundPage = () => (
  <Layout>
    <section sx={{ variant: "sections.hpSection" }}>
      <Container>
        <div style={{ paddingTop: "14rem", paddingBottom: "6rem" }}>
          <SEO seoTitle="404: Not found" />
          <h1>404 Error: Page not found</h1>
          <p>We're sorry, we can't find the page you're looking for...</p>
          <p>
            <a href="/">Go to the home page</a>
          </p>
        </div>
      </Container>
    </section>
  </Layout>
);

export default NotFoundPage;
