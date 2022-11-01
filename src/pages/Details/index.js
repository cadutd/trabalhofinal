import './styles.css'
import { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import d20 from '../../img/D20.jpg';
import d12 from '../../img/D12.jpg';
import d8  from '../../img/D8.jpg';
import d6  from '../../img/D6.jpg';
import d4 from '../../img/D4.jpg';


const Details = ({history}) => {
    const params = useParams();
    const id = params.id;

    return (
        <div className="container-details">
            <div className="subcontainer-details">
                <div className="container-header"  >
                    <Link to="/">
                    <FaArrowLeft/>
                    <span>Voltar </span>
                    </Link>
                </div>
                <div className='dados'>
                    <h1>{id}</h1>         
                    {id == 'D20' ? <img src={d20}></img>: '' }
                    {id == 'D12' ? <img src={d12}></img>: '' }
                    {id == 'D8' ? <img src={d8}></img>: '' }
                    {id == 'D6' ? <img src={d6}></img>: '' }
                    {id == 'D4' ? <img src={d4}></img>: '' }      
                </div>
            </div>
        </div>
    )
}

export default Details;