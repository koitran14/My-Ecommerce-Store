import { create } from "zustand";

import { Product } from "@/type";

interface PreviewModalStore {
    isOpen: boolean;
    data?: Product;
    onOpen: (data: Product) => void;
    onClose: () => void;
};

const usePreviewModal = create<PreviewModalStore>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data: Product) => set({ data: data, isOpen: true}),
    onClose: () => set({ isOpen: false })
}))

export default usePreviewModal;