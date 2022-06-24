import { Tag } from ".."
import { ReactComponent as StarIcon } from "../../../../images/action/star"
import { ReactComponent as ChevronRightIcon } from "../../../../images/arrows/chevron-right"
import { ReactComponent as GithubIcon } from "../../../../images/social/github"
import { ReactComponent as TwitterIcon } from "../../../../images/social/twitter"
import { User } from "../../interfaces"

export type ProjectCardProps = {
  projectImage: string
  heading: string
  description: string
  tags: string[]
  projectLink: string
  author: User
  numStars: number
  twitterLink: string
  githubLink: string
}

const ProjectCard = ({
  projectImage,
  heading,
  description,
  tags,
  projectLink,
  author,
  numStars,
  twitterLink,
  githubLink,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col rounded-lg bg-white px-8 py-6 hover:shadow-2xl dark:bg-primary-gray-dark dark:hover:shadow-2xl-dark md:flex-row">
      <img
        src={projectImage}
        alt={heading}
        className="mb-4 h-[70px] w-[70px] rounded-xl object-cover md:mr-4"
      />
      <div className="flex-col">
        <div className="mb-2 text-2xl font-bold">{heading}</div>
        <div className="mb-2 flex text-primary-gray-300">
          {tags.map((tag) => (
            <Tag name={tag} key={tag} />
          ))}
          <a href={twitterLink} className="mr-2">
            <TwitterIcon />
          </a>
          <a href={githubLink}>
            <GithubIcon />
          </a>
        </div>
        <div className="mb-2 flex gap-2">
          <img
            src={author.profileImage}
            className="h-6 w-6 rounded-full object-cover"
          />
          {author.name}
          <div className="flex">
            <div className="scale-50 text-secondary-yellow">
              <StarIcon height={24} width={24} />
            </div>
            {numStars}
          </div>
        </div>
        <div className="mb-6">{description}</div>
        <a
          className="flex justify-between font-bold text-primary-blue dark:text-blue-dark"
          href={projectLink}
        >
          This is a link
          <ChevronRightIcon />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard