import clsx from "clsx";
import { ReactNode } from "react";

export const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <div className={clsx("w-10/12 mx-auto", className)}>{children}</div>;
