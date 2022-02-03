import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";

const Items = ({title, description, price, stock, pictureUrl, img}) => {
return(
    <div>
        <p>Titulo:{title}</p>
        <p>Descripción:{description}</p>
        <p>Precio:{price}</p>
        <p>Stock:{stock}</p>
        <img src={`../../assets/${pictureUrl} `} alt='imagenes'/><br></br>
        {img}
        <button>Detalles</button>
    </div>
)
}
export default Items; 