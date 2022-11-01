import './styles.css'
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='container-home'> 
            <div className='subcontainer-home'>
                <div className='container-left'>
                    <h1>Dados</h1>
                    <p> Conheça um pouco mais dos dados usados em jogos de rpg</p>
                    <img src='https://rpgtavernadeferro.com/wp-content/uploads/2020/04/O-que-e-rpg-de-mesa.jpg'></img>
                </div>
                <ul className='container-right'>                    
                        <li >  
                            <div>
                                <Link to={"/details/D20"}>
                                <h2>D20</h2>                                
                                <h3>Dado de 20 faces</h3>
                                </Link>
                            </div>
                        </li>
                        <li >  
                            <div>
                                <Link to={"/details/D12"}>
                                <h2>D12</h2>                                
                                <h3>Dado de 12 faces</h3>
                                </Link>
                            </div>
                        </li>
                        <li >  
                            <div>
                                <Link to={"/details/D8"}>
                                <h2>D8</h2>                                
                                <h3>Dado de 8 faces</h3>
                                </Link>
                            </div>
                        </li>
                        <li >  
                            <div>
                                <Link to={"/details/D6"}>
                                <h2>D6</h2>                                
                                <h3>Dado de 6 faces</h3>
                                </Link>
                            </div>
                        </li>
                        <li >  
                            <div>
                                <Link to={"/details/D4"}>
                                <h2>D4</h2>                                
                                <h3>Dado de 4 faces</h3>
                                </Link>
                            </div>
                        </li>                
               </ul>
            </div>            
        </div>
    )
}

export default Home;