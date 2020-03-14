import React from 'react';

/* **************************************** */
/* 第3部 より深い洞察へ向うリファクタリング */
/* **************************************** */

// 第09章 暗黙的な概念を明示的にする
import SectionSpecification from './SectionSpecification';
// 第10章 しなやかな設計
import SectionIntentionRevealingInterfaces from './SectionIntentionRevealingInterfaces';
import SectionSideEffectFreeFunctions from './SectionSideEffectFreeFunctions';
import SectionAssertions from './SectionAssertions';
import SectionConceptualContours from './SectionConceptualContours';
import SectionStandaloneClasses from './SectionStandaloneClasses';
import SectionClosureOfOperations from './SectionClosureOfOperations';
// 第12章 デザインパターンをモデルに関係づける
import SectionStrategyOfDesignPattern from './SectionStrategyOfDesignPattern';
import SectionCompositeOfDesignPattern from './SectionCompositeOfDesignPattern';

function Section3 () {
    return (
        <>
          <SectionSpecification />


          <SectionIntentionRevealingInterfaces />
          <SectionSideEffectFreeFunctions />
          <SectionAssertions />
          <SectionConceptualContours />


          <SectionStandaloneClasses />
          <SectionCompositeOfDesignPattern />
        </>
    );
}

export default Section3;
