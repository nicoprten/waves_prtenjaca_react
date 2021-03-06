import {useState, useEffect} from 'react';
import ItemCount from '../ItemCount/ItemCount.js'

function Item(producto){
    const [items, setItems] = useState([]);
    const [cargando, setCargando] = useState(false);
    useEffect(() =>{
        setCargando(true);
        const agarrarProductos = (producto) => {
            return new Promise((resolve) =>{
                setTimeout(() =>{
                    resolve(producto);
                }, 2000);
            });
        };
        agarrarProductos(producto).then((result) =>{
            setItems(
                <div className='item' key={result.id}>
                    <h2 className='item__title' >{result.nombre}</h2>
                    <p className='item__precio'>${result.precio}</p>
                    <img className='item__img' src={result.srcimg} alt={result.desc}/>
                    <ItemCount stock={8} initial={1}/>
                </div>
            );
        })
        .finally(() =>{
            setCargando(false);
        });

    }, [producto]);

    return(
        <>
            <h3>{cargando ? 'Cargando item' : ''}</h3>
            {items}
        </>
    );
}

export default Item;