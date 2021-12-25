import React from 'react'
import tw from 'twin.macro'
import {useI18n} from "use-mini18n";

const Container = tw.div`w-full h-full overflow-y-scroll bg-white pb-40 max-w-4xl md:pb-10 md:w-10/12 mx-auto`
const SectionTitle = tw.h2`text-black font-bold tracking-widest text-base`
const SectionParagraph = tw.p`text-black text-sm tracking-wider leading-6`

const About = () => {
  const { lang } = useI18n()
  return (
    <Container>
      <div className="px-7 pb-5">
        {
          lang === 'en'
            ? (
              <>
                <div>
                  <SectionTitle className="mt-10">About this event</SectionTitle>
                  <SectionParagraph className="mt-6">This is a small event to celebrate the release of the open-source version of i.frame. Although there are only minimal installations and sessions, we hope you can experience the atmosphere of the platform at hand.</SectionParagraph>
                  <SectionParagraph className="flex justify-end mt-6">The i.frame development team</SectionParagraph>
                </div>
              </>
            )
            : (
              <>
                <div>
                  <SectionTitle className="mt-10">このイベントについて</SectionTitle>
                  <SectionParagraph className="mt-6">このイベントは、《i.frame》オープンソース版の公開を記念し、ささやかに開催するものです。最小限の展示とセッションしかありませんが、プラットフォームの雰囲気を実際に体験していただければ幸いです。</SectionParagraph>
                  <SectionParagraph className="flex justify-end mt-6">《i.frame》開発チーム</SectionParagraph>
                </div>
              </>
            )
        }
      </div>
    </Container>
  )
}

export default About
