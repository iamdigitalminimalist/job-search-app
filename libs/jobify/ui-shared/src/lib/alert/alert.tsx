/* eslint-disable-next-line */
import {
  useAppContext
} from "../../../../../../apps/jobify/src/context/appContext";

// export interface AlertProps {}

export const Alert = () => {
  const {alertType, alertText} = useAppContext()
  return (
    <div className={`alert alert-${alertType}`}>{alertText}</div>
  )
}
