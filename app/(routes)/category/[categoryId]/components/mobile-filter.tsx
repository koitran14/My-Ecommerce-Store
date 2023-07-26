"use client"

import Button from "@/components/ui/button";
import { Color, Size } from "@/type";
import { Plus } from "lucide-react";
import Filter from "./filter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface MobileFiltersProps {
    sizes: Size[];
    colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
    sizes,
    colors
}) => {
    return ( 
        <>
            <Sheet>
                <SheetTrigger asChild>
                    <Button  className="flex items-center gap-x-2 lg:hidden">
                        Filters 
                        <Plus size={20} />
                    </Button>
                </SheetTrigger>
                <SheetContent>     
                    {/* render filters */}
                    <div className=""p-4>
                        <Filter 
                            valueKey="sizeId"
                            name="Sizes"
                            data={sizes}
                        />
                        <Filter 
                            valueKey="colorId"
                            name="Colors"
                            data={colors}
                        />
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
}
 
export default MobileFilters;