import logoImg from '../../assets/logo.svg';
import { Container, Content } from './style';

interface HeaderProps{
    onOpenNewTransictionModal:()=>void;
}
export function Header(props:HeaderProps){
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={props.onOpenNewTransictionModal}>
                    Nova transacao
                </button>
            </Content>
        </Container>
    )
}