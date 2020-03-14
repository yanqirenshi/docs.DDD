import React from 'react';

import ReactDOM from 'react-dom';
import ReactFullpage from '@fullpage/react-fullpage';

import SectionUbiquitousLanguage from './SectionUbiquitousLanguage';
import SectionDomainDrivenDesign from './SectionDomainDrivenDesign';
import SectionLayeredArchitecture from './SectionLayeredArchitecture';
import SectionEntities from './SectionEntities';
import SectionValueObjects from './SectionValueObjects';
import SectionServices from './SectionServices';
import SectionFactories from './SectionFactories';
import SectionRepositories from './SectionRepositories';
import SectionAggregates from './SectionAggregates';


function PageHome () {
    return (
        <ReactFullpage
        //fullpage options
          licenseKey = {'YOUR_KEY_HERE'}
          scrollingSpeed = {1000} /* Options here */

          render={({ state, fullpageApi }) => {
              return (
                  <ReactFullpage.Wrapper>

                    <SectionUbiquitousLanguage />
                    <SectionDomainDrivenDesign />
                    <SectionLayeredArchitecture />
                    <SectionEntities />
                    <SectionValueObjects />
                    <SectionServices />
                    <SectionFactories />
                    <SectionRepositories />
                    <SectionAggregates />

                  </ReactFullpage.Wrapper>
              );
          }}
        />
    );
}

export default PageHome;
