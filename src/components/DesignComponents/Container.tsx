import { HomePageType } from "@/Types/Type";
import clsx from "clsx";

export const Container = ({
  children,
  className,
}: HomePageType) => <div className={clsx("w-10/12 mx-auto", className)}>{children}</div>;
