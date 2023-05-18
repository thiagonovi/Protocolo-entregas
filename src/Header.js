import logo from './logo.png'

const Header = () => {
    return (
        <header>
          <ul className='header'>
            <li>
              <a href="https://portal.uel.br/home/" target={'_blank'} rel={'noreferrer'}>
                <img src={logo} alt="Logo da UEL" className='logo'/>
              </a>
            </li>
            <li className='titulo'>
                <h2>Sessão de Informática - <a href='https://sites.uel.br/ccs/' target={'_blank'} rel={'noreferrer'} className='underlined'>CCS</a></h2>    
                <h1>Gerador de Protocolos de Serviço</h1> 
            </li>
          </ul>
        </header>
    );
};

export default Header;
