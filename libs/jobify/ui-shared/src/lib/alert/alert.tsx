export interface AlertProps {
  alertType: string;
  alertText: string;
}

export const Alert = (props: AlertProps) => {
  return (
    <div className={`alert alert-${props.alertType}`}>{props.alertText}</div>
  );
};
