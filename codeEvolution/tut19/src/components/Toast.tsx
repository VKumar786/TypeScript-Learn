/*
 * Position props can be one of
 * 'left-center' | 'left-top' | 'left-bottom' | 'center' | 'center-top'
 * 'center-bottom' | 'right-center' | 'right-top' | 'right-bottom'
 */

const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>;
};

type HorizontalPosition = "left" | "right" | "center";
type VerticalPosition = "top" | "bottom" | "center";
type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

export default Toast;
