import { HomePageType } from "@/Types/ComponentType";
import clsx from "clsx";

export const Container = ({
  children,
  className,
}: HomePageType) => <div className={clsx("w-10/12 mx-auto", className)}>{children}</div>;
