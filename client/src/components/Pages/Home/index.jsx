import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../../shared/Header';

var textStyle = {
  color: `black`
}


const Home = () => {
  return (
    <>
      <Header title="CAR WORLD">
        <p className="text-light">
          We sell high quality cars in Canada.
 <br />
 <table>
   <tr>Names</tr>
   <td>TANVEER KAUR</td>
   <td>INDERPREET KAUR</td>
   <td>SAHAJPAL SINGH</td>
 </table>
          <strong></strong>
        </p>

      </Header>

      <Container>
        <h3 style={textStyle}>Cars</h3>
        <hr />
        <img src="https://s.marketwatch.com/public/resources/images/MW-HY837_at_gla_ZH_20200122173813.jpg" alt="" />
        <h4 style={textStyle}>Hummer</h4>
        <hr />
        <img src="https://thumbor.forbes.com/thumbor/trim/299x201:2851x1638/fit-in/711x400/smart/https://specials-images.forbesimg.com/imageserve/5d37046395e0230008f64edf/0x0.jpg" alt="" />
        <h4 style={textStyle}>Audi</h4>

      </Container>
    </>
  );
}

export default Home;