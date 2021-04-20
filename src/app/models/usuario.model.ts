export class UsuarioBase {
    constructor(
        public email: string,
    ) { };
}

export class UsuarioLogin extends UsuarioBase {
    constructor(
        email: string,
        public password: string,
    ) {
        super(email);
    };
}

export class Usuario extends UsuarioBase {
    constructor(
        email: string,
        public nombre: string,
        public google: boolean = false,
        public img?: string,
        public role?: string,
        public uid?: string,
    ) {
        super(email);
    };
}