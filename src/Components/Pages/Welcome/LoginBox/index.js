import Desenho from '../../../Imgs/desenho.png';
import desenhoCima from '../../../Imgs/cima.png';
import Form from '../form/form';
import Style from './index.module.css';
export default function index(){
    return(
        <>
        <div className={Style.container_Middle}>
            <div className={Style.container_Middle_Padding}>
                <img src={desenhoCima} style={{maxWidth:'100%'}}/> 
                <h1>SocialCity</h1>
                <Form>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Senha"/>
                    <input type="submit" value="Entrar"/>
                </Form>
                <p className={Style.recoverPassword}>Esqueceu a senha?</p>
            </div>
            <img src={Desenho} style={{maxWidth:'100%'}}/> 
        </div>
        </>
    )
}