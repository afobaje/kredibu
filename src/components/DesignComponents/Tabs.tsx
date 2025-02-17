import { TabsType } from "@/Types/Type";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import clsx from "clsx";


export function TabList({ className, tabsName, tabsContent }: TabsType) {
    const defaultValue = tabsName[0];
    return <Tabs className={clsx(className, 'w-[400px] flex items-start flex-col')} defaultValue={defaultValue}>
        <TabsList
            className="h-10 herotab my-3 items-center justify-center rounded-md p-1 grid w-full grid-cols-2">
            {tabsName.map((val, i) => <TabsTrigger key={i} className='trigger' value={val}>{val}</TabsTrigger>)}
        </TabsList >
        {
            tabsContent.map((val, i) => <TabsContent className="w-full" value={tabsName[i]} key={i}>{val}</TabsContent>)
        }
    </Tabs>
}