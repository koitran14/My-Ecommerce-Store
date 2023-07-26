import Link from "next/link";

import getCategories from "@/actions/get-categories";
import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-action";

export const revalidate = 0;

const Navbar = async () => {

    const categories = await getCategories();

    return ( 
        <div className="border-b">
            <Container>
                <div className="px-6 sm:px-6 lg:px-8 flex h-16 items-center relative justify-between">
                    <div className="items-center flex">
                        <Link href="/" className="ml-4 lg:ml-0 gap-x-2">
                            <p className="font-bold text-2xl">pisces.io</p>
                        </Link>
                    </div>
                    <div>
                        <MainNav data={categories}/>
                    </div>
                    <div>
                        <NavbarActions />
                    </div>
                </div>
            </Container>
        </div>
     );
}
 
export default Navbar;