import React, { createContext, useContext, useState } from "react"

interface ModalContextTypes {
	isModal: boolean;
	open: () => void;
	close: (event?: React.MouseEvent<HTMLDivElement>) => void;
}
interface ModalCreateProductProviderProps{
	children: React.ReactNode
}

export const ModalContext = createContext<ModalContextTypes>({
	isModal: false,
	open() {},
	close() {}
})

export const useModalCreateProduct = () => {
	return useContext(ModalContext)
}

const ModalCreateProductProvider = ({ children }: ModalCreateProductProviderProps) => {
	// STATE
	const [isModal, setModal] = useState<boolean>(false)
	// HANDLERS
	const open = () => setModal(true)
	const close = (event?: React.MouseEvent<HTMLDivElement>): void => {
		if (typeof event !== "undefined") {
			const targetElement = event.target as HTMLDivElement
			if (targetElement.classList.contains("block-container__modal-block")) setModal(false)
		} else {
			setModal(false)
		}
	}
	return (
		<ModalContext.Provider value={{ isModal, open, close }}>
			{children}
		</ModalContext.Provider>
	)
}

export default ModalCreateProductProvider