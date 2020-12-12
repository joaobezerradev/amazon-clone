import React from 'react';
import Header from '../../components/Header';
import Product from '../../components/Product';

import { Container, HomeContainer, HomeRow } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <HomeContainer>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="covid19"
          />

          <HomeRow>
            <Product
              title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation
          to Create Radically"
              image="https://m.media-amazon.com/images/I/51N-u8AsmdL.jpg"
              price={19.99}
              rating={4}
            />
            <Product
              title="PHISINIC Stand Mixer, 6.5-QT 800W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Power Hub for Attachment (Red)"
              image="https://images-na.ssl-images-amazon.com/images/I/71PcRhHJaSL._AC_SX522_.jpg"
              price={215.85}
              rating={4}
            />
          </HomeRow>
          <HomeRow>
            <Product
              title="Samsung Galaxy Watch Active 2 (40mm, GPS, Bluetooth) Smart Watch with Advanced Health Monitoring, Fitness Tracking , and Long Lasting Battery - Silver (US Version)"
              image="https://images-na.ssl-images-amazon.com/images/I/51bSW9gjoaL._AC_SY550_.jpg"
              price={249.79}
              rating={5}
            />

            <Product
              title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal"
              image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_SX425_.jpg"
              price={65.74}
              rating={4}
            />
            <Product
              title="Apple iPad Pro 3rd Gen (12.9-inch, Wi-Fi + Cellular, 1TB) - Space Gray (Renewed)"
              image="https://images-na.ssl-images-amazon.com/images/I/61DsXT1ldtL._AC_SY679_.jpg"
              price={560.98}
              rating={4}
            />
          </HomeRow>
          <HomeRow>
            <Product
              title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black"
              image="https://images-na.ssl-images-amazon.com/images/I/71tZW1aa%2BPL._AC_SX450_.jpg"
              price={999.99}
              rating={5}
            />
          </HomeRow>
        </HomeContainer>
      </Container>
    </>
  );
};

export default Home;
