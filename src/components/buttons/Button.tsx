import './Button.css';
import AlertIcon from '../../assets/icons/alert.svg';
import CrossIcon from '../../assets/icons/cross.svg';
import React from 'react';

type IconTypes = 'left' | 'right' | 'none';
type ButtonTypes = 'primary' | 'secondary';

type props = {
	variant?: ButtonTypes;
	children?: JSX.Element | string;
	iconPosition?: IconTypes;
	disabled?: boolean;
	onClick?(param: any): any;
};

const getButtonVariant = (variant?: string) =>
	variant === 'secondary' ? 'secondary' : 'primary';

const getIconToDisplay = (button: ButtonTypes) => (
	<img src={button === 'secondary' ? AlertIcon : CrossIcon} alt="Alert Icon" />
);

const contentToDisplay = (
	icon: JSX.Element,
	iconDirection?: IconTypes,
	children?: JSX.Element | string
): JSX.Element => {
	if (iconDirection === 'right') {
		return (
			<React.Fragment>
				{icon} {children}
			</React.Fragment>
		);
	} else if (iconDirection === 'none') {
		return <React.Fragment>{children}</React.Fragment>;
	}
	return (
		<React.Fragment>
			{icon} {children}
		</React.Fragment>
	);
};

const Button = ({
	variant,
	children,
	iconPosition,
	disabled,
	onClick,
}: props) => {
	const buttonType = getButtonVariant(variant);
	const icon = getIconToDisplay(buttonType);
	const buttonContent = contentToDisplay(icon, iconPosition, children);
	return (
		<button
			onClick={onClick}
			className={`btn ${buttonType}`}
			type="button"
			disabled={disabled}
		>
			{buttonContent}
		</button>
	);
};

export default Button;
