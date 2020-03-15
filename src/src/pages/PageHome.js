import React from 'react';

import ReactFullpage from '@fullpage/react-fullpage';

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

function PageHome () {
    return (
        <ReactFullpage
        //fullpage options
          licenseKey = {'YOUR_KEY_HERE'}
          scrollingSpeed = {1000} /* Options here */

          render={({ state, fullpageApi }) => {
              return (
                  <ReactFullpage.Wrapper>

                    <Section1 />
                    <Section2 />
                    <Section3 />
                    <Section4 />

                  </ReactFullpage.Wrapper>
              );
          }}
        />
    );
}

export default PageHome;
