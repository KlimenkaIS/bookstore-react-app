export interface ICard {
    img: string;
    title: string;
    subtitle?: string;
    price: string;
    id: number;
    authors?: string;
    year?: number;
    publisher?: string;
    isFavoriteCard?: boolean;
}

export interface IInput {
    inputValue: string;
    setInputValue: React.ChangeEventHandler<HTMLInputElement>;
    handlerSubmit: React.KeyboardEventHandler<HTMLInputElement>;
}