import { LoaderFunction } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { fetchFlips } from "~/cms/utils/fetch-flips"
import { HomePage, HomePageProps } from "~/ui/design-system/src/"
import { ToolCardProps } from "~/ui/design-system/src/lib/Components/ToolCard"
import { Default as DefaultToolAndConcepts } from "~/ui/design-system/src/lib/Components/ToolsAndConcepts/ToolsAndConcepts.stories"
import { UpcomingEventsProps } from "~/ui/design-system/src/lib/Components/UpcomingEvents"
import { Default as DefaultUpcomingEvents } from "~/ui/design-system/src/lib/Components/UpcomingEvents/UpcomingEvents.stories"
import { TutorialCardProps } from "../ui/design-system/src/lib/Components/TutorialCard"
import {
  homepageThreeColumnData,
  homepageStartProjectData,
} from "../component-data/Homepage"

type DynamicHomePageProps = Pick<
  HomePageProps,
  "flips" | "tools" | "concepts" | "upcomingEvents"
>

export const loader: LoaderFunction = async () => {
  const flips = await fetchFlips()
  const tools = DefaultToolAndConcepts?.args?.tools as ToolCardProps[]
  const concepts = DefaultToolAndConcepts.args?.concepts as TutorialCardProps[]
  const upcomingEvents = DefaultUpcomingEvents?.args as UpcomingEventsProps
  const data: DynamicHomePageProps = { flips, tools, concepts, upcomingEvents }
  return data
}

export default function Index() {
  const { flips, tools, concepts, upcomingEvents } =
    useLoaderData<DynamicHomePageProps>()

  return (
    <HomePage
      startProjectItems={homepageStartProjectData}
      flips={flips}
      tools={tools}
      concepts={concepts}
      threeColumnItems={homepageThreeColumnData}
      upcomingEvents={upcomingEvents}
    />
  )
}
