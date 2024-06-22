import { createContext } from "react";
import { StatusAlertProps } from "../interfaces/statusAlert";

export const StatusContext = createContext<StatusAlertProps>(
    {} as StatusAlertProps
  );