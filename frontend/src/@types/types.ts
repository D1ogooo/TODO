import type { ReactNode } from "react";

export interface DataType {
	imagem: string;
	sobre: string;
	preco: string;
	id: string;
}

export interface HandleSubmitId {
	productId: string;
}

export interface AuthData {
	user?: {
		id: string;
		name: string;
	};
	token?: string;
}

export interface FormDataType {
	formData: {
		email: string;
		password: string;
	};
}

export interface ContextType extends Pick<AuthData, "user"> {
	loggout: () => void;
	session: (data: LoginType) => Promise<void>;
	register: (data: RegisterType) => Promise<void>;
	formData?: FormDataType;
}

export interface AuthProviderType {
	children: ReactNode;
}

export interface FavoriteProviderType {
	children: ReactNode;
}

export interface LoginType {
	email: string;
	password: string;
}

export interface DeleteItemType {
	id: string;
}

export interface RegisterType {
	name: string;
	email: string;
	password: string;
}

export interface DecodedTokenType {
	role: "usuario" | "admin" | undefined;
}
