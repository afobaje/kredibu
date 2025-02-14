import { TabsType } from "@/Types/Type";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import clsx from "clsx";


export function TabList({ className, tabsName, tabsContent }: TabsType) {
    const defaultValue = tabsName[0];
    return <Tabs className={clsx(className)} defaultValue={defaultValue}>
        <TabsList>
            {tabsName.map((val, i) => <TabsTrigger key={i} value={val}>{val}</TabsTrigger>)}
        </TabsList>
        {
            tabsContent.map((val, i) => <TabsContent value={tabsName[i]} key={i}>{val}</TabsContent>)
        }
    </Tabs>
}