import React, { ReactNode } from "react";

interface FrameProps {
  children: ReactNode; 
}

const Frame: React.FC<FrameProps> = ({children}) => {

  return (
    <div className="frame-card">
      <div>Header</div>
      <div>{children}</div>
    </div>
  )
}

export default Frame;