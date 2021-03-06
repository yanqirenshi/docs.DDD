import React from 'react';

/* **************************************** */
/* 第3部 より深い洞察へ向うリファクタリング */
/* **************************************** */

import ChapterSection3Overview from './section3/ChapterSection3Overview';

// 第09章 暗黙的な概念を明示的にする
import ChapterSpecification from './section3/ChapterSpecification';
// 第10章 しなやかな設計
import ChapterIntentionRevealingInterfaces from './section3/ChapterIntentionRevealingInterfaces';
import ChapterSideEffectFreeFunctions from './section3/ChapterSideEffectFreeFunctions';
import ChapterAssertions from './section3/ChapterAssertions';
import ChapterConceptualContours from './section3/ChapterConceptualContours';
import ChapterStandaloneClasses from './section3/ChapterStandaloneClasses';
import ChapterClosureOfOperations from './section3/ChapterClosureOfOperations';
// 第12章 デザインパターンをモデルに関係づける
import ChapterStrategyOfDesignPattern from './section3/ChapterStrategyOfDesignPattern';
import ChapterCompositeOfDesignPattern from './section3/ChapterCompositeOfDesignPattern';

function Section3 (props) {
    return (
        <div className="section">
          <ChapterSection3Overview source={props.source} />

          <ChapterSpecification source={props.source.chapters.capter09} />

          <ChapterIntentionRevealingInterfaces source={props.source.chapters.capter10} />
          <ChapterSideEffectFreeFunctions source={props.source.chapters.capter10} />
          <ChapterAssertions source={props.source.chapters.capter10} />
          <ChapterConceptualContours source={props.source.chapters.capter10} />
          <ChapterStandaloneClasses source={props.source.chapters.capter10} />
          <ChapterClosureOfOperations source={props.source.chapters.capter10} />

          <ChapterStrategyOfDesignPattern source={props.source.chapters.capter12} />
          <ChapterCompositeOfDesignPattern source={props.source.chapters.capter12} />
        </div>
    );
}

export default Section3;
