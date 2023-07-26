"use client";
import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { MouseEventHandler } from "react";
import { useRouter } from "next/navigation";

import { Product } from "@/type";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
    data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {
    const cart = useCart();
    const previewModal = usePreviewModal();
    const router = useRouter();
    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    }

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        previewModal.onOpen(data);
    }

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();

        cart.addItem(data);
    }

    return ( 
        <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
            onClick={handleClick}
        >
            {/* Images and Actions added here */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image 
                    src={data?.images?.[0]?.url}
                    fill
                    alt="Image"
                    className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton 
                            onClick={onPreview}
                            icon={<Expand size={20} className="text-gray-600" />}
                        />
                        <IconButton 
                            onClick={onAddToCart}
                            icon={<ShoppingCart size={20} className="text-gray-600" />}
                        />
                    </div>
                </div>
            </div>
            {/* Description for products */}
            <div>
                <p className="font-semibold text-2xl">
                    {data.name}
                </p>
                <p className="text-lg text-gray-500">
                    {data.category?.name}
                </p>
                {/* Price */}
                <div className="flex items-center justify-between">
                    <Currency value={data?.price} />
                </div>
            </div>
        </div>
     );
}
 
export default ProductCard;