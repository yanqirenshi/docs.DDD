import React from 'react';

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
        <div>
          <SectionUbiquitousLanguage />
          <SectionDomainDrivenDesign />
          <SectionLayeredArchitecture />
          <SectionEntities />
          <SectionValueObjects />
          <SectionServices />
          <SectionFactories />
          <SectionRepositories />
          <SectionAggregates />
        </div>
    );
}

export default PageHome;
