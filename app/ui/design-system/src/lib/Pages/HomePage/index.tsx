import {
  Flips,
  LandingHeaderHome,
  LinkCard2Column,
  LinkCard3Column,
  SocialLinksSignup,
  ToolsAndConcepts,
  UpcomingEvents,
} from "../../Components"
import {
  ContentNavigationList,
  ContentNavigationListProps,
} from "../../Components/ContentNavigationList"
import { FlipsProps } from "../../Components/Flips"
import { LinkCard2ColumnProps } from "../../Components/LinkCard2Column"
import { LinkCard3ColumnItems } from "../../Components/LinkCard3Column"
import { ToolCardProps } from "../../Components/ToolCard"
import { TutorialCardProps } from "../../Components/TutorialCard"
import { UpcomingEventsProps } from "../../Components/UpcomingEvents"
import PageBackground from "../shared/PageBackground"
import PageSection from "../shared/PageSection"
import PageSections from "../shared/PageSections"

export type HomePageProps = {
  editPageUrl?: string
  startProjectItems: LinkCard2ColumnProps
  flips: FlipsProps
  tools: ToolCardProps[]
  concepts?: TutorialCardProps[]
  threeColumnItems: LinkCard3ColumnItems
  upcomingEvents: UpcomingEventsProps
  contentNavigationListItems: ContentNavigationListProps
}

const HomePage = ({
  editPageUrl,
  startProjectItems,
  flips,
  tools,
  concepts,
  threeColumnItems,
  upcomingEvents,
  contentNavigationListItems,
}: HomePageProps) => {
  return (
    <PageBackground gradient="home">
      <LandingHeaderHome
        title="Developer Portal"
        description="Discover the developer ecosystem and master the Flow blockchain"
        tag="onflow"
        editPageUrl={editPageUrl}
      />
      <LinkCard2Column {...startProjectItems} homePage={true} />
      <LinkCard3Column items={threeColumnItems} topRounded={false} />
      <PageSections>
        <PageSection className="pt-0" />
        <PageSection sectionId="sdks-and-tools">
          <ToolsAndConcepts
            tools={tools}
            concepts={concepts}
            headerLink={"sdks-and-tools"}
          />
        </PageSection>
        <PageSection sectionId="flips">
          <Flips {...flips} headerLink="flips" />
        </PageSection>
        {upcomingEvents.events.length > 0 && (
          <PageSection sectionId="upcoming-events">
            <UpcomingEvents {...upcomingEvents} headerLink="upcoming-events" />
          </PageSection>
        )}
        <PageSection sectionId="explore-more-content">
          <ContentNavigationList
            header={contentNavigationListItems.header}
            contentNavigationItems={
              contentNavigationListItems.contentNavigationItems
            }
            headerLink="explore-more-content"
          />
        </PageSection>
      </PageSections>
      <SocialLinksSignup />
    </PageBackground>
  )
}

export default HomePage
