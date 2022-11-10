import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
// extra imports

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        <h3>Checkout here</h3>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div``;
export default CheckoutPage;
