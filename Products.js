import React from 'react'
const Products=({data})=>{
    return(
       <>
        <div>
            <div className= "row">
                {data.map(data=>
                  <div class="col-md-4">
                    <div class="card" style={{"width":"18rem"}}> 
                    <img class="card-img-top" src={data.recipe.image} alt="Card-image cap"/>
                    <div class="card-body">
                        <center>
                            <h5 className='card-title'>{data.recipe.label}</h5>
                            <p className='card-text'>Total Amount of calories:{Math.round(data.recipe.calories)}</p>
                            <a href="#" class="btn btn-primary">Buy</a>
                        </center>
                    </div>
                    </div>
                    </div>
                    )};
            </div>
        </div>
       </>
    )
}
export default Products