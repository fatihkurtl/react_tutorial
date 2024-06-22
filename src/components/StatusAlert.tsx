import React, { useContext } from "react";
import { StatusContext } from "../useContext/statusContext";
import { StatusAlertProps } from "../interfaces/statusAlert";


const StatusAlert: React.FC<StatusAlertProps> = () => {
  const { className, title, message } = useContext(StatusContext);

  return (
    <div className={className} role="alert">
      <span className="font-medium">{title}</span> {message}
    </div>
  );
};

export default StatusAlert;
