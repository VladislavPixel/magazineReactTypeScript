import type React from "react"

interface ModalProps{
	children: React.ReactNode;
	textTitle: string;
}

const Modal = ({ children, textTitle }: ModalProps) => {
	return (
		<div className="block-container__modal-block block-modal">
			<div className="block-modal__wrapper">
				<h2 className="block-modal__title">{textTitle}</h2>
				{children}
			</div>
		</div>
	)
}

export default Modal
