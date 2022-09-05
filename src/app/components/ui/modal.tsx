import type React from "react"
import { useModalCreateProduct } from "../../hooks/useModalCreateProduct"

interface ModalProps{
	children: React.ReactNode;
	textTitle: string;
}

const Modal = ({ children, textTitle }: ModalProps) => {
	const { close } = useModalCreateProduct()
	return (
		<div onClick={close} className="block-container__modal-block block-modal">
			<div className="block-modal__wrapper">
				<h2 className="block-modal__title">{textTitle}</h2>
				{children}
			</div>
		</div>
	)
}

export default Modal
