import * as React from "react"

const SvgCheckboxChecked = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
      fill="#02D77E"
    />
  </svg>
) // for backwards-compat–

export const ReactComponent = SvgCheckboxChecked
export default SvgCheckboxChecked
