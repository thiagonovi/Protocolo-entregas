import pasta from './arte/icons/pasta-aberta.png'
import adcionar from './arte/icons/adicionar.png'

const Content = () => {
    return (
        <main>

        <div className="options-container">
            <div className='option'>
                <img src={adcionar} alt="Ícone de um documento" className='icon'/>
                <p>Novo Protocolo</p>
            </div>
            <div className='option'>
                <img src={pasta} alt="Ícone de uma pasta aberta" className='icon'/>
                <p>Arquivo</p>
            </div>
        </div>

        </main>
    );
};

export default Content;
