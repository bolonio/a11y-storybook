import React from "react"
import Image from "./ColorImage.jpeg"

export const ColorImage: React.FC<{ alt?: string; role?: string }> = ({
  alt,
  role,
}) => <img src={Image} role={role} alt={alt} width="600px" />
