import React from 'react';
import { Container, DropboxLogo, Navigation, Form } from './style';

// import { Container } from './styles';

const MenuForm: React.FC = () => {
    function handleToggle(){
        if(window.toggleActiveMenu) window.toggleActiveMenu();
    }
    return (
        <Container>
            <Navigation>
                <h1>
                    <DropboxLogo />
                    <span>DropBox</span>
                </h1>

                <button className="action--close" onClick={handleToggle}>✕</button>
            </Navigation>
            <Form>
                <span className="title">Registre-se</span>
                <span className="subtitle">Preencha o formulário abaixo</span>

                <input type="text" placeholder="Nome"></input>
                <input type="text" placeholder="Sobrenome"></input>
                <input type="email" placeholder="E-mail"></input>
                <input type="password" placeholder="Senha"></input>

                <button>Prosseguir</button>
                <span className="terms">Esta página está sujeita à política de privacidade e aos Termos de serviço.</span>
            </Form>
        </Container>
    )
}

export default MenuForm;