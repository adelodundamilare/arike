interface IMousePosition {
	x: number;
	y: number;
}
export default class Helpers {
	static getMousePosition = (e: MouseEvent): IMousePosition => {
		const x = e.pageX;
		const y = e.pageY;
		return { x, y };
	};

	static getElementCenter = (e: HTMLElement): any => {
		const itemPosition = e.getBoundingClientRect();
		const x = itemPosition.left + itemPosition.width / 2;
		const y = itemPosition.top + itemPosition.height / 2;
		return { x, y };
	};
}
