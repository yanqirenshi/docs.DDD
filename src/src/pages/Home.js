import React from 'react';

import SectionAggregates          from './SectionAggregates';
import SectionDomainDrivenDesign  from './SectionDomainDrivenDesign';
import SectionEntities            from './SectionEntities';
import SectionFactories           from './SectionFactories';
import SectionLayeredArchitecture from './SectionLayeredArchitecture';
import SectionRepositories        from './SectionRepositories';
import SectionServices            from './SectionServices';
import SectionUbiquitousLanguage  from './SectionUbiquitousLanguage';
import SectionValueObjects        from './SectionValueObjects';

function Home () {
    return (
        <div>

          <SectionAggregates />
          <SectionDomainDrivenDesign />
          <SectionEntities />
          <SectionFactories />
          <SectionLayeredArchitecture />
          <SectionRepositories />
          <SectionServices />
          <SectionUbiquitousLanguage />
          <SectionValueObjects />

        </div>
    );
}

export default Home;
