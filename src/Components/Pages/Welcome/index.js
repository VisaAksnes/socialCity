import Style from './index.module.css';
import Fundo from '../../Imgs/fundoazul.png';
import LoginBox from './LoginBox';
export default function index(){
    const background = {
        backgroundImage:`url(${Fundo})`,
    }
    return(
        <>
        <img src={Fundo} className={Style.background} style={{opacity:'0.5'}}/>
        <div className={Style.container}>
            <LoginBox/>
        </div>
        </>
    )
}

/*
            <p>
                Conheça sua cidade, pontos turísticos e eventos vindouros.
                Venda algo, encontre emprego, seja feliz :)
            </p>
 */