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

const getIconToDisplay = (variant: ButtonTypes) => (
	<img src={variant === 'secondary' ? AlertIcon : CrossIcon} alt="Icon" />
);

const contentToDisplay = (
	icon: JSX.Element,
	iconDirection?: IconTypes,
	children?: JSX.Element | string
): JSX.Element => {
	if (iconDirection === 'right') {
		return (
			<React.Fragment>
				{children} {icon}
			</React.Fragment>
		);
	}
	if (iconDirection === 'left') {
		return (
			<React.Fragment>
				{icon} {children}
			</React.Fragment>
		);
	}
	return <React.Fragment>{children}</React.Fragment>;
};

const Button = ({
	variant = 'primary',
	iconPosition,
	children,
	disabled,
	onClick,
}: props) => {
	const icon = getIconToDisplay(variant);
	const buttonContent = contentToDisplay(icon, iconPosition, children);
	return (
		<button
			onClick={onClick}
			className={`btn ${variant}`}
			type="button"
			disabled={disabled}
		>
			{buttonContent}
		</button>
	);
};

export default Button;
