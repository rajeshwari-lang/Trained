import React from 'react'
import HeroSection from './hero_section';
import PartnersSection from '../landing_page/partners_section';
import MyTopCatagoriesListSection from './my_top_catagories_list_section';
import TechnologySearchListSection from '../landing_page/technology_search_list_section';
import CaseStudySection from './case_study_section';
import TrendingTopicsSection from './tranding_topics_section';


export default function HomePage() {
    return (
        <section>
            <HeroSection/>
            <TechnologySearchListSection/>
            <MyTopCatagoriesListSection/>
            <CaseStudySection/>
            <TrendingTopicsSection/>
            <PartnersSection/>

        </section>
    )
}
