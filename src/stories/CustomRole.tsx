import React from "react"

export const CustomRole: React.FC = () => (
  <div role="myCustomRole">
    This div has a custom role, that's wrong because ARIA roles used must
    conform to valid values.
  </div>
)
